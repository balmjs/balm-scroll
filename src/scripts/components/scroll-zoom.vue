<template>
  <div class="ui-scroll-zoom ui-scroll--wrapper">
    <div class="ui-scroll--scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll-zoom';
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll-zoom',
  mixins: [scrollMixin],
  mounted() {
    this.init(iScroll, {
      zoom: true
    });
  }
};
</script>
