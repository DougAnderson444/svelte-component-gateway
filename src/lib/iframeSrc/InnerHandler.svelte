<script>
	import { connectToParent } from 'penpal';
	import { onMount } from 'svelte';

	export let offsetWidth;
	export let offsetHeight;

	let component; // the esModule component to be mounted in this gateway
	let parent; // iframe parent, using penpal library
	let url;

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

			// Pass props message up to iframe parent so it can be saved/updated
			component.$on('change', (event) => {
				console.log('change', event);
				parent.updateProps(event.detail);
			});

			URL.revokeObjectURL(url); // memory management

			// let parent know that the component is ready
			parent.setSerializedSource();
		});
	}

	onMount(async () => {
		const connection = connectToParent({
			// Methods child is exposing to parent.
			methods: {
				loadEsModuleComponent
			}
		});

		parent = await connection.promise;

		// destroy svelte component on onDestroy
		return () => {
			if (component) component.$destroy();
			if (url) URL.revokeObjectURL(url); // memory management
		};
	});
</script>

<!-- offsetHeight are readonly -->
<!-- to set the width, use style  -->
<div id="app" bind:offsetWidth bind:offsetHeight>
	<!-- Component will be mounted into here  -->
</div>
