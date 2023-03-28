import InnerHandlerIsolated from './InnerHandlerIsolated.svelte';

const networkIsolated = new InnerHandlerIsolated({
	target: document.body,
	props: {}
});

export default networkIsolated;
