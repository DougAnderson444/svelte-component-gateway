import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, append_hydration, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, set_input_value, listen, set_data, check_outros, onMount, group_outros } from "../chunks/index-954db091.js";
var IFrame_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let t;
  return {
    c() {
      t = text("Rendering...");
    },
    l(nodes) {
      t = claim_text(nodes, "Rendering...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$2(ctx) {
  let div2;
  let div0;
  let t;
  let div1;
  let iframe_1;
  let if_block = !ctx[2] && create_if_block$1();
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div1 = element("div");
      iframe_1 = element("iframe");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      iframe_1 = claim_element(div1_nodes, "IFRAME", { title: true, srcdoc: true, class: true });
      children(iframe_1).forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "header svelte-10b2cf3");
      attr(iframe_1, "title", "Rendered REPL");
      attr(iframe_1, "srcdoc", ctx[1]);
      attr(iframe_1, "class", "svelte-10b2cf3");
      attr(div1, "class", "iframe-inner svelte-10b2cf3");
      attr(div2, "class", "iframe-container svelte-10b2cf3");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      append_hydration(div1, iframe_1);
      ctx[3](iframe_1);
    },
    p(ctx2, [dirty]) {
      if (!ctx2[2]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$1();
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 2) {
        attr(iframe_1, "srcdoc", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      ctx[3](null);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { iframe } = $$props;
  let { srcdoc } = $$props;
  let { serializedSource } = $$props;
  function iframe_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      iframe = $$value;
      $$invalidate(0, iframe);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("iframe" in $$props2)
      $$invalidate(0, iframe = $$props2.iframe);
    if ("srcdoc" in $$props2)
      $$invalidate(1, srcdoc = $$props2.srcdoc);
    if ("serializedSource" in $$props2)
      $$invalidate(2, serializedSource = $$props2.serializedSource);
  };
  return [iframe, srcdoc, serializedSource, iframe_1_binding];
}
class IFrame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      iframe: 0,
      srcdoc: 1,
      serializedSource: 2
    });
  }
}
function create_fragment$1(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[6](value);
  }
  let iframe_1_props = {
    srcdoc: ctx[0],
    serializedSource: ctx[1]
  };
  if (ctx[2] !== void 0) {
    iframe_1_props.iframe = ctx[2];
  }
  iframe_1 = new IFrame({ props: iframe_1_props });
  binding_callbacks.push(() => bind(iframe_1, "iframe", iframe_1_iframe_binding));
  return {
    c() {
      create_component(iframe_1.$$.fragment);
    },
    l(nodes) {
      claim_component(iframe_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iframe_1, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const iframe_1_changes = {};
      if (dirty & 1)
        iframe_1_changes.srcdoc = ctx2[0];
      if (dirty & 2)
        iframe_1_changes.serializedSource = ctx2[1];
      if (!updating_iframe && dirty & 4) {
        updating_iframe = true;
        iframe_1_changes.iframe = ctx2[2];
        add_flush_callback(() => updating_iframe = false);
      }
      iframe_1.$set(iframe_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iframe_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iframe_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iframe_1, detaching);
    }
  };
}
const UPDATED = "updated";
function instance$1($$self, $$props, $$invalidate) {
  let { srcdoc } = $$props;
  let { esModule } = $$props;
  let { props } = $$props;
  let { injectedCSS = `/* Some STYLES */
	html, body {position: relative;width: 100%;height: 100%;}body {color: #333;margin: 0;padding: 0px 2px;box-sizing: border-box;font-family: -apple-system, "Segoe UI", BlinkMacSystemFont, Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;}a {color: rgb(0,100,200);text-decoration: none;}a:hover {text-decoration: underline;}a:visited {color: rgb(0,80,160);}label {display: block;}input, button, select, textarea {font-family: inherit;font-size: inherit;padding: 0.4em;margin: 0 0 0.5em 0;box-sizing: border-box;border: 1px solid #ccc;border-radius: 2px;}input:disabled {color: #ccc;}input[type="range"] {height: 0;}button {color: #333;background-color: #f4f4f4;outline: none;}button:active {background-color: #ddd;}button:focus {border-color: #666;} p:last-child{margin-bottom: 30px;}	
	` } = $$props;
  let { serializedSource } = $$props;
  let iframe;
  const handleLoad = async () => {
    window.addEventListener("message", (event) => {
      if (iframe && event.data == UPDATED) {
        $$invalidate(1, serializedSource = new XMLSerializer().serializeToString(iframe == null ? void 0 : iframe.contentWindow.document));
      }
    }, false);
    update({ esModule, props });
  };
  function update({ esModule: esModule2, props: props2 }) {
    if (!iframe)
      return;
    iframe.contentWindow.postMessage({ esModule: esModule2, props: props2 }, location.origin);
  }
  function iframe_1_iframe_binding(value) {
    iframe = value;
    $$invalidate(2, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("srcdoc" in $$props2)
      $$invalidate(0, srcdoc = $$props2.srcdoc);
    if ("esModule" in $$props2)
      $$invalidate(3, esModule = $$props2.esModule);
    if ("props" in $$props2)
      $$invalidate(4, props = $$props2.props);
    if ("injectedCSS" in $$props2)
      $$invalidate(5, injectedCSS = $$props2.injectedCSS);
    if ("serializedSource" in $$props2)
      $$invalidate(1, serializedSource = $$props2.serializedSource);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 24) {
      esModule && update({ esModule, props });
    }
    if ($$self.$$.dirty & 4) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 32) {
      $$invalidate(0, srcdoc = `
		<!doctype html>
		<html>
			<head>
				<script id="injected-base64-script">
					// insert var src64 here
					// var me = document.getElementById('injected-base64-script');
				<\/script>
				<link href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css" rel="stylesheet" />
				<style>
					/* STYLES */
					${injectedCSS}
				</style>
				<script type="module">

					let component;

					if(typeof src64 != 'undefined'){
						console.log('pre-existing src64, convert and load')
						fetch(src64).then(async function(response){
							const blob = await response.blob()
							const url = URL.createObjectURL(blob);
							import(url).then(function ({ default: App }) {
								if (component) component.$destroy();
								document.getElementById('app').innerHTML = '';
								component = new App({ target: document.getElementById('app') })
							})
						})
					} else {
						// console.log('no pre-existing src64')
					}
					
					async function fetchedBlobToDataURL (blobUrl) {

						return new Promise(async function (resolve, reject) {

							const response = await fetch(blobUrl);
							const blob = await response.blob()

							var blobAsDataUrl
							var reader = new FileReader();

							reader.addEventListener("load", function () {
								blobAsDataUrl = this.result;
								resolve(blobAsDataUrl)
							}, false);

							reader.readAsDataURL(blob)
						})
					}

					// <!-- Turn the string into actual javascript code -->
					// <!--   import (url) <- ObjectURL <- Blob         -->

					async function update({esModule, props}) {
						
						// <!-- type: 'text/javascript would normally come from response headers -->
						const blob = new Blob([esModule], { type: 'text/javascript' });
						const url = URL.createObjectURL(blob);
						const src64 = await fetchedBlobToDataURL(url)

						var oldElement = document.getElementById('injected-base64-script');
						oldElement.parentNode.removeChild(oldElement);

						var newElement = document.createElement("script");
						newElement.setAttribute('id', 'injected-base64-script');
						var textnode = document.createTextNode("var src64 = '" + src64 + "'");
						newElement.appendChild(textnode);
						document.getElementsByTagName('head').item(0).prepend(newElement);

						import(url).then(function ({ default: App }) {
							if (component) component.$destroy();

							document.getElementById('app').innerHTML = '';
							component = new App({ 
								target: document.getElementById('app'), 
								props: { ...props }
							})

							// URL.revokeObjectURL(url) // memory management 

							window.parent.postMessage("${UPDATED}", window.parent)
						})
					}

					window.addEventListener('message', function (event) {
						update({ ...event.data })
					}, false)

				<\/script>
			</head>
			<body>
				<div id="app"></div>
			</body>
		</html>
	`);
    }
  };
  return [
    srcdoc,
    serializedSource,
    iframe,
    esModule,
    props,
    injectedCSS,
    iframe_1_iframe_binding
  ];
}
class Lib extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      srcdoc: 0,
      esModule: 3,
      props: 4,
      injectedCSS: 5,
      serializedSource: 1
    });
  }
}
function create_if_block(ctx) {
  let gateway;
  let current;
  gateway = new Lib({
    props: {
      esModule: ctx[1],
      props: ctx[2]
    }
  });
  return {
    c() {
      create_component(gateway.$$.fragment);
    },
    l(nodes) {
      claim_component(gateway.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(gateway, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const gateway_changes = {};
      if (dirty & 2)
        gateway_changes.esModule = ctx2[1];
      gateway.$set(gateway_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(gateway.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(gateway.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(gateway, detaching);
    }
  };
}
function create_fragment(ctx) {
  let main;
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let input;
  let t3;
  let a;
  let t4;
  let t5;
  let t6_value = JSON.stringify(ctx[2]) + "";
  let t6;
  let t7;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block(ctx);
  return {
    c() {
      main = element("main");
      h1 = element("h1");
      t0 = text("Svelte Component Gateway");
      t1 = space();
      p = element("p");
      t2 = text("Loading from // make form input with url default\n		");
      input = element("input");
      t3 = space();
      a = element("a");
      t4 = text(ctx[0]);
      t5 = text("\n\n	Props: ");
      t6 = text(t6_value);
      t7 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      h1 = claim_element(main_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Svelte Component Gateway");
      h1_nodes.forEach(detach);
      t1 = claim_space(main_nodes);
      p = claim_element(main_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Loading from // make form input with url default\n		");
      input = claim_element(p_nodes, "INPUT", {
        type: true,
        name: true,
        size: true,
        class: true
      });
      t3 = claim_space(p_nodes);
      a = claim_element(p_nodes, "A", { href: true, target: true, class: true });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, ctx[0]);
      a_nodes.forEach(detach);
      p_nodes.forEach(detach);
      t5 = claim_text(main_nodes, "\n\n	Props: ");
      t6 = claim_text(main_nodes, t6_value);
      t7 = claim_space(main_nodes);
      if (if_block)
        if_block.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-3xl font-bold py-2");
      attr(input, "type", "text");
      attr(input, "name", "url");
      attr(input, "size", "90");
      attr(input, "class", "border p-2");
      attr(a, "href", ctx[0]);
      attr(a, "target", "_blank");
      attr(a, "class", "underline text-blue-400");
      attr(p, "class", "my-2");
      attr(main, "class", "m-4");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, h1);
      append_hydration(h1, t0);
      append_hydration(main, t1);
      append_hydration(main, p);
      append_hydration(p, t2);
      append_hydration(p, input);
      set_input_value(input, ctx[0]);
      append_hydration(p, t3);
      append_hydration(p, a);
      append_hydration(a, t4);
      append_hydration(main, t5);
      append_hydration(main, t6);
      append_hydration(main, t7);
      if (if_block)
        if_block.m(main, null);
      current = true;
      if (!mounted) {
        dispose = listen(input, "input", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (!current || dirty & 1)
        set_data(t4, ctx2[0]);
      if (!current || dirty & 1) {
        attr(a, "href", ctx2[0]);
      }
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(main, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let url = "https://bafybeidchd6z3eydlkl7sloi4banjjk46aurusxj2ky2v5zj7zzzwsgwsq.ipfs.cf-ipfs.com/";
  let component;
  let props = { name: "Douglas" };
  onMount(() => {
  });
  let fetched;
  async function doFetch(url2) {
    try {
      fetched = await fetch(url2);
      const text2 = await fetched.text();
      $$invalidate(1, component = text2);
    } catch (error) {
      console.log(error);
    }
  }
  function input_input_handler() {
    url = this.value;
    $$invalidate(0, url);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (url)
        doFetch(url);
    }
  };
  return [url, component, props, input_input_handler];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-bd6328f8.js.map
