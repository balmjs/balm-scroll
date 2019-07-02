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
          'balm-scroll': './src/index.js'
        },
    library: 'BalmScroll',
    libraryTarget: 'umd',
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
      '@src': path.resolve(__dirname, '../src')
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs ? [path.resolve(__dirname, '../src/scripts')] : []
  },
  cache: env.buildDocs
};
