(function() {
  'use strict';
  var LIVERELOAD_PORT = 35729;
  var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
  });
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
      app: 'app',
      dist: 'dist'
    };

    grunt.initConfig({
      yeoman: yeomanConfig,
      watch: {
        emberTemplates: {
          files: '<%= yeoman.app %>/templates/**/*.hbs',
          tasks: ['emberTemplates']
        },
        compass: {
          files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
          tasks: ['compass:server']
        },
        neuter: {
          files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
          tasks: ['neuter']
        },
        lint: {
          files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
          tasks: ['jshint']
        },
        livereload: {
          options: {
            livereload: LIVERELOAD_PORT
          },
          files: [
            '.tmp/scripts/*.js',
            '<%= yeoman.app %>/*.html',
            '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
          ]
        }
      },
      connect: {
        options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        },
        livereload: {
          options: {
            middleware: function (connect) {
              return [
                lrSnippet,
                mountFolder(connect, '.tmp'),
                mountFolder(connect, yeomanConfig.app)
              ];
            }
          }
        },
        test: {
          options: {
            middleware: function (connect) {
              return [
                mountFolder(connect, '.tmp'),
                mountFolder(connect, 'test')
              ];
            }
          }
        },
        dist: {
          options: {
            middleware: function (connect) {
              return [
                mountFolder(connect, yeomanConfig.dist)
              ];
            }
          }
        }
      },
      open: {
        server: {
          path: 'http://localhost:<%= connect.options.port %>'
        }
      },
      clean: {
        dist: {
          files: [{
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              '!<%= yeoman.dist %>/.git*'
            ]
          }]
        },
        server: '.tmp'
      },
      jshint: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        },
        all: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '!<%= yeoman.app %>/scripts/vendor/*',
          'test/spec/{,*/}*.js'
        ]
      },
      mocha: {
        all: {
          options: {
            run: true,
            urls: ['http://localhost:<%= connect.options.port %>/index.html']
          }
        }
      },
      compass: {
        options: {
          sassDir: '<%= yeoman.app %>/styles',
          cssDir: '.tmp/styles',
          generatedImagesDir: '.tmp/images/generated',
          imagesDir: '<%= yeoman.app %>/images',
          javascriptsDir: '<%= yeoman.app %>/scripts',
          fontsDir: '<%= yeoman.app %>/fonts',
          importPath: 'app/bower_components',
          httpImagesPath: '/images',
          httpGeneratedImagesPath: '/images/generated',
          httpFontsPath: '/styles/fonts',
          relativeAssets: false
        },
        dist: {},
        server: {
          options: {
            debugInfo: true
          }
        }
      },
      rev: {
        dist: {
          files: {
            src: [
              '<%= yeoman.dist %>/scripts/{,*/}*.js',
              '<%= yeoman.dist %>/styles/{,*/}*.css',
              // '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
              // '<%= yeoman.dist %>/styles/fonts/*'
            ]
          }
        }
      },
      useminPrepare: {
        html: '.tmp/index.html',
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },
      usemin: {
        html: ['<%= yeoman.dist %>/{,*/}*.html'],
        css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
        options: {
          dirs: ['<%= yeoman.dist %>']
        }
      },
      imagemin: {
        dist: {
          files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg}',
            dest: '<%= yeoman.dist %>/images'
          }]
        }
      },
      svgmin: {
        dist: {
          files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/images'
          }]
        }
      },
      cssmin: {
        dist: {
          files: {
            '<%= yeoman.dist %>/styles/main.css': [
              '.tmp/styles/{,*/}*.css',
              '<%= yeoman.app %>/styles/{,*/}*.css'
            ]
          }
        }
      },
      htmlmin: {
        dist: {
          options: {},
          files: [{
            expand: true,
            cwd: '<%= yeoman.app %>',
            src: '*.html',
            dest: '<%= yeoman.dist %>'
          }]
        }
      },
      replace: {
        app: {
          options: {
            variables: {
              ember: 'bower_components/ember/ember.js',
              ember_data: 'bower_components/ember-data-shim/ember-data.prod.js',
              app_config: 'scripts/app_config/development.js'
            }
          },
          files: [{
            src: '<%= yeoman.app %>/index.html',
            dest: '.tmp/index.html'
          }]
        },
        appjava: {
          options: {
            variables: {
              ember: 'bower_components/ember/ember.js',
              ember_data: 'bower_components/ember-data-shim/ember-data.prod.js',
              app_config: 'scripts/app_config/development_java.js'
            }
          },
          files: [{
            src: '<%= yeoman.app %>/index.html',
            dest: '.tmp/index.html'
          }]
        },
        dist: {
          options: {
            variables: {
              ember: 'bower_components/ember/ember.prod.js',
              ember_data: 'bower_components/ember-data-shim/ember-data.prod.js',
              app_config: 'scripts/app_config/production.js'
            }
          },
          files: [{
            src: '<%= yeoman.app %>/index.html',
            dest: '.tmp/index.html'
          }]
        }
      },
      copy: {
        fonts_dev: {
          files: [{
            expand: true,
            cwd: 'app/bower_components/bootstrap-sass/fonts/',
            src: ['**'],
            dest: '.tmp/styles/fonts/'
          }]
        },
        fonts_dist: {
          files: [{
            expand: true,
            cwd: 'app/bower_components/bootstrap-sass/fonts/',
            src: ['**'],
            dest: '<%= yeoman.dist %>/styles/fonts/'
          }]
        },
        dist: {
          files: [{
            expand: true,
            dest: '<%= yeoman.dist %>',
            cwd: 'heroku',
            src: '*',
            rename: function (dest, src) {
              var path = require('path');
              if (src === 'distpackage.json') {
                return path.join(dest, 'package.json');
              }
              return path.join(dest, src);
            }
          }]
        }
      },
      concurrent: {
        server: [
          'emberTemplates',
          'compass:server'
        ],
        test: [
          'emberTemplates',
          'compass'
        ],
        dist: [
          'emberTemplates',
          'compass:dist',
          'imagemin',
          'svgmin',
          'htmlmin'
        ]
      },
      emberTemplates: {
        options: {
          templateName: function (sourceFile) {
            var templatePath = yeomanConfig.app + '/templates/';
            return sourceFile.replace(templatePath, '');
          }
        },
        dist: {
          files: {
            '.tmp/scripts/compiled-templates.js': '<%= yeoman.app %>/templates/{,*/}*.hbs'
          }
        }
      },
      neuter: {
        app: {
          options: {
            filepathTransform: function (filepath) {
              return 'app/' + filepath;
            }
          },
          src: '<%= yeoman.app %>/scripts/app.js',
          dest: '.tmp/scripts/combined-scripts.js'
        }
      },
      manifest: {
        generate: {
          options: {
            basePath: '<%= yeoman.dist %>',
            network: ['*'],
            preferOnline: false,
            timestamp: true
          },
          src: [
            // Put HTML, CSS and JS first (not sure if it makes a difference)
            '**/*.html',
            '**/*.css',
            '**/*.js',
            // Then include everything else...
            '**/*.*',
            // .. but exclude these
            '!apple-touch-*',
            '!favicon.ico',
            '!cache.manifest'
          ],
          dest: '<%= yeoman.dist %>/cache.manifest'
        }
      }
    });

    grunt.loadNpmTasks('grunt-manifest');

    grunt.registerTask('server', function (target) {
      if (target === 'dist') {
        return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'clean:server',
        'replace:app',
        'concurrent:server',
        'neuter:app',
        'connect:livereload',
        'copy:fonts_dev',
        'watch'
      ]);
    });

    grunt.registerTask('serverJava', function (target) {
      if (target === 'dist') {
        return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'clean:server',
        'replace:appjava',
        'concurrent:server',
        'neuter:app',
        'connect:livereload',
        'copy:fonts_dev',
        'watch'
      ]);
    });

    grunt.registerTask('test', [
      'clean:server',
      'replace:app',
      'concurrent:test',
      'connect:test',
      'neuter:app',
      'mocha'
    ]);

    grunt.registerTask('build', [
      'clean:dist',
      'replace:dist',
      'useminPrepare',
      'concurrent:dist',
      'neuter:app',
      'concat',
      'cssmin',
      'uglify',
      'copy:dist',
      'copy:fonts_dist',
      'rev',
      'usemin',
      'manifest',
      'jshint'
    ]);

    grunt.registerTask('default', [
      'jshint',
      'test',
      'build'
    ]);

    grunt.registerTask('lint', [
      'jshint'
    ]);


  };

}());
