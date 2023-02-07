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
            src:['tests/test_login_page.js', 'tests/test_login_with_different_languages.js', 'tests/test_login_failure.js']
        }
    }
   });

   grunt.loadNpmTasks('grunt-mocha-test');

   grunt.registerTask('default', 'mochaTest')
 };
//'tests/test_login_page.js', 'tests/test_login_with_different_languages.js', 'tests/test_login_failure.js'