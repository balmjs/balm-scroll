import autoInstall from './config/auto-install';
import UiScroll from './components/scroll';
// import UiScrollLite from './components/scroll-lite';
import UiScrollProbe from './components/scroll-probe';
// import UiScrollZoom from './components/scroll-zoom';
// import UiScrollInfinite from './components/scroll-infinite';

const version = require('../../package.json').version;

const components = {
  UiScroll,
  UiScrollProbe
};

const BalmScroll = {
  version,
  install(Vue) {
    // Install the components
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }
  }
};

autoInstall(BalmScroll);

export default BalmScroll;
