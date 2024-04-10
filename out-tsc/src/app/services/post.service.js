import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./data.service";
export class PostService {
    constructor(dataService) {
        this.dataService = dataService;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    getAllPosts() {
        return this.dataService.getAll(this.url);
    }
    createPost(newPost) {
        return this.dataService.create(this.url, newPost);
    }
    updatePost(post) {
        return this.dataService.update(this.url, post);
    }
    deletePost(id) {
        return this.dataService.delete(this.url, id);
    }
    static { this.ɵfac = function PostService_Factory(t) { return new (t || PostService)(i0.ɵɵinject(i1.DataService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DataService }], null); })();
//# sourceMappingURL=post.service.js.map