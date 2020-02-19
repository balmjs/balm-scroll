import isPassive from '../utils';

export default {
  props: {
    debug: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    excludes: Array,
    pullDownAction: Function,
    pullUpAction: Function,
    pullOffset: {
      type: Number,
      default: 5
    },
    scrollEnabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      $scroll: null,
      pullUpOffset: 0,
      currentMaxScrollY: 0,
      isScrolling: false,
      isScrollEnabled: this.scrollEnabled
    };
  },
  computed: {
    wrapperClassName() {
      return {
        'ui-scroll--wrapper': true,
        'ui-scroll--disabled': !this.isScrollEnabled
      };
    }
  },
  watch: {
    scrollEnabled(val) {
      this.isScrollEnabled = val;
    }
  },
  mounted() {
    document.addEventListener(
      'touchmove',
      this._touchMoveHandler,
      isPassive()
        ? {
            capture: false,
            passive: false
          }
        : false
    );
  },
  beforeDestroy() {
    document.removeEventListener('touchmove', this._touchMoveHandler);
    this.$scroll.destroy();
    this.$scroll = null;
  },
  methods: {
    init(iScroll, defaultOptions = {}, probe = false) {
      this.$nextTick(() => {
        this.$scroll = new iScroll(
          this.$el,
          Object.assign(defaultOptions, this.options)
        );

        // console.log(`before maxScrollY: ${this.$scroll.maxScrollY}`);
        this.$scroll.maxScrollY += this.pullUpOffset;
        this.currentMaxScrollY = this.$scroll.maxScrollY;
        // console.log(`after maxScrollY: ${this.$scroll.maxScrollY}`);

        this.$scroll.on('scrollStart', this.onScrollStart);
        this.$scroll.on('scrollEnd', this.onScrollEnd);
        this.$scroll.on('refresh', this.onRefresh);

        if (probe) {
          this.$scroll.on('scroll', this.onScroll);
        }
      });
    },
    _touchMoveHandler(e) {
      let canPreventDefault = true;
      if (e.target.classList.length) {
        for (let i = 0, len = e.target.classList.length; i < len; i++) {
          let currentClassName = e.target.classList[i];
          if (
            /^md(c|l)-/.test(currentClassName) ||
            (this.excludes && this.excludes.includes(currentClassName))
          ) {
            canPreventDefault = false;
            break;
          }
        }
      }

      canPreventDefault && e.preventDefault();
    },
    // TODO
    // onBeforeScrollStart() {},
    // onScrollCancel() {},
    onScrollStart() {
      if (this.$scroll.y === this.$scroll.startY) {
        this.isScrolling = true;
      }

      if (this.debug) {
        console.log('--------onScrollStart--------');
        console.log(`start-y: ${this.$scroll.y}`);
      }
    },
    onScrollEnd() {
      let currentY = this.$scroll.y;

      if (this.debug) {
        console.log('--------onScrollEnd--------');
        console.log(`current position: ${currentY}`);
        console.log(`last direction: ${this.$scroll.directionY}`);
        console.log(`maxScrollY: ${this.$scroll.maxScrollY}`);
      }

      if (this._onScrollEnd) {
        // For <ui-scroll-probe>
        this._onScrollEnd(currentY);
      } else {
        let resume = currentY > this.$scroll.options.startY;

        if (resume) {
          this.debug && console.log('resume');
          this.$scroll.scrollTo(0, this.$scroll.options.startY, 800);
        } else {
          if (this.isScrolling) {
            let isPullDown =
              currentY >= -this.pullOffset && this.pullDownAction;
            let isPullUp =
              currentY <= this.$scroll.maxScrollY + this.pullOffset &&
              this.pullUpAction;

            if (isPullDown) {
              this.debug && console.log(`before pull down action: ${currentY}`);
              this.pullDownAction(this.refresh);
              this.debug && console.log(`after pull down action: ${currentY}`);
            } else if (this.isScrollEnabled && isPullUp) {
              this.debug && console.log(`before pull up action: ${currentY}`);
              this.pullUpAction(this.refresh);
              this.debug && console.log(`after pull up action: ${currentY}`);
            }
          }
        }
      }

      this.isScrolling = false;
    },
    refresh() {
      this.$nextTick(() => {
        try {
          this.$scroll.refresh();
        } catch (e) {}
      });
    }
  }
};
