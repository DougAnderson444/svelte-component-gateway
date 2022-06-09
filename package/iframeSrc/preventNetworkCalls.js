// Block netowrk access to safely execute javascript on your data

globalThis.fetch = () => {
	console.log('Nulled out fetch');
	return { json: () => ({ result: 'no fetch, sorry' }) };
};

globalThis.XMLHttpRequest = class {
	constructor() {
		console.log('Nulled out XHR too');
	}
	open = () => {
		return null;
	};
	send = () => {
		return null;
	};
};

globalThis.WebSocket = null;

globalThis.EventSource = null;

async function fetch_something() {
	return await fetch(
		'https://web.scraper.workers.dev/?url=https://twitter.com/DougAnderson444/status/1441372368866320384&selector=p'
	);
}

// test it out like this:
async function xhr_something() {
	// create an XHR object
	const xhr = new XMLHttpRequest();

	// listen for `onload` event
	xhr.onload = () => {
		// process response
		if (xhr.status == 200) {
			console.log('XHR success!!');
			// parse JSON data
			const parsed = JSON.parse(xhr.response);
			console.log({ parsed });
			globalThis.postMessage({ output: parsed });
		} else {
			console.error('Error!');
		}
	};

	// create a `GET` request
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

	// send request
	xhr.send();
}

// globalThis.addEventListener('message', async (event) => {
// 	xhr_something();
// 	const response = await fetch_something();
// 	console.log('Fetch response: ', { response });
// 	const { result } = await response.json();
// 	console.log('Fetch result: ', { result });
// 	globalThis.postMessage({ output: result });
// });
