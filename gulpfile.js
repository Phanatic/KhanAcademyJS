'use strict';

var gulp = require('gulp'),
  argv = require('yargs').argv,
  shell = require('shelljs'),
  gutil = require('gulp-util'),
  mocha = require('gulp-mocha'),
  filter = require('gulp-filter'),
  header = require('gulp-header'),
  eslint = require('gulp-eslint'),
  beautify = require('gulp-jsbeautifier'),
  _ = require('lodash');


// Task: lint-and-beautify
// Performs in-place linting & beautification of the *src* files. We perform
// this in-place so that the checked in code is clean and consistent.
gulp.task('lint-and-beautify', function () {
  // Beautify Config: src/.jsbeautifyrc
  // Linting Config: src/.estlintrc
  return gulp
    .src(['**/*.js', '!node_modules/**/*.js', '!coverage/**/*'])
    .pipe(beautify({
      config: '.jsbeautifyrc',
      mode: argv['fail-on-beautify'] ? 'VERIFY_ONLY' : 'VERIFY_AND_WRITE'
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['lint-and-beautify']);
