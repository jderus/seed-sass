module.exports = function (gulp, config, plugins, del) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Clean  --------------------------------------------------------------------------------------------->"));
        
        del([config.paths.css]);
        del([config.paths.js]);
        del([config.paths.mapJs]);
    };
};