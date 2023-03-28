import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
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
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			'@douganderson444/svelte-component-gateway': path.resolve('src/lib')
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: '/svelte-component-gateway' // process.env.NODE_ENV === 'development' ? '' : './' //
		}
	}
};

export default config;
