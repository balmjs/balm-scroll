import Vue from 'vue';
import router from '@/routes';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui';
import BalmScroll from '@src'; // 'balm-scroll'
import UiMarkdown from '@/components/markdown';
// syntax highlighting
import prismjs from 'prismjs';

Vue.config.productionTip = false;

Vue.use(BalmUI);
Vue.use(BalmScroll);

Vue.component(UiMarkdown.name, UiMarkdown);
Vue.prototype.$prism = prismjs;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
});
