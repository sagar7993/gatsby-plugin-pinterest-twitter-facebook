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
			document.getElementsByTagName('head')[0].appendChild(script);
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
			twitterContainer.insertAdjacentHTML('beforeend', twitterFollowButton);
			twitterContainer.insertAdjacentHTML('beforeend', twitterTimeline);
			document.getElementsByTagName('head')[0].appendChild(script);
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
			const facebookContainer = document.querySelector(facebookOptions.containerSelector);
			const facebookTimeline = `<div class="fb-page" data-href="https://www.facebook.com/${facebookOptions.profile}/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
				<blockquote cite="https://www.facebook.com/${facebookOptions.profile}/" class="fb-xfbml-parse-ignore">
					<a href="https://www.facebook.com/${facebookOptions.profile}/">${facebookOptions.profile}</a>
				</blockquote>
			</div>`
			facebookContainer.insertAdjacentHTML('beforeend', facebookTimeline);
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	} catch (error) {
		console.error(error);
	}
};

const injectSocialScripts = (pluginOptions) => {
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
	}, 2000);
}

exports.onRouteUpdate = (args, pluginOptions) => {
	injectSocialScripts(pluginOptions);
};