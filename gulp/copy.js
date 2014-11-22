var gulp = require('gulp');

gulp.task('copy-images', function(){

  return gulp.src('app/img/*.{png,jpg}')
  .pipe(gulp.dest('./dist/img'));

});

gulp.task('copy-vendors', function(){

  return gulp.src('app/js/vendor/*')
  .pipe(gulp.dest('./dist/js/vendor'));

});

gulp.task('copy-others', function(){

  return gulp.src([
    'app/apple-touch-icon-precomposed.png',
    'app/favicon.ico',
    'app/humans.txt',
    'app/robots.txt'
  ])
  .pipe(gulp.dest('./dist/'));

});

gulp.task('copy', ['copy-images', 'copy-vendors', 'copy-others']);
