'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch('./css/**/*.css').on('change', browserSync.reload);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
});

gulp.task('start', gulp.series('server'));
