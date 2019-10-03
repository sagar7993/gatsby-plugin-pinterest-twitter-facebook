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
      // Value should be in milliseconds
      delayTimer: 1000 // default
      pinterest: {
        // Set this to false if you want to disable pinterest
        enable: true, // default
        // Set this to true to display a larger size button
        tall: true, // default
        // Set this to true to hide the pinterest text and display only a round 'P' button
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
        // The pixel width of the plugin as a number
        // Do not include units such as 'px', 'rem', '%' etc here
        // Minimum allowed value is 220
        // If you leave this as null, then the widget will try to occupy all available container width
        width: null, // default
        // The pixel height of the plugin as a number
        // Do not include units such as 'px', 'rem', '%' etc here
        // Minimum allowed value is 200
        // If you leave this as null, then the widget will try to occupy all available container height
        height: null, // default
        // Hides the timeline header. Implementing sites must add their own Twitter attribution, link to the source timeline, and comply with other Twitter display requirements.
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
        // The pixel width of the plugin as a number
        // Do not include units such as 'px', 'rem', '%' etc here
        // Minimum allowed value is 180 and Maximum allowed value is 500
        // If you leave this as null, the plugin will try to occupy all available container width
        width: null, // default
        // The pixel height of the plugin as a number
        // Do not include units such as 'px', 'rem', '%' etc here
        // Minimum allowed value is 70
        // If you leave this as null, the plugin will try to occupy all available container height
        height: null, // default
        // Tabs to render i.e. timeline, events, messages. Use a comma-separated list to add multiple tabs, i.e. timeline, events.
        tabs: 'timeline, events, messages', // default
        // Hide cover photo in the header
        hideCover: false, // default
        // Show profile photos when friends like this, i.e. if you are logged in to Facebook, it will show the photos of your friends who have liked this page
        showFacepile: true, // default
        // Use the small header instead, i.e show a smaller cover photo
        smallHeader: false, // default
        // Try to fit inside the container width on page load
        // If the width of the parent element is bigger than the Page plugin's width it will maintain the value defined in width
        // No Dynamic Resizing - If you want to adjust the plugin's width on window resize, you manually need to rerender the plugin.
        adaptContainerWidth: true // default
      }
    }
  }
];
```

## Pinterest

- This plugin will add the Pinterest Save button on ALL images. To exclude any specific image, just add the following data attribute to your image HTML tag

    ```<img src={{ImageSource}} data-pin-nopin="true" />```

- If you don't want people to save things to Pinterest from your website, just paste this code into the <head> section of any page on your site:

    ```<meta name="pinterest" content="nopin" />```
    
    When someone tries to save things to Pinterest from your site, they'll see: "This site doesn't allow saving to Pinterest. Please contact the owner with any questions. Thanks for visiting!"

    Check out this Pinterest [article](https://help.pinterest.com/en/business/article/prevent-saves-to-pinterest-from-your-site) for more information.

    *P.S. If this is the behaviour you want, you probably shouldn't insert the Pinterest SDK on your page in the first place.*

Check out [Pinterest Docs](https://developers.pinterest.com/docs/widgets/save/) for more customization options and examples.

## Twitter

Check out [Twitter Docs](https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview) for more customization options and examples.

## Facebook

Check out [Facebook Docs](https://developers.facebook.com/docs/plugins/page-plugin/) for more customization options and examples.

### Note

This plugin has certain accessibility related features built-in, such as adding title tag to iframes, alt tag to images etc. so that the accessibility score of the lighthouse audit of your website is not affected. If you feel there's room for improvement, feel free to contribute.

## Contribute

Fork this repo and make a PR.
