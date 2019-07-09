<template>
  <div class="demo--simple">
    <header class="balm-scroll--header">Balm Scroll: simple</header>
    <ui-scroll-lite ref="iScroll" :options="options">
      <ul>
        <li v-for="i in list" :key="i">Pretty row {{ i }}</li>
      </ul>
      <!-- <p>
        <ui-button @click="loadMore">Get More</ui-button>
      </p>-->
    </ui-scroll-lite>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: { mouseWheel: true },
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
