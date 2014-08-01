/* global require, module */

var EmberApp            = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles           = require('broccoli-static-compiler'),
    mergeTrees          = require('broccoli-merge-trees'),
    assetRev            = require('broccoli-asset-rev'),
    writeManifest       = require('broccoli-manifest'),
    app                 = new EmberApp(),
    bootstrapDir        = 'vendor/bootstrap-sass-official/assets',
    bootstrapComponents = ['dropdown', 'tooltip', 'transition', 'collapse'];

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

var tree = mergeTrees([app.toTree(), extraAssets]),
    assetTree = assetRev(tree, {
      extensions: ['js', 'css', 'png', 'jpg', 'gif'],
      exclude: ['fonts'],
      replaceExtensions: ['html', 'js', 'css']
    });

module.exports = mergeTrees([assetTree, writeManifest(assetTree)]);
