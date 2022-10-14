const gulp = require('gulp');
const fs = require('fs');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
  browserSync.init({
    server: {baseDir: './public'}
  });
  gulp.watch([
    './public/index.html',
    './public/style.css'
  ]).on('change', browserSync.reload);
});

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!**/REMOVE{,/**}',
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

// JavaScript and JSON linter
function lintJs () {
  return gulp.src(addDefSrcIgnore(['**/*.js', '**/*.json']), {dot: true})
    .pipe($.eslint({dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

// HTML linter
function lintHtml () {
  return gulp.src(addDefSrcIgnore(['**/*.html']))
    .pipe($.htmllint({config: '.htmllintrc.json', failOnError: true}));
}

// CSS linter
function lintCss () {
  return gulp.src(addDefSrcIgnore(['**/*.css']))
    .pipe($.stylelint({
      failAfterError: true,
      reporters: [{formatter: 'string', console: true}]
    }));
}

// Lint all files
exports.lint = gulp.parallel(
  lintJs,
  lintHtml,
  lintCss
);
