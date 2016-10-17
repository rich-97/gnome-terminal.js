const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');

gulp.task('sass', () => {
  gulp.src('./source/scss/main.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('./build/assets/css/'));
});

gulp.task('pug', () => {
  gulp.src('./source/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
});

gulp.task('js', () => {
  gulp.src('./source/js/gnome-terminal.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js/'));
});

gulp.task('res', () => {
  gulp.src('./source/res/*.*')
    .pipe(gulp.dest('./build/assets/images/'));
});

gulp.task('default', ['sass', 'pug', 'res', 'js']);

gulp.task('watch', () => {
  gulp.watch([
    './source/js/*.js',
    './source/scss/*.scss',
    './source/index.pug',
    './source/pug/*.pug'
  ], ['default']);
});
