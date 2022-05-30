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
import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, append_hydration, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, createEventDispatcher, getContext, set_style, set_input_value, listen, set_data, check_outros, run_all, component_subscribe, onMount, globals, group_outros } from "../chunks/index-2b231d21.js";
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
      attr(div0, "class", "header svelte-1yd6ark");
      attr(iframe_1, "title", "Rendered Component");
      attr(iframe_1, "srcdoc", ctx[1]);
      attr(iframe_1, "class", "svelte-1yd6ark");
      attr(div1, "class", "iframe-inner svelte-1yd6ark");
      attr(div2, "class", "iframe-container svelte-1yd6ark");
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
var srcdoc = '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width,initial-scale=1" />\n\n		<script defer type="module">\n			var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function a(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}let d,l;function u(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function f(e){l=e}function p(e){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(e)}const g=[],m=[],h=[],y=[],$=Promise.resolve();let w=!1;function v(e){h.push(e)}const b=new Set;let E=0;function k(){const e=l;do{for(;E<g.length;){const e=g[E];E++,f(e),C(e.$$)}for(f(null),g.length=0,E=0;m.length;)m.pop()();for(let e=0;e<h.length;e+=1){const t=h[e];b.has(t)||(b.add(t),t())}h.length=0}while(g.length);for(;y.length;)y.pop()();w=!1,b.clear(),f(e)}function C(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const R=new Set;function x(e,t){-1===e.$$.dirty[0]&&(g.push(e),w||(w=!0,$.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function S(i,c,a,d,u,p,g,m=[-1]){const h=l;f(i);const y=i.$$={fragment:null,ctx:null,props:p,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(h?h.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||h.$$.root};g&&g(y.root);let $=!1;if(y.ctx=a?a(i,c.props||{},((e,t,...n)=>{const o=n.length?n[0]:t;return y.ctx&&u(y.ctx[e],y.ctx[e]=o)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](o),$&&x(i,e)),t})):[],y.update(),$=!0,o(y.before_update),y.fragment=!!d&&d(y.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);y.fragment&&y.fragment.l(e),e.forEach(s)}else y.fragment&&y.fragment.c();c.intro&&((w=i.$$.fragment)&&w.i&&(R.delete(w),w.i(b))),function(e,n,i,s){const{fragment:c,on_mount:a,on_destroy:d,after_update:l}=e.$$;c&&c.m(n,i),s||v((()=>{const n=a.map(t).filter(r);d?d.push(...n):o(n),e.$$.on_mount=[]})),l.forEach(v)}(i,c.target,c.anchor,c.customElement),k()}var w,b;f(h)}var _,j,M,L,A;!function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(_||(_={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(j||(j={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NoIframeSrc="NoIframeSrc"}(M||(M={})),function(e){e.DataCloneError="DataCloneError"}(L||(L={})),function(e){e.Message="message"}(A||(A={}));const N=({name:e,message:t,stack:n})=>({name:e,message:t,stack:n});let O=0;var D=()=>++O;const F=e=>e?e.split("."):[],H=(e,t,n)=>{const o=F(t);return o.reduce(((e,t,r)=>(void 0===e[t]&&(e[t]={}),r===o.length-1&&(e[t]=n),e[t])),e),e},I=(e,t)=>{const n={};return Object.keys(e).forEach((o=>{const r=e[o],i=((e,t)=>{const n=F(t||"");return n.push(e),(e=>e.join("."))(n)})(o,t);"object"==typeof r&&Object.assign(n,I(r,i)),"function"==typeof r&&(n[i]=r)})),n};var U=(e,t,n,o,r)=>{const{localName:i,local:s,remote:c,originForSending:a,originForReceiving:d}=t;let l=!1;r(`${i}: Connecting call sender`);const u=e=>(...t)=>{let n;r(`${i}: Sending ${e}() call`);try{c.closed&&(n=!0)}catch(e){n=!0}if(n&&o(),l){const t=new Error(`Unable to send ${e}() call due to destroyed connection`);throw t.code=M.ConnectionDestroyed,t}return new Promise(((n,o)=>{const l=D(),u=t=>{if(t.source!==c||t.data.penpal!==_.Reply||t.data.id!==l)return;if("*"!==d&&t.origin!==d)return void r(`${i} received message from origin ${t.origin} which did not match expected origin ${d}`);const a=t.data;r(`${i}: Received ${e}() reply`),s.removeEventListener(A.Message,u);let f=a.returnValue;a.returnValueIsError&&(f=(e=>{const t=new Error;return Object.keys(e).forEach((n=>t[n]=e[n])),t})(f)),(a.resolution===j.Fulfilled?n:o)(f)};s.addEventListener(A.Message,u);const f={penpal:_.Call,id:l,methodName:e,args:t};c.postMessage(f,a)}))},f=n.reduce(((e,t)=>(e[t]=u(t),e)),{});return Object.assign(e,(e=>{const t={};for(const n in e)H(t,n,e[n]);return t})(f)),()=>{l=!0}},W=(e,t,n,o)=>{const{destroy:r,onDestroy:i}=n;return n=>{if(!(e instanceof RegExp?e.test(n.origin):"*"===e||e===n.origin))return void o(`Child: Handshake - Received SYN-ACK from origin ${n.origin} which did not match expected origin ${e}`);o("Child: Handshake - Received SYN-ACK, responding with ACK");const s="null"===n.origin?"*":n.origin,c={penpal:_.Ack,methodNames:Object.keys(t)};window.parent.postMessage(c,s);const a={localName:"Child",local:window,remote:window.parent,originForSending:s,originForReceiving:n.origin},d=((e,t,n)=>{const{localName:o,local:r,remote:i,originForSending:s,originForReceiving:c}=e;let a=!1;const d=e=>{if(e.source!==i||e.data.penpal!==_.Call)return;if("*"!==c&&e.origin!==c)return void n(`${o} received message from origin ${e.origin} which did not match expected origin ${c}`);const r=e.data,{methodName:d,args:l,id:u}=r;n(`${o}: Received ${d}() call`);const f=e=>t=>{if(n(`${o}: Sending ${d}() reply`),a)return void n(`${o}: Unable to send ${d}() reply due to destroyed connection`);const r={penpal:_.Reply,id:u,resolution:e,returnValue:t};e===j.Rejected&&t instanceof Error&&(r.returnValue=N(t),r.returnValueIsError=!0);try{i.postMessage(r,s)}catch(e){if(e.name===L.DataCloneError){const t={penpal:_.Reply,id:u,resolution:j.Rejected,returnValue:N(e),returnValueIsError:!0};i.postMessage(t,s)}throw e}};new Promise((e=>e(t[d].apply(t,l)))).then(f(j.Fulfilled),f(j.Rejected))};return r.addEventListener(A.Message,d),()=>{a=!0,r.removeEventListener(A.Message,d)}})(a,t,o);i(d);const l={},u=U(l,a,n.data.methodNames,r,o);return i(u),l}};var T=(e={})=>{const{parentOrigin:t="*",methods:n={},timeout:o,debug:r=!1}=e,i=(e=>(...t)=>{e&&console.log("[Penpal]",...t)})(r),s=((e,t)=>{const n=[];let o=!1;return{destroy(r){o||(o=!0,t(`${e}: Destroying connection`),n.forEach((e=>{e(r)})))},onDestroy(e){o?e():n.push(e)}}})("Child",i),{destroy:c,onDestroy:a}=s,d=I(n),l=W(t,d,s,i),u=new Promise(((e,n)=>{const r=((e,t)=>{let n;return void 0!==e&&(n=window.setTimeout((()=>{const n=new Error(`Connection timed out after ${e}ms`);n.code=M.ConnectionTimeout,t(n)}),e)),()=>{clearTimeout(n)}})(o,c),s=t=>{if((()=>{try{clearTimeout()}catch(e){return!1}return!0})()&&t.source===parent&&t.data&&t.data.penpal===_.SynAck){const n=l(t);n&&(window.removeEventListener(A.Message,s),r(),e(n))}};window.addEventListener(A.Message,s),(()=>{i("Child: Handshake - Sending SYN");const e={penpal:_.Syn},n=t instanceof RegExp?"*":t;window.parent.postMessage(e,n)})(),a((e=>{window.removeEventListener(A.Message,s),e&&n(e)}))}));return{promise:u,destroy(){c()}}};function V(t){let n,o;return{c(){var e,o,r;n=c("div"),e=n,o="id",null==(r="app")?e.removeAttribute(o):e.getAttribute(o)!==r&&e.setAttribute(o,r),v((()=>t[2].call(n)))},m(e,r){!function(e,t,n){e.insertBefore(t,n||null)}(e,n,r),o=function(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=c("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=u();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,\'*\')}<\\/script>",r=a(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=a(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(o||r&&n.contentWindow)&&r(),s(n)}}(n,t[2].bind(n))},p:e,i:e,o:e,d(e){e&&s(n),o()}}}function P(e,t,n){let o,r,i,{offsetWidth:s}=t,{offsetHeight:c}=t;async function a({esModule:e,props:t}){const n=new Blob([e],{type:"text/javascript"});i=URL.createObjectURL(n),import(i).then((function({default:e}){e&&(o&&o.$destroy(),document.getElementById("app").innerHTML="",o=new e({target:document.getElementById("app")||document.body,props:{...t}}),o.$on("change",(e=>{console.log("change",e),r.updateProps(e.detail)})),URL.revokeObjectURL(i),r.setSerializedSource())}))}return p((async()=>{const e=T({methods:{loadEsModuleComponent:a}});return r=await e.promise,()=>{o&&o.$destroy(),i&&URL.revokeObjectURL(i)}})),e.$$set=e=>{"offsetWidth"in e&&n(0,s=e.offsetWidth),"offsetHeight"in e&&n(1,c=e.offsetHeight)},[s,c,function(){s=this.offsetWidth,c=this.offsetHeight,n(0,s),n(1,c)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),S(this,e,P,V,i,{offsetWidth:0,offsetHeight:1})}}({target:document.body,props:{}})}();\n\n		<\/script>\n	</head>\n\n	<body></body>\n</html>\n';
const CHANGE = "change";
var MessageType;
(function(MessageType2) {
  MessageType2["Call"] = "call";
  MessageType2["Reply"] = "reply";
  MessageType2["Syn"] = "syn";
  MessageType2["SynAck"] = "synAck";
  MessageType2["Ack"] = "ack";
})(MessageType || (MessageType = {}));
var Resolution;
(function(Resolution2) {
  Resolution2["Fulfilled"] = "fulfilled";
  Resolution2["Rejected"] = "rejected";
})(Resolution || (Resolution = {}));
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2["ConnectionDestroyed"] = "ConnectionDestroyed";
  ErrorCode2["ConnectionTimeout"] = "ConnectionTimeout";
  ErrorCode2["NoIframeSrc"] = "NoIframeSrc";
})(ErrorCode || (ErrorCode = {}));
var NativeErrorName;
(function(NativeErrorName2) {
  NativeErrorName2["DataCloneError"] = "DataCloneError";
})(NativeErrorName || (NativeErrorName = {}));
var NativeEventType;
(function(NativeEventType2) {
  NativeEventType2["Message"] = "message";
})(NativeEventType || (NativeEventType = {}));
var createDestructor = (localName, log) => {
  const callbacks = [];
  let destroyed = false;
  return {
    destroy(error) {
      if (!destroyed) {
        destroyed = true;
        log(`${localName}: Destroying connection`);
        callbacks.forEach((callback) => {
          callback(error);
        });
      }
    },
    onDestroy(callback) {
      destroyed ? callback() : callbacks.push(callback);
    }
  };
};
var createLogger = (debug) => {
  return (...args) => {
    if (debug) {
      console.log("[Penpal]", ...args);
    }
  };
};
const DEFAULT_PORT_BY_PROTOCOL = {
  "http:": "80",
  "https:": "443"
};
const URL_REGEX = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/;
const opaqueOriginSchemes = ["file:", "data:"];
var getOriginFromSrc = (src) => {
  if (src && opaqueOriginSchemes.find((scheme) => src.startsWith(scheme))) {
    return "null";
  }
  const location = document.location;
  const regexResult = URL_REGEX.exec(src);
  let protocol;
  let hostname;
  let port;
  if (regexResult) {
    protocol = regexResult[1] ? regexResult[1] : location.protocol;
    hostname = regexResult[2];
    port = regexResult[4];
  } else {
    protocol = location.protocol;
    hostname = location.hostname;
    port = location.port;
  }
  const portSuffix = port && port !== DEFAULT_PORT_BY_PROTOCOL[protocol] ? `:${port}` : "";
  return `${protocol}//${hostname}${portSuffix}`;
};
const serializeError = ({ name, message, stack }) => ({
  name,
  message,
  stack
});
const deserializeError = (obj) => {
  const deserializedError = new Error();
  Object.keys(obj).forEach((key) => deserializedError[key] = obj[key]);
  return deserializedError;
};
var connectCallReceiver = (info, serializedMethods, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  const handleMessageEvent = (event) => {
    if (event.source !== remote || event.data.penpal !== MessageType.Call) {
      return;
    }
    if (originForReceiving !== "*" && event.origin !== originForReceiving) {
      log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
      return;
    }
    const callMessage = event.data;
    const { methodName, args, id: id2 } = callMessage;
    log(`${localName}: Received ${methodName}() call`);
    const createPromiseHandler = (resolution) => {
      return (returnValue) => {
        log(`${localName}: Sending ${methodName}() reply`);
        if (destroyed) {
          log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
          return;
        }
        const message = {
          penpal: MessageType.Reply,
          id: id2,
          resolution,
          returnValue
        };
        if (resolution === Resolution.Rejected && returnValue instanceof Error) {
          message.returnValue = serializeError(returnValue);
          message.returnValueIsError = true;
        }
        try {
          remote.postMessage(message, originForSending);
        } catch (err) {
          if (err.name === NativeErrorName.DataCloneError) {
            const errorReplyMessage = {
              penpal: MessageType.Reply,
              id: id2,
              resolution: Resolution.Rejected,
              returnValue: serializeError(err),
              returnValueIsError: true
            };
            remote.postMessage(errorReplyMessage, originForSending);
          }
          throw err;
        }
      };
    };
    new Promise((resolve) => resolve(serializedMethods[methodName].apply(serializedMethods, args))).then(createPromiseHandler(Resolution.Fulfilled), createPromiseHandler(Resolution.Rejected));
  };
  local.addEventListener(NativeEventType.Message, handleMessageEvent);
  return () => {
    destroyed = true;
    local.removeEventListener(NativeEventType.Message, handleMessageEvent);
  };
};
let id = 0;
var generateId = () => ++id;
const KEY_PATH_DELIMITER = ".";
const keyPathToSegments = (keyPath) => keyPath ? keyPath.split(KEY_PATH_DELIMITER) : [];
const segmentsToKeyPath = (segments) => segments.join(KEY_PATH_DELIMITER);
const createKeyPath = (key, prefix) => {
  const segments = keyPathToSegments(prefix || "");
  segments.push(key);
  return segmentsToKeyPath(segments);
};
const setAtKeyPath = (subject, keyPath, value) => {
  const segments = keyPathToSegments(keyPath);
  segments.reduce((prevSubject, key, idx) => {
    if (typeof prevSubject[key] === "undefined") {
      prevSubject[key] = {};
    }
    if (idx === segments.length - 1) {
      prevSubject[key] = value;
    }
    return prevSubject[key];
  }, subject);
  return subject;
};
const serializeMethods = (methods, prefix) => {
  const flattenedMethods = {};
  Object.keys(methods).forEach((key) => {
    const value = methods[key];
    const keyPath = createKeyPath(key, prefix);
    if (typeof value === "object") {
      Object.assign(flattenedMethods, serializeMethods(value, keyPath));
    }
    if (typeof value === "function") {
      flattenedMethods[keyPath] = value;
    }
  });
  return flattenedMethods;
};
const deserializeMethods = (flattenedMethods) => {
  const methods = {};
  for (const keyPath in flattenedMethods) {
    setAtKeyPath(methods, keyPath, flattenedMethods[keyPath]);
  }
  return methods;
};
var connectCallSender = (callSender, info, methodKeyPaths, destroyConnection, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  log(`${localName}: Connecting call sender`);
  const createMethodProxy = (methodName) => {
    return (...args) => {
      log(`${localName}: Sending ${methodName}() call`);
      let iframeRemoved;
      try {
        if (remote.closed) {
          iframeRemoved = true;
        }
      } catch (e) {
        iframeRemoved = true;
      }
      if (iframeRemoved) {
        destroyConnection();
      }
      if (destroyed) {
        const error = new Error(`Unable to send ${methodName}() call due to destroyed connection`);
        error.code = ErrorCode.ConnectionDestroyed;
        throw error;
      }
      return new Promise((resolve, reject) => {
        const id2 = generateId();
        const handleMessageEvent = (event) => {
          if (event.source !== remote || event.data.penpal !== MessageType.Reply || event.data.id !== id2) {
            return;
          }
          if (originForReceiving !== "*" && event.origin !== originForReceiving) {
            log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
            return;
          }
          const replyMessage = event.data;
          log(`${localName}: Received ${methodName}() reply`);
          local.removeEventListener(NativeEventType.Message, handleMessageEvent);
          let returnValue = replyMessage.returnValue;
          if (replyMessage.returnValueIsError) {
            returnValue = deserializeError(returnValue);
          }
          (replyMessage.resolution === Resolution.Fulfilled ? resolve : reject)(returnValue);
        };
        local.addEventListener(NativeEventType.Message, handleMessageEvent);
        const callMessage = {
          penpal: MessageType.Call,
          id: id2,
          methodName,
          args
        };
        remote.postMessage(callMessage, originForSending);
      });
    };
  };
  const flattenedMethods = methodKeyPaths.reduce((api, name) => {
    api[name] = createMethodProxy(name);
    return api;
  }, {});
  Object.assign(callSender, deserializeMethods(flattenedMethods));
  return () => {
    destroyed = true;
  };
};
var handleAckMessageFactory = (serializedMethods, childOrigin, originForSending, destructor, log) => {
  const { destroy, onDestroy } = destructor;
  let destroyCallReceiver;
  let receiverMethodNames;
  const callSender = {};
  return (event) => {
    if (childOrigin !== "*" && event.origin !== childOrigin) {
      log(`Parent: Handshake - Received ACK message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
      return;
    }
    log("Parent: Handshake - Received ACK");
    const info = {
      localName: "Parent",
      local: window,
      remote: event.source,
      originForSending,
      originForReceiving: childOrigin
    };
    if (destroyCallReceiver) {
      destroyCallReceiver();
    }
    destroyCallReceiver = connectCallReceiver(info, serializedMethods, log);
    onDestroy(destroyCallReceiver);
    if (receiverMethodNames) {
      receiverMethodNames.forEach((receiverMethodName) => {
        delete callSender[receiverMethodName];
      });
    }
    receiverMethodNames = event.data.methodNames;
    const destroyCallSender = connectCallSender(callSender, info, receiverMethodNames, destroy, log);
    onDestroy(destroyCallSender);
    return callSender;
  };
};
var handleSynMessageFactory = (log, serializedMethods, childOrigin, originForSending) => {
  return (event) => {
    if (!event.source) {
      return;
    }
    if (childOrigin !== "*" && event.origin !== childOrigin) {
      log(`Parent: Handshake - Received SYN message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
      return;
    }
    log("Parent: Handshake - Received SYN, responding with SYN-ACK");
    const synAckMessage = {
      penpal: MessageType.SynAck,
      methodNames: Object.keys(serializedMethods)
    };
    event.source.postMessage(synAckMessage, originForSending);
  };
};
const CHECK_IFRAME_IN_DOC_INTERVAL = 6e4;
var monitorIframeRemoval = (iframe, destructor) => {
  const { destroy, onDestroy } = destructor;
  const checkIframeInDocIntervalId = setInterval(() => {
    if (!iframe.isConnected) {
      clearInterval(checkIframeInDocIntervalId);
      destroy();
    }
  }, CHECK_IFRAME_IN_DOC_INTERVAL);
  onDestroy(() => {
    clearInterval(checkIframeInDocIntervalId);
  });
};
var startConnectionTimeout = (timeout, callback) => {
  let timeoutId;
  if (timeout !== void 0) {
    timeoutId = window.setTimeout(() => {
      const error = new Error(`Connection timed out after ${timeout}ms`);
      error.code = ErrorCode.ConnectionTimeout;
      callback(error);
    }, timeout);
  }
  return () => {
    clearTimeout(timeoutId);
  };
};
var validateIframeHasSrcOrSrcDoc = (iframe) => {
  if (!iframe.src && !iframe.srcdoc) {
    const error = new Error("Iframe must have src or srcdoc property defined.");
    error.code = ErrorCode.NoIframeSrc;
    throw error;
  }
};
var connectToChild = (options) => {
  let { iframe, methods = {}, childOrigin, timeout, debug = false } = options;
  const log = createLogger(debug);
  const destructor = createDestructor("Parent", log);
  const { onDestroy, destroy } = destructor;
  if (!childOrigin) {
    validateIframeHasSrcOrSrcDoc(iframe);
    childOrigin = getOriginFromSrc(iframe.src);
  }
  const originForSending = childOrigin === "null" ? "*" : childOrigin;
  const serializedMethods = serializeMethods(methods);
  const handleSynMessage = handleSynMessageFactory(log, serializedMethods, childOrigin, originForSending);
  const handleAckMessage = handleAckMessageFactory(serializedMethods, childOrigin, originForSending, destructor, log);
  const promise = new Promise((resolve, reject) => {
    const stopConnectionTimeout = startConnectionTimeout(timeout, destroy);
    const handleMessage = (event) => {
      if (event.source !== iframe.contentWindow || !event.data) {
        return;
      }
      if (event.data.penpal === MessageType.Syn) {
        handleSynMessage(event);
        return;
      }
      if (event.data.penpal === MessageType.Ack) {
        const callSender = handleAckMessage(event);
        if (callSender) {
          stopConnectionTimeout();
          resolve(callSender);
        }
        return;
      }
    };
    window.addEventListener(NativeEventType.Message, handleMessage);
    log("Parent: Awaiting handshake");
    monitorIframeRemoval(iframe, destructor);
    onDestroy((error) => {
      window.removeEventListener(NativeEventType.Message, handleMessage);
      if (error) {
        reject(error);
      }
    });
  });
  return {
    promise,
    destroy() {
      destroy();
    }
  };
};
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
  let child;
  const dispatch = createEventDispatcher();
  const handleLoad = async () => {
    if (!esModule)
      throw new Error("Missing esModule");
    const connection = connectToChild({
      iframe,
      methods: {
        updateProps(newProps) {
          $$invalidate(2, props = __spreadValues(__spreadValues({}, props), newProps));
        },
        setSerializedSource() {
          $$invalidate(0, serializedSource = new XMLSerializer().serializeToString(iframe == null ? void 0 : iframe.contentWindow.document));
        }
      }
    });
    child = await connection.promise;
    child.loadEsModuleComponent({ esModule, props });
  };
  function iframe_1_iframe_binding(value) {
    iframe = value;
    $$invalidate(1, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("esModule" in $$props2)
      $$invalidate(3, esModule = $$props2.esModule);
    if ("props" in $$props2)
      $$invalidate(2, props = $$props2.props);
    if ("serializedSource" in $$props2)
      $$invalidate(0, serializedSource = $$props2.serializedSource);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      if (props)
        dispatch(CHANGE, props);
    }
    if ($$self.$$.dirty & 2) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
  };
  return [serializedSource, iframe, props, esModule, iframe_1_iframe_binding];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      esModule: 3,
      props: 2,
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
var index_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block(ctx) {
  let gateway;
  let updating_props;
  let current;
  function gateway_props_binding(value) {
    ctx[8](value);
  }
  let gateway_props = {
    esModule: ctx[1],
    width: ctx[3],
    height: ctx[4]
  };
  if (ctx[2] !== void 0) {
    gateway_props.props = ctx[2];
  }
  gateway = new Gateway({ props: gateway_props });
  binding_callbacks.push(() => bind(gateway, "props", gateway_props_binding));
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
      if (dirty & 8)
        gateway_changes.width = ctx2[3];
      if (dirty & 16)
        gateway_changes.height = ctx2[4];
      if (!updating_props && dirty & 4) {
        updating_props = true;
        gateway_changes.props = ctx2[2];
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
function create_fragment(ctx) {
  let div1;
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
  let div0;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block(ctx);
  return {
    c() {
      div1 = element("div");
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
      div0 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Svelte Component Gateway");
      h1_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
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
      t5 = claim_text(div1_nodes, "\n\n	Props: ");
      t6 = claim_text(div1_nodes, t6_value);
      t7 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
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
      attr(div0, "class", "border flex-auto");
      attr(div1, "class", "app svelte-md7319");
      set_style(div1, "--vh", ctx[5] + "px");
      set_style(div1, "height", "calc(var(--vh, 1vh) * 100)");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      append_hydration(div1, t1);
      append_hydration(div1, p);
      append_hydration(p, t2);
      append_hydration(p, input);
      set_input_value(input, ctx[0]);
      append_hydration(p, t3);
      append_hydration(p, a);
      append_hydration(a, t4);
      append_hydration(div1, t5);
      append_hydration(div1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, div0);
      if (if_block)
        if_block.m(div0, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(window_1, "resize", ctx[6]),
          listen(input, "input", ctx[7])
        ];
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
      if ((!current || dirty & 4) && t6_value !== (t6_value = JSON.stringify(ctx2[2]) + ""))
        set_data(t6, t6_value);
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
          if_block.m(div0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 32) {
        set_style(div1, "--vh", ctx2[5] + "px");
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
        detach(div1);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(10, $page = $$value));
  let url = "https://bafybeifeyoww62kxwmpdkqpqou6yxjpo7jstfxujfoxjy5exqjvldyqixu.ipfs.dweb.link";
  let component;
  let props = { name: "Douglas" };
  let width;
  let height;
  let vh;
  onMount(() => {
    $$invalidate(0, url = $page.url.searchParams.get("url") || url);
    handleViewportSize();
  });
  function handleViewportSize(_) {
    $$invalidate(5, vh = window.innerHeight * 0.01);
    $$invalidate(4, height = window.innerHeight);
    $$invalidate(3, width = document == null ? void 0 : document.body.clientWidth);
  }
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
  function gateway_props_binding(value) {
    props = value;
    $$invalidate(2, props);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (url)
        doFetch(url);
    }
  };
  return [
    url,
    component,
    props,
    width,
    height,
    vh,
    handleViewportSize,
    input_input_handler,
    gateway_props_binding
  ];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-ec3136ab.js.map
