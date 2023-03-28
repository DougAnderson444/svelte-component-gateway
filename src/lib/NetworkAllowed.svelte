<script>
	import Loader from './Loader.svelte';
	import srcdoc from './srcdoc/networkAllowed.html?raw';

	export let esModule;
	export let props;
	export let css;
</script>

<Loader {esModule} {props} {css} {srcdoc} on:change on:target />
