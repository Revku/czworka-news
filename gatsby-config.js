const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Czwórka News - Oficjalna strona redakcji`,
    description: `Gazetka szkolna "Czwórka News" pojawia się cyklicznie przez cały rok szkolny. Materiały w gazetce redagują uczniowie uczęszczający na zajęcia redakcyjne pod opieką pani Wioletty Szymonik. Umieszczają w niej informacje z życia szkoły, konkursy, wywiady oraz relacje z imprez i świąt w szkole. Rozwijają w ten sposób swoje zainteresowania, uczą się redagowania tekstów, współpracy w zespole i odpowiedzialności za powierzone zadania.`,
    twitterUsername: `@czworkanews`,
    image: `/icon.png`,
    siteUrl: `https://news.sp4lebork.pl`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'hygraph',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'hygraph',
        // Url to query from
        url: process.env.CMS_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
  ],
};
