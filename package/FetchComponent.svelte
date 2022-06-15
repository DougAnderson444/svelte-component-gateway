<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let url;
	let component;

	let mounted = false;

	onMount(() => {
		mounted = true;
		url = $page.url.searchParams.get('url') || url;
		window.cachedURL = url;
		doFetch(url);
	});

	$: if (mounted && url && window.cachedURL != url) doFetch(url);

	let fetched;

	async function doFetch(url) {
		if (!url) return;
		try {
			window.cachedURL = url; // reset cache, avoiding duplicate downloads
			fetched = await fetch(url);
			if (!fetched.ok) throw new Error(fetched.statusText);
			console.log('fetching', url, { fetched });
			const text = await fetched.text();
			console.log('fetched:', { text });

			component = text;
		} catch (error) {
			console.log(error);
		}
	}
</script>

<!-- <p class="my-2">
	Loading from<br />
	<input type="text" name="url" bind:value={url} size="90" class="border p-2" />
	<a href={url} target="_blank" class="underline text-blue-400">{url}</a>
</p> -->

<slot {component} />

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>
