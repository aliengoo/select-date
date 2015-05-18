var gulp = require('gulp');
var lp = require('gulp-load-plugins')({
  lazy: true
});
var path = require('path');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower:js', function() {
  var jsFilter = lp.filter('*.js');
  gulp.src(mainBowerFiles())
    .pipe(jsFilter)
    .pipe(lp.concat('vendor.min.js'))
    .pipe(gulp.dest('min'));
});

gulp.task('app:js', function() {

  gulp.src([
      'src/**/*.module.js',
      'src/**/*.js'
    ])
    .pipe(lp.babel())
    .pipe(lp.concat('app.js'))
    .pipe(gulp.dest('.temp'));
});

gulp.task('app:html', function() {
  gulp.src(['src/**/*.html'])
    .pipe(lp.angularTemplatecache({
      module: 'app',
      moduleSystem: 'IIFE'
    }))
    .pipe(gulp.dest('.temp'));
});

gulp.task('app', ['bower:js', 'app:js', 'app:html'], function() {

  var appFiles = ['.temp/app.js', '.temp/templates.js'];

  gulp.src(appFiles)
    .pipe(lp.concat('app.min.js'))
    .pipe(gulp.dest('min'))
    .pipe(lp.livereload());
});

gulp.task('default', ['app'], function() {
  lp.livereload({
    start: true
  });

  lp.livereload.listen();

  gulp.watch(['src/**/*', 'index.html'], ['app']);
});