const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
 
// Style
function style() {
    return gulp.src('./assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream())
}

// Watch for file changes
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// Default function when you run gulp
exports.default = gulp.series(watch);
