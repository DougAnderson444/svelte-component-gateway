# iFrame Explainer

In this folder is a small Svelte app to mount the component.

It's done this way to take advantage of Svelte's tooling.

But this needs to be compiled into plain old JS and HTML before the main app run.

That's done via Rollup (`rollup.config.js`) then saved to the srcdoc folder as index.html
