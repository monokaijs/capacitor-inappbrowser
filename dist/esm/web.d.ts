import { WebPlugin } from "@capacitor/core";
import { InAppBrowserPlugin, OpenWebViewOptions, OpenOptions, GetCookieOptions, ClearCookieOptions } from "./definitions";
export declare class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
    open(options: OpenOptions): Promise<any>;
    clearCookies(options: ClearCookieOptions): Promise<any>;
    getCookies(options: GetCookieOptions): Promise<any>;
    openWebView(options: OpenWebViewOptions): Promise<any>;
    close(): Promise<any>;
    setUrl(options: {
        url: string;
    }): Promise<any>;
    reload(): Promise<any>;
}
