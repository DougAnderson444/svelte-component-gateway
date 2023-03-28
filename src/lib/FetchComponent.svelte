<script>
	import { onMount } from 'svelte';

	export let url;
	let component;

	let mounted = false;

	onMount(() => {
		mounted = true;
		url = new URL(document.location).searchParams.get('url') || url;
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
			const text = await fetched.text();
			component = text;
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div>
	Loading from: {url}
</div>
<slot {component} />
