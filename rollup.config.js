/**
 * This config is used to generate the srcdoc for the iframe
 * It needs to be build independently of the rest of the sveltekit app
 * Thus the different file.
 * We *could* build this in to svelte.config.js but it's easier to separate it out here
 * as each config has separetly different entry file
 */
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import fs from 'fs';
import path from 'path';

const production = !process.env.ROLLUP_WATCH;

function inlineSvelte(template, dest) {
	return {
		name: 'Svelte Inliner',
		generateBundle(opts, bundle) {
			const file = path.parse(opts.file).base;
			const code = bundle[file].code;

			const output = fs.readFileSync(template, 'utf-8');
			// svelte has some code in script tags that it passes back and for
			// these need to be escaped when used in the head <script> tags
			code.replace('</scri', `<\/scri`);

			// then this escaped code can be inserted into our template placeholder
			bundle[file].code = output.replace('%%script%%', () => code);
		}
	};
}

const generateConfig = (input, filename) => ({
	input,
	output: [
		{
			sourcemap: false,
			format: 'iife',
			name: 'app',
			file: `src/lib/srcdoc/${filename}`
		},
		{
			sourcemap: false,
			format: 'iife',
			name: 'app',
			file: `static/srcdoc/${filename}`
		}
	],
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},
			emitCss: false
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		inlineSvelte('./src/lib/iframeSrc/template.html'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		// when terser isn't run, for some reason my code back slash escapes fail
		// so, always terse
		terser()
	],
	watch: {
		clearScreen: false
	}
});

export default [
	generateConfig('src/lib/iframeSrc/networkAllowed.js', 'networkAllowed.html'),
	generateConfig('src/lib/iframeSrc/networkIsolated.js', 'networkIsolated.html')
];
