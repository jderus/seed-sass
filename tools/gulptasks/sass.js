module.exports = function (gulp, config, plugins) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Sass  --------------------------------------------------------------------------------------------->"));
        
        return gulp.src(config.paths.sass + '*.scss')
                   .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
                   .pipe(gulp.dest(config.paths.sassDest));
    };
};