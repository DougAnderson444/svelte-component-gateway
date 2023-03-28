// fs read sync bundled.html
import fs from 'fs';

const tupleList = [
	['NetworkIsolated.svelte', 'networkIsolated.html'],
	['NetworkAllowed.svelte', 'networkAllowed.html']
];

const outDir = 'dist';

// for each tuple, encode the srcdoc
tupleList.forEach((tuple) => {
	encode(tuple[0], tuple[1]);
});

export function encode(componentName, filename) {
	const file = fs.readFileSync(`./${outDir}/${componentName}`, 'utf-8');
	const str = fs.readFileSync(`./src/lib/srcdoc/${filename}`, 'utf-8');

	// base64URL encode the str
	const encoded = Buffer.from(str).toString('base64');

	let newFile = file.replace(
		`import srcdoc from './srcdoc/${filename}?raw'`,
		`const srcdoc64 = '${encoded}';\n\tconst srcdoc = atob(srcdoc64)`
	);

	// write new file to output dir
	fs.writeFileSync(`./${outDir}/${componentName}`, newFile);
}
