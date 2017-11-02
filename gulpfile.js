var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require('gulp-cssmin');

gulp.task('compile',function(){
  console.log('========> Compilando SCSS...');
  return gulp.src("./src/*.scss")
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

gulp.task('minify',['compile'], function() {
  console.log('========> Minificando CSS...');
  return gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
  gulp.watch('./src/*.scss',['minify']);
});
