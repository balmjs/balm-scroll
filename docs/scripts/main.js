import Vue from 'vue';
import router from '@/routes';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui';
import BalmScroll from '@src'; // 'balm-scroll'

Vue.config.productionTip = false;

Vue.use(BalmUI);
Vue.use(BalmScroll);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
});
