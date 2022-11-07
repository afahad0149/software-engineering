const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!**/REMOVE{,/**}',
    '!node_modules{,/**}',
    '!**/node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

// JavaScript and JSON linter
gulp.task('lint', function () {
  return gulp
    .src(addDefSrcIgnore(['**/*.js', '**/*.json']), { dot: true })
    .pipe($.eslint({ dotfiles: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

// Remove solutions from exercises
gulp.task('remove-solutions', function () {
  del.sync('dist');
  return gulp.src(addDefSrcIgnore(['**', '!**/REMOVE{,/**}']), {dot: true})
    .pipe(gulp.dest('dist'));
});

// Prepare for distribution to students
gulp.task('dist', gulp.series('remove-solutions', function (done) {
  function removeMaster (str) {
    var strArr = str.split('-');
    strArr[strArr.length - 1] === 'master' && strArr.pop();
    return strArr.join('-');
  }

  const npmConfig = require('./package.json');
  npmConfig.name = removeMaster(npmConfig.name);
  npmConfig.repository.url = removeMaster(npmConfig.repository.url);
  npmConfig.scripts['gql:server'] = 'nodemon graphQL/server';
  npmConfig.scripts['gql:client'] = 'cd graphQL/client && ng serve -o';
  fs.writeFileSync('dist/package.json', JSON.stringify(npmConfig, null, 2));

  const esLintConfig = require('./.eslintrc.json');
  fs.writeFileSync(
    'dist/.eslintrc.json',
    JSON.stringify(esLintConfig, null, 2)
  );
  done();
}));
