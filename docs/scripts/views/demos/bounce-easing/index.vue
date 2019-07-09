<template>
  <div class="demo--bounce-easing">
    <header class="balm-scroll--header">Balm Scroll</header>
    <ui-scroll :options="options">
      <ul>
        <li v-for="i in 50" :key="i">Pretty row {{ i }}</li>
      </ul>
    </ui-scroll>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: { bounceEasing: 'elastic', bounceTime: 1200 }
    };
  }
};
</script>
