var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    shell       = require('gulp-shell');
    log         = require('gulp-log');
    /**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('scss/style.scss') // the source .scss file
  .pipe(sass()) // pass the file through gulp-sass
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer
  .pipe(gulp.dest('css')) // output .css file to css folder
  .pipe(browserSync.reload({stream:true})) // reload the stream
});

/**
        * @task clearcache
        * Clear all caches
 */
gulp.task('clearcache', function() {
  return shell.task([
   'drush cc all'
  ]);
});

/**
        * @task reload
        * Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});

/**
        * @task watch
        * Watch scss files for changes & recompile
        * Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
  gulp.watch('**/*.{php,inc,info}',['reload']);
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});