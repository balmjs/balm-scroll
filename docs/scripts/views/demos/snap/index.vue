<template>
  <div class="scroll-demo demo--snap">
    <header class="balm-scroll--header">Balm Scroll: snap</header>
    <ui-scroll ref="iScroll" :options="options">
      <ul>
        <li v-for="i in list" :key="i">Pretty row {{ i }}</li>
      </ul>
    </ui-scroll>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        scrollX: true,
        scrollY: true,
        momentum: false,
        snap: true
      },
      list: 100
    };
  }
};
</script>
