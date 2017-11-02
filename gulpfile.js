var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var pump = require('pump');

gulp.task('compile',function(cb){
  console.log('========> Compilando SCSS...');
  pump([
      gulp.src("./src/*.scss"),
      sass(),
      gulp.dest('./css')
    ],
    cb
    );
});

gulp.task('minify',['compile'], function() {
  console.log('========> Minificando CSS...');
  return gulp.src('./css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('./css'));
});

gulp.task('minify-js', function (cb) {
  console.log('========> Minificando JS...');
  pump([
    gulp.src('./src/*.js'),
    uglify(),
    gulp.dest('./js')
    ],
    cb
    );
});

gulp.task('default', function(){
  gulp.watch('./src/*.scss',['minify']);
  gulp.watch('./src/*.js',['minify-js']);
});
