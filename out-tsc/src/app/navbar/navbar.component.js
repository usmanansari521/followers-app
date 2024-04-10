import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ({ page: 1, order: "newest" });
export class NavbarComponent {
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], decls: 10, vars: 2, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active current"], ["routerLink", "/followers", 3, "queryParams"], ["routerLink", "/posts"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
            i0.ɵɵtext(6, " Followers ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "li", 4)(8, "a", 6);
            i0.ɵɵtext(9, "Posts");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink, i1.RouterLinkActive] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'navbar', template: "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active current\">\r\n          <a routerLink=\"/followers\" [queryParams]=\"{ page: 1, order: 'newest' }\">\r\n            Followers\r\n          </a>\r\n        </li>\r\n        <li routerLinkActive=\"active current\"><a routerLink=\"/posts\">Posts</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\navbar\\navbar.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=navbar.component.js.map