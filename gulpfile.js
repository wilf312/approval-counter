const gulp = require('gulp')
const zip = require('gulp-zip')
const del = require('del')

gulp.task('zip', () => {
  return gulp.src('./{content.js,manifest.json}')
    .pipe(zip('approval-counter.zip'))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
  return del([
    'dist'
  ]);
});

gulp.task('default', gulp.series('clean', 'zip'))
