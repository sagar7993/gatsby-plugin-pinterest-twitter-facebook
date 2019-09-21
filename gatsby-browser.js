import { injectSocialScripts } from './src/utils';

exports.onRouteUpdate = (args, pluginOptions) => {
	injectSocialScripts(pluginOptions);
};