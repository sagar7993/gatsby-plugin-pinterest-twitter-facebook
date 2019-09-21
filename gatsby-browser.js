const injectSocialScripts = require('./src/utils').default;

exports.onRouteUpdate = (args, pluginOptions) => {
	injectSocialScripts(pluginOptions);
};