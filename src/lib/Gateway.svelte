<script>
	import IFrame from './IFrame.svelte';
	// import srcdoc from './srcdoc/index.html?raw';
	import srcdoc from './srcdoc/bundled.html?raw';
	import { UPDATED } from './iframeSrc/constants.js';

	export let esModule;
	export let props;

	export let serializedSource;

	let iframe;

	$: esModule && update({ esModule, props });
	$: iframe && iframe.addEventListener('load', handleLoad);

	// Wait for the iframe to load, then configure it
	const handleLoad = async () => {
		window.addEventListener(
			'message',
			(event) => {
				if (iframe && event.data == UPDATED) {
					serializedSource = new XMLSerializer().serializeToString(iframe?.contentWindow.document);
				}
			},
			false
		);

		update({ esModule, props });
	};

	function update({ esModule, props }) {
		if (!iframe) return;
		iframe.contentWindow.postMessage({ esModule, props }, location.origin); // "*" origin wildcard
	}
</script>

<IFrame bind:iframe {srcdoc} {serializedSource} />
