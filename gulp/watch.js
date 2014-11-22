var gulp = require('gulp');
var livereload = require('gulp-livereload');

//fester than 'gulp server'
gulp.task('watch', function() {

  livereload.listen();

  gulp.watch(['app/**']).on('change', livereload.changed);

});
