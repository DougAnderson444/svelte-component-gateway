// fs read sync bundled.html
import fs from 'fs';
const filename = 'srcdoc/bundled.html';
const file = fs.readFileSync(`./package/Gateway.svelte`, 'utf-8');
const str = fs.readFileSync(`./src/lib/${filename}`, 'utf-8');

// base64URL encode the str
const encoded = Buffer.from(str).toString('base64');

let newFile = file.replace(
	`import srcdoc from './${filename}?raw'`,
	`const srcdoc64 = '${encoded}';\n\tconst srcdoc = atob(srcdoc64);\n\tconsole.log({ srcdoc });`
);

// write new file to ./package/Gateway.svelte
fs.writeFileSync('./package/Gateway.svelte', newFile);
