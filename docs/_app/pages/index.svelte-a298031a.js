import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, append_hydration, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, getContext, set_input_value, listen, set_data, check_outros, component_subscribe, onMount, group_outros } from "../chunks/index-db8e7457.js";
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
  let { srcdoc: srcdoc2 } = $$props;
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
      $$invalidate(1, srcdoc2 = $$props2.srcdoc);
    if ("serializedSource" in $$props2)
      $$invalidate(2, serializedSource = $$props2.serializedSource);
  };
  return [iframe, srcdoc2, serializedSource, iframe_1_binding];
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
var srcdoc = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />

		<script defer type="module">
			var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function a(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}let d,f;function l(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function u(t){f=t}const p=[],h=[],m=[],g=[],$=Promise.resolve();let w=!1;function b(t){m.push(t)}const y=new Set;let v=0;function _(){const t=f;do{for(;v<p.length;){const t=p[v];v++,u(t),x(t.$$)}for(u(null),p.length=0,v=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];y.has(e)||(y.add(e),e())}m.length=0}while(p.length);for(;g.length;)g.pop()();w=!1,y.clear(),u(t)}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const E=new Set;const H="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function k(t,e){-1===t.$$.dirty[0]&&(p.push(t),w||(w=!0,$.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(s,c,a,d,l,p,h,m=[-1]){const g=f;u(s);const $=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||g.$$.root};h&&h($.root);let w=!1;if($.ctx=a?a(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),w&&k(s,t)),e})):[],$.update(),w=!0,o($.before_update),$.fragment=!!d&&d($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(E.delete(y),y.i(v))),function(t,n,s,i){const{fragment:c,on_mount:a,on_destroy:d,after_update:f}=t.$$;c&&c.m(n,s),i||b((()=>{const n=a.map(e).filter(r);d?d.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(b)}(s,c.target,c.anchor,c.customElement),_()}var y,v;u(g)}function W(t,e){document.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(t,Object.assign({version:"3.48.0"},e),{bubbles:!0}))}const j="UPDATED",{window:I}=H;function S(e){let n,o,r,s;const d={c:function(){var t,o,r;n=c("div"),function(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}(t=n,o="id",r="app"),null==r?W("SvelteDOMRemoveAttribute",{node:t,attribute:o}):W("SvelteDOMSetAttribute",{node:t,attribute:o,value:r}),b((()=>e[3].call(n))),function(t,e,n,o,r){t.__svelte_meta={loc:{file:e,line:n,column:o,char:r}}}(n,"src\\\\lib\\\\iframeSrc\\\\InnerHandler.svelte",34,0,972)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,d){!function(t,e,n){W("SvelteDOMInsert",{target:t,node:e,anchor:n}),function(t,e,n){t.insertBefore(e,n||null)}(t,e,n)}(t,n,d),o=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=c("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=l();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\\/script>",r=a(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=a(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(o||r&&n.contentWindow)&&r(),i(n)}}(n,e[3].bind(n)),r||(s=function(t,e,n,o,r,s){const i=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];r&&i.push("preventDefault"),s&&i.push("stopPropagation"),W("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:i});const c=a(t,e,n,o);return()=>{W("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:i}),c()}}(I,"message",e[2],!1,!1,!1),r=!0)},p:t,i:t,o:t,d:function(t){var e;t&&(W("SvelteDOMRemove",{node:e=n}),i(e)),o(),r=!1,s()}};return W("SvelteRegisterBlock",{block:d,id:S.name,type:"component",source:"",ctx:e}),d}function A(t,e,n){let{$$slots:o={},$$scope:r}=e;!function(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(\`<\${t}> received an unexpected slot "\${o}".\`)}("InnerHandler",o,[]);let s,{offsetWidth:i}=e,{offsetHeight:c}=e;async function a(t){const{esModule:e,props:n}=t.data,o=new Blob([e],{type:"text/javascript"}),r=URL.createObjectURL(o);import(r).then((function({default:t}){s&&s.$destroy(),document.getElementById("app").innerHTML="",s=new t({target:document.getElementById("app")||document.body,props:{...n}}),window.parent.postMessage(j,window.parent)}))}const d=["offsetWidth","offsetHeight"];return Object.keys(e).forEach((t=>{~d.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<InnerHandler> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"offsetWidth"in t&&n(0,i=t.offsetWidth),"offsetHeight"in t&&n(1,c=t.offsetHeight)},t.$capture_state=()=>({UPDATED:j,offsetWidth:i,offsetHeight:c,component:s,handleMessage:a}),t.$inject_state=t=>{"offsetWidth"in t&&n(0,i=t.offsetWidth),"offsetHeight"in t&&n(1,c=t.offsetHeight),"component"in t&&(s=t.component)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,c,a,function(){i=this.offsetWidth,c=this.offsetHeight,n(0,i),n(1,c)}]}return new class extends class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}{constructor(t){super(t),O(this,t,A,S,s,{offsetWidth:0,offsetHeight:1}),W("SvelteRegisterComponent",{component:this,tagName:"InnerHandler",options:t,id:S.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[0]||"offsetWidth"in n||console.warn("<InnerHandler> was created without expected prop 'offsetWidth'"),void 0!==e[1]||"offsetHeight"in n||console.warn("<InnerHandler> was created without expected prop 'offsetHeight'")}get offsetWidth(){throw new Error("<InnerHandler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set offsetWidth(t){throw new Error("<InnerHandler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get offsetHeight(){throw new Error("<InnerHandler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set offsetHeight(t){throw new Error("<InnerHandler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}({target:document.body,props:{}})}();

		<\/script>
	</head>

	<body></body>
</html>
`;
const UPDATED = "UPDATED";
function create_fragment$1(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[4](value);
  }
  let iframe_1_props = {
    srcdoc,
    serializedSource: ctx[0]
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
      if (dirty & 1)
        iframe_1_changes.serializedSource = ctx2[0];
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
function instance$1($$self, $$props, $$invalidate) {
  let { esModule } = $$props;
  let { props } = $$props;
  let { serializedSource } = $$props;
  let iframe;
  const handleLoad = async () => {
    window.addEventListener("message", (event) => {
      if (iframe && event.data == UPDATED) {
        $$invalidate(0, serializedSource = new XMLSerializer().serializeToString(iframe == null ? void 0 : iframe.contentWindow.document));
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
    $$invalidate(1, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("esModule" in $$props2)
      $$invalidate(2, esModule = $$props2.esModule);
    if ("props" in $$props2)
      $$invalidate(3, props = $$props2.props);
    if ("serializedSource" in $$props2)
      $$invalidate(0, serializedSource = $$props2.serializedSource);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      esModule && update({ esModule, props });
    }
    if ($$self.$$.dirty & 2) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
  };
  return [serializedSource, iframe, esModule, props, iframe_1_iframe_binding];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      esModule: 2,
      props: 3,
      serializedSource: 0
    });
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
function create_if_block(ctx) {
  let gateway;
  let current;
  gateway = new Gateway({
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
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(6, $page = $$value));
  let url = "https://bafybeidchd6z3eydlkl7sloi4banjjk46aurusxj2ky2v5zj7zzzwsgwsq.ipfs.cf-ipfs.com/";
  let component;
  let props = { name: "Douglas" };
  onMount(() => {
    $$invalidate(0, url = $page.url.searchParams.get("url"));
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
//# sourceMappingURL=index.svelte-a298031a.js.map
