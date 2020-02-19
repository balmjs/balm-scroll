<template>
  <div :class="['ui-scroll', wrapperClassName]">
    <div class="ui-scroll--scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import iScroll from '../../iscroll/iscroll';
import scrollMixin from '../mixins/scroll';

export default {
  name: 'ui-scroll',
  mixins: [scrollMixin],
  data() {
    return {
      utils: iScroll.utils
    };
  },
  mounted() {
    this.init(iScroll);
  }
};
</script>
