<template>
  <div class="demo--styled-scrollbars">
    <header class="balm-scroll--header">Balm Scroll: styled scrollbars</header>
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
      options: { scrollX: true, scrollbars: 'custom' },
      list: 50
    };
  }
};
</script>
