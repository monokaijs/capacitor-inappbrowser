import { WebPlugin } from "@capacitor/core";
import type { InAppBrowserPlugin, OpenWebViewOptions, OpenOptions, GetCookieOptions } from "./definitions";
export declare class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
    open(options: OpenOptions): Promise<any>;
    clearCookies(): Promise<any>;
    getCookies(options: GetCookieOptions): Promise<any>;
    openWebView(options: OpenWebViewOptions): Promise<any>;
    close(): Promise<any>;
    setUrl(options: {
        url: string;
    }): Promise<any>;
    reload(): Promise<any>;
}
