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
    } else {
      if (balm.config.isProd) {
        // clear individual
        mix.remove(['./components']);
        // build individual
        // let buildFiles = [
        //   'scroll',
        //   'scroll-lite',
        //   'scroll-probe',
        //   'scroll-zoom',
        //   'scroll-infinite'
        // ].map(item => {
        //   return `./src/scripts/components/${item}.js`;
        // });
        // mix.js(buildFiles, './components');
        [
          'scroll',
          'scroll-lite',
          'scroll-probe',
          'scroll-zoom',
          'scroll-infinite'
        ].forEach(async item => {
          await mix.js(
            [`./src/scripts/components/${item}.js`],
            './components',
            {
              output: {
                library: 'BalmScroll_' + item
              }
            }
          );
        });
        // clean build
        mix.copy(
          ['./dist/css/*.css', './dist/js/*.js', './dist/img/*'],
          './dist'
        );
        mix.copy('src/styles/balm-scroll.scss', 'dist');
        mix.remove(['./dist/css', './dist/js', './dist/img']);
      }
    }
  }
});
