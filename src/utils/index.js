const PINTEREST_SCRIPT_URL = 'https://assets.pinterest.com/js/pinit.js';
const TWITTER_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';

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
			const twitterContainer = document.querySelector(twitterOptions.containerSelector);
			const twitterFollowButton = `<a href="https://twitter.com/${twitterOptions.handle}?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="${(twitterOptions.showFollowerCount === true) ? 'true' : 'false'}" target="_blank" rel="noopenernoopener noreferrer nofollow">Follow @${twitterOptions.handle}</a>`;
			const twitterTimeline = `<a class="twitter-timeline" data-width="${(twitterOptions.width && typeof twitterOptions.width === 'number' && twitterOptions.width >= 200) ? twitterOptions.width : ''}" data-height="${(twitterOptions.height && typeof twitterOptions.height === 'number' && twitterOptions.height >= 200) ? twitterOptions.height : ''}" href="https://twitter.com/${twitterOptions.handle}" data-chrome="${(twitterOptions.noHeader === true) ? 'noheader' : ''} ${(twitterOptions.noFooter === true) ? 'nofooter' : ''} ${(twitterOptions.noBorders === true) ? 'noborders' : ''} ${(twitterOptions.noScrollbar === true) ? 'noscrollbar' : ''} ${(twitterOptions.transparent === true) ? 'transparent' : ''}" data-tweet-limit="${(twitterOptions.timelineTweetCount && typeof twitterOptions.timelineTweetCount === 'number' && twitterOptions.timelineTweetCount > 0) ? twitterOptions.timelineTweetCount : '1'}" target="_blank" rel="noopenernoopener noreferrer nofollow">@${twitterOptions.handle}'s Timeline</a>`;
			twitterContainer.innerHTML = `${(twitterOptions.showFollowButton ? twitterFollowButton : '')}${(twitterOptions.showTimeline ? twitterTimeline : '')}`;
			document.head.appendChild(script);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectFacebookScript = (facebookOptions) => {
	try {
		if (facebookOptions && facebookOptions.enable === true && facebookOptions.containerSelector && facebookOptions.containerSelector.length > 0 && document.querySelector(facebookOptions.containerSelector) && facebookOptions.profile && facebookOptions.profile.length > 0) {
			const facebookContainer = document.querySelector(facebookOptions.containerSelector);
			const facebookTimeline = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookOptions.profile}&tabs=${(facebookOptions.tabs && facebookOptions.tabs.length > 0) ? facebookOptions.tabs : 'timeline'}&width=${(facebookOptions.width && typeof facebookOptions.width === 'number' && facebookOptions.width >= 180 && facebookOptions.width <= 500) ? facebookOptions.width : ''}&height=${(facebookOptions.height && typeof facebookOptions.height === 'number' && facebookOptions.height >= 70) ? facebookOptions.height : ''}&small_header=${(facebookOptions.smallHeader === true) ? 'true' : 'false'}&adapt_container_width=${(facebookOptions.adaptContainerWidth === true) ? 'true' : 'false'}&hide_cover=${(facebookOptions.hideCover === true) ? 'true' : 'false'}&show_facepile=${(facebookOptions.showFacepile === true) ? 'true' : 'false'}" width="${(facebookOptions.width && typeof facebookOptions.width === 'number' && facebookOptions.width >= 180 && facebookOptions.width <= 500) ? facebookOptions.width : ''}" height="${(facebookOptions.height && typeof facebookOptions.height === 'number' && facebookOptions.height >= 70) ? facebookOptions.height : ''}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="${facebookOptions.profile}'s Facebook Timeline"></iframe>`
			facebookContainer.innerHTML += facebookTimeline;
		}
	} catch (error) {
		console.error(error);
	}
};

export const injectSocialScripts = (pluginOptions) => {
	setTimeout(() => {
		try {
			if (pluginOptions && pluginOptions.pinterest && pluginOptions.pinterest.enable) {
				injectPinterestScript(pluginOptions.pinterest);
			}
		} catch (error) {
			console.error(error);
		}
		try {
			if (pluginOptions && pluginOptions.twitter && pluginOptions.twitter.enable) {
				injectTwitterScript(pluginOptions.twitter);
			}
		} catch (error) {
			console.error(error);
		}
		try {
			if (pluginOptions && pluginOptions.facebook && pluginOptions.facebook.enable) {
				injectFacebookScript(pluginOptions.facebook);
			}
		} catch (error) {
			console.error(error);
		}
	}, (pluginOptions.delayTimer && typeof pluginOptions.delayTimer === 'number' && pluginOptions.delayTimer > 0) ? pluginOptions.delayTimer : 1000);
};

export default injectSocialScripts;