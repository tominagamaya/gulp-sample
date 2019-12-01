const gulp = require('gulp')
const sass = require('gulp-sass')

const devDir = 'dev/'
const dev = {
  'scss': devDir + 'assets/scss/**.scss'
}

const destDir = 'dest/'
const dest = {
  'css': destDir + 'assets/css'
}

gulp.task('sass', () => {
  return gulp.src(dev.scss)
  .pipe(sass())
  .pipe(gulp.dest(dest.css))
})
