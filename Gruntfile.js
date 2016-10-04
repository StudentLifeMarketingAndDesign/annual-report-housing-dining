module.exports = function(grunt) {

  var globalConfig = {
    themeDir: 'themes/annual-report'
  };

  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          '<%=globalConfig.themeDir %>/css/master.css' : '<%=globalConfig.themeDir %>/scss/master.scss'
        },                  // Target
        options: {              // Target options
          style: 'compressed'
        }
      }
    },
    //concat all the files into the build folder

    concat: {
      js:{
        src: [
          'division-bar/js/division-bar.js',
          '<%=globalConfig.themeDir %>/bower_components/bootstrap/js/affix.js',
          '<%=globalConfig.themeDir %>/bower_components/isotope/dist/isotope.pkgd.js',
          '<%=globalConfig.themeDir %>/bower_components/jquery.scrollTo/jquery.scrollTo.js',
          '<%=globalConfig.themeDir %>/bower_components/history.js/scripts/bundled/html4+html5/jquery.history.js',
          '<%=globalConfig.themeDir %>/js/plugins/socialcount.min.js',
          '<%=globalConfig.themeDir %>/js/plugins/ajaxify-html5.js',
          '<%=globalConfig.themeDir %>/js/plugins/jquery.fitvids.js',
          '<%=globalConfig.themeDir %>/js/main.js'
        ],
        dest: '<%=globalConfig.themeDir %>/build/build.src.js'
      }
    },

    //minify those concated files
    //toggle mangle to leave variable names intact

    uglify: {
      my_target:{
        files:{
        '<%=globalConfig.themeDir %>/build/build.js': ['<%=globalConfig.themeDir %>/build/build.src.js'],
        }
      }
    },

    watch: {
      scripts: {
        files: ['<%=globalConfig.themeDir %>/js/*.js', '<%=globalConfig.themeDir %>/js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: true,
        }
      },
      css: {
        files: ['<%=globalConfig.themeDir %>/scss/*.scss',
                '<%=globalConfig.themeDir %>/scss/**/*.scss',
                '<%=globalConfig.themeDir %>/scss/**/**/*.scss'
                ],
        tasks: ['sass'],
        options: {
          spawn: true,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // Note: order of tasks is very important
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);

};
