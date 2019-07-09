<template>
  <div class="demo--minimap">
    <ui-scroll ref="iScroll" :options="options"></ui-scroll>

    <div id="minimap">
      <div id="minimap-indicator"></div>
    </div>

    <ul id="bookmarks">
      <li>
        <a href="#" @click="moveTo(-359, -85)">Face</a>
      </li>
      <li>
        <a href="#" @click="moveTo(-288, -342)">Necklace</a>
      </li>
      <li>
        <a href="#" @click="moveTo(-264, -658)">Hand</a>
      </li>
      <li>
        <a href="#" @click="moveTo(-383, -539)">Ermine</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        startX: -359,
        startY: -85,
        scrollY: true,
        scrollX: true,
        freeScroll: true,
        mouseWheel: true,
        indicators: {
          el: '#minimap',
          interactive: true
        }
      }
    };
  },
  methods: {
    moveTo(x, y) {
      this.$nextTick(() => {
        this.$refs.iScroll.$scroll.scrollTo(
          x,
          y,
          400,
          this.$refs.iScroll.utils.ease.back
        );
      });
    }
  }
};
</script>
