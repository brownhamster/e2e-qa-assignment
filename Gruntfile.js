module.exports = function(grunt) {

   grunt.initConfig({
    mochaTest:{
        test:{
            options:{
                reporter: 'spec'
            },
            src:['tests/test_login_page.js', 'tests/test_login_with_different_languages.js', 'tests/test_login_failure.js']
        }
    }
   });
   grunt.loadNpmTasks('grunt-mocha-test');

   grunt.registerTask('default', 'mochaTest')
 };
//'tests/test_login_page.js', 'tests/test_login_with_different_languages.js'