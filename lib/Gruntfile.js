module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$", "firebase" ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "mushApp": true} //need to add app module's name
      },
      files: ['../Mushapp/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../Mushapp/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
