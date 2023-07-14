import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import pkg from 'webpack';
const { webpack } = pkg;
import notifier from 'node-notifier';

import PATHS from '../paths.js';
import webpackConfig from '../webpack.config.js';
import { hmrEnabled } from '../config.js';

import pkg2 from 'browser-sync';
const browserSync = pkg2.create();

const bundler = webpack(webpackConfig);

let watchFiles = [PATHS.build.styles + '*.css', PATHS.build.html + '/*.html'];

if (!hmrEnabled) {
	watchFiles.push(PATHS.build.scripts + '*.js');
}

export default function server() {
	browserSync.init({
		server: {
			baseDir: './build',
			middleware: [
				webpackDevMiddleware(bundler, {
					publicPath: webpackConfig.output.publicPath,
					stats: { colors: true },
				}),
				webpackHotMiddleware(bundler),
			],
		},
		injectchanges: true,
		notify: false,
		open: false,
		port: 9000,
		logPrefix: 'Starter',
		files: watchFiles,
	});
}
