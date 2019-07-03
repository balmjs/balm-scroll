import autoInit from './register';

const BalmScroll = {
  name: 'scroll',
  bind(el, binding) {},
  inserted(el, binding) {
    console.log('v-scroll');
  },
  unbind(el, binding) {}
};

autoInit(BalmScroll.name, BalmScroll);

export default BalmScroll;
