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
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll-probe',
  mixins: [scrollMixin],
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new iScroll(
        this.$el,
        Object.assign(
          {
            probeType: 1,
            startY: this.pullDownAction ? -this.pullDownOffset : 0
          },
          this.options
        )
      );

      // console.log(`before maxScrollY: ${this.$scroll.maxScrollY}`);
      this.$scroll.maxScrollY += this.pullUpOffset;
      this.currentMaxScrollY = this.$scroll.maxScrollY;
      // console.log(`after maxScrollY: ${this.$scroll.maxScrollY}`);

      this.$scroll.on('scrollStart', this.onScrollStart);
      this.$scroll.on('scroll', this.onScroll);
      this.$scroll.on('scrollEnd', this.onScrollEnd);
      this.$scroll.on('refresh', this.onRefresh);
    });
  }
};
</script>
