<template>
  <div class="demo--infinite">
    <header class="balm-scroll--header">Balm Scroll</header>
    <ui-scroll-infinite ref="iScroll" id="scroller" :options="options">
      <ul>
        <li v-for="i in list" :key="i" class="row">Row {{ i }}</li>
      </ul>
    </ui-scroll-infinite>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 0,
      options: {
        mouseWheel: true,
        infiniteElements: '#scroller .row',
        //infiniteLimit: 2000,
        dataset: this.requestData,
        dataFiller: this.updateContent,
        cacheSize: 1000
      }
    };
  },
  methods: {
    requestData(start, count) {
      console.log('requestData', start, count);

      let datalist = [];
      for (let i = start + 1; i <= count; i++) {
        datalist.push(`Row ${i}`);
      }

      this.$refs.iScroll.updateCache(start, datalist);
    },
    updateContent(el, data) {
      console.log('updateContent', el, data);

      el.innerHTML = data;

      // this.$refs.iScroll.refresh();
    }
  }
};
</script>
