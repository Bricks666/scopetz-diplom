/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { babel } from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		cors: true,
		hmr: true,
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'http://localhost:5001/',
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		devSourcemap: true,
	},
	assetsInclude: ['*.woff2', '*.png', '*.jpg'],
	plugins: [
		react(),
		babel({
			babelrc: true,
			configFile: true,
			babelHelpers: 'bundled',
			browserslistConfigFile: true,
			extensions: ['.ts', '.tsx'],
		}),
		splitVendorChunkPlugin()
	],
});
