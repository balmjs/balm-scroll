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
    excludes: Array
  },
  data() {
    return {
      $scroll: null
    };
  },
  watch: {
    pullUpLabel(val) {
      this.pullUpLabelEl.innerHTML = val;
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

        probe && this.initEvent();
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
    refresh() {
      this.$nextTick(() => {
        this.$scroll.refresh();
      });
    }
  }
};
