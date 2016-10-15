var gulp = require('gulp');
var linker = require('gulp-linker');

gulp.task('gulp-linker', function() {
  return gulp.src('index.html')
  .pipe(linker({
    scripts: [
      "node_modules/materialize-css/dist/js/materialize.min.js",
      "node_modules/jquery/dist/jquery.min.js"
    ],
    startTag: '<!--SCRIPTS-->',
    endTag: '<!--SCRIPTS END-->',
    fileTmpl: '<script src="%s"></script>',
    appRoot: './'
  }))
  // Write modified files to www/
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['gulp-linker']);
