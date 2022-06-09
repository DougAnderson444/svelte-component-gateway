/** @typedef {typeof __propDef.props}  FetchComponentProps */
/** @typedef {typeof __propDef.events}  FetchComponentEvents */
/** @typedef {typeof __propDef.slots}  FetchComponentSlots */
export default class FetchComponent extends SvelteComponentTyped<{
    url: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        component: any;
    };
}> {
}
export type FetchComponentProps = typeof __propDef.props;
export type FetchComponentEvents = typeof __propDef.events;
export type FetchComponentSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        url: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            component: any;
        };
    };
};
export {};
