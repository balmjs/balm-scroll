import autoInstall from './config/auto-install';
import UiScroll from './components/scroll';
import VScroll from './directives/scroll';

const version = require('../../package.json').version;

const BalmScroll = {
  version,
  install(Vue) {
    // Install the components
    Vue.component(UiScroll.name, UiScroll);
    // Init the directives
    Vue.directive(VScroll.name, VScroll);
  }
};

autoInstall(BalmScroll);

export default BalmScroll;
