<script>
	import ComponentMounter from '../ComponentMounter.svelte';

	import './preventNetworkCalls.js';

	let esModule;
	let props;
	let reply;

	async function handleMessage(event) {
		if (!event?.data) return;

		if (event?.data.hasOwnProperty('load')) {
			({ esModule, props } = event.data.load);

			reply = (resp) => {
				event.ports[0].postMessage(resp);
			};
		}
		if (event?.data.hasOwnProperty('setProps')) props = event.data.setProps;
	}

	function handleChange(e) {
		if (reply && e.detail) reply(e.detail);
	}
</script>

<!-- Svelte sets up a listener for us on the window object  -->
<svelte:window on:message={handleMessage} />

{#if esModule}
	<ComponentMounter {esModule} {props} on:change={handleChange} />
	<!-- <svelte:component this={Peerpiper.ComponentMounter} {esModule} {props} on:change={handleChange} /> -->
{/if}
