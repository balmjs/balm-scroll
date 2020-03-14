<template>
  <div class="scroll-demo demo--2d-scroll">
    <header class="balm-scroll--header">Balm Scroll: 2d scroll</header>
    <ui-scroll :options="options">
      <p v-for="i in 6" :key="i">
        <b>{{ i }}.</b> Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </ui-scroll>
    <footer class="balm-scroll--footer">Thx BalmJS</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: { scrollX: true, freeScroll: true }
    };
  }
};
</script>
