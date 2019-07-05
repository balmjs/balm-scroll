<template>
  <div class="demo--zoom">
    <ui-scroll-zoom :options="options">
      <ul>
        <li v-for="i in 50" :key="i">Pretty row {{ i }}</li>
      </ul>
    </ui-scroll-zoom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        scrollX: true,
        scrollY: true,
        mouseWheel: true,
        wheelAction: 'zoom'
      }
    };
  }
};
</script>
