/* globals requirejs, require */

var moduleName, shouldLoad;

QUnit.config.urlConfig.push({ id: 'nojshint', label: 'Disable JSHint'});

// TODO: load based on params
for (moduleName in requirejs.entries) {
  shouldLoad = false;

  if (moduleName.match(/-test$/)) { shouldLoad = true; }
  if (!QUnit.urlParams.nojshint && moduleName.match(/\.jshint$/)) { shouldLoad = true; }

  if (shouldLoad) { require(moduleName); }
};

if (QUnit.notifications) {
  QUnit.notifications({
    icons: {
      passed: '/assets/passed-f03380ac8e666e7c28dfe944755eb00c.png',
      failed: '/assets/failed-3986ab8c4f732525d116acced8a71305.png'
    }
  });
}
