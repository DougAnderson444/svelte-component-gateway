<script>
	import { onMount } from 'svelte';
	import { Gateway, FetchComponent } from '@douganderson444/svelte-component-gateway';
	import { page } from '$app/stores';
	import { PanHandle } from '@douganderson444/svelte-panhandle';
	import { Resizer } from '@douganderson444/svelte-resizable';

	// import component from '../../../awesome-peerpiper-components/compiled/@peerpiper/ContactCard.svelte.js?raw';

	let url =
		'https://raw.githubusercontent.com/PeerPiper/awesome-peerpiper-components/master/compiled/%40peerpiper/ContactCard.svelte.js';

	let props = {
		profile: {
			firstName: 'Doug',
			lastName: 'Anderson'
		}
	};

	let width;
	let height;
	let vh;

	onMount(() => {
		url = $page.url.searchParams.get('url') || url;
		window.cachedURL = url;
		handleViewportSize();
	});

	function handleViewportSize(_) {
		vh = window.innerHeight * 0.01;
		height = window.innerHeight;
		width = document?.body.clientWidth; // excludes scrollbar
	}

	function handleChange(e) {
		props = Object.assign({}, props, e.detail);
	}
</script>

<svelte:window on:resize={handleViewportSize} />

<div class="app" style="--vh: {vh}px; height: calc(var(--vh, 1vh) * 100);">
	<h1 class="text-3xl font-bold py-2">Svelte Component Gateway</h1>

	<!-- Fetch gets the component from the interwebs and passes it back up here through let:component  -->
	<FetchComponent {url} let:component>
		Props: {JSON.stringify(props)}

		<!-- absolute removed -->
		<div
			class="border flex-auto  bg-orange-50/50 h-96 w-full"
			style="top: 105px; left:10px; min-width: 100px; min-height: 100px;"
		>
			{#if component}
				<!-- on:change bubbles the emited 'change' event to the parent component, if bind:props isn't avail -->
				<Gateway esModule={component} {props} {width} {height} on:change={handleChange} />
				<!-- <PanHandle /> -->
				<!-- <Resizer /> -->
			{/if}
		</div>
	</FetchComponent>
</div>

<style>
	.app {
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		display: flex;
		flex-direction: column;
	}
</style>
