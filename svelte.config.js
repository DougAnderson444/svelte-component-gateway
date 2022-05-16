// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { default: true },
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'development' ? '' : '/svelte-component-gateway'
		},

		vite: {
			resolve: {
				alias: {
					'@douganderson444/svelte-component-gateway': path.resolve('src/lib')
				}
			},
			server: {
				fs: {
					strict: false
				}
			},
			// dont optimize the build while it's in pre-beta version, so we can troubleshoot in production too
			build: {
				rollupOptions: {
					plugins: [],
					output: {
						minifyInternalExports: false,
						compact: false,
						sourcemap: true
					}
				},
				minify: false,
				sourcemap: true,
				optimization: {
					minimize: false
				}
			},
			optimization: {
				minimize: false
			}
		}
	}
};

export default config;
