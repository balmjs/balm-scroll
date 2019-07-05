<template>
  <div class="ui-scroll-lite ui-scroll--wrapper">
    <div class="ui-scroll--scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-lite';
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll',
  mixins: [scrollMixin],
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new iScroll(this.$el, Object.assign({}, this.options));
    });
  }
};
</script>
