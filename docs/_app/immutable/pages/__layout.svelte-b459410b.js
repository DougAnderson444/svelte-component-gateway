import { SvelteComponent, init, safe_not_equal, create_slot, element, text, space, query_selector_all, claim_element, children, detach, claim_text, claim_space, src_url_equal, attr, append_hydration, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out } from "../chunks/index-44bcea44.js";
var app = "";
function create_fragment(ctx) {
  let script0;
  let script0_src_value;
  let link0;
  let link1;
  let link2;
  let link3;
  let script1;
  let t0;
  let t1;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      script0 = element("script");
      link0 = element("link");
      link1 = element("link");
      link2 = element("link");
      link3 = element("link");
      script1 = element("script");
      t0 = text("tailwind.config = {\r\n			theme: {\r\n				extend: {\r\n					colors: {\r\n						clifford: '#da373d'\r\n					}\r\n				}\r\n			}\r\n		};");
      t1 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-y4b35z"]', document.head);
      script0 = claim_element(head_nodes, "SCRIPT", { src: true });
      var script0_nodes = children(script0);
      script0_nodes.forEach(detach);
      link0 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      link1 = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true,
        integrity: true,
        crossorigin: true,
        referrerpolicy: true
      });
      link2 = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true,
        integrity: true,
        crossorigin: true,
        referrerpolicy: true
      });
      link3 = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true,
        integrity: true,
        crossorigin: true,
        referrerpolicy: true
      });
      script1 = claim_element(head_nodes, "SCRIPT", {});
      var script1_nodes = children(script1);
      t0 = claim_text(script1_nodes, "tailwind.config = {\r\n			theme: {\r\n				extend: {\r\n					colors: {\r\n						clifford: '#da373d'\r\n					}\r\n				}\r\n			}\r\n		};");
      script1_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(script0.src, script0_src_value = "https://cdn.tailwindcss.com"))
        attr(script0, "src", script0_src_value);
      attr(link0, "href", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
      attr(link0, "rel", "stylesheet");
      attr(link1, "rel", "stylesheet");
      attr(link1, "href", "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/base.min.css");
      attr(link1, "integrity", "sha512-TbSbl7LIRNEKzATRyVAfAPIfRmd/2lMmh3YtkMELfpGSkUJP8CDxebT1XDw9LBU1N5vK+So58Goia0XlztByug==");
      attr(link1, "crossorigin", "anonymous");
      attr(link1, "referrerpolicy", "no-referrer");
      attr(link2, "rel", "stylesheet");
      attr(link2, "href", "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/components.min.css");
      attr(link2, "integrity", "sha512-f6TS5CFJrH/EWmarcBwG54/kW9wwejYMcw+I7fRnGf33Vv4yCvy4BecCKTti3l8e8HnUiIbxx3V3CuUYGqR1uQ==");
      attr(link2, "crossorigin", "anonymous");
      attr(link2, "referrerpolicy", "no-referrer");
      attr(link3, "rel", "stylesheet");
      attr(link3, "href", "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/utilities.min.css");
      attr(link3, "integrity", "sha512-Y8cJYgNbd3VacNNezxAdncUu75Uj7uR/Dtb4ffepQrtFww5/QlgYt2IwexMwB8/SZWCCVe6kOY20A2Q4zQf5vQ==");
      attr(link3, "crossorigin", "anonymous");
      attr(link3, "referrerpolicy", "no-referrer");
    },
    m(target, anchor) {
      append_hydration(document.head, script0);
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      append_hydration(document.head, link2);
      append_hydration(document.head, link3);
      append_hydration(document.head, script1);
      append_hydration(script1, t0);
      insert_hydration(target, t1, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      detach(script0);
      detach(link0);
      detach(link1);
      detach(link2);
      detach(link3);
      detach(script1);
      if (detaching)
        detach(t1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
//# sourceMappingURL=__layout.svelte-b459410b.js.map
