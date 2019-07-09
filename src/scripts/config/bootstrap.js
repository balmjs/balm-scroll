import autoInstall from './auto-install';

const bootstrap = Component => {
  const UiComponent = {
    install(Vue) {
      Vue.component(Component.name, Component);
    }
  };

  autoInstall(UiComponent);

  return UiComponent;
};

export default bootstrap;
