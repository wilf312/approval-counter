const gulp = require('gulp')
const zip = require('gulp-zip')
const del = require('del')

const config = {
  dist: './dist'
}

gulp.task('copy', () => {
  gulp.src('./manifest.json').pipe(gulp.dest(config.dist))
  return gulp.src('./content.js').pipe(gulp.dest(config.dist))
})

gulp.task('zip', () => {
  return gulp.src('dist/*')
    .pipe(zip('approval-counter.zip'))
    .pipe(gulp.dest('dist'))
})


gulp.task('clean', () => {
  return del([
    'dist'
  ]);
});

gulp.task('default', gulp.series('clean', 'copy', 'zip'))
