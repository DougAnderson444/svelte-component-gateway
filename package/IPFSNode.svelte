<script>
	import { onMount } from 'svelte';
	import { UnixFS } from 'ipfs-unixfs';
	import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string';
	import IPFSSaveStatus from './IPFSSaveStatus.svelte';

	export let content = {};
	export let path;

	export let height = '70';

	let compiled, components;
	let saveContent;
	let ipfsNode;

	onMount(async () => {
		// In Svelte, a hot module refresh can cause lockfile problems
		// so we assign the ipfs node to globalThis to avoid lock file issues
		if (!globalThis.ipfsNode) {
			// no ipfs saved to globalThis, so load it up
			console.log('No ipfs global');

			const IPFSmodule = await import('../modules/ipfs-core/ipfs-core.js');
			const IPFS = IPFSmodule.default;
			ipfsNode = await IPFS.create({
				config: {
					Addresses: {
						Swarm: [
							// This is a public webrtc-star server
							'/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
							'/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
							'/ip4/127.0.0.1/tcp/13579/wss/p2p-webrtc-star'
						]
					}
				}
			});
			globalThis.ipfsNode = ipfsNode;
		} else {
			console.log('Wait for ipfs global');
			ipfsNode = globalThis.ipfsNode;
		}
		console.log('ipfs global loaded', { ipfsNode });

		async function save(stringToSave) {
			// if you want dag.put() === ipfs.add(), it needs to be dag-pb
			const file = new UnixFS({
				type: 'file',
				data: uint8ArrayFromString(stringToSave) // new Uint8Array(0) //
			});

			const pbNode = {
				Data: file.marshal(),
				Links: []
			};

			return await ipfsNode.dag.put(pbNode, {
				storeCodec: 'dag-pb',
				pin: true
			});
		}

		async function add(content) {
			return await ipfsNode.add(content, {
				pin: true,
				wrapWithDirectory: true
			});
		}

		saveContent = async () => {
			compiled = save(content.compiled); // string
			components = save(JSON.stringify(content.components)); // array
		};

		return () => {
			console.log('the ipfs node is being stopped');
			ipfsNode.stop();
			globalThis.ipfsNode = null;
		};
	});

	$: content && saveContent && saveContent();
</script>

<div class="inner" style:height="{height * 2}px" style="--height: {height * 2}px">
	{#if compiled}Compiled edModule code:
		<IPFSSaveStatus saveResult={compiled} {height} />
	{/if}
	{#if components}JSON Stringified array of components: <IPFSSaveStatus
			saveResult={components}
			{height}
		/>
	{/if}
</div>

<style>
	.inner {
		margin: 1em;
		overflow: hidden;
		max-height: var(--height);
	}
</style>
