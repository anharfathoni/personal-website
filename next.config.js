const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

// module.exports = withCSS(withSass({
//   /* config options here */
// }))

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
        handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImagesInDev: true
      }
    ],

    // your other plugins here
    [withCSS],
    [withSass]
  ]
  ,
  {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          // If you want to enable sharp support:
          // adapter: require('responsive-loader/sharp')
        }
      });

      return config;
    }
  }
);
