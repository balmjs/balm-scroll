import autoInstall from './config/auto-install';
import UiScroll from './components/scroll';

const version = require('../../package.json').version;

const BalmScroll = {
  version,
  install(Vue) {
    // Install the components
    Vue.component(UiScroll.name, UiScroll);
  }
};

autoInstall(BalmScroll);

export default BalmScroll;
