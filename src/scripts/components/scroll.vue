<template>
  <div class="ui-scroll">
    <div class="ui-scroll--scroller">
      <div ref="pullDown" class="ui-scroll--pull-area ui-scroll--pull-down">
        <span class="ui-scroll--pull-icon ui-scroll--pull-down-icon">
          <slot name="pullDownIcon"></slot>
        </span>
        <span ref="pullDownLabel" class="ui-scroll--pull-label ui-scroll--pull-down-label">
          <slot name="pullDownLabel">Pull down to refresh...</slot>
        </span>
      </div>
      <slot></slot>
      <div ref="pullUp" class="ui-scroll--pull-area ui-scroll--pull-up">
        <span class="ui-scroll--pull-icon ui-scroll--pull-up-icon">
          <slot name="pullUpIcon"></slot>
        </span>
        <span ref="pullUpLabel" class="ui-scroll--pull-label ui-scroll--pull-up-label">
          <slot name="pullUpLabel">Pull up to load more...</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-probe';
import isPassive from './utils';

const DEV = true;

export default {
  name: 'ui-scroll',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    pullDownAction: {
      type: Function,
      default() {}
    },
    pullUpAction: {
      type: Function,
      default() {}
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
    this.pullDownEl = this.$refs.pullDown;
    this.pullDownLabelEl = this.$refs.pullDownLabel;
    this.pullDownOffset = this.pullDownEl.offsetHeight;
    this.pullUpEl = this.$refs.pullUp;
    this.pullUpLabelEl = this.$refs.pullUpLabel;
    this.pullUpOffset = this.pullUpEl.offsetHeight;

    if (DEV) {
      console.log(`pullDownOffset: ${this.pullDownOffset}`);
      console.log(`pullUpOffset: ${this.pullUpOffset}`);
    }

    this.$nextTick(() => {
      this.myScroll = new iScroll(
        this.$el,
        Object.assign(
          {
            probeType: 1,
            startY: -this.pullDownOffset
          },
          this.options
        )
      );

      DEV && console.log(`maxScrollY-1: ${this.myScroll.maxScrollY}`);
      this.myScroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.myScroll.maxScrollY;
      DEV && console.log(`maxScrollY-2: ${this.myScroll.maxScrollY}`);

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
      console.log('onScrollStart');
      if (this.myScroll.y == this.myScroll.startY) {
        this.isScrolling = true;
      }
      console.log('start-y:' + this.myScroll.y);
    },
    onScroll() {
      let currentY = this.myScroll.y;

      if (
        currentY >= 5 &&
        this.pullDownEl &&
        !this.pullDownEl.classList.contains('flip')
      ) {
        this.pullDownEl.classList.add('flip');
        this.pullDownLabelEl.innerHTML = 'Release to refresh...';
      } else if (
        currentY < 5 &&
        this.pullDownEl &&
        this.pullDownEl.classList.contains('flip')
      ) {
        this.pullDownEl.classList.remove('flip');
        this.pullDownLabelEl.innerHTML = 'Pull down to refresh...';
      } else if (
        currentY <= this.currentMaxScrollY - this.pullUpOffset &&
        this.pullUpEl &&
        !this.pullUpEl.classList.contains('flip')
      ) {
        this.pullUpEl.classList.add('flip');
        this.pullUpLabelEl.innerHTML = 'Release to refresh...';
        this.myScroll.maxScrollY -= this.pullUpOffset;
      } else if (
        currentY > this.currentMaxScrollY - this.pullUpOffset &&
        this.pullUpEl &&
        this.pullUpEl.classList.contains('flip')
      ) {
        this.pullUpEl.classList.remove('flip');
        this.pullUpLabel.innerHTML = 'Pull up to load more...';
        this.myScroll.maxScrollY += this.pullUpOffset;
      }

      console.log('onScroll y:' + this.myScroll.y);
    },
    onScrollEnd() {
      console.log('onScrollEnd');
      console.log('directionY:' + this.myScroll.directionY);
      console.log('y1:' + this.myScroll.y);
      console.log('maxScrollY-3:' + this.myScroll.maxScrollY);

      if (
        this.pullDownEl &&
        !this.pullDownEl.classList.contains('flip') &&
        this.myScroll.y > this.myScroll.options.startY
      ) {
        console.log('resume');
        this.myScroll.scrollTo(0, this.myScroll.options.startY, 800);
      } else if (
        this.pullDownEl &&
        this.pullDownEl.classList.contains('flip')
      ) {
        this.pullDownEl.classList.add('loading');
        this.pullDownLabelEl.innerHTML = 'Loading...';
        if (this.isScrolling) {
          console.log('before pull down action:' + this.myScroll.y);
          setTimeout(() => {
            this.pullDownAction();
            this.$nextTick(() => {
              this.myScroll && this.myScroll.refresh();
            });
          }, 1000);
          console.log('after pull down action:' + this.myScroll.y);
        }
      } else if (this.pullUpEl && this.pullUpEl.classList.contains('flip')) {
        console.log('pull up loading');
        this.pullUpEl.classList.add('loading');
        this.pullUpLabelEl.innerHTML = 'Loading...';
        if (this.isScrolling) {
          console.log('before pull up action:' + this.myScroll.y);
          setTimeout(() => {
            this.pullUpAction();
            this.$nextTick(() => {
              this.myScroll && this.myScroll.refresh();
            });
          }, 1000);
          console.log('after pull up action:' + this.myScroll.y);
        }
      }
      this.isScrolling = false;
    },
    onRefresh() {
      console.log('onRefresh');
      console.log('maxScrollY-4:' + this.myScroll.maxScrollY);
      this.myScroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.myScroll.maxScrollY;
      console.log('maxScrollY-5:' + this.myScroll.maxScrollY);

      if (this.pullDownEl && this.pullDownEl.classList.contains('loading')) {
        this.pullDownEl.classList.remove('loading');
        this.pullDownEl.classList.remove('flip');
        this.pullDownLabelEl.innerHTML = 'Pull down to refresh...';
        this.myScroll.scrollTo(0, this.myScroll.options.startY, 0);
      } else if (this.pullUpEl && this.pullUpEl.classList.contains('loading')) {
        this.pullUpEl.classList.remove('loading');
        this.pullUpEl.classList.remove('flip');
        this.pullUpLabelEl.innerHTML = 'Pull up to load more...';
      }

      console.log('refresh finished!');
    }
  }
};
</script>
