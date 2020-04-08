module.exports = function(grunt){
    grunt.initConfig({
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'index.html',
              dest: 'index.html'
            }
          },
          cssmin: {  
            'css/dlg-about.css': 'css/dlg-about.css',
            'css/dlg-common.css': 'css/dlg-common.css',
            'css/dlg-font.css': 'css/dlg-font.css',
            'css/editor.css': 'css/editor.css',
            'css/list.css': 'css/list.css',
            'css/menubar.css': 'css/menubar.css',
            'css/normalize.css': 'css/normalize.css',
          },
          uglify: {
            release:{
              files: {
                'js/app.js': 'js/app.js',
                'js/dlg-about.js': 'js/dlg-about.js',
                'js/dlg-font.js': 'js/dlg-font.js',
                'js/editor.js': 'js/editor.js',
                'js/list.js': 'js/list.js',
                'js/menu-data.js': 'js/menu-data.js',
                'js/menubar.js': 'js/menubar.js',
              }
            }       
          }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:release']);
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']); 
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin']); 
};
