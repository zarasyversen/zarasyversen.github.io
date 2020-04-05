const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
 
sass.compiler = require('node-sass');

// Style
// Update SourceMaps, Minimise(Uglify) and Compile to CSS.
function style() {
  
    return (
      src('./assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.identityMap())
        .pipe(sass())
        .on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(uglifycss({
          "uglyComments": true
        }))
        .pipe(dest('./assets/css')
    );
}

exports.style = style;


// Default function 
// Watch for change in .scss and recompile styles
exports.default = function() {
    watch('./assets/scss/*.scss', style);
};



