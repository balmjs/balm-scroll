const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');

balm.config = balmConfig;

balm.go(mix => {
  if (env.buildDocs) {
    //
  } else {
    if (env.updateIScroll) {
      // clear
      mix.remove('src/iscroll/*');
      // get iScroll
      mix.copy('node_modules/iscroll/build/*', 'src/iscroll');

      // get css reset for docs
      mix.copy(
        'node_modules/normalize.css/normalize.css',
        'docs/styles/global',
        {
          prefix: '_',
          extname: '.scss'
        }
      );
      // get fonts for docs
      mix.copy('node_modules/balm-ui/fonts/*', 'docs/fonts');
    }
  }
});
