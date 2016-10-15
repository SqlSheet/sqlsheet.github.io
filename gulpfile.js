var gulp = require('gulp');
var linker = require('gulp-linker');


gulp.task('gulp-linker', function() {
  return gulp.src('index.html')
  .pipe(linker({
    scripts: [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/materialize-css/dist/js/materialize.min.js",
      "node_modules/angular/angular.min.js",
      "app/sqlsheet.js",
      "app/**/*.js"
    ],
    startTag: '<!--SCRIPTS-->',
    endTag: '<!--SCRIPTS END-->',
    fileTmpl: '<script src="%s"></script>',
    appRoot: './'
  }))
  .pipe(linker({
    scripts: [
      "node_modules/materialize-css/dist/css/materialize.min.css",
      "node_modules/mdi/css/materialdesignicons.min.css",
      "css/*.css"
    ],
    startTag: '<!--STYLESHEET-->',
    endTag: '<!--STYLESHEET END-->',
    fileTmpl: '<link type="text/css" rel="stylesheet" href="%s"></script>',
    appRoot: './'
  }))
  // Write modified files to www/
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['gulp-linker']);
