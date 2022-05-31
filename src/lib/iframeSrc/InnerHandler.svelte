<script>
	import { onDestroy } from 'svelte';
	import './preventNetworkCalls.js';

	export let offsetWidth;
	export let offsetHeight;

	let component; // the esModule component to be mounted in this gateway
	let url;
	let reply;

	async function handleMessage(event) {
		const { esModule, props } = event.data;
		reply = (resp) => {
			event.ports[0].postMessage(resp);
		};
		loadEsModuleComponent({ esModule, props });
	}

	async function loadEsModuleComponent({ esModule, props }) {
		const blob = new Blob([esModule], { type: 'text/javascript' });
		url = URL.createObjectURL(blob);

		import(url).then(function ({ default: App }) {
			if (!App) return;
			if (component) component.$destroy();

			document.getElementById('app').innerHTML = '';
			component = new App({
				target: document.getElementById('app') || document.body, //
				props: { ...props }
			});

			console.log({ ...component }); // accessors?
			reply(...component); // trigger "rendered" in Gateway, plus push any default values to the db to save

			// on change, Pass props message up to iframe parent so it can be saved/updated
			component.$on('change', (event) => {
				reply(event.detail);
			});

			URL.revokeObjectURL(url); // memory management
		});
	}

	onDestroy(() => {
		if (component) component.$destroy();
		if (url) URL.revokeObjectURL(url); // memory management
	});
</script>

<svelte:window on:message={handleMessage} />

<!-- offsetHeight are readonly -->
<!-- to set the width, use style  -->
<div id="app" bind:offsetWidth bind:offsetHeight>
	<!-- Component will be mounted into here  -->
</div>
