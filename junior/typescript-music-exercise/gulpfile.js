const { src, dest, series } = require('gulp');
const { writeFile } = require('fs/promises');
const del = require('del');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
const addDefSrcIgnore = srcArr =>
  srcArr.concat([
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!build{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);

// JavaScript and JSON linter
function lint () {
  return src(addDefSrcIgnore(['**/*.js', '**/*.json', '**/*.ts']), {dot: true})
    .pipe($.eslint({dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

// Remove solutions from exercises
const removeSolutions = () => {
  return src(addDefSrcIgnore(['**']), { dot: true })
    .pipe(
      $.replace(/^\s*(\/\/|<!--|\/\*)\s*REMOVE-START[\s\S]*?REMOVE-END\s*(\*\/|-->)?\s*$/gm, '')
    )
    .pipe(dest('dist'));
};

// Prepare for distribution to students
const removeMaster = async () => {
  try {
    let npmConfig = require('./package.json');
    npmConfig = JSON.stringify(npmConfig, null, 2).replace(/-master/g, '');
    await writeFile('dist/package.json', npmConfig);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

// Lint all files
exports.lint = lint;

// export dist command
exports.dist = series(removeSolutions, removeMaster);
