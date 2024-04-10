import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            provideClientHydration(),
            PostService,
            GithubFollowersService,
            { provide: ErrorHandler, useClass: AppErrorHandler }
        ], imports: [BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            MatSnackBarModule,
            BrowserAnimationsModule,
            NoopAnimationsModule,
            RouterModule.forRoot([
                {
                    path: '',
                    component: HomeComponent
                },
                {
                    path: 'followers/:username/:id',
                    component: GithubProfileComponent
                },
                {
                    path: 'followers',
                    component: GithubFollowersComponent
                },
                {
                    path: 'posts',
                    component: PostsComponent
                },
                {
                    path: '**',
                    component: NotFoundComponent
                }
            ])] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    PostsComponent,
                    GithubFollowersComponent,
                    NavbarComponent,
                    GithubProfileComponent,
                    NotFoundComponent,
                    HomeComponent,
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    HttpClientModule,
                    MatSnackBarModule,
                    BrowserAnimationsModule,
                    NoopAnimationsModule,
                    RouterModule.forRoot([
                        {
                            path: '',
                            component: HomeComponent
                        },
                        {
                            path: 'followers/:username/:id',
                            component: GithubProfileComponent
                        },
                        {
                            path: 'followers',
                            component: GithubFollowersComponent
                        },
                        {
                            path: 'posts',
                            component: PostsComponent
                        },
                        {
                            path: '**',
                            component: NotFoundComponent
                        }
                    ])
                ],
                providers: [
                    provideClientHydration(),
                    PostService,
                    GithubFollowersService,
                    { provide: ErrorHandler, useClass: AppErrorHandler }
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        PostsComponent,
        GithubFollowersComponent,
        NavbarComponent,
        GithubProfileComponent,
        NotFoundComponent,
        HomeComponent], imports: [BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map