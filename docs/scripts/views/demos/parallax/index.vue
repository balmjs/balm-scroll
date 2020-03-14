<template>
  <div class="scroll-demo demo--parallax">
    <ui-scroll :options="options"></ui-scroll>

    <div class="starfield" id="starfield1">
      <div id="stars1"></div>
    </div>

    <div class="starfield" id="starfield2">
      <div id="stars2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        mouseWheel: true,
        indicators: [
          {
            el: '#starfield1',
            resize: false,
            ignoreBoundaries: true,
            speedRatioY: 0.4
          },
          {
            el: '#starfield2',
            resize: false,
            ignoreBoundaries: true,
            speedRatioY: 0.2
          }
        ]
      }
    };
  }
};
</script>
