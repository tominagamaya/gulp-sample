const gulp = require('gulp')
const sass = require('gulp-sass')
const merge = require('merge-stream')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')

const devDir = 'dev/'
const dev = {
  'scss': devDir + 'assets/scss/**.scss',
  'svg': devDir + 'assets/svg/*.svg'
}

const destDir = 'dest/'
const dest = {
  'css': destDir + 'assets/css',
  'svg': destDir + 'assets/svg'
}

gulp.task('sass', () => {
  const sc = gulp.src(dev.scss)
  .pipe(sass())
  .pipe(gulp.dest(dest.css))

  const svg = gulp.src(dev.svg)
  .pipe(svgmin())
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(rename('sprite.min.svg'))
  .pipe(gulp.dest(dest.svg))

  return merge(sc, svg)
})
