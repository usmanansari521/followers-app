import { Component } from '@angular/core';
import { combineLatest, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/github-followers.service";
import * as i3 from "@angular/common";
const _c0 = (a0, a1) => ["/followers", a0, a1];
function GithubFollowersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
    i0.ɵɵelement(3, "img", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 5)(5, "h4", 6)(6, "a", 7);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", follower_r1.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(4, _c0, follower_r1.login, follower_r1.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(follower_r1.login);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(follower_r1.html_url);
} }
export class GithubFollowersComponent {
    constructor(route, githubFollowersService) {
        this.route = route;
        this.githubFollowersService = githubFollowersService;
        this.followers = [];
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            // this.githubFollowersService.getAll({ id: id, page: page });
            return this.githubFollowersService.getAll();
        }))
            .subscribe(followers => this.followers = followers);
    }
    static { this.ɵfac = function GithubFollowersComponent_Factory(t) { return new (t || GithubFollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.GithubFollowersService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowersComponent, selectors: [["github-followers"]], decls: 1, vars: 1, consts: [["class", "media", 4, "ngFor", "ngForOf"], [1, "media"], [1, "media-left"], ["href", "#"], ["alt", "...", 1, "avatar", "media-object", 3, "src"], [1, "media-body"], [1, "media-heading"], [3, "routerLink"], ["href", "follower.html_url"]], template: function GithubFollowersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GithubFollowersComponent_div_0_Template, 10, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.followers);
        } }, dependencies: [i3.NgForOf, i1.RouterLink], styles: [".avatar[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersComponent, [{
        type: Component,
        args: [{ selector: 'github-followers', template: "<div *ngFor=\"let follower of followers\" class=\"media\">\r\n    <div class=\"media-left\">\r\n      <a href=\"#\">\r\n        <img class=\"avatar media-object\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\r\n      </a>\r\n    </div>\r\n    <div class=\"media-body\">\r\n      <h4 class=\"media-heading\"><a [routerLink]=\"['/followers', follower.login, follower.id]\">{{ follower.login }}</a></h4>\r\n      <a href=\"follower.html_url\">{{ follower.html_url }}</a>\r\n    </div>\r\n  </div>", styles: ["\r\n.avatar {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n}"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.GithubFollowersService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GithubFollowersComponent, { className: "GithubFollowersComponent", filePath: "src\\app\\github-followers\\github-followers.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=github-followers.component.js.map