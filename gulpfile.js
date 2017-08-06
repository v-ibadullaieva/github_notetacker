var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
  gulp.src('./scss/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: '.',
      sass: 'scss'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./scss/components/*.scss', ['styles']);
});
