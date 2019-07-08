<template>
  <div class="demo--probe">
    <div id="monitor">
      Y position:
      <strong id="position">{{ position }}</strong>
    </div>
    <ui-scroll-probe
      :options="options"
      :pullAction="pullAction"
      :pullDownAction="pullDownAction"
      :pullUpAction="pullUpAction"
    >
      <ul id="datalist">
        <li v-for="i in list" :key="i">Pretty row {{ i }}</li>
      </ul>
    </ui-scroll-probe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 50,
      options: { probeType: 3, mouseWheel: true },
      position: 0
    };
  },
  methods: {
    pullAction({ y }) {
      this.position = y >> 0;
    },
    pullDownAction({ y }) {
      console.log('pullDownAction');
      this.position = y >> 0;
    },
    pullUpAction({ y }) {
      console.log('pullUpAction');
      this.position = y >> 0;
    }
  }
};
</script>
