<template>
  <div class="demo--pull2refresh">
    <header class="balm-scroll--header">Balm Scroll</header>
    <ui-scroll-probe :pullDownAction="pullDownAction" :pullUpAction="pullUpAction">
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
      list: 10
    };
  },
  methods: {
    pullDownAction() {
      this.list = 10;
      console.log('pullDownAction');
    },
    pullUpAction() {
      console.log('pullUpAction');
      this.list += 10;
    }
  }
};
</script>
