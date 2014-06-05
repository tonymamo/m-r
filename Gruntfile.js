module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9000,
          open: true,
          protocol: 'http',
          hostname: '192.168.1.71',
          livereload: true
        },
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['index.html', 'views/*.html']
      },
      js: {
        files: ['js/app.js']
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/styles.css': 'scss/styles.scss'
        }
      }
    }



  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};
