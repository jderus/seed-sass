module.exports = function (gulp, config, plugins, sassdoc) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Sassdoc  ------------------------------------------------------------------------------------------>"));
        
        var sassdocOptions = {
            dest: config.paths.sassdocDest
        };

        return gulp.src(config.paths.sass + "/**/*.scss")
                   .pipe(sassdoc(sassdocOptions))
                   .resume();
    };
};