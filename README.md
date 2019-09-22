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
      // Use this to control how long you want this plugin to wait before initializing the Facebook and Twitter scripts
      // By default, this plugin will wait 1 second before initializing the social widgets to ensure that the page loads and the container elements for these widgets are created in the DOM
      delayTimer: 1000 // default
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
        handle: null, // default
        // Set this to false if you do not want to show follow button
        showFollowButton: true, // default
        // Set this to false if you do not want to show timeline
        showTimeline: true, // default
        // Set this to false if you do not want to show followers count
        // This only applies if `showLikeButton` is set to true
        showFollowerCount: true, // default
        // Set this to the number of most recent tweets you want to display in the timeline
        // This only applies if `showTimeline` is set to true
        timelineTweetCount: 1, // default
        //	Hides the timeline header. Implementing sites must add their own Twitter attribution, link to the source timeline, and comply with other Twitter display requirements.
        noHeader: true, // default
        // Hides the timeline footer and Tweet composer link, if included in the timeline widget type.
        noFooter: true, // default
        // Removes all borders within the widget including borders surrounding the widget area and separating Tweets.
        noBorders: true, // default
        // Crops and hides the main timeline scrollbar, if visible. Please consider that hiding standard user interface components can affect the accessibility of your website.
        noScrollbar: true, // default
        // Removes the widget’s background color.
        transparent: true // default
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
        profile: null, // default
        // The pixel width of the plugin. Min. is 180 & Max. is 500
        width: 340, // default
        // The pixel height of the plugin. Min. is 70
        height: 500, // default
        // Tabs to render i.e. timeline, events, messages. Use a comma-separated list to add multiple tabs, i.e. timeline, events.
        tabs: 'timeline', // default
        // Hide cover photo in the header
        hideCover: false, // default
        // Show profile photos when friends like this
        showFacepile: true, // default
        // Use the small header instead
        smallHeader: false, // default
        // Try to fit inside the container width
        adaptContainerWidth: true // default
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

Fork this repo and make a PR.
