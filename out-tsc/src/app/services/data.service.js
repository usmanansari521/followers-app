import { Injectable } from '@angular/core';
import { catchError, throwError, map } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DataService {
    constructor(http) {
        this.http = http;
    }
    getAll(url) {
        return this.http.get(url)
            .pipe(map(response => response), catchError(this.handleError));
    }
    create(url, resource) {
        return this.http.post(url, resource)
            .pipe(map(response => response), catchError(this.handleError));
    }
    update(url, resource) {
        return this.http.patch(`${url}/${resource.id}`, { isRead: true })
            .pipe(map(response => response), catchError(this.handleError));
    }
    delete(url, id) {
        return this.http.delete(`${url}/${id}`)
            .pipe(map(response => response), catchError(this.handleError));
    }
    handleError(error) {
        if (error.status === 400) {
            return throwError(new BadRequestError(error));
        }
        if (error.status === 404) {
            return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
    }
    static { this.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=data.service.js.map