import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./data.service";
export class GithubFollowersService {
    constructor(dataServie) {
        this.dataServie = dataServie;
        this.url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    getAll() {
        return this.dataServie.getAll(this.url);
    }
    static { this.ɵfac = function GithubFollowersService_Factory(t) { return new (t || GithubFollowersService)(i0.ɵɵinject(i1.DataService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GithubFollowersService, factory: GithubFollowersService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DataService }], null); })();
//# sourceMappingURL=github-followers.service.js.map