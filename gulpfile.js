const gulp = require('gulp');
var sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();
 
// Style
function style() {
    return gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
}

// Watch for file changes
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// Default function when you run gulp
exports.default = watch;
