// Node stuff
var exec = require('child_process').exec,
    sys = require('sys');


// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    livereload = require('gulp-livereload'),
    minifycss = require('gulp-minify-css'),
    rjs = require('gulp-requirejs');


// Directories
var SRC = 'scss',
    DIST = 'styles';


// SCSS Compiling and Minification
gulp.task('scss', function(){
  return gulp.src(SRC + '/app.scss')
    .pipe(scsslint({
      'config': '.scsslint.yml'
    }))
    .pipe(
      sass({
        outputStyle: 'expanded',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: false,
        onError: function(err) {
          gutil.beep();
          notify().write(err);
        }
      })
    )
    .pipe( minifycss() )
    .pipe( gulp.dest(DIST + '/') )
    .pipe(livereload());
});


// Gulp Watcher
gulp.task('watch', function() {
  gulp.watch(SRC + '/**/*.scss', ['scss']);
  gulp.watch(SRC + '/*.scss', ['scss']);
});

// Gulp Default Task
gulp.task('default', ['scss', 'watch']);
