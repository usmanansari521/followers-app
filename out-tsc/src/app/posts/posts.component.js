import { Component } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import * as i0 from "@angular/core";
import * as i1 from "../services/post.service";
import * as i2 from "@angular/material/snack-bar";
import * as i3 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { const post_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.updatePost(post_r4)); });
    i0.ɵɵtext(2, " Update ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "button", 6);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_4_listener() { const post_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.deletePost(post_r4)); });
    i0.ɵɵtext(5, " Delete ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r4.title, " ");
} }
export class PostsComponent {
    constructor(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.posts = [];
    }
    ngOnInit() {
        this.service.getAllPosts()
            .subscribe(posts => this.posts = posts);
    }
    createPost(input) {
        const newPost = {
            id: 0,
            userId: 0,
            title: input.value,
            body: ''
        };
        this.posts.splice(0, 0, newPost);
        input.value = '';
        this.service.createPost(newPost)
            .subscribe(post => {
            newPost.id = post.id;
            console.log(newPost);
        }, (error) => {
            this.posts.splice(0, 1);
            if (error instanceof BadRequestError) {
                // this.form.setErrors(error.originalError);
            }
            else
                throw error;
        });
    }
    updatePost(post) {
        this.service.updatePost(post)
            .subscribe(updatedPost => console.log(updatedPost));
    }
    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.deletePost(post.id)
            .subscribe(() => {
            console.log('deleted');
        }, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError) {
                this.snackBar.open('This post has already been deleted');
            }
            else
                throw error;
        });
    }
    static { this.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService), i0.ɵɵdirectiveInject(i2.MatSnackBar)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["posts"]], decls: 4, vars: 1, consts: [["title", ""], ["type", "text", "placeholder", "Type new post title...", 1, "form-control", 3, "keyup.enter"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-default", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 1, 0);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r1); const title_r2 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.createPost(title_r2)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 6, 1, "li", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [i3.NgForOf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'posts', template: "\r\n<input \r\n    type=\"text\"\r\n    class=\"form-control\" \r\n    placeholder=\"Type new post title...\"\r\n    (keyup.enter)=\"createPost(title)\" #title>\r\n\r\n<ul class=\"list-group\">\r\n    <li \r\n        *ngFor=\"let post of posts\"\r\n        class=\"list-group-item\">\r\n        <button \r\n            class=\"btn btn-default btn-sm\"\r\n            (click)=\"updatePost(post)\">\r\n            Update\r\n        </button>\r\n        {{ post.title }}\r\n        <button \r\n            class=\"btn btn-primary btn-sm\"\r\n            (click)=\"deletePost(post)\">\r\n            Delete\r\n        </button>\r\n    </li>\r\n</ul>" }]
    }], () => [{ type: i1.PostService }, { type: i2.MatSnackBar }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PostsComponent, { className: "PostsComponent", filePath: "src\\app\\posts\\posts.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=posts.component.js.map