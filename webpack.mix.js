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
//If you're not using font-awesome, or only using some times, comment out the ones you're not using before building
mix.scripts(['resources/js/app.js', 'node_modules/@fortawesome/fontawesome/index.js',
                                    /*'node_modules/@fortawesome/fontawesome-free-regular/index.js',*/
                                    'node_modules/@fortawesome/fontawesome-free-solid/index.js', 
                                    'node_modules/@fortawesome/fontawesome-free-brands/index.js'], 'public/js/app.js');
mix.sass('resources/sass/app.scss', 'public/css');

