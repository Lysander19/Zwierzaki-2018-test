
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

  gulp.task("sass", function() {
     return gulp.src('Users/Kari/Desktop/inzynieryjne zwierzaki/zwierzaki-inz-2018/src/scss/main.scss')
     .pipe(sourcemaps.init({loadMaps: true}))
     .pipe(sass({errLogToConsole: true,
     outputStyle: 'expanded'}))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('./css'))
   });

   gulp.task("watch", function(){
      gulp.watch("scss/**/*.scss", ["sass"]);
    });
