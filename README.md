# gatsby-plugin-pinterest
Load the Pinterest JavaScript to let users Save images to their boards on hover :pushpin:

[![npm](https://img.shields.io/npm/dt/gatsby-plugin-pinterest-twitter-facebook.svg)](https://www.npmjs.com/package/gatsby-plugin-pinterest-twitter-facebook)
[![npm](https://img.shields.io/npm/v/gatsby-plugin-pinterest-twitter-facebook.svg)](https://www.npmjs.com/package/gatsby-plugin-pinterest-twitter-facebook)
[![NpmLicense](https://img.shields.io/npm/l/gatsby-plugin-pinterest-twitter-facebook.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues-raw/sagar7993/gatsby-plugin-pinterest.svg)](https://github.com/sagar7993/gatsby-plugin-pinterest-twitter-facebook/issues)

## Install

In your Gatsby project directory, run:

`npm install --save gatsby-plugin-pinterest-twitter-facebook`

## Activate

Declare the plugin in your `gatsby-config.js`:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-pinterest-twitter-facebook`,
    options: {
      // Set to true to display a bigger button
      tall: true, // default
      // Set to true to hide the text and display only a round P button
      round: false // default
    }
  }
];
```

## Contribute

Fork this repo and make a PR!
