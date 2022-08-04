/** @typedef {typeof __propDef.props}  GatewayProps */
/** @typedef {typeof __propDef.events}  GatewayEvents */
/** @typedef {typeof __propDef.slots}  GatewaySlots */
export default class Gateway extends SvelteComponentTyped<{
    esModule: any;
    props: any;
    css?: any;
    rendered?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GatewayProps = typeof __propDef.props;
export type GatewayEvents = typeof __propDef.events;
export type GatewaySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        esModule: any;
        props: any;
        css?: any;
        rendered?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
