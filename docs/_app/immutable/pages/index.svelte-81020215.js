import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, add_render_callback, append_hydration, add_resize_listener, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, onMount, createEventDispatcher, create_slot, set_data, update_slot_base, get_all_dirty_from_scope, get_slot_changes, getContext, set_style, listen, component_subscribe, globals, group_outros, check_outros } from "../chunks/index-177c6076.js";
var IFrame_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".iframe-container.svelte-ygngpq{display:flex;flex:1;height:100%;width:100%;border-radius:4px}.header.svelte-ygngpq{font-weight:700;font-size:0.8rem;text-transform:uppercase;color:rgba(0, 0, 0, 0.7)}iframe.svelte-ygngpq{display:flex;flex:1;height:100%;width:100%;border:0}.iframe-inner.svelte-ygngpq{display:flex;flex:1;height:100%}")();
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
function create_fragment$3(ctx) {
  let div2;
  let div0;
  let t;
  let div1;
  let iframe_1;
  let iframe_1_resize_listener;
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
      iframe_1 = claim_element(div1_nodes, "IFRAME", {
        sandbox: true,
        allow: true,
        title: true,
        srcdoc: true,
        class: true
      });
      children(iframe_1).forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "header svelte-ygngpq");
      attr(iframe_1, "sandbox", sandbox);
      attr(iframe_1, "allow", "camera *;microphone *");
      attr(iframe_1, "title", "Rendered Component");
      attr(iframe_1, "srcdoc", ctx[1]);
      iframe_1.allowFullscreen = true;
      attr(iframe_1, "class", "svelte-ygngpq");
      add_render_callback(() => ctx[7].call(iframe_1));
      attr(div1, "class", "iframe-inner svelte-ygngpq");
      attr(div2, "class", "iframe-container svelte-ygngpq");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      append_hydration(div1, iframe_1);
      ctx[6](iframe_1);
      iframe_1_resize_listener = add_resize_listener(iframe_1, ctx[7].bind(iframe_1));
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
      ctx[6](null);
      iframe_1_resize_listener();
    }
  };
}
let sandbox = "allow-scripts";
function instance$3($$self, $$props, $$invalidate) {
  let { iframe = null } = $$props;
  let { srcdoc } = $$props;
  let { rendered } = $$props;
  let offsetWidth;
  let sendWidth;
  let channel;
  async function handleLoad() {
    if (!iframe || !offsetWidth)
      throw new Error("Missing offsetWidth");
    $$invalidate(5, channel = new MessageChannel());
    $$invalidate(5, channel.port1.onmessage = (e) => {
    }, channel);
    $$invalidate(4, sendWidth = () => {
      iframe.contentWindow.postMessage({ offsetWidth }, "*", [channel.port2]);
    });
  }
  function iframe_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      iframe = $$value;
      $$invalidate(0, iframe);
    });
  }
  function iframe_1_elementresize_handler() {
    offsetWidth = this.offsetWidth;
    $$invalidate(3, offsetWidth);
  }
  $$self.$$set = ($$props2) => {
    if ("iframe" in $$props2)
      $$invalidate(0, iframe = $$props2.iframe);
    if ("srcdoc" in $$props2)
      $$invalidate(1, srcdoc = $$props2.srcdoc);
    if ("rendered" in $$props2)
      $$invalidate(2, rendered = $$props2.rendered);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 24) {
      if (offsetWidth && sendWidth)
        sendWidth();
    }
    if ($$self.$$.dirty & 33) {
      if (iframe && channel) {
        if (!iframe.getAttribute("sandbox") || iframe.getAttribute("sandbox") && iframe.sandbox != sandbox) {
          iframe.contentWindow.location.reload();
        }
      }
    }
  };
  return [
    iframe,
    srcdoc,
    rendered,
    offsetWidth,
    sendWidth,
    channel,
    iframe_1_binding,
    iframe_1_elementresize_handler
  ];
}
class IFrame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { iframe: 0, srcdoc: 1, rendered: 2 });
  }
}
const CHANGE = "change";
function create_fragment$2(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[7](value);
  }
  let iframe_1_props = {
    srcdoc: ctx[2],
    rendered: ctx[0]
  };
  if (ctx[1] !== void 0) {
    iframe_1_props.iframe = ctx[1];
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
      if (dirty & 4)
        iframe_1_changes.srcdoc = ctx2[2];
      if (dirty & 1)
        iframe_1_changes.rendered = ctx2[0];
      if (!updating_iframe && dirty & 2) {
        updating_iframe = true;
        iframe_1_changes.iframe = ctx2[1];
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
function instance$2($$self, $$props, $$invalidate) {
  let { esModule } = $$props;
  let { css = null } = $$props;
  let { props } = $$props;
  let { rendered = false } = $$props;
  let srcdoc;
  onMount(async () => {
    const strUrl = new URL("./srcdoc/bundled.html", location.href);
    const response = await fetch(strUrl);
    $$invalidate(2, srcdoc = await response.text());
    console.log({ srcdoc });
  });
  let iframe;
  let setProps;
  const dispatch = createEventDispatcher();
  async function handleLoad() {
    if (!esModule || !iframe)
      throw new Error("Missing esModule");
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
      $$invalidate(0, rendered = true);
      if (props || e.data)
        dispatch(CHANGE, Object.assign({}, props, e.data));
      $$invalidate(6, setProps = (props2) => {
        iframe.contentWindow.postMessage({ setProps: props2 }, "*");
      });
    };
    iframe.contentWindow.postMessage({ load: { esModule, props, css } }, "*", [channel.port2]);
  }
  function iframe_1_iframe_binding(value) {
    iframe = value;
    $$invalidate(1, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("esModule" in $$props2)
      $$invalidate(3, esModule = $$props2.esModule);
    if ("css" in $$props2)
      $$invalidate(4, css = $$props2.css);
    if ("props" in $$props2)
      $$invalidate(5, props = $$props2.props);
    if ("rendered" in $$props2)
      $$invalidate(0, rendered = $$props2.rendered);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 10) {
      if (esModule && iframe)
        handleLoad();
    }
    if ($$self.$$.dirty & 2) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 96) {
      if (props && setProps)
        setProps(props);
    }
  };
  return [
    rendered,
    iframe,
    srcdoc,
    esModule,
    css,
    props,
    setProps,
    iframe_1_iframe_binding
  ];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      esModule: 3,
      css: 4,
      props: 5,
      rendered: 0
    });
  }
}
const get_default_slot_changes = (dirty) => ({ component: dirty & 2 });
const get_default_slot_context = (ctx) => ({ component: ctx[1] });
function create_fragment$1(ctx) {
  let div;
  let t0;
  let t1;
  let t2;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
  return {
    c() {
      div = element("div");
      t0 = text("Loading from: ");
      t1 = text(ctx[0]);
      t2 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Loading from: ");
      t1 = claim_text(div_nodes, ctx[0]);
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      insert_hydration(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1)
        set_data(t1, ctx2[0]);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 10)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes), get_default_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { url } = $$props;
  let component;
  let mounted = false;
  onMount(() => {
    $$invalidate(2, mounted = true);
    $$invalidate(0, url = new URL(document.location).searchParams.get("url") || url);
    window.cachedURL = url;
    doFetch(url);
  });
  let fetched;
  async function doFetch(url2) {
    if (!url2)
      return;
    try {
      window.cachedURL = url2;
      fetched = await fetch(url2);
      if (!fetched.ok)
        throw new Error(fetched.statusText);
      console.log("fetching", url2, { fetched });
      const text2 = await fetched.text();
      console.log("fetched:", { text: text2 });
      $$invalidate(1, component = text2);
    } catch (error) {
      console.log(error);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("url" in $$props2)
      $$invalidate(0, url = $$props2.url);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 5) {
      if (mounted && url && window.cachedURL != url)
        doFetch(url);
    }
  };
  return [url, component, mounted, $$scope, slots];
}
class FetchComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { url: 0 });
  }
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".app.svelte-gt431t{height:100vh;display:flex;flex-direction:column}")();
const { window: window_1 } = globals;
function create_if_block(ctx) {
  let gateway;
  let current;
  gateway = new Gateway({
    props: {
      esModule: ctx[8],
      props: ctx[1],
      width: ctx[2],
      height: ctx[3]
    }
  });
  gateway.$on("change", ctx[6]);
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
      if (dirty & 256)
        gateway_changes.esModule = ctx2[8];
      if (dirty & 2)
        gateway_changes.props = ctx2[1];
      if (dirty & 4)
        gateway_changes.width = ctx2[2];
      if (dirty & 8)
        gateway_changes.height = ctx2[3];
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
function create_default_slot(ctx) {
  let t0;
  let t1_value = JSON.stringify(ctx[1]) + "";
  let t1;
  let t2;
  let div;
  let current;
  let if_block = ctx[8] && create_if_block(ctx);
  return {
    c() {
      t0 = text("Props: ");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "Props: ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "border flex-auto bg-orange-50/50 h-96 w-full");
      set_style(div, "top", "105px");
      set_style(div, "left", "10px");
      set_style(div, "min-width", "100px");
      set_style(div, "min-height", "100px");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 2) && t1_value !== (t1_value = JSON.stringify(ctx2[1]) + ""))
        set_data(t1, t1_value);
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let div;
  let h1;
  let t0;
  let t1;
  let fetchcomponent;
  let current;
  let mounted;
  let dispose;
  fetchcomponent = new FetchComponent({
    props: {
      url: ctx[0],
      $$slots: {
        default: [
          create_default_slot,
          ({ component }) => ({ 8: component }),
          ({ component }) => component ? 256 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Svelte Component Gateway");
      t1 = space();
      create_component(fetchcomponent.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Svelte Component Gateway");
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      claim_component(fetchcomponent.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-3xl font-bold py-2");
      attr(div, "class", "app svelte-gt431t");
      set_style(div, "--vh", ctx[4] + "px");
      set_style(div, "height", "calc(var(--vh, 1vh) * 100)");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      mount_component(fetchcomponent, div, null);
      current = true;
      if (!mounted) {
        dispose = listen(window_1, "resize", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const fetchcomponent_changes = {};
      if (dirty & 1)
        fetchcomponent_changes.url = ctx2[0];
      if (dirty & 782) {
        fetchcomponent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      fetchcomponent.$set(fetchcomponent_changes);
      if (!current || dirty & 16) {
        set_style(div, "--vh", ctx2[4] + "px");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(fetchcomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fetchcomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(fetchcomponent);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(7, $page = $$value));
  let url = "https://raw.githubusercontent.com/PeerPiper/awesome-peerpiper-components/master/compiled/%40peerpiper/ContactCard.svelte.js";
  let props = {
    profile: { firstName: "Doug", lastName: "Anderson" }
  };
  let width;
  let height;
  let vh;
  onMount(() => {
    $$invalidate(0, url = $page.url.searchParams.get("url") || url);
    window.cachedURL = url;
    handleViewportSize();
  });
  function handleViewportSize(_) {
    $$invalidate(4, vh = window.innerHeight * 0.01);
    $$invalidate(3, height = window.innerHeight);
    $$invalidate(2, width = document == null ? void 0 : document.body.clientWidth);
  }
  function handleChange(e) {
    $$invalidate(1, props = Object.assign({}, props, e.detail));
  }
  return [url, props, width, height, vh, handleViewportSize, handleChange];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-81020215.js.map
