const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
 

// Style
function style() {
  
    return gulp.src('./assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.identityMap())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(uglifycss({
          "uglyComments": true
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream())
}

// Watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;

// Default function 
// Watch for change in .scss and recompile styles
exports.default = function () {
    watch();
}


