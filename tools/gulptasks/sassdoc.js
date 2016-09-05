module.exports = function (gulp, config, plugins, sassdoc) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Sassdoc  ------------------------------------------------------------------------------------------>"));
        
        var sassdocOptions = {
            dest: config.paths.sassdocDest,
            theme: 'neat'
        };

        var stream = sassdoc(sassdocOptions);

        gulp.src(config.paths.sass + "/**/*.scss")
            .pipe(stream)
            .on('end', function(){
                plugins.util.log("End of sassdoc parsing phase")
            })
            .resume();

        return stream.promise.then(function() {
            plugins.util.log('END of sassdoc processing phase');
        })

        // NOTE: Original implementation. had problems when driving reporting.
        // return gulp.src(config.paths.sass + "/**/*.scss")
        //            .pipe(sassdoc(sassdocOptions))
        //            .resume();
    };
};