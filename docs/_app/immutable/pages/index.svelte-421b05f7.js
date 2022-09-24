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
import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, add_render_callback, append_hydration, add_resize_listener, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, createEventDispatcher, create_slot, set_data, update_slot_base, get_all_dirty_from_scope, get_slot_changes, onMount, getContext, set_style, listen, component_subscribe, globals, group_outros, check_outros } from "../chunks/index-177c6076.js";
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
  let { srcdoc: srcdoc2 } = $$props;
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
      $$invalidate(1, srcdoc2 = $$props2.srcdoc);
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
    srcdoc2,
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
var srcdoc = '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width,initial-scale=1" />\n		<style>\n			* {\n				margin: 0;\n				padding: 0;\n				/*  include padding and the border */\n				box-sizing: border-box;\n				/* more padding on the inside of your box, but you don\'t want the box to resize */\n				/* box-sizing: content-box; */\n			}\n\n			body {\n				margin: 0;\n				position: relative;\n			}\n		</style>\n		<script defer type="module">\n			var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function a(){return l("")}class d{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){var o;this.e||(this.is_svg?this.e=(o=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",o)):this.e=u(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)c(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(i)}}let f;function p(t){f=t}function h(){if(!f)throw new Error("Function called outside component initialization");return f}function $(){const t=h();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const m=[],g=[],b=[],y=[],v=Promise.resolve();let _=!1;function w(t){b.push(t)}const x=new Set;let E=0;function k(){const t=f;do{for(;E<m.length;){const t=m[E];E++,p(t),L(t.$$)}for(p(null),m.length=0,E=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];x.has(e)||(x.add(e),e())}b.length=0}while(m.length);for(;y.length;)y.pop()();_=!1,x.clear(),p(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const M=new Set;let j;function O(t,e){t&&t.i&&(M.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),j.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function R(t,n,r,c){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,r),c||w((()=>{const n=u.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(w)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,s,r,c,u,l,a,d=[-1]){const h=f;p(e);const $=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||h.$$.root};a&&a($.root);let m=!1;if($.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),m&&U(e,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!c&&c($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();s.intro&&O(e.$$.fragment),R(e,s.target,s.anchor,s.customElement),k()}p(h)}class A{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const S="change";function C(e){let n,o,s,r;return{c(){var t,e,c;n=new d(!1),o=a(),s=l(" "),r=u("div"),n.a=o,t=r,e="class",null==(c="component-mounter-target")?t.removeAttribute(e):t.getAttribute(e)!==c&&t.setAttribute(e,c),function(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}(r,"all","unset")},m(t,i){n.m(e[0],document.head),function(t,e){t.appendChild(e)}(document.head,o),c(t,s,i),c(t,r,i),e[6](r)},p(t,[e]){1&e&&n.p(t[0])},i:t,o:t,d(t){i(o),t&&n.d(),t&&i(s),t&&i(r),e[6](null)}}}function H(t,e,n){let{esModule:o}=e,{props:s}=e,{css:r}=e;const c=$();let i,u,l,a;function d(t){i&&t&&i.$set({...t})}var f;return f=()=>{n(5,a=!0)},h().$$.on_mount.push(f),function(t){h().$$.on_destroy.push(t)}((()=>{i&&i.$destroy(),u&&URL.revokeObjectURL(u)})),t.$$set=t=>{"esModule"in t&&n(2,o=t.esModule),"props"in t&&n(3,s=t.props),"css"in t&&n(0,r=t.css)},t.$$.update=()=>{36&t.$$.dirty&&a&&o&&async function(){n(0,r=r?`<style>${r}</style>`:""),i&&(i.$destroy(),URL.revokeObjectURL(u));const t=new Blob([o],{type:"text/javascript"});u=URL.createObjectURL(t);const e=(await import(u)).default;if(!e||!l)return;n(1,l.innerHTML="",l),n(4,i=new e({target:l,props:{}}));const a=i.$$.props;let f={};Object.keys(a).map((t=>{f[t]=i[t]}));let p=Object.assign(f,s);c(S,p),i.$on("change",(t=>{c(S,t.detail)})),d(p),u&&URL.revokeObjectURL(u)}(),24&t.$$.dirty&&i&&s&&d()},[r,l,o,s,i,a,function(t){g[t?"unshift":"push"]((()=>{l=t,n(1,l)}))}]}class q extends A{constructor(t){super(),T(this,t,H,C,r,{esModule:2,props:3,css:0})}}function B(t){let e,n;return e=new q({props:{esModule:t[0],props:t[1]}}),e.$on("change",t[3]),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.esModule=t[0]),2&n&&(o.props=t[1]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function X(t){let e,n,s,r,u=t[0]&&B(t);return{c(){u&&u.c(),e=a()},m(o,i){var l,a,d,f;u&&u.m(o,i),c(o,e,i),n=!0,s||(l=window,a="message",d=t[2],l.addEventListener(a,d,f),r=()=>l.removeEventListener(a,d,f),s=!0)},p(t,[n]){t[0]?u?(u.p(t,n),1&n&&O(u,1)):(u=B(t),u.c(),O(u,1),u.m(e.parentNode,e)):u&&(j={r:0,c:[],p:j},N(u,1,1,(()=>{u=null})),j.r||o(j.c),j=j.p)},i(t){n||(O(u),n=!0)},o(t){N(u),n=!1},d(t){u&&u.d(t),t&&i(e),s=!1,r()}}}function z(t,e,n){let o,s,r;return[o,s,async function(t){t?.data&&(t?.data.hasOwnProperty("load")&&(n(0,({esModule:o,props:s}=t.data.load),o,n(1,s)),r=e=>{t.ports[0].postMessage(e)}),t?.data.hasOwnProperty("setProps")&&n(1,s=t.data.setProps))},function(t){r&&t.detail&&r(t.detail)}]}globalThis.fetch=()=>(console.log("Nulled out fetch"),{json:()=>({result:"no fetch, sorry"})}),globalThis.XMLHttpRequest=class{constructor(){console.log("Nulled out XHR too")}open=()=>null;send=()=>null},globalThis.WebSocket=null,globalThis.EventSource=null;return new class extends A{constructor(t){super(),T(this,t,z,X,r,{})}}({target:document.body,props:{}})}();\n\n		<\/script>\n	</head>\n\n	<body></body>\n</html>\n';
const CHANGE = "change";
function create_fragment$2(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[6](value);
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
  let { css = null } = $$props;
  let { props } = $$props;
  let { rendered = false } = $$props;
  let iframe;
  let setProps;
  const dispatch = createEventDispatcher();
  async function handleLoad() {
    if (!esModule || !iframe)
      throw new Error("Missing esModule");
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
      $$invalidate(0, rendered = true);
      dispatch(CHANGE, __spreadValues(__spreadValues({}, props), e.data));
      $$invalidate(5, setProps = (props2) => {
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
      $$invalidate(2, esModule = $$props2.esModule);
    if ("css" in $$props2)
      $$invalidate(3, css = $$props2.css);
    if ("props" in $$props2)
      $$invalidate(4, props = $$props2.props);
    if ("rendered" in $$props2)
      $$invalidate(0, rendered = $$props2.rendered);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      if (esModule && iframe)
        handleLoad();
    }
    if ($$self.$$.dirty & 2) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 48) {
      if (props && setProps)
        setProps(props);
    }
  };
  return [rendered, iframe, esModule, css, props, setProps, iframe_1_iframe_binding];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      esModule: 2,
      css: 3,
      props: 4,
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
var PanHandle_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".dragger.svelte-1ba8j6q{cursor:-webkit-grab;cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:rgba(255, 255, 255, 0.69);text-align:center;background:rgba(0, 0, 0, 0.103);margin:10px;padding:7px;border-radius:3px;border:0px solid #aaa;position:absolute;top:1px;right:1px;z-index:10}")();
var Resizer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ":root{--width:2.5em;--line-width:0.4em}.svlt-resizer.svelte-8r838b{-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0.5em;width:calc(var(--width) * 2.25);height:calc(var(--width) * 2.25);position:absolute;right:0;bottom:0;cursor:se-resize;transform:translate(calc(var(--width) / 1), calc(var(--width) / 1));transform-origin:0 0}.svlt-resizer.svelte-8r838b::after{content:'';position:absolute;right:calc(-1 * var(--line-width) / 2);bottom:calc(-1 * var(--line-width) / 2);width:calc(var(--width) / 2);height:calc(var(--width) / 2);border-right:var(--line-width) solid rgba(107, 107, 107, 0.5);border-bottom:var(--line-width) solid rgba(133, 133, 133, 0.5);transform:translate(calc(-1 * var(--width) / 1.1), calc(-1 * var(--width) / 1.1));transform-origin:0 0}")();
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
//# sourceMappingURL=index.svelte-421b05f7.js.map
