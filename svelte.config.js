// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import path from 'path';
import { spawn } from 'child_process';

function toExit() {
	if (server) server.kill(0);
}

// -c : compile only
// -cw compile and watch for file changes during development
const args = process.env.NODE_ENV === 'development' ? '-cw' : '-c';

let server = spawn('rollup', [args], {
	stdio: ['ignore', 'inherit', 'inherit'],
	shell: true
});

process.on('SIGTERM', toExit);
process.on('exit', toExit);

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
		package: {
			// exports: (file) => file == 'index.js',
			// files: (file) => file == 'ComponentMounter.svelte'
		},
		vite: {
			// plugins:[{
			// 	inlineSvelte('./src/srcdoc/generated.html'),
			//  	enforce: 'pre' // https://vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering
			// }],
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
