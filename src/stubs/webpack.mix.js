let mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/scss/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [
      require('postcss-import')(),
      require('tailwindcss')('./tailwind.js'),
      require('postcss-nesting')(),
    ],
  })
  .purgeCss()

if (mix.inProduction()) {
  mix.version()
}
