<template>
  <div :class="['ui-scroll-lite', wrapperClassName]">
    <div class="ui-scroll--scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-lite';
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll-lite',
  mixins: [scrollMixin],
  mounted() {
    this.init(iScroll);
  }
};
</script>
