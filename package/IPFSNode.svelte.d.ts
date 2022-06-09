/** @typedef {typeof __propDef.props}  IpfsNodeProps */
/** @typedef {typeof __propDef.events}  IpfsNodeEvents */
/** @typedef {typeof __propDef.slots}  IpfsNodeSlots */
export default class IpfsNode extends SvelteComponentTyped<{
    path: any;
    height?: string;
    content?: {};
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IpfsNodeProps = typeof __propDef.props;
export type IpfsNodeEvents = typeof __propDef.events;
export type IpfsNodeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        path: any;
        height?: string;
        content?: {};
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
