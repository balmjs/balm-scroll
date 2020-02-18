<template>
  <div class="ui-scroll-infinite ui-scroll--wrapper">
    <div class="ui-scroll--scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-infinite';
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll-infinite',
  mixins: [scrollMixin],
  mounted() {
    this.init(iScroll);
  },
  methods: {
    updateCache(start, data) {
      this.$nextTick(() => {
        this.$scroll.updateCache(start, data);
      });
    }
  }
};
</script>
