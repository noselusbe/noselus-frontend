/* global require, module */

var EmberApp            = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles           = require('broccoli-static-compiler'),
    mergeTrees          = require('broccoli-merge-trees'),
    writeManifest       = require('broccoli-manifest'),
    bootstrapDir        = 'vendor/bootstrap-sass-official/assets',
    bootstrapComponents = ['dropdown', 'tooltip', 'transition', 'collapse'];

var app = new EmberApp({
  minifyCSS: {
    enabled: true
  },

  fingerprint: {
    exclude: ['fonts']
  },

  getEnvJSON: require('./config/environment')
});

for (var index in bootstrapComponents) {
  app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
}

var extraAssets = pickFiles(bootstrapDir + '/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/assets/bootstrap'
});

app.import('vendor/moment/moment.js');
app.import('vendor/spinjs/spin.js');
app.import('vendor/spinjs/jquery.spin.js');
app.import('vendor/ember-localstorage-adapter/localstorage_adapter.js');

var tree = mergeTrees([app.toTree(), extraAssets]);

module.exports = mergeTrees([tree, writeManifest(tree)]);
