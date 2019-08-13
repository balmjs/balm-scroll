<template>
  <div class="demo--pull2refresh">
    <header class="balm-scroll--header">Balm Scroll: pull to refresh</header>
    <ui-scroll-probe
      :pullDownAction="pullDownAction"
      :pullUpAction="pullUpAction"
      :scrollEnabled="scrollEnabled"
      :pullUpLabel="scrollEnabled ? 'Pull up to load more' : 'No more data'"
    >
      <ul id="datalist">
        <li v-for="i in list" :key="i">
          <figure>
            <img :src="`https://picsum.photos/120?random=${i}`" />
            <figcaption>Pretty row {{ i }}</figcaption>
          </figure>
        </li>
      </ul>
    </ui-scroll-probe>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 10,
      scrollEnabled: true
    };
  },
  methods: {
    pullDownAction() {
      this.list = 10;
      console.log('pullDownAction');
      this.scrollEnabled = true;
    },
    pullUpAction() {
      const LAST_ITEM = 30;
      if (this.list < LAST_ITEM) {
        console.log('pullUpAction');
        this.list += 10;

        if (this.list === LAST_ITEM) {
          this.scrollEnabled = false;
        }
      } else {
        console.log('gg');
      }
    }
  }
};
</script>

<style>
.ui-scroll--disabled .ui-scroll--pull-up-icon {
  visibility: hidden;
}
</style>
