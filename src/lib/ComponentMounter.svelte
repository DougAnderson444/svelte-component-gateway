<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { CHANGE } from './iframeSrc/constants.js';

	export let esModule;
	export let props;
	export let css;

	const dispatch = createEventDispatcher();

	let component; // the esModule component to be mounted in this gateway
	let url;
	let target; // where we mount this component
	let mounted;

	$: if (mounted && esModule) loadEsModuleComponent();

	$: if (component && props) setProps();

	async function loadEsModuleComponent() {
		css = css ? `<style>${css}<\/style>` : '';

		// cleanup from prior loads
		if (component) {
			component.$destroy();
			URL.revokeObjectURL(url); // memory management
		}

		const blob = new Blob([esModule], { type: 'text/javascript' });
		url = URL.createObjectURL(blob);

		const App = (await import(/* @vite-ignore */ url)).default;
		dispatch('ready', App);

		if (!App || !target) return;

		target.innerHTML = '';

		component = new App({ target, props: {} });
		dispatch('mounted', component);

		// get the default values of component for each of the keys of component.$$.props
		// this way the parent component can deduce the schema of the data
		const initProps = component['$$'].props;
		let inits = {};

		Object.keys(initProps).map((k) => {
			inits[k] = component[k]; // load default initial props
		});

		let allProps = Object.assign(inits, props);

		dispatch(CHANGE, allProps); // trigger "rendered" in Gateway, plus push any default values to the db to save

		// on change, Pass props message up to iframe parent so it can be saved/updated
		component.$on('change', (event) => {
			dispatch(CHANGE, event.detail);
		});

		setProps(allProps); // set them after we emit the defaults back to the user to save/display

		if (url) URL.revokeObjectURL(url); // memory management
	}

	function setProps(props) {
		if (!component || !props) return;
		component.$set({ ...props });
	}

	onMount(() => {
		mounted = true;
	});
	onDestroy(() => {
		if (component) component.$destroy();
		if (url) URL.revokeObjectURL(url); // memory management
	});
</script>

<svelte:head>
	{@html css}
</svelte:head>

<div class="component-mounter-target" bind:this={target} style="all:unset">
	<!-- Component will be mounted into here  -->
</div>
