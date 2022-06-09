# iFrame Explainer

In this folder is a small Svelte app to mount the component.

It's done this way to take advantage of Svelte's tooling and the npm library ecosystem.

But this needs to be compiled into plain old JS and HTML before the main app run.

That's done via Rollup (`rollup.config.js`) then saved to the srcdoc folder as index.html as part of the build step in `svelte.config.js`
