module.exports = function(grunt){

    var JS_SOURCE = 'source/javascript/*.js',
        JS_BUILD = 'build/javascript/main.js',
        JS_DEPLOY = 'assets/js/dist/main.min.js',
        SASS_SOURCE = 'source/sass/style.scss',
        CSS_BUILD = 'build/css/style.css',
        CSS_DEPLOY = 'assets/css/style.css',
        HTML_SOURCE = 'source/html/*.html',
        HTML_BUILD = 'build/',
        IMG_SOURCE = 'source/img/',
        IMG_BUILD = 'build/img/',
        FONTS_SOURCE = 'source/fonts/',
        FONTS_BUILD = 'build/fonts/',
        CONNECT_PORT = 9001;

    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Connect Server
        connect: {
            options: {
                port: CONNECT_PORT,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'build'
                    ]
                }
            }
        },

        //cssbuild
        sass: {
            build: {
                src: SASS_SOURCE,
                dest: CSS_BUILD
            }
        },

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                src: CSS_BUILD,
                dest: CSS_BUILD
            }
        },

        cssmin: {
            build: {
                src: CSS_BUILD,
                dest: CSS_DEPLOY
            }
        },

        //jsbuild
        jshint: {
            lib_test: {
                src: [JS_SOURCE, 'source/tests/javascript/spec/*.js']
            },
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                devel: true,
                browser: true,
                globals: {
                    jQuery: true,
                    describe: true,
                    it: true,
                    should: true,
                    beforeEach: true,
                    afterEach: true,
                    sinon: true,
                    done: true
                },
                ignores: ['source/javascript/jquery.js']
            },
        },

        mocha: {
            // Runs 'test/test2.html' with specified mocha options
            // This variant auto-includes 'bridge.js' so you do not have
            // to include it in your HTML spec file. Instead, you must add an
            // environment check before you run `mocha.run` in your HTML.
            jstests: {
                src: [ 'source/tests/javascript/*.html' ],
                options: {
                    bail: true,
                    log: true,
                    mocha: {
                        ignoreLeaks: false,
                    },
                    reporter: 'Spec',
                    run: true,
                    timeout: 10000
                }
            }
        },

        uglify: {
            build: {
                src: [JS_BUILD],
                dest: JS_DEPLOY
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [JS_SOURCE],
                dest: JS_BUILD
            },
        },

        //htmlbuild
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    // 'head-script-disabled': true,
                    'style-disabled': true
                },
                src: [HTML_SOURCE]
            }
        },

        htmlbuild: {
            dist: {
                src: HTML_SOURCE,
                dest: HTML_BUILD
            }

            //@todo add advanced options for various builds or templatebuilding https://github.com/spatools/grunt-html-build
        },

        //copytask
        copy: {
            img: {
                files: [
                    {
                        cwd: IMG_SOURCE,
                        src: '**',
                        dest: IMG_BUILD,
                        expand: true
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        cwd: FONTS_SOURCE,
                        src: '**',
                        dest: FONTS_BUILD,
                        expand: true
                    }
                ]
            }
        },

        //watchtasks
        watch: {
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'build/**'
                ]
            },
            html: {
                files: [HTML_SOURCE],
                tasks: ['buildhtml']
            },
            js : {
                files: [JS_SOURCE, 'source/tests/javascript/*', 'source/tests/javascript/**/*'],
                tasks: ['buildjs']
            },
            css: {
                files: ['source/sass/**/*.scss'],
                tasks: ['buildcss']
            },
            htmlcss: {
                files: ['source/sass/**/*.scss', HTML_SOURCE],
                tasks: ['buildhtml', 'buildcss', 'buildassets']
            }
        }
    });

    grunt.registerTask('default',   []);
    grunt.registerTask('server',   ['build','connect:livereload','watch']);
    grunt.registerTask('build',   ['buildjs', 'buildhtml', 'buildcss', 'buildassets']);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
    grunt.registerTask('buildjs',  ['jshint', 'concat', 'uglify']);
    grunt.registerTask('buildhtml',  ['htmlhint', 'htmlbuild']);
    grunt.registerTask('buildassets',  ['copy:img','copy:fonts']);


};
