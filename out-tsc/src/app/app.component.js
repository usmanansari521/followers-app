import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./navbar/navbar.component";
export class AppComponent {
    constructor() {
        this.title = 'http-services';
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "navbar");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
        } }, dependencies: [i1.RouterOutlet, i2.NavbarComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<navbar></navbar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=app.component.js.map