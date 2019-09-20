const PINTEREST_SCRIPT_URL = 'https://assets.pinterest.com/js/pinit.js';
const TWITTER_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';
const FACEBOOK_SCRIPT_URL = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0';

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
			document.getElementsByTagName('head')[0].appendChild(s);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectTwitterScript = (twitterOptions) => {
	try {
		if (twitterOptions && twitterOptions.enable && twitterOptions.containerSelector && document.querySelector(twitterOptions.containerSelector) && twitterOptions.handle) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.setAttribute('src', TWITTER_SCRIPT_URL);
			injectPreloadLink(TWITTER_SCRIPT_URL);
			const twitterContainer = document.querySelector(twitterOptions.containerSelector);
			const twitterFollowButton = `<a href="https://twitter.com/${twitterOptions.handle}?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">Follow @${twitterOptions.handle}</a>`;
			const twitterTimeline = `<a class="twitter-timeline" href="https://twitter.com/${twitterOptions.handle}" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="1">`;
			twitterContainer.appendChild(twitterFollowButton);
			twitterContainer.appendChild(twitterTimeline);
			document.getElementsByTagName('head')[0].appendChild(s);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectFacebookScript = (facebookOptions) => {
	try {
		if (facebookOptions && facebookOptions.enable && facebookOptions.containerSelector && facebookOptions.profile) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.setAttribute('src', FACEBOOK_SCRIPT_URL);
			injectPreloadLink(FACEBOOK_SCRIPT_URL);
			const facebookLikeButton = `<a href="https://facebook.com/${facebookOptions.profile}?ref_src=twsrc%5Etfw" class="facebook-follow-button" data-show-count="true">Follow @${facebookOptions.profile}</a>`;
			const facebookTimeline = `<a class="facebook-timeline" href="https://facebook.com/${facebookOptions.profile}" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="1">`;
			document.head.appendChild(res);
			document.getElementsByTagName('head')[0].appendChild(s);
		}
	} catch (error) {
		console.error(error);
	}
};

exports.onClientEntry = (_args, pluginOptions) => {
	try {
		if (pluginOptions && pluginOptions.pinterest && pluginOptions.pinterest.enable) {
			injectPinterestScript(pluginOptions.pinterest);
		}
		if (pluginOptions && pluginOptions.twitter && pluginOptions.twitter.enable) {
			injectTwitterScript(pluginOptions.twitter);
		}
		if (pluginOptions && pluginOptions.facebook && pluginOptions.facebook.enable) {
			injectFacebookScript(pluginOptions.facebook);
		}
	} catch (error) {
		console.error(error);
	}
};