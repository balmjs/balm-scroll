const balm = require('balm');
const updateIScroll = process.argv.includes('--iscroll');
const useDefault = !updateIScroll;
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.env.isProd || buildDocs;

module.exports = {
  updateIScroll,
  useDefault,
  buildDocs,
  useDocs
};
