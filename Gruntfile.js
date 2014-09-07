/*globals module*/
module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      ember_build: {
        command: 'ember build --environment=production'
      },
      release: {
        command: 'git checkout master; git merge develop;'
      },
      back_to_dev: {
        command: 'git checkout develop;'
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

  grunt.registerTask('deploy', ['exec:release', 'exec:ember_build', 'buildcontrol', 'exec:back_to_dev']);
};