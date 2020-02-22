var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('run', gulp.parallel('sass'));

gulp.task('watch', function() {
    gulp.watch('./assets/scss/*.scss', gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('run', 'watch'));
