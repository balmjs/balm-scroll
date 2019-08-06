const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  server: {
    open: false
  },
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: env.useDocs
      ? {
          mylib: ['vue', 'prismjs'],
          app: './docs/scripts/main.js'
        }
      : {
          'balm-scroll': './src/scripts/index.js'
        },
    library: env.useDocs ? '' : 'BalmScroll',
    libraryTarget: env.useDocs ? 'var' : 'umd',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../docs/scripts'),
      '@src': path.resolve(__dirname, '../src/scripts')
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs ? [path.resolve(__dirname, '../src/scripts')] : []
  },
  extras: {
    includes: ['CNAME', 'balm-scroll-images.zip']
  },
  assets: {
    publicUrl: env.buildDocs ? '//iscroll.balmjs.com/' : ''
  },
  cache: env.buildDocs,
  useDefault: env.useDefault
};
