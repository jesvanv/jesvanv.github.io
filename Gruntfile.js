module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },
    minified: {
      files: {
        src: [
          'scripts/jcvanv_script.js'
        ],
        dest: 'scripts/'
      },
      options: {
        sourcemap: true,
        allinone: false,
        ext: '.min.js'
      }
    }
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-minified');

  // Default task.
  grunt.registerTask('default', 'minified');

};
