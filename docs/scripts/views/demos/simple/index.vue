<template>
  <div class="demo--simple">
    <header class="balm-scroll--header">Balm Scroll</header>
    <ui-scroll :options="options">
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
      options: { mouseWheel: true },
      list: 50
    };
  }
};
</script>
