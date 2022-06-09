/** @typedef {typeof __propDef.props}  InnerHandlerProps */
/** @typedef {typeof __propDef.events}  InnerHandlerEvents */
/** @typedef {typeof __propDef.slots}  InnerHandlerSlots */
export default class InnerHandler extends SvelteComponentTyped<{
    offsetWidth: any;
    offsetHeight: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InnerHandlerProps = typeof __propDef.props;
export type InnerHandlerEvents = typeof __propDef.events;
export type InnerHandlerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        offsetWidth: any;
        offsetHeight: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
