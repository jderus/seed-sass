module.exports = function(){
    // this object has all our configuration settings
    var config = {};

    config.ENVIRONMENT = {
        DEV:    './dist/dev/',
        PROD:   './dist/prod/'
    }

    config.paths = {
        webroot: "./app/"
    };
   
    config.paths.gulptasks      = "./tools/gulptasks/";
    config.paths.sass           = "./sass/";
    config.paths.sassDest       = config.paths.webroot + "styles/";
    config.paths.sassdocDest    = "./docs/developer/sass/";
    config.paths.js             = config.paths.webroot + "**/*.js";
    config.paths.minJs          = config.paths.webroot + "**/*.min.js";
    config.paths.mapJs          = config.paths.webroot + "**/*.js.map";
    config.paths.css            = config.paths.webroot + "styles/**";
    config.paths.minCss         = config.paths.webroot + "**/*.min.css";

    return config;
};