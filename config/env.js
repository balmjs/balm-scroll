const balm = require('balm');
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.isProd || buildDocs;

module.exports = {
  buildDocs,
  useDocs
};
