<template>
  <div class="scroll-demo demo--scrollbars">
    <header class="balm-scroll--header">Balm Scroll: scrollbars</header>
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
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      },
      list: 50
    };
  }
};
</script>
