import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class AppErrorHandler {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    handleError(error) {
        this.snackBar.open('An unexpected error occured.');
        console.log(error);
    }
    static { this.ɵfac = function AppErrorHandler_Factory(t) { return new (t || AppErrorHandler)(i0.ɵɵinject(i1.MatSnackBar)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppErrorHandler, factory: AppErrorHandler.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppErrorHandler, [{
        type: Injectable
    }], () => [{ type: i1.MatSnackBar }], null); })();
//# sourceMappingURL=app-error-handler.js.map