const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');

balm.config = balmConfig;

balm.go(mix => {
  if (env.buildDocs) {
    //
  } else {
    //
  }
});
