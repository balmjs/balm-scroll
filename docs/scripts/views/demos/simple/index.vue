<template>
  <div class="demo--simple">
    <header class="balm-scroll--header">
      <div>Balm Scroll: simple</div>
      <ui-tab-bar v-model="active">
        <ui-tab v-for="(item, index) in tabs" :key="index">{{ item }}</ui-tab>
      </ui-tab-bar>
    </header>
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
      list: 50,
      active: 0,
      tabs: [
        'Banana',
        'Papaya',
        'Mangosteen',
        'Pitaya',
        'Lychee',
        'Passionfruit',
        'Kiwi',
        'Mango'
      ]
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
