module.exports = function(grunt) {

   grunt.initConfig({
    mochaTest:{
        test:{
            options:{
                reporter: 'spec'
            },
            src:['tests/test_login_page.js']
        }
    }
   });
   grunt.loadNpmTasks('grunt-mocha-test');

   grunt.registerTask('default', 'mochaTest')
 };