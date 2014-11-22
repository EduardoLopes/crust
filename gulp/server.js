var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function() {

  return gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));

});
