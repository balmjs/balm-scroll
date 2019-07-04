<template>
  <div class="ui-scroll ui-scroll--wrapper">
    <div class="ui-scroll--scroller">
      <div v-if="pullDownAction" ref="pullDown" class="ui-scroll--pull-area ui-scroll--pull-down">
        <span class="ui-scroll--pull-icon ui-scroll--pull-down-icon">
          <slot name="pullDownIcon"></slot>
        </span>
        <span ref="pullDownLabel" class="ui-scroll--pull-label ui-scroll--pull-down-label">
          <slot name="pullDownLabel">{{ pullDownLabel }}</slot>
        </span>
      </div>
      <slot></slot>
      <div v-if="pullUpAction" ref="pullUp" class="ui-scroll--pull-area ui-scroll--pull-up">
        <span class="ui-scroll--pull-icon ui-scroll--pull-up-icon">
          <slot name="pullUpIcon"></slot>
        </span>
        <span ref="pullUpLabel" class="ui-scroll--pull-label ui-scroll--pull-up-label">
          <slot name="pullUpLabel">{{ pullUpLabel }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-probe';
import isPassive from './utils';

const UI_SCROLL = {
  isDev: false,
  className: {
    flip: 'flip',
    loading: 'loading'
  }
};

export default {
  name: 'ui-scroll',
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
    refreshTimeout: {
      type: Number,
      default: 1e3
    }
  },
  data() {
    return {
      myScroll: null,
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

    this.$nextTick(() => {
      this.myScroll = new iScroll(
        this.$el,
        Object.assign(
          {
            probeType: 1,
            startY: this.pullDownAction ? -this.pullDownOffset : 0
          },
          this.options
        )
      );

      UI_SCROLL.isDev &&
        console.log(`maxScrollY-1: ${this.myScroll.maxScrollY}`);
      this.myScroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.myScroll.maxScrollY;
      UI_SCROLL.isDev &&
        console.log(`maxScrollY-2: ${this.myScroll.maxScrollY}`);

      this.myScroll.on('scrollStart', this.onScrollStart);
      this.myScroll.on('scroll', this.onScroll);
      this.myScroll.on('scrollEnd', this.onScrollEnd);
      this.myScroll.on('refresh', this.onRefresh);

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
    });
  },
  methods: {
    onScrollStart() {
      if (this.myScroll.y == this.myScroll.startY) {
        this.isScrolling = true;
      }
      if (UI_SCROLL.isDev) {
        console.log('--------onScrollStart--------');
        console.log(`start-y: ${this.myScroll.y}`);
      }
    },
    onScroll() {
      let currentY = this.myScroll.y;

      if (
        currentY >= 5 &&
        this.pullDownEl &&
        !this.pullDownEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        this.pullDownEl.classList.add(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.releaseLabel;
      } else if (
        currentY < 5 &&
        this.pullDownEl &&
        this.pullDownEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        this.pullDownEl.classList.remove(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.pullDownLabel;
      } else if (
        currentY <= this.currentMaxScrollY - this.pullUpOffset &&
        this.pullUpEl &&
        !this.pullUpEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        this.pullUpEl.classList.add(UI_SCROLL.className.flip);
        this.pullUpLabelEl.innerHTML = this.releaseLabel;
        this.myScroll.maxScrollY -= this.pullUpOffset;
      } else if (
        currentY > this.currentMaxScrollY - this.pullUpOffset &&
        this.pullUpEl &&
        this.pullUpEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        this.pullUpEl.classList.remove(UI_SCROLL.className.flip);
        this.pullUpLabel.innerHTML = this.pullUpLabel;
        this.myScroll.maxScrollY += this.pullUpOffset;
      }

      if (UI_SCROLL.isDev) {
        console.log('--------onScroll--------');
        console.log(`onScroll y: ${this.myScroll.y}`);
      }
    },
    onScrollEnd() {
      if (UI_SCROLL.isDev) {
        console.log('--------onScrollEnd--------');
        console.log(`directionY: ${this.myScroll.directionY}`);
        console.log(`y1: ${this.myScroll.y}`);
        console.log(`maxScrollY-3: ${this.myScroll.maxScrollY}`);
      }

      if (
        this.pullDownEl &&
        !this.pullDownEl.classList.contains(UI_SCROLL.className.flip) &&
        this.myScroll.y > this.myScroll.options.startY
      ) {
        UI_SCROLL.isDev && console.log('resume');
        this.myScroll.scrollTo(0, this.myScroll.options.startY, 800);
      } else if (
        this.pullDownEl &&
        this.pullDownEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        this.pullDownEl.classList.add(UI_SCROLL.className.loading);
        this.pullDownLabelEl.innerHTML = this.loadingLabel;

        if (this.isScrolling && this.pullDownAction) {
          UI_SCROLL.isDev &&
            console.log(`before pull down action: ${this.myScroll.y}`);

          setTimeout(() => {
            this.pullDownAction();
            this.$nextTick(() => {
              this.myScroll && this.myScroll.refresh();
            });
          }, this.refreshTimeout);

          UI_SCROLL.isDev &&
            console.log(`after pull down action: ${this.myScroll.y}`);
        }
      } else if (
        this.pullUpEl &&
        this.pullUpEl.classList.contains(UI_SCROLL.className.flip)
      ) {
        UI_SCROLL.isDev && console.log('pull up loading');
        this.pullUpEl.classList.add(UI_SCROLL.className.loading);
        this.pullUpLabelEl.innerHTML = this.loadingLabel;

        if (this.isScrolling && this.pullUpAction) {
          UI_SCROLL.isDev &&
            console.log('before pull up action:' + this.myScroll.y);

          setTimeout(() => {
            this.pullUpAction();
            this.$nextTick(() => {
              this.myScroll && this.myScroll.refresh();
            });
          }, this.refreshTimeout);

          UI_SCROLL.isDev &&
            console.log('after pull up action:' + this.myScroll.y);
        }
      }
      this.isScrolling = false;
    },
    onRefresh() {
      if (UI_SCROLL.isDev) {
        console.log('--------onRefresh--------');
        console.log('maxScrollY-4:' + this.myScroll.maxScrollY);
      }
      this.myScroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.myScroll.maxScrollY;
      UI_SCROLL.isDev &&
        console.log('maxScrollY-5:' + this.myScroll.maxScrollY);

      if (
        this.pullDownEl &&
        this.pullDownEl.classList.contains(UI_SCROLL.className.loading)
      ) {
        this.pullDownEl.classList.remove(UI_SCROLL.className.loading);
        this.pullDownEl.classList.remove(UI_SCROLL.className.flip);
        this.pullDownLabelEl.innerHTML = this.pullDownLabel;
        this.myScroll.scrollTo(0, this.myScroll.options.startY, 0);
      } else if (
        this.pullUpEl &&
        this.pullUpEl.classList.contains(UI_SCROLL.className.loading)
      ) {
        this.pullUpEl.classList.remove(UI_SCROLL.className.loading);
        this.pullUpEl.classList.remove(UI_SCROLL.className.flip);
        this.pullUpLabelEl.innerHTML = this.pullUpLabel;
      }

      UI_SCROLL.isDev && console.log('refresh finished!');
    }
  }
};
</script>
