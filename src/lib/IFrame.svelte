<script>
	export let iframe;
	export let srcdoc;
	export let serializedSource;
</script>

<div class="iframe-container">
	<div class="header">
		{#if !serializedSource}
			Rendering...
		{/if}
	</div>
	<div class="iframe-inner">
		<iframe title="Rendered Component" bind:this={iframe} {srcdoc} />
	</div>
</div>

<style>
	.iframe-container {
		height: 100%;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
	}

	.header {
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.7);
	}
	iframe {
		height: 100%;
		width: 100%;
		border: 0;
	}

	.iframe-inner {
		height: 100%;
	}
</style>
