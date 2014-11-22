var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function(cb) {

  return gulp.src('dist/*').pipe(clean());

});
