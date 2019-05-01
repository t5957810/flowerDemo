(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-dashboard-dashboard-module"],{

/***/ "./src/app/feature/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/feature/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-12 col-sm-12\" padding-right padding-bottom>\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>花市歷史價格列表</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ng-container *ngIf=\"priceAnthuriumLo$ | async\"></ng-container>\n          <div class=\"fixHeader\">\n            <table mat-table matSort [dataSource]=\"dataSource\">\n\n              <ng-container matColumnDef=\"d\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>日期</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.d}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"market\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>花市名稱</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.market}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"avg_price\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>平均價格</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.avg_price}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"total_sell\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>總數量</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.total_sell}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"year\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>年度</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.year}} </td>\n              </ng-container>\n              <ng-container matColumnDef=\"week\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>週數</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.week}} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n          </div>\n          <mat-paginator [pageSizeOptions]=\"[10, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixHeader {\n  height: 400px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90NTk1NzgxMC/nqIvlvI8vZ2l0aHViL2Rldi9GbG93ZXJQcmljZUZvcmVjYXN0L3NyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhIZWFkZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.displayedColumns = ['d', 'market', 'avg_price', 'total_sell', 'year', 'week'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceAnthuriumLo$ = this.service.getAllPriceAnthurium().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (list) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](list);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/feature/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/feature/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/feature/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/feature/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_modules_common_shared_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/common-shared/common-shared.module */ "./src/app/shared/modules/common-shared/common-shared.module.ts");





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _shared_modules_common_shared_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["CommonSharedModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.service.ts ***!
  \********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.apiUrl = 'assets/price_Anthurium.json';
    }
    DashboardService.prototype.getAllPriceAnthurium = function () {
        return this.http.get(this.apiUrl);
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=feature-dashboard-dashboard-module.js.map