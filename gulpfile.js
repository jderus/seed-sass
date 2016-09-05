var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var config  = require("./tools/gulptasks/config.js")();     // all of our configuration vars
var del     = require('del');
var sassdoc = require('sassdoc');


// Use a function to get tasks defined in separate files and modules
function getFileTask(task, param) {
    if (param == undefined) {  return require(config.paths.gulptasks + task)(gulp, config, plugins); }
    else { return require(config.paths.gulptasks + task)(gulp, config, plugins, param); }
}

// Gulp FileTasks ----------------------------------------------------------------------------------------------
gulp.task('clean'   , getFileTask('clean', del));
gulp.task('sass'    , getFileTask('sass'));
gulp.task('sassdoc' , getFileTask('sassdoc', sassdoc));

// Gulp Dependent FileTasks ------------------------------------------------------------------------------------
// slight bug here with timing of sassdoc. ---------------------------------------------------------------------
gulp.task('sassdocreport', ['sassdoc'], getFileTask('open', config.paths.sassdocDest + "index.html" ));

