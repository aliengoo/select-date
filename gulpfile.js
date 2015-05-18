var gulp = require('gulp');
var lp = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('app:js', function () {
  gulp.src(['src/**/*.module.js', 'src/**/*.js'])
    .pipe(lp.concat('_app.min.js'))
    .pipe(gulp.dest('.temp'))
    .pipe(lp.livereload());
});

gulp.task('app:html', function(){
  gulp.src(['src/**/*.html'])
    .pipe(lp.angularTemplateCache('_app.templates.js'))
    .pipe(gulp.dest('.temp'))
    .pipe(lp.livereload());
});

gulp.task('app', ['app:js', 'app:html'], function(){
  gulp.src('.temp/**/*')
    .pipe()
});

gulp.task('default', ['app:js'], function () {
  lp.livereload({
    start: true
  });

  lp.livereload.listen();

  gulp.watch(['src/**/*', 'index.html'], ['app:js']);
});