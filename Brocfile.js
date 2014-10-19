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
    exclude: ['fonts', 'assets/images/parties']
  },

  getEnvJSON: require('./config/environment'),
});

var fontDestDir = '/assets/bootstrap';

// Adds 3rd script like GA
if (app.env === 'production') {
  app.options.inlineContent = {
    'google-analytics' : 'vendor/ga/google-analytics.js'
  };
}

for (var index in bootstrapComponents) {
  app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
}

var extraAssets = pickFiles(bootstrapDir + '/fonts/bootstrap', {
  srcDir: '/',
  destDir: fontDestDir
});

app.import('vendor/moment/moment.js');
app.import('vendor/moment/lang/fr.js');
app.import('vendor/spinjs/spin.js');
app.import('vendor/spinjs/jquery.spin.js');
app.import('vendor/PACE/pace.js');
app.import('vendor/PACE/themes/pace-theme-flash.css');
app.import('bower_components/underscore/underscore.js');

var tree = mergeTrees([app.toTree(), extraAssets]),
    finalTree = tree;

if (app.env === 'production') {
  finalTree = mergeTrees([tree, writeManifest(tree)]);
} else {
  finalTree = tree;
}

module.exports = finalTree;
