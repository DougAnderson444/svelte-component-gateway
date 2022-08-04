<script>
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox
	export let iframe = null;
	export let srcdoc;
	export let rendered;

	let offsetWidth;
	let sendWidth;

	// synchronize the width of the parent container and the iframe child
	$: iframe && iframe.addEventListener('load', handleLoad);
	let channel;
	// Wait for the iframe to load, then configure "width sender"
	async function handleLoad() {
		if (!iframe || !offsetWidth) throw new Error('Missing offsetWidth');

		channel = new MessageChannel();

		channel.port1.onmessage = (e) => {
			// console.log('WIDTH MESSAGE', { e: e.data });
			// e.data; // do something with the reply?
		};
		sendWidth = () => {
			iframe.contentWindow.postMessage(
				{ offsetWidth }, // push the details to loadEsModuleComponent({ esModule, props }) in the iframe
				'*', // there's only 1 contentWindow on the iframe so it' safe to use '*' as origin
				[channel.port2]
			); // enables the iframe to send messages containing prop updates back to the parent
		};
	}

	$: if (offsetWidth && sendWidth) sendWidth();

	$: if (iframe && channel) {
		/**
		 * Normally you wouldn't set both allow-scripts and allow-same-origin
		 * Because the iframe can remove sandbox attribute and reload the iframe
		 * However with svelte we can detect reload of iframe here, and add it back always
		 * So this risk is mitigated
		 */
		// check if iframe element has a sandbox attribute on it
		if (
			!iframe.getAttribute('sandbox') ||
			(iframe.getAttribute('sandbox') && iframe.sandbox != 'allow-scripts allow-same-origin')
		) {
			// if sandbox was removed, reload this iframe
			iframe.contentWindow.location.reload();
		}
	}
</script>

<div class="iframe-container">
	<div class="header">
		{#if !rendered}
			Rendering...
		{/if}
	</div>
	<div class="iframe-inner">
		<iframe
			sandbox="allow-scripts allow-same-origin"
			allow="camera *;microphone *"
			title="Rendered Component"
			bind:this={iframe}
			{srcdoc}
			bind:offsetWidth
			allowfullscreen
		/>
	</div>
</div>

<style>
	.iframe-container {
		display: flex;
		flex: 1;
		height: 100%;
		width: 100%;
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
		display: flex;
		flex: 1;
		height: 100%;
		width: 100%;
		border: 0;
	}

	.iframe-inner {
		display: flex;
		flex: 1;
		height: 100%;
	}
</style>
