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
- [ ] Prevent all encodings (base64, unicode) injections
- [ ] Prevent re-adding the fetch API (is this even possible?)
- [ ] Check for eval?

## API

Use the Gateway in your mini-apps:

### Using Svelte to generate a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

```svelte
<script>
	import { createEventDispatcher } from 'svelte';

	// props
	export let count = 0;

	const dispatch = createEventDispatcher();

	// emits count to consumers of
	// <Gateway on:change={handleCountChange} />
	function handleChange(event) {
		dispatch(CHANGE, count);
	}
</script>

// YourApp.svelte import {Gateway} from 'svelte-component-gateway' // emit props on the CONSTANTS. CHANGE
variable

<Gateway esModule={ExampleComponent} on:change={handleChange} />
```

### Using Vanilla JS

```js
// yourscript.js

import { ExampleComponent } from ' some-Component-library'
import { Gateway, CHANGE } from 'svelte-component-gateway'

const gateway = new Gateway({
    target: document.getElementById('app'),
	props: {
		// assuming App.svelte contains something like
		// `export let answer`:
		esModule: ExampleComponent
})

gateway.$on('change',
    event => {
        // save them somewhere?
        console.log("The following properties changed: ", event.detail)
        }
)

```
