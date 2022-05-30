<script>
	import IFrame from './IFrame.svelte';
	// import srcdoc from './srcdoc/index.html?raw';
	import srcdoc from './srcdoc/bundled.html?raw';
	import { CHANGE } from './iframeSrc/constants.js';
	import { connectToChild } from 'penpal';
	import { createEventDispatcher } from 'svelte';

	export let esModule; // TODO: Handle error if not found
	export let props; // the consumer of this <Gateway bind:props /> component should bind the props to get updates
	export let serializedSource;

	let iframe;
	let child; // iframe child, using penpal library

	const dispatch = createEventDispatcher();

	// this fires when props change; emits an event to update any listeners consuming this compiled component
	$: if (props) dispatch(CHANGE, props);

	// $: esModule && load({ esModule, props });
	$: iframe && iframe.addEventListener('load', handleLoad);

	// Wait for the iframe to load, then configure it
	const handleLoad = async () => {
		if (!esModule) throw new Error('Missing esModule');

		// This is where the magic begins.
		const connection = connectToChild({
			// The iframe to which a connection should be made.
			iframe,
			// Methods the parent is exposing to the iframe child.
			methods: {
				updateProps(newProps) {
					props = { ...props, ...newProps }; // assign the props to the props object, overwriting as necessary
				},
				setSerializedSource() {
					// alternatively, we could pass the content in through an argument
					// but this way we can check up on untrusted code
					serializedSource = new XMLSerializer().serializeToString(iframe?.contentWindow.document);
				}
			}
		});

		child = await connection.promise;
		child.loadEsModuleComponent({ esModule, props });
	};
</script>

<IFrame bind:iframe {srcdoc} {serializedSource} />
