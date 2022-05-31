<script>
	import IFrame from './IFrame.svelte';
	import srcdoc from './srcdoc/bundled.html?raw';
	import { CHANGE } from './iframeSrc/constants.js';
	import { createEventDispatcher } from 'svelte';

	export let esModule; // TODO: Handle error if not found
	export let props; // the consumer of this <Gateway bind:props /> component should bind the props to get updates
	export let rendered;

	let iframe;

	const dispatch = createEventDispatcher();

	// this fires when props change; emits an event to update any listeners consuming this compiled component
	$: if (props) dispatch(CHANGE, props);

	$: iframe && iframe.addEventListener('load', handleLoad);

	// Wait for the iframe to load, then configure it
	async function handleLoad() {
		if (!esModule) throw new Error('Missing esModule');

		const channel = new MessageChannel();

		channel.port1.onmessage = (e) => {
			props = { ...props, ...e.data }; // update props on any reply from child
			rendered = true;
		};

		iframe.contentWindow.postMessage(
			{ esModule, props }, // push the details to loadEsModuleComponent({ esModule, props }) in the iframe
			'*', // there's only 1 contentWindow on the iframe so it' safe to use '*' as origin
			[channel.port2]
		); // enables the iframe to send messages containing prop updates back to the parent
	}
</script>

<IFrame bind:iframe {srcdoc} {rendered} />
