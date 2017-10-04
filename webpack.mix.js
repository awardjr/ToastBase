let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 | For more documentation check out https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme
 */

mix.options({publicPath: 'public'});
//If you're not using font-awesome, remove the following
mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/sass/app.scss', 'public/css');

