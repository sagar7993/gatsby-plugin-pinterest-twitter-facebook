const PINTEREST_SCRIPT_URL = 'https://assets.pinterest.com/js/pinit.js';
const TWITTER_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';
const FACEBOOK_SCRIPT_URL = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0';

let injectSocialScriptsCounter = 0;

const injectPreloadLink = (url) => {
	try {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'script';
		link.href = url;
		document.head.appendChild(link);
	} catch (error) {
		console.error(error);
	}
}

const injectPinterestScript = (pinterestOptions) => {
	try {
		if (pinterestOptions && pinterestOptions.enable) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.setAttribute('data-pin-hover', 'true');
			if (pinterestOptions.tall) {
				script.setAttribute('data-pin-tall', 'true');
			}
			if (pinterestOptions.round) {
				script.setAttribute('data-pin-round', 'true');
			}
			script.setAttribute('src', PINTEREST_SCRIPT_URL);
			injectPreloadLink(PINTEREST_SCRIPT_URL);
			document.head.appendChild(script);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectTwitterScript = (twitterOptions) => {
	try {
		if (twitterOptions && twitterOptions.enable === true && twitterOptions.containerSelector && twitterOptions.containerSelector.length > 0 && document.querySelector(twitterOptions.containerSelector) && twitterOptions.handle && twitterOptions.handle.length > 0) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.setAttribute('src', TWITTER_SCRIPT_URL);
			injectPreloadLink(TWITTER_SCRIPT_URL);
			document.head.appendChild(script);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectTwitterContainer = (twitterOptions) => {
	try {
		if (twitterOptions && twitterOptions.enable === true && twitterOptions.containerSelector && twitterOptions.containerSelector.length > 0 && document.querySelector(twitterOptions.containerSelector) && twitterOptions.handle && twitterOptions.handle.length > 0) {
			const twitterContainer = document.querySelector(twitterOptions.containerSelector);
			const twitterFollowButton = `<a href="https://twitter.com/${twitterOptions.handle}?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="${(twitterOptions.showFollowerCount === true) ? 'true' : 'false'}" target="_blank" rel="noopenernoopener noreferrer nofollow" title="${twitterOptions.handle}'s Twitter Follow Button">Follow @${twitterOptions.handle}</a>`;
			const twitterTimeline = `<a href="https://twitter.com/${twitterOptions.handle}" class="twitter-timeline" data-width="${(twitterOptions.width && typeof twitterOptions.width === 'number' && twitterOptions.width >= 200) ? twitterOptions.width : ''}" data-height="${(twitterOptions.height && typeof twitterOptions.height === 'number' && twitterOptions.height >= 200) ? twitterOptions.height : ''}" data-chrome="${(twitterOptions.noHeader === true) ? 'noheader' : ''} ${(twitterOptions.noFooter === true) ? 'nofooter' : ''} ${(twitterOptions.noBorders === true) ? 'noborders' : ''} ${(twitterOptions.noScrollbar === true) ? 'noscrollbar' : ''} ${(twitterOptions.transparent === true) ? 'transparent' : ''}" data-tweet-limit="${(twitterOptions.timelineTweetCount && typeof twitterOptions.timelineTweetCount === 'number' && twitterOptions.timelineTweetCount > 0) ? twitterOptions.timelineTweetCount : '1'}" target="_blank" rel="noopenernoopener noreferrer nofollow" title="${twitterOptions.handle}'s Twitter Timeline">Follow @${twitterOptions.handle}</a>`;
			twitterContainer.innerHTML = `${(twitterOptions.showFollowButton ? twitterFollowButton : '')}${(twitterOptions.showTimeline ? twitterTimeline : '')}`;
			if (window.twttr && window.twttr.widgets && window.twttr.widgets.load) {
				window.twttr.widgets.load();
			}
		}
	} catch (error) {
		console.error(error);
	}
}

const injectFacebookScript = (facebookOptions) => {
	try {
		if (facebookOptions && facebookOptions.enable === true && facebookOptions.containerSelector && facebookOptions.containerSelector.length > 0 && document.querySelector(facebookOptions.containerSelector) && facebookOptions.profile && facebookOptions.profile.length > 0) {
			const facebookRoot = document.createElement('div');
			facebookRoot.id = 'fb-root';
			const gatsbyContainer = document.getElementById('___gatsby');
			if (gatsbyContainer) {
				gatsbyContainer.prepend(facebookRoot);
			}
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.setAttribute('src', FACEBOOK_SCRIPT_URL);
			injectPreloadLink(FACEBOOK_SCRIPT_URL);
			document.head.appendChild(script);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectFacebookContainer = (facebookOptions) => {
	try {
		if (facebookOptions && facebookOptions.enable === true && facebookOptions.containerSelector && facebookOptions.containerSelector.length > 0 && document.querySelector(facebookOptions.containerSelector) && facebookOptions.profile && facebookOptions.profile.length > 0) {
			const facebookContainer = document.querySelector(facebookOptions.containerSelector);
			const facebookTimeline = `<div class="fb-page" data-href="https://www.facebook.com/${facebookOptions.profile}/" data-tabs="${(facebookOptions.tabs && facebookOptions.tabs.length > 0) ? facebookOptions.tabs : 'timeline, events, messages'}" data-width="${(facebookOptions.width && typeof facebookOptions.width === 'number' && facebookOptions.width >= 180 && facebookOptions.width <= 500) ? facebookOptions.width : ''}" data-height="${(facebookOptions.height && typeof facebookOptions.height === 'number' && facebookOptions.height >= 70) ? facebookOptions.height : ''}" data-small-header="${(facebookOptions.smallHeader === true) ? 'true' : 'false'}" data-adapt-container-width="${(facebookOptions.adaptContainerWidth === true) ? 'true' : 'false'}" data-hide-cover="${(facebookOptions.hideCover === true) ? 'true' : 'false'}" data-show-facepile="${(facebookOptions.showFacepile === true) ? 'true' : 'false'}"><blockquote cite="https://www.facebook.com/${facebookOptions.profile}/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/${facebookOptions.profile}/" target="_blank" rel="noopenernoopener noreferrer nofollow" title="${facebookOptions.profile}'s Facebook Page">Follow ${facebookOptions.profile}</a></blockquote></div>`;
			facebookContainer.innerHTML = facebookTimeline;
			if (window.FB && window.FB.init) {
				FB.init({
					status: true,
					xfbml: true,
					version: 'v4.0'
				});
			}
		}
	} catch (error) {
		console.error(error);
	}
}

export const injectSocialScripts = (pluginOptions) => {
	setTimeout(() => {
		if (injectSocialScriptsCounter === 0) {
			if (pluginOptions && pluginOptions.pinterest && pluginOptions.pinterest.enable) {
				injectPinterestScript(pluginOptions.pinterest);
			}
			if (pluginOptions && pluginOptions.twitter && pluginOptions.twitter.enable) {
				injectTwitterScript(pluginOptions.twitter);
				injectTwitterContainer(pluginOptions.twitter);
			}
			if (pluginOptions && pluginOptions.facebook && pluginOptions.facebook.enable) {
				injectFacebookContainer(pluginOptions.facebook);
				injectFacebookScript(pluginOptions.facebook);
			}
			injectSocialScriptsCounter++;
		} else {
			if (pluginOptions && pluginOptions.twitter && pluginOptions.twitter.enable) {
				injectTwitterContainer(pluginOptions.twitter);
			}
			if (pluginOptions && pluginOptions.facebook && pluginOptions.facebook.enable) {
				injectFacebookContainer(pluginOptions.facebook);
			}
		}
	}, (pluginOptions.delayTimer && typeof pluginOptions.delayTimer === 'number' && pluginOptions.delayTimer > 0) ? pluginOptions.delayTimer : 1000);
};

export default injectSocialScripts;