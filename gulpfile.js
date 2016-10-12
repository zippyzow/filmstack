// grab our gulp packages
var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    nodemon = require('gulp-nodemon');

var jsSrc = 'src/**/*.js',
    jsVendor = [
      'node_modules/angular/angular.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-animate/angular-animate.js'
    ],
    jsAll = jsVendor.concat(['src/peewee-module.js', jsSrc]);

var scssSrc = 'src/**/*.scss';
var cssVendor = 'node_modules/angular-material/angular-material.min.css';

var htmlSrc = 'src/**/*.html';

var buildPath = 'public/build';

gulp.task('default', [/**'jshint',*/ 'concat-js', 'build-and-concat-css', 'build-html', 'server', 'watch']);

gulp.task('concat-js', function() {
  return gulp.src(jsAll)
      .pipe(concat('concated.js'))
      .pipe(gulp.dest(buildPath));
});

gulp.task('jshint', function() {
  return gulp.src(jsSrc)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-html', function() {
  return gulp.src(htmlSrc)
      .pipe(templateCache())
      .pipe(gulp.dest(buildPath));
});

gulp.task('build-src-css', function() {
  return gulp.src(scssSrc)
      .pipe(sass())
      .pipe(gulp.dest('intermediate/stylesheets/src'));
});

gulp.task('build-and-concat-css', ['build-src-css'], function() {
  return gulp.src([cssVendor, 'intermediate/**/*.css'])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(buildPath));
});

gulp.task('server', function() {
  nodemon({
    script: 'server/app.js'
    , ext: 'js'
    , watch: 'server/**/*.js'
  })
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(jsSrc, ['jshint', 'concat-js']);
  gulp.watch(htmlSrc, ['build-html']);
  gulp.watch(scssSrc, ['build-and-concat-css']);
});


