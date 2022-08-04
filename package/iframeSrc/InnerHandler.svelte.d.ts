/** @typedef {typeof __propDef.props}  InnerHandlerProps */
/** @typedef {typeof __propDef.events}  InnerHandlerEvents */
/** @typedef {typeof __propDef.slots}  InnerHandlerSlots */
export default class InnerHandler extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InnerHandlerProps = typeof __propDef.props;
export type InnerHandlerEvents = typeof __propDef.events;
export type InnerHandlerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
