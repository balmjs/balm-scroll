import autoInstall from './config/auto-install';
import UiScroll from './components/scroll.vue';
import UiScrollLite from './components/scroll-lite.vue';
import UiScrollProbe from './components/scroll-probe.vue';
import UiScrollZoom from './components/scroll-zoom.vue';
import UiScrollInfinite from './components/scroll-infinite.vue';

const version = require('../../package.json').version;

const components = {
  UiScroll,
  UiScrollLite,
  UiScrollProbe,
  UiScrollZoom,
  UiScrollInfinite
};

const BalmScroll = {
  version,
  install(Vue) {
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }
  }
};

autoInstall(BalmScroll);

export default BalmScroll;
