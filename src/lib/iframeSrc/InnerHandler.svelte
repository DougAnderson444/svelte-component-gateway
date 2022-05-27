<script>
	import { UPDATED } from './constants.js';

	export let offsetWidth;
	export let offsetHeight;

	let component;

	// <!-- Turn the string into actual javascript code -->
	// <!--   import (url) <- ObjectURL <- Blob         -->

	async function handleMessage(event) {
		const { esModule, props } = event.data;
		// <!-- type: 'text/javascript would normally come from response headers -->
		const blob = new Blob([esModule], { type: 'text/javascript' });
		const url = URL.createObjectURL(blob);

		import(url).then(function ({ default: App }) {
			if (component) component.$destroy();

			document.getElementById('app').innerHTML = '';
			component = new App({
				target: document.getElementById('app') || document.body, //
				props: { ...props }
			});

			// URL.revokeObjectURL(url) // memory management
			window.parent.postMessage(UPDATED, window.parent);
		});
	}
</script>

<svelte:window on:message={handleMessage} />

<div id="app" bind:offsetWidth bind:offsetHeight>
	<!-- Component will be mounted into here  -->
</div>
