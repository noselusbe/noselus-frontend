/*globals module*/
module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      ember_build: {
        command: 'ember build --environment=production'
      }
    },
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:noselusbe/noselus-frontend.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-build-control');

  grunt.registerTask('deploy', ['exec:ember_build', 'buildcontrol']);
};