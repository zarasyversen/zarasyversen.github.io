var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
 
sass.compiler = require('node-sass');

function style() {
  
    return (
      gulp
        .src('./assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.identityMap())
        .pipe(sass())
        .on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./assets/css')
    );
}

exports.style = style;

// gulp.task('run', gulp.parallel('sass'));

// gulp.task('watch', function() {
//     gulp.watch('./assets/scss/*.scss', gulp.parallel('sass'));
// });

// gulp.task('default', gulp.parallel('run', 'watch'));
