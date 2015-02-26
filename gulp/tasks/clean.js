var gulp = require('gulp');
var del = require('del');
var config = require('../config');

var dist = config.dir.dist;

gulp.task('clean', function(cb) {

  del([dist + '/**/*'], cb);

});
