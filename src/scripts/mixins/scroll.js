import isPassive from '../utils';

const UI_SCROLL = {
  isDev: false,
  className: {
    flip: 'flip',
    loading: 'loading'
  }
};

export default {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    pullDownLabel: {
      type: String,
      default: 'Pull down to refresh' // 下拉刷新
    },
    pullUpLabel: {
      type: String,
      default: 'Pull up to load more' // 上拉加载更多
    },
    releaseLabel: {
      type: String,
      default: 'Release to update' // 释放更新
    },
    loadingLabel: {
      type: String,
      default: 'Loading...' // 加载中
    },
    pullDownAction: Function,
    pullUpAction: Function,
    pullDownY: {
      type: Number,
      default: 5
    },
    refreshTimeout: {
      type: Number,
      default: 1e3
    }
  },
  data() {
    return {
      $scroll: null,
      pullDownEl: null,
      pullDownLabelEl: null,
      pullDownOffset: 0,
      pullUpEl: null,
      pullUpLabelEl: null,
      pullUpOffset: 0,
      currentMaxScrollY: 0,
      isScrolling: false
    };
  },
  mounted() {
    if (this.pullDownAction) {
      this.pullDownEl = this.$refs.pullDown;
      this.pullDownLabelEl = this.$refs.pullDownLabel;
      this.pullDownOffset = this.pullDownEl.offsetHeight;
    }
    if (this.pullUpAction) {
      this.pullUpEl = this.$refs.pullUp;
      this.pullUpLabelEl = this.$refs.pullUpLabel;
      this.pullUpOffset = this.pullUpEl.offsetHeight;
    }

    if (UI_SCROLL.isDev) {
      console.log('--------mounted--------');
      console.log(`pullDownOffset: ${this.pullDownOffset}`);
      console.log(`pullUpOffset: ${this.pullUpOffset}`);
    }

    document.addEventListener(
      'touchmove',
      function(e) {
        e.preventDefault();
      },
      isPassive()
        ? {
            capture: false,
            passive: false
          }
        : false
    );
  },
  beforeDestroy() {
    this.$scroll.destroy();
    this.$scroll = null;
  },
  methods: {
    _isPullDown(className, LogicalNot = false) {
      return (
        this.pullDownEl &&
        (LogicalNot
          ? !this.pullDownEl.classList.contains(className)
          : this.pullDownEl.classList.contains(className))
      );
    },
    _isPullUp(className, LogicalNot = false) {
      return (
        this.pullUpEl &&
        (LogicalNot
          ? !this.pullUpEl.classList.contains(className)
          : this.pullUpEl.classList.contains(className))
      );
    },
    // TODO
    // onBeforeScrollStart() {},
    // TODO
    // onScrollCancel() {},
    onScrollStart() {
      if (this.$scroll.y === this.$scroll.startY) {
        this.isScrolling = true;
      }

      if (UI_SCROLL.isDev) {
        console.log('--------onScrollStart--------');
        console.log(`start-y: ${this.$scroll.y}`);
      }
    },
    onScroll() {
      let currentY = this.$scroll.y;

      if (UI_SCROLL.isDev) {
        console.log('--------onScroll--------');
        console.log(`current y: ${currentY}`);
      }

      let pullDown =
        currentY < this.pullDownY && this._isPullDown(UI_SCROLL.className.flip);
      let pullDownToRefresh =
        currentY >= this.pullDownY &&
        this._isPullDown(UI_SCROLL.className.flip, true);
      let pullUp =
        currentY > this.currentMaxScrollY - this.pullUpOffset &&
        this._isPullUp(UI_SCROLL.className.flip);
      let pullUpToLoadMore =
        currentY <= this.currentMaxScrollY - this.pullUpOffset &&
        this._isPullUp(UI_SCROLL.className.flip, true);

      if (pullDown) {
        this.pullDownEl.classList.remove(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.pullDownLabel;
      } else if (pullDownToRefresh) {
        this.pullDownEl.classList.add(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.releaseLabel;
      } else if (pullUp) {
        this.pullUpEl.classList.remove(UI_SCROLL.className.flip);
        this.pullUpLabel.innerHTML = this.pullUpLabel;
        this.$scroll.maxScrollY += this.pullUpOffset;
      } else if (pullUpToLoadMore) {
        this.pullUpEl.classList.add(UI_SCROLL.className.flip);
        this.pullUpLabelEl.innerHTML = this.releaseLabel;
        this.$scroll.maxScrollY -= this.pullUpOffset;
      }
    },
    onScrollEnd() {
      let currentY = this.$scroll.y;

      if (UI_SCROLL.isDev) {
        console.log('--------onScrollEnd--------');
        console.log(`current position: ${currentY}`);
        console.log(`last direction: ${this.$scroll.directionY}`);
        console.log(`maxScrollY: ${this.$scroll.maxScrollY}`);
      }

      let resume =
        this._isPullDown(UI_SCROLL.className.flip, true) &&
        currentY > this.$scroll.options.startY;
      let pullDown = this._isPullDown(UI_SCROLL.className.flip);
      let pullUp = this._isPullUp(UI_SCROLL.className.flip);

      if (resume) {
        UI_SCROLL.isDev && console.log('resume');
        this.$scroll.scrollTo(0, this.$scroll.options.startY, 800);
      } else if (pullDown) {
        UI_SCROLL.isDev && console.log('pull down loading');
        this.pullDownEl.classList.add(UI_SCROLL.className.loading);
        this.pullDownLabelEl.innerHTML = this.loadingLabel;

        if (this.isScrolling && this.pullDownAction) {
          UI_SCROLL.isDev &&
            console.log(`before pull down action: ${currentY}`);

          setTimeout(() => {
            this.pullDownAction();
            this.refresh();
          }, this.refreshTimeout);

          UI_SCROLL.isDev && console.log(`after pull down action: ${currentY}`);
        }
      } else if (pullUp) {
        UI_SCROLL.isDev && console.log('pull up loading');
        this.pullUpEl.classList.add(UI_SCROLL.className.loading);
        this.pullUpLabelEl.innerHTML = this.loadingLabel;

        if (this.isScrolling && this.pullUpAction) {
          UI_SCROLL.isDev && console.log(`before pull up action: ${currentY}`);

          setTimeout(() => {
            this.pullUpAction();
            this.refresh();
          }, this.refreshTimeout);

          UI_SCROLL.isDev && console.log(`after pull up action: ${currentY}`);
        }
      }

      this.isScrolling = false;
    },
    onRefresh() {
      if (UI_SCROLL.isDev) {
        console.log('--------onRefresh--------');
        console.log(`before maxScrollY: ${this.$scroll.maxScrollY}`);
      }
      this.$scroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.$scroll.maxScrollY;
      UI_SCROLL.isDev &&
        console.log(`after maxScrollY: ${this.$scroll.maxScrollY}`);

      let pullDown = this._isPullDown(UI_SCROLL.className.loading);
      let pullUp = this._isPullUp(UI_SCROLL.className.loading);

      if (pullDown) {
        this.pullDownEl.classList.remove(UI_SCROLL.className.loading);
        this.pullDownEl.classList.remove(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.pullDownLabel;

        this.$scroll.scrollTo(0, this.$scroll.options.startY, 0);
      } else if (pullUp) {
        this.pullUpEl.classList.remove(UI_SCROLL.className.loading);
        this.pullUpEl.classList.remove(UI_SCROLL.className.flip);
        this.pullUpLabelEl.innerHTML = this.pullUpLabel;
      }

      UI_SCROLL.isDev && console.log('refresh finished!');
    },
    refresh() {
      this.$nextTick(() => {
        this.$scroll.refresh();
      });
    }
  }
};
