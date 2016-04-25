// grab our gulp packages
var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('public/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
  return gulp.src('public/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('public/stylesheets'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('public/**/*.js', ['jshint']);
  gulp.watch('public/scss/**/*.scss', ['build-css']);
});

