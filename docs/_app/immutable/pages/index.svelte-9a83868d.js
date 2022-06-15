var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, append_hydration, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, createEventDispatcher, getContext, create_slot, query_selector_all, src_url_equal, update_slot_base, get_all_dirty_from_scope, get_slot_changes, component_subscribe, onMount, set_style, listen, globals, set_data, group_outros, check_outros, bubble } from "../chunks/index-57b8af39.js";
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
function create_fragment$3(ctx) {
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
      iframe_1 = claim_element(div1_nodes, "IFRAME", {
        sandbox: true,
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
      attr(div0, "class", "header svelte-1x4d59h");
      attr(iframe_1, "sandbox", "allow-scripts");
      attr(iframe_1, "title", "Rendered Component");
      attr(iframe_1, "srcdoc", ctx[1]);
      attr(iframe_1, "class", "svelte-1x4d59h");
      attr(div1, "class", "iframe-inner svelte-1x4d59h");
      attr(div2, "class", "iframe-container svelte-1x4d59h");
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
function instance$3($$self, $$props, $$invalidate) {
  let { iframe } = $$props;
  let { srcdoc: srcdoc2 } = $$props;
  let { rendered } = $$props;
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
      $$invalidate(1, srcdoc2 = $$props2.srcdoc);
    if ("rendered" in $$props2)
      $$invalidate(2, rendered = $$props2.rendered);
  };
  return [iframe, srcdoc2, rendered, iframe_1_binding];
}
class IFrame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { iframe: 0, srcdoc: 1, rendered: 2 });
  }
}
var srcdoc = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />

		<script defer type="module">
			var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}let l,a;function f(){if(void 0===l){l=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){l=!0}}return l}function d(t){a=t}function p(t){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_destroy.push(t)}const h=[],g=[],$=[],m=[],b=Promise.resolve();let y=!1;function w(t){$.push(t)}const _=new Set;let v=0;function x(){const t=a;do{for(;v<h.length;){const t=h[v];v++,d(t),k(t.$$)}for(d(null),h.length=0,v=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(h.length);for(;m.length;)m.pop()();y=!1,_.clear(),d(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const E=new Set;function L(t,e){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,b.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(s,c,u,l,f,p,h,g=[-1]){const $=a;d(s);const m=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||($?$.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:c.target||$.$$.root};h&&h(m.root);let b=!1;if(m.ctx=u?u(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&f(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&L(s,t)),e})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(E.delete(y),y.i(_))),function(t,n,s,i){const{fragment:c,on_mount:u,on_destroy:l,after_update:a}=t.$$;c&&c.m(n,s),i||w((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(w)}(s,c.target,c.anchor,c.customElement),x()}var y,_;d($)}function W(e){let n,o,r,s;return{c(){var t,o,r;n=c("div"),t=n,o="id",null==(r="app")?t.removeAttribute(o):t.getAttribute(o)!==r&&t.setAttribute(o,r),w((()=>e[3].call(n)))},m(t,l){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,l),o=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=c("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=f();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\\/script>",r=u(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=u(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(o||r&&n.contentWindow)&&r(),i(n)}}(n,e[3].bind(n)),r||(s=u(window,"message",e[2]),r=!0)},p:t,i:t,o:t,d(t){t&&i(n),o(),r=!1,s()}}}function H(t,e,n){let o,r,s,{offsetWidth:i}=e,{offsetHeight:c}=e;return p((()=>{o&&o.$destroy(),r&&URL.revokeObjectURL(r)})),t.$$set=t=>{"offsetWidth"in t&&n(0,i=t.offsetWidth),"offsetHeight"in t&&n(1,c=t.offsetHeight)},[i,c,async function(t){const{esModule:e,props:n}=t.data;s=e=>{t.ports[0].postMessage(e)},async function({esModule:t,props:e}){o&&(o.$destroy(),URL.revokeObjectURL(r));const n=new Blob([t],{type:"text/javascript"});r=URL.createObjectURL(n),import(r).then((function({default:t}){if(!t)return;document.getElementById("app").innerHTML="",o=new t({target:document.getElementById("app")||document.body,props:{...e}});const n=o.$$.props;let r={};Object.keys(n).map((t=>{r[t]=o[t]})),s({...r,...e}),o.$on("change",(t=>{s(t.detail)}))}))}({esModule:e,props:n})},function(){i=this.offsetWidth,c=this.offsetHeight,n(0,i),n(1,c)}]}globalThis.fetch=()=>(console.log("Nulled out fetch"),{json:()=>({result:"no fetch, sorry"})}),globalThis.XMLHttpRequest=class{constructor(){console.log("Nulled out XHR too")}open=()=>null;send=()=>null},globalThis.WebSocket=null,globalThis.EventSource=null;return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,H,W,s,{offsetWidth:0,offsetHeight:1})}}({target:document.body,props:{}})}();

		<\/script>
	</head>

	<body></body>
</html>
`;
const CHANGE = "change";
function create_fragment$2(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[4](value);
  }
  let iframe_1_props = { srcdoc, rendered: ctx[0] };
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
  let { props } = $$props;
  let { rendered } = $$props;
  let iframe;
  const dispatch = createEventDispatcher();
  async function handleLoad() {
    if (!esModule || !iframe)
      throw new Error("Missing esModule");
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
      $$invalidate(2, props = __spreadValues(__spreadValues({}, props), e.data));
      $$invalidate(0, rendered = true);
      dispatch(CHANGE, props);
    };
    iframe.contentWindow.postMessage({ esModule, props }, "*", [channel.port2]);
  }
  function iframe_1_iframe_binding(value) {
    iframe = value;
    $$invalidate(1, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("esModule" in $$props2)
      $$invalidate(3, esModule = $$props2.esModule);
    if ("props" in $$props2)
      $$invalidate(2, props = $$props2.props);
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
  };
  return [rendered, iframe, props, esModule, iframe_1_iframe_binding];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { esModule: 3, props: 2, rendered: 0 });
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
const get_default_slot_changes = (dirty) => ({ component: dirty & 1 });
const get_default_slot_context = (ctx) => ({ component: ctx[0] });
function create_fragment$1(ctx) {
  let t;
  let script;
  let script_src_value;
  let link;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
      t = space();
      script = element("script");
      link = element("link");
      this.h();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
      t = claim_space(nodes);
      const head_nodes = query_selector_all('[data-svelte="svelte-bpeq2r"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      link = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(script.src, script_src_value = "https://cdn.tailwindcss.com"))
        attr(script, "src", script_src_value);
      attr(link, "href", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
      attr(link, "rel", "stylesheet");
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      append_hydration(document.head, script);
      append_hydration(document.head, link);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 9)) {
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
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t);
      detach(script);
      detach(link);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(6, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { url } = $$props;
  let component;
  let mounted = false;
  onMount(() => {
    $$invalidate(2, mounted = true);
    $$invalidate(1, url = $page.url.searchParams.get("url") || url);
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
      $$invalidate(0, component = text2);
    } catch (error) {
      console.log(error);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("url" in $$props2)
      $$invalidate(1, url = $$props2.url);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      if (mounted && url && window.cachedURL != url)
        doFetch(url);
    }
  };
  return [component, url, mounted, $$scope, slots];
}
class FetchComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { url: 1 });
  }
}
var index_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block(ctx) {
  let gateway;
  let updating_props;
  let current;
  function gateway_props_binding(value) {
    ctx[6](value);
  }
  let gateway_props = {
    esModule: ctx[9],
    width: ctx[2],
    height: ctx[3]
  };
  if (ctx[1] !== void 0) {
    gateway_props.props = ctx[1];
  }
  gateway = new Gateway({ props: gateway_props });
  binding_callbacks.push(() => bind(gateway, "props", gateway_props_binding));
  gateway.$on("change", ctx[7]);
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
      if (dirty & 512)
        gateway_changes.esModule = ctx2[9];
      if (dirty & 4)
        gateway_changes.width = ctx2[2];
      if (dirty & 8)
        gateway_changes.height = ctx2[3];
      if (!updating_props && dirty & 2) {
        updating_props = true;
        gateway_changes.props = ctx2[1];
        add_flush_callback(() => updating_props = false);
      }
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
  let if_block = ctx[9] && create_if_block(ctx);
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
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "border flex-auto");
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
      if (ctx2[9]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 512) {
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
          ({ component }) => ({ 9: component }),
          ({ component }) => component ? 512 : 0
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
      attr(div, "class", "app svelte-md7319");
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
      if (dirty & 1550) {
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
  component_subscribe($$self, page, ($$value) => $$invalidate(8, $page = $$value));
  let url = "https://bafybeifeyoww62kxwmpdkqpqou6yxjpo7jstfxujfoxjy5exqjvldyqixu.ipfs.dweb.link";
  let props = { name: "Doug", lastName: "Anders" };
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
  function gateway_props_binding(value) {
    props = value;
    $$invalidate(1, props);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  return [
    url,
    props,
    width,
    height,
    vh,
    handleViewportSize,
    gateway_props_binding,
    change_handler
  ];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-9a83868d.js.map
