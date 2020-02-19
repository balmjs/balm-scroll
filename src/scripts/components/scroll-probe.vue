<template>
  <div :class="['ui-scroll-probe', wrapperClassName]">
    <div class="ui-scroll--scroller">
      <div
        v-if="pullDownAction"
        ref="pullDown"
        class="ui-scroll--pull-area ui-scroll--pull-down"
      >
        <span class="ui-scroll--pull-icon ui-scroll--pull-down-icon">
          <slot name="pullDownIcon"></slot>
        </span>
        <span
          ref="pullDownLabel"
          class="ui-scroll--pull-label ui-scroll--pull-down-label"
        >
          <slot name="pullDownLabel">{{ pullDownLabel }}</slot>
        </span>
      </div>
      <slot></slot>
      <div
        v-if="pullUpAction"
        ref="pullUp"
        class="ui-scroll--pull-area ui-scroll--pull-up"
      >
        <span class="ui-scroll--pull-icon ui-scroll--pull-up-icon">
          <slot name="pullUpIcon"></slot>
        </span>
        <span
          ref="pullUpLabel"
          class="ui-scroll--pull-label ui-scroll--pull-up-label"
        >
          <slot name="pullUpLabel">{{ pullUpLabel }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-probe';
import scrollMixin from '../mixins/scroll';
import scrollProbeMixin from '../mixins/scroll-probe';

export default {
  name: 'ui-scroll-probe',
  mixins: [scrollMixin, scrollProbeMixin],
  mounted() {
    this.init(
      iScroll,
      {
        probeType: 1,
        startY: this.pullDownAction ? -this.pullDownOffset : 0
      },
      true
    );
  }
};
</script>
