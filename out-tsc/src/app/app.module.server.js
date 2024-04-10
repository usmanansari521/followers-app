import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
export class AppServerModule {
    static { this.ɵfac = function AppServerModule_Factory(t) { return new (t || AppServerModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppServerModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [AppModule,
            ServerModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppServerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AppModule,
                    ServerModule,
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppServerModule, { imports: [AppModule,
        ServerModule] }); })();
//# sourceMappingURL=app.module.server.js.map