<template>
  <div class="demo--pull2refresh">
    <header class="balm-scroll--header">Balm Scroll: pull to refresh</header>
    <ui-scroll-probe
      v-if="list"
      ref="iScroll"
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
const PAGE_SIZE = 10;

export default {
  data() {
    return {
      list: 0,
      scrollEnabled: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = PAGE_SIZE;
    }, 1);
  },
  methods: {
    pullDownAction() {
      this.list = PAGE_SIZE;
      console.log('pullDownAction');
      this.scrollEnabled = true;
    },
    pullUpAction() {
      const LAST_ITEM = PAGE_SIZE * 3;
      if (this.list < LAST_ITEM) {
        console.log('pullUpAction');
        this.list += PAGE_SIZE;

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
