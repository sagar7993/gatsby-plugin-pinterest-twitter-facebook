# gatsby-plugin-pinterest-twitter-facebook
Load the Pinterest, Twitter and Facebook JavaScript to let users save images to their Pinterest boards on image hover, load Twitter timeline and follow button, and load Facebook timeline and like button

[![npm](https://img.shields.io/npm/dt/gatsby-plugin-pinterest-twitter-facebook.svg)](https://www.npmjs.com/package/gatsby-plugin-pinterest-twitter-facebook)
[![npm](https://img.shields.io/npm/v/gatsby-plugin-pinterest-twitter-facebook.svg)](https://www.npmjs.com/package/gatsby-plugin-pinterest-twitter-facebook)
[![NpmLicense](https://img.shields.io/npm/l/gatsby-plugin-pinterest-twitter-facebook.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues-raw/sagar7993/gatsby-plugin-pinterest-twitter-facebook.svg)](https://github.com/sagar7993/gatsby-plugin-pinterest-twitter-facebook/issues)

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
      pinterest: {
        // Set this to false if you want to disable pinterest
        enable: true, // default
        // Set this to true to display a larger size button
        tall: true, // default
        // Set to true to hide the pinterest text and display only a round P button
        round: false // default
      }
      twitter: {
        // Set this to false if you want to disable twitter
        enable: true, // default
        // Set this to the querySelector string of the container element where you want to display twitter timeline and follow button
        // If you do not define this, twitter timeline and follow button will not work
        // Fox example: `.twitter-container` or `#.twitter-timeline`
        containerSelector: null,
        // Set this to the twitter handle you want to use
        // Do not include `@` symbol here
        // If you do not define this, twitter timeline and follow button will not work
        handle: null,
        // Set this to false if you do not want to show follow button
        showFollowButton: true // default
        // Set this to false if you do not want to show timeline
        showTimeline: true // default
      }
      facebook: {
        // Set this to false if you want to disable facebook
        enable: true, // default
        // Set this to the querySelector string of the container element where you want to display facebook timeline and like button
        // If you do not define this, facebook timeline and like button will not work
        // Fox example: `.facebook-container` or `#.facebook-timeline`
        containerSelector: null,
        // Set this to the facebook profile or facebook page name you want to use
        // If you do not define this, facebook timeline and like button will not work
        // Do not include `@` symbol here
        profile: null,
        // Set this to false if you do not want to show like button
        showLikeButton: true // default
        // Set this to false if you do not want to show timeline
        showTimeline: true // default
      }
    }
  }
];
```

## Pinterest

Check [Pinterest Docs](https://developers.pinterest.com/docs/widgets/save/) for more customization options and examples.

### Note

If you don't want people to save things to Pinterest from your website, just paste this code into the <head> section of any page on your site:

```<meta name="pinterest" content="nopin" />```

When someone tries to save things to Pinterest from your site, they'll see: "This site doesn't allow saving to Pinterest. Please contact the owner with any questions. Thanks for visiting!"

Visit [Pinterest Docs](https://help.pinterest.com/en/business/article/prevent-saves-to-pinterest-from-your-site) for more customization options and examples.

## Contribute

Fork this repo and make a PR!
