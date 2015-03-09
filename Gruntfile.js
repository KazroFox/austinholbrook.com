//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({
        
        // Task configuration
        concat: {
            options: {
                separator: ';',
            },
            js_frontend: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './develop/javascripts/frontend.js'
                ],
                dest: './public/javascripts/frontend.js',
            },
            js_backend: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './develop/javascripts/backend.js'
                ],
                dest: './public/javascripts/backend.js',
            },
        },
        less: {
            development: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    "./public/stylesheets/app.css":"./develop/less/app.less",
                }
            }
        },
        uglify: {
            options: {
              mangle: true // Use if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    './public/javascripts/frontend.js': './public/javascripts/frontend.js',
                }
            },
            backend: {
                files: {
                    './public/javascripts/backend.js': './public/javascripts/backend.js',
                }
            },
        },
        copy: {
          font_awesome: {
            expand: true,
            flatten: true,
            src: ['bower_components/font-awesome/fonts/*'],
            dest: './public/fonts'
          }
        },
        watch: {
            js_frontend: {
                files: [
                    //watched files
                    './bower_components/jquery/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './develop/javascripts/frontend.js'
                ],   
                tasks: ['concat:js_frontend','uglify:frontend'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
            js_backend: {
                files: [
                    //watched files
                    './bower_components/jquery/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './develop/javascripts/backend.js'
                ],   
                tasks: ['concat:js_backend','uglify:backend'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
            less: {
                files: ['./develop/less/**/*'], //watched files
                tasks: ['less'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'copy', 'watch']);

};