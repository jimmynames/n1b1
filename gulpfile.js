var gulp = require('gulp')
var nunjucksRender = require('gulp-nunjucks-render')
var data = require('gulp-data')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')

// Build

var input = './src/scss/**/*.scss'
var output = './dest/'
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
}

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Sourcemaps init
    .pipe(sourcemaps.init())
    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Auto prefix
    .pipe(autoprefixer(autoprefixerOptions))
    // Sourcemap write
    .pipe(sourcemaps.write())
    // Minify CSS
    .pipe(cleanCSS({compatibility: 'ie11'}))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output))
})

gulp.task('nunjucks', function () {
  return gulp
  // Gets .html and .nunjucks files in pages
  .src('./pages/**/*.+(html|nunjucks)')
  // Data
  .pipe(data(function () {
    return require('./data.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['./templates']
  }))
  // output files in app folder
  .pipe(gulp.dest('./dest/'))
})

// Watch

gulp.task('watch', function () {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

// Default

gulp.task('default', ['sass', 'watch', 'nunjucks'])
