module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	      copy: {
	        main: {
	          files: [
	            // copy static HTML Files over
	            {expand: true, cwd:'src/html/', src: ['**'], dest: 'build/'},
              {expand: true, cwd:'src/data/bootstrap/css/', src:['**'], dest: 'build/css/'},
              {expand: true, cwd:'src/data/bootstrap/js/',  src:['**'], dest: 'build/js/'},
              {expand: true, cwd:'src/data/app-specific/img/',  src:['**'], dest: 'build/img/'},
	          ]
	        }
	      },
        less: {
          development: {
            files: {
              "build/css/app.css": "src/data/app-specific/css/main.less"
            }
          }
        },
        watch: {
            options: {
                    livereload: true,
            },
            scripts: {
                files: ['src/**'],
                tasks: ['copy','less'],
                options: {
                    spawn: false,
                },
            } 
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['copy', 'less']);

};

