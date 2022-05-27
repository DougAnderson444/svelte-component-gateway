<script>
	import { onMount } from 'svelte';
	import Gateway from '@douganderson444/svelte-component-gateway';
	import { page } from '$app/stores';

	let url = 'https://bafybeidchd6z3eydlkl7sloi4banjjk46aurusxj2ky2v5zj7zzzwsgwsq.ipfs.cf-ipfs.com/';

	let component;

	let props = { name: 'Douglas' };
	let mounted;
	onMount(() => {
		url = $page.url.searchParams.get('url');
		// $page.url.
		// fetch the svelte component url variable and mount the Svelte app to target element
		// mount svelte iife component to dom target
		// import(`${url}`).then((module) => {
		// 	module.default.mount(document.getElementById('app'));
		// });

		mounted = true;
	});

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

	// .then((response) => response.text())
	// .then((text) => {
	// 	component = text;
	// });}
</script>

<main class="m-4">
	<h1 class="text-3xl font-bold py-2">Svelte Component Gateway</h1>
	<p class="my-2">
		Loading from // make form input with url default
		<input type="text" name="url" bind:value={url} size="90" class="border p-2" />
		<a href={url} target="_blank" class="underline text-blue-400">{url}</a>
	</p>

	Props: {JSON.stringify(props)}

	{#if component}
		<Gateway esModule={component} {props} />
	{/if}
	<!-- {component} -->
</main>
