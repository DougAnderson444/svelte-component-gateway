<script>
	import { onMount } from 'svelte';
	import Gateway from '@douganderson444/svelte-component-gateway';
	import { page } from '$app/stores';

	let url = 'https://bafybeifeyoww62kxwmpdkqpqou6yxjpo7jstfxujfoxjy5exqjvldyqixu.ipfs.dweb.link';

	let component;

	let props = { name: 'Douglas' };

	let width;
	let height;
	let vh;

	onMount(() => {
		url = $page.url.searchParams.get('url') || url;
		handleViewportSize();
	});

	function handleViewportSize(_) {
		vh = window.innerHeight * 0.01;
		height = window.innerHeight;
		width = document?.body.clientWidth; // excludes scrollbar
	}

	$: if (url) doFetch(url);

	let fetched;

	async function doFetch(url) {
		try {
			fetched = await fetch(url);
			const text = await fetched.text();
			component = text;
		} catch (error) {
			console.log(error);
		}
	}
</script>

<svelte:window on:resize={handleViewportSize} />

<div class="app" style="--vh: {vh}px; height: calc(var(--vh, 1vh) * 100);">
	<h1 class="text-3xl font-bold py-2">Svelte Component Gateway</h1>
	<p class="my-2">
		Loading from // make form input with url default
		<input type="text" name="url" bind:value={url} size="90" class="border p-2" />
		<a href={url} target="_blank" class="underline text-blue-400">{url}</a>
	</p>

	Props: {JSON.stringify(props)}

	<div class="border flex-auto">
		{#if component}
			<Gateway esModule={component} bind:props {width} {height} />
		{/if}
	</div>
</div>

<style>
	.app {
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		display: flex;
		flex-direction: column;
	}
</style>
