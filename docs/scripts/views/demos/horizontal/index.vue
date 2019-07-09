<template>
  <div class="demo--horizontal">
    <header class="balm-scroll--header">Balm Scroll: horizontal</header>
    <ui-scroll ref="iScroll" :options="options">
      <ul>
        <li v-for="i in list" :key="i">Cell {{ i }}</li>
      </ul>
    </ui-scroll>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: { scrollX: true, scrollY: false, mouseWheel: true },
      list: 50
    };
  },
  methods: {
    loadMore() {
      this.list += 50;
      this.$refs.iScroll.refresh();
    }
  }
};
</script>
