<script>
	import { onMount } from 'svelte';
	import Gateway, { FetchComponent } from '@douganderson444/svelte-component-gateway';
	import { page } from '$app/stores';

	let url = 'https://bafybeifeyoww62kxwmpdkqpqou6yxjpo7jstfxujfoxjy5exqjvldyqixu.ipfs.dweb.link';

	let props = {
		name: 'Doug',
		lastName: 'Anders'
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
</script>

<svelte:window on:resize={handleViewportSize} />

<div class="app" style="--vh: {vh}px; height: calc(var(--vh, 1vh) * 100);">
	<h1 class="text-3xl font-bold py-2">Svelte Component Gateway</h1>

	<!-- Fetch gets the component from the interwebs and passes it back up here through let:component  -->
	<FetchComponent {url} let:component>
		Props: {JSON.stringify(props)}

		<div class="border flex-auto">
			{#if component}
				<!-- on:change bubbles the emited 'change' event to the parent component, if bind:props isn't avail -->
				<Gateway esModule={component} bind:props {width} {height} on:change />
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
