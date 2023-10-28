const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// outputStyle: 'compressed'
// outputStyle: 'expanded'

function buildStyles() {
  return src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('src/css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('dist/css'))
}

function watchTask() {
  watch(['src/sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
