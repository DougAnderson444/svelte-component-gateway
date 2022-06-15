# Svelte Component Gateway

Grabs a compiled Svelte component (ES Module) from the interwebs and mounts it so it to the DOM, so you can check it out, use it, and run your data (props) through it.

## Usage

Save a Svelte component to the internet (maybe using something like [Web3 Repl Deploy](https://douganderson444.github.io/web3-repl-deploy/)) then paste the URL for the resulting es module / Svelte Component into this gateway.

This gateway will render the component and add the props so you can check it out.

## TODO

- [x] Pass in props in a variable way
- [x] Pass props back to parent (to save them)
- [x] Pass default props to parent to capture schema

## iFrame TODO

- [x] [Sandbox](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) the iframe for untrusted code execution
- [x] Prevent fetch
- [x] Prevent XMLHttpRequest
- [x] Prevent WebSocket
- [x] Prevent EventSource
- [ ] Prevent adding iframes to the iframe
- [ ] Prevent href anchors with searchParams
- [ ] Prevent sanitize props as JSON objects only

## API

Use the Gateway in your mini-apps:

### Using Svelte to generate a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

```svelte
<script>
	import Gateway from '@douganderson444/svelte-component-gateway';

	// props
	export let count = 0;

	function handleChange(event) {
		console.log(`The count is now: `, event.detail.count);
	}
</script>

// YourApp.svelte

<Gateway esModule={ContactCard} props{{ firstName: 'Doug', lastname: 'Anderson' }} on:change={handleChange} />
```

### Using Vanilla JS ([see ref](https://svelte.dev/docs#run-time-client-side-component-api))

```js
// yourscript.js

import { Gateway } from 'svelte-component-gateway'

// fetch your esModule from the interwebs, [IPFS](https://docs.ipfs.io/concepts/ipfs-gateway/), or perhaps [Arweave](https://docs.arweave.org/developers/server/http-api)
const fetched = await fetch(url);
const ExampleComponent = await fetched.text();

const gateway = new Gateway({
    target: document.getElementById('gateway-element'),
	props: {
		esModule: ExampleComponent,
        // optional props
		// assuming ExampleComponent.svelte contains something like
		// `export let answer`:
        props: { answer: 42 } // we want the answer to be 42 instead of the default
})

gateway.$on('change',
    event => {
        // save them somewhere
        // defaults props will be emited on load
        console.log("The following properties changed: ", event.detail)
        }
)

<div id='gateway-element'></div>

```
