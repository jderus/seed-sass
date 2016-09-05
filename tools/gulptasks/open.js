module.exports = function (gulp, config, plugins, path) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Open  ------------------------------------------------------------------------------------------>"));
        return gulp.src(path)
                   .pipe(plugins.open());
    };
};