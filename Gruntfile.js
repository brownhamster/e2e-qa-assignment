var nodemailer = require('nodemailer');

module.exports = function(grunt) {

   grunt.initConfig({
    mochaTest:{
        test:{
            options:{
                reporter: 'mochawesome',
                reporterOptions: {
                    reportDir: 'reports',
                    reportName: 'TestReport',
                    reportTitle: 'Test Report for e2e test'
                }
            },
            src:['tests/test_login_page.js', 'tests/test_login_with_different_languages.js', 'tests/test_login_failure.js', 'tests/test_password_reset.js', 'tests/test_load_time.js', 'tests/test_incorrect_url.js', 'tests/test_sign_up_page_navigation.js']
        }
    }
   });

   grunt.loadNpmTasks('grunt-mocha-test');

   grunt.registerTask('default', 'mochaTest')
 };
//            src:['tests/test_login_page.js', 'tests/test_login_with_different_languages.js', 'tests/test_login_failure.js', 'tests/test_password_reset.js', 'tests/test_load_time.js', 'tests/test_incorrect_url.js']
