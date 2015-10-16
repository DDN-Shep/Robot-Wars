module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'client/index.html': 'server/views/index.jade'
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['spec/**/*.js']
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({
            browsers: ['last 2 versions']
          }),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'client/styles/*.css'
      }
    },
    sass: {
      dist: {
        files: {
          'client/styles/main.css': 'server/sass/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss']
      },
      js: {
        options: {
          spawn: false,
        },
        files: '**/*.js',
        tasks: ['test']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('compile', ['jade', 'sass', 'postcss']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('test', ['mochaTest']);
}