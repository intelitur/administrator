(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-nav *ngIf=\"_auth.isLoggedIn()\"></app-main-nav>\n<app-login *ngIf=\"!_auth.isLoggedIn()\"></app-login>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/categories.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/categories.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"text-center font-weight-light mt-3\">Gestión de Categorías</h1>\n    <div class=\"float-right mb-3 \">\n      <button mat-raised-button color=\"primary\" class=\"btn-add\" matTooltip=\"Agregar una categoría\"\n        (click)=\"openCreateCategoryDialog()\"><i class=\"material-icons\">add</i>Agregar Categoría</button>\n    </div>\n    <div *ngIf=\"this.categoryService.categories; else loading\">\n        <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n            <mat-label>Buscar por nombre de categoría</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\"/>\n            <button\n              mat-icon-button\n              matSuffix\n              [attr.aria-label]=\"'Hide password'\"\n              [attr.aria-pressed]=\"hide\"\n              (click)=\"openShowFilterOptionsDialog()\"\n            >\n              <mat-icon>library_books</mat-icon>\n            </button>\n            <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar las categorías por tipo</mat-hint>\n        </mat-form-field>\n        <div *ngIf=\"isFilters\" class=\"container-text-left\">\n          <button  mat-raised-button color=\"primary\" (click)=\"obtainAllCategories()\">Limpiar filtro</button>\n        </div> \n        \n        <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n            <table class=\"table\" *ngIf=\"this.categoryService.categories\">\n            <thead class=\"thead-light\">\n                <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Tipo</th>\n                <th scope=\"col\">Activa</th>\n                <th scope=\"col\">Acciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let category of this.categoryService.categories | filterBy: filter\">\n                <td>{{category.name}}</td>\n                <td *ngIf=\"category.type === 1\">Evento</td>\n                <td *ngIf=\"category.type === 2\">Itinerario</td>\n                <td *ngIf=\"category.type === 3\">Servicio</td>\n                <td>\n                    <section (click)=\"$event.stopPropagation()\">\n                        <mat-slide-toggle (change)=\"changeState(category, $event)\" color=\"primary\"\n                          [checked]= category.is_active>\n                        </mat-slide-toggle>\n                      </section>\n                </td>\n                <td > \n                    <button mat-stroked-button [routerLink]=\"['/category', category.category_id]\" matTooltip=\"Detalles de la Categoría\" style=\"color: rgb(82, 82, 82); font-size: 14px;\">\n                        Ver Detalles\n                    </button>\n                </td>\n                </tr>\n            </tbody>\n            </table>\n            <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"(this.categoryService.categories | filterBy: filter).length === 0\">\n              ¡No hay categorías disponibles<span class=\"text-danger\"></span>!\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/category-filters/category-filters.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/category-filters/category-filters.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n    <h4 class=\"text-muted text-center font-weight-light\">\n      Seleccione el tipo de categoría a filtrar\n    </h4>\n    <hr>\n    <form [formGroup]=\"categoryFiltersFG\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Tipo de categoría</mat-label>\n        <mat-select formControlName=\"type\">\n          <mat-option *ngFor=\"let t of types\" [value]=\"t.id\">\n            {{t.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n     \n      <div class=\"buttonContainer\">\n        <button (click)=\"submit(); false\" mat-raised-button color=\"primary\" [disabled]=\"!categoryFiltersFG.valid\">\n          Aceptar<mat-icon>check</mat-icon>\n        </button>\n        <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\">\n          Cerrar<mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </form>\n    \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-create/category-create.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-create/category-create.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 20px;\">\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n</div>\n<form [formGroup]=\"categoryFG\" class=\"container-fluid d-flex flex-column justify-content-center\" style=\"padding: 25px\">\n    <h1>Creación de Categoría</h1>\n   \n    <mat-form-field appearance=\"outline\">\n        <mat-label>Nombre</mat-label>\n        <input matInput formControlName=\"name\" matTooltip=\"Nombre de la categoría\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n        <mat-label>Tipo de categoría</mat-label>\n        <mat-select formControlName=\"type\">\n          <mat-option *ngFor=\"let t of types\" [value]=\"t.id\">\n            {{t.name}}\n          </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <div class=\"buttonContainer\">\n        <button mat-raised-button [disabled]=\"!categoryFG.valid\" color=\"primary\" (click)=\"onSubmit()\">\n            Crear Categoría\n        </button>\n        <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\">\n            Cerrar<mat-icon>close</mat-icon>\n          </button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/category-management.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/category-management.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n    <mat-tab label=\"Detalles\">\n        <app-details *ngIf=\"category; else loading\" [category]=\"category[0]\"></app-details>\n        <ng-template #loading>\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-template>\n    </mat-tab>\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/details/details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/details/details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.loading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-container>\n<div style=\"display: flex; margin-top: 20px; padding: 0 20px; flex-wrap: wrap;\">\n    <div style=\"width: 50%; min-width: 300px;\">\n        <div style=\"display: flex; justify-content: space-around;\">\n\n            <h2 style=\"color: #dbb735; text-align: center; margin: auto 0\">{{category.name}}</h2>\n            <div style=\"display: flex; flex-direction: column; margin: auto 0; padding: 0 20px\">\n                <div style=\"margin: auto\" [style.color]=\"category.is_active? '#673ab7': 'gray'\">\n                    {{category.is_active? \"Activa\": \"Inactiva\"}}</div>\n                <mat-slide-toggle style=\"width: min-content; margin: auto;\" (change)=\"changeState($event)\"\n                    color=\"primary\" [checked]=category.is_active>\n                </mat-slide-toggle>\n            </div>\n\n        </div>\n\n        <form [formGroup]=\"categoryFG\" class=\"container-fluid d-flex flex-column justify-content-center\" style=\"padding: 25px\">\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Nombre</mat-label>\n                <input formControlName=\"name\" matInput  matTooltip=\"Nombre de la categoría\" required>\n            </mat-form-field>\n\n            <div style=\"display: flex; justify-content: space-around; flex-wrap: wrap;\">\n                <button mat-stroked-button color=\"primary\"  [disabled]=\"!categoryFG.valid || !isChanged() || loading\"\n                    style=\"width: 47%; min-width: fit-content; margin-top: 10px;\" (click)=\"modifyCategory()\" >\n                    Guardar cambios\n                </button>\n                <button mat-stroked-button color=\"warn\" [disabled]=\"loading\"\n                    style=\"width: 47%; min-width: fit-content;margin-top: 10px;\" (click)=\"setData()\">\n                    Descartar cambios\n                </button>\n            </div>\n        </form>\n        \n    </div>\n    <div *ngIf=\"categoryImages.length != 0\"\n        style=\"width: 50%; display: flex; flex-direction: column; border-radius: 20px; border: solid 1.5px rgb(220, 220, 220); margin: auto; min-width: 280px;\">\n        <ngb-carousel class=\"container-fluid\" (slide)=\"onSlide($event)\">\n            <ng-template *ngFor=\"let i of categoryImages; let index = index\" [id]=\"'slideId_' + index\" ngbSlide>              \n                <img class=\"d-block w-100\" style=\"height: 500px !important; border-radius: 10px;\" src=\"{{url}}{{categoryImages[index]}}\"/>\n            </ng-template>\n        </ngb-carousel>\n        <div style=\" display: flex; height: 70px;\">\n            <div title=\"Añadir imagen a la categoría\"\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-right: solid 0.75px rgb(220, 220, 220);\">\n                <label for=\"file-upload\"  class=\"image-buttons\" style=\"border-radius: 0 0 0 20px; color: #dbb735; text-align: center; padding-top:10%;\" ><mat-icon>find_replace</mat-icon></label> \n                <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"uploadFile($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>   \n            </div>\n            <div title=\"Eliminar imagen de categoría\"\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-left: solid 0.75px rgb(220, 220, 220);\">\n                <button [disabled]=\"loading\" mat-button style=\"border-radius: 0 0 20px 0\" (click)=\"deleteImage();\"\n                    class=\"image-buttons\" color=\"warn\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"categoryImages.length == 0\" title=\"Añadir imagen a la categoría\" class=\"noImageButton\">\n        <label for=\"file-upload\"  style=\"width: 100%; margin: 0%; cursor: pointer; color: #dbb735; text-align: center; padding-top: 2%;\"> Añadir Imagen </label> \n        <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"uploadFile($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>   \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/companies/companies.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/companies/companies.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1 class=\"text-center font-weight-light mt-3\">Gestión de empresas</h1>\n  <div class=\"float-right mb-3 \">\n    <button mat-raised-button color=\"primary\" class=\"btn-add mr-3 mt-3\" style=\"margin:auto\"\n      matTooltip=\"Agregar una nueva empresa\" (click)=\"openCreateCompanyDialog()\">Agregar empresa</button>\n    <button mat-raised-button color=\"accent\" class=\"btn-add mr-3 mt-3\" style=\"margin:auto\"\n      matTooltip=\"Ver las solicitudes de unión a empresas\" [routerLink]=\"['/company', 'requests']\">\n      Solicitudes de unión\n    </button>\n  </div>\n  <div *ngIf=\"this.companyService.companies; else loading\">\n    <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n      <mat-label>Buscar por nombre de empresa</mat-label>\n      <input matInput [(ngModel)]=\"filter.name\" />\n    </mat-form-field>\n    <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n      <table class=\"table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Cédula Jurídica</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Teléfono</th>\n            <th scope=\"col\">Activa</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let company of this.companyService.companies | filterBy: filter\"\n            [routerLink]=\"['/company', company.company_id]\">\n            <td>{{ company.name }}</td>\n            <td>{{ company.legal_id }}</td>\n            <td>{{ company.email? company.email: \"No registrado\" }}</td>\n            <td>{{ company.phone_number? company.phone_number: \"No registrado\" }}</td>\n            <td>\n              <section (click)=\"$event.stopPropagation()\">\n                <mat-slide-toggle (change)=\"changeState(company, $event)\" color=\"primary\" [checked]=company.state>\n                </mat-slide-toggle>\n              </section>\n            </td>\n            <td>\n              <button mat-stroked-button matTooltip=\"Detalles de la empresa\"\n                style=\"color: rgb(82, 82, 82); font-size: 14px;\">\n                Ver detalles\n              </button>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      <!-- in case you want to show empty message -->\n      <div class=\"alert alert-info text-center\" role=\"alert\"\n        *ngIf=\"(this.companyService.companies | filterBy: filter).length === 0\">\n        No se encuentra el usuario con el id <span class=\"text-danger\">{{filter.user_id}}</span>!\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/company-create/company-create.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/company-create/company-create.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 20px;\">\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n</div>\n\n<form [formGroup]=\"companyForm\" class=\"container-fluid d-flex flex-column justify-content-center\" style=\"padding: 25px\">\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Nombre</mat-label>\n        <input matInput formControlName=\"name\" matTooltip=\"Nombre de la empresa\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Cédula Jurídica</mat-label>\n        <input matInput formControlName=\"legal_id\" matTooltip=\"10 números sin guiones\" required>\n        <mat-hint align=\"end\">Sin guiones - 10 dígitos</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" >\n        <mat-label>Teléfono</mat-label>\n        <input matInput formControlName=\"phone_number\" matTooltip=\"Formato: 8888 8888\">\n        <mat-hint align=\"end\"></mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput formControlName=\"email\" matTooltip=\"Formato: email@domain.domain\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Ubicación descrita</mat-label>\n        <input matInput formControlName=\"location\" matTooltip=\"Descripción de la ubicación\">\n    </mat-form-field>\n\n    <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\">\n        <button mat-stroked-button [disabled]=\"!companyForm.valid\" color=\"primary\"\n            style=\"width: 50%; min-width: fit-content; margin-top: 10px;\" (click)=\"createCompany()\">\n            Continuar con la creación\n        </button>\n    </div>\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-details/company-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-details/company-details.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; margin-top: 20px; padding: 0 20px; flex-wrap: wrap;\">\n    <div style=\"width: 60%; min-width: 300px;\">\n        <div style=\"display: flex; justify-content: space-around;\">\n            <h2 style=\"color: #dbb735; text-align: center; margin: auto 0\">{{company.name}}</h2>\n            <div style=\"display: flex; flex-direction: column; margin: auto 0; padding: 0 20px\">\n                <div style=\"margin: auto\" [style.color]=\"company.state? '#673ab7': 'gray'\">\n                    {{company.state? \"Activa\": \"Inactiva\"}}</div>\n                <mat-slide-toggle style=\"width: min-content; margin: auto;\" (change)=\"changeState($event)\"\n                    color=\"primary\" [checked]=company.state>\n                </mat-slide-toggle>\n            </div>\n\n        </div>\n\n        <form [formGroup]=\"companyForm\" class=\"container-fluid d-flex flex-column justify-content-center\"\n            style=\"padding: 25px\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Nombre</mat-label>\n                <input matInput formControlName=\"name\">\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Cédula Jurídica</mat-label>\n                <input matInput formControlName=\"legal_id\">\n                <mat-hint align=\"end\">Sin guiones - 10 dígitos</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Teléfono</mat-label>\n                <input matInput formControlName=\"phone_number\">\n                <mat-hint align=\"end\">Formato: 8888 8888</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input matInput formControlName=\"email\">\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Ubicación descrita</mat-label>\n                <input matInput formControlName=\"location\">\n            </mat-form-field>\n\n            <div style=\"display: flex; justify-content: space-around; flex-wrap: wrap;\">\n                <button *ngIf=\"!loading; else loadingBar\" mat-stroked-button [disabled]=\"!companyForm.valid || !isChanged()\" color=\"primary\"\n                    style=\"width: 47%; min-width: fit-content; margin-top: 10px;\" (click)=\"applyChanges()\">\n                    Guardar cambios\n                </button>\n                <ng-template #loadingBar>\n                    <mat-progress-bar mode=\"indeterminate\" style=\"width: 47%; margin: auto 0;\"></mat-progress-bar>\n                </ng-template>\n                <button mat-stroked-button [disabled]=\"!isChanged() || loading\" color=\"warn\"\n                    style=\"width: 47%; min-width: fit-content;margin-top: 10px;\"\n                    (click)=\"companyForm.patchValue(company)\">\n                    Descartar cambios\n                </button>\n            </div>\n\n\n        </form>\n    </div>\n    <div\n        style=\"width: 40%; display: flex; flex-direction: column; border-radius: 20px; border: solid 1.5px rgb(220, 220, 220); margin: auto; min-width: 280px;\">\n        <img style=\"margin: 5% auto; max-height: 450px; max-width: 90%;\"\n            src=\"https://media-exp1.licdn.com/dms/image/C561BAQECpbD6BAejKg/company-background_10000/0?e=2159024400&v=beta&t=0OMsZud-rJoJIlHTUOuvOGPWNEZJBJDx7_mzKQI37UU\">\n        <div style=\" display: flex; height: 70px;\">\n            <div\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-right: solid 0.75px rgb(220, 220, 220);\">\n                <button mat-button matTooltip=\"Buscar nueva imagen\" style=\"border-radius: 0 0 0 20px;\"\n                    class=\"image-buttons\" color=\"accent\">\n                    <mat-icon>find_replace</mat-icon>\n\n                </button>\n            </div>\n            <div\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-left: solid 0.75px rgb(220, 220, 220);\">\n                <button mat-button matTooltip=\"Eliminar imagen de empresa\" style=\"border-radius: 0 0 20px 0\"\n                    class=\"image-buttons\" color=\"warn\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-map/company-map.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-map/company-map.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\" style=\"height: calc(100vh - 150px); display: flex; flex-direction: column;\" (mouseenter)=\"refreshMap()\">\n    <div class=\"shadow-sm rounded\" class=\"map container-fluid\" leaflet (leafletMapReady)=\"onMapReady($event)\"\n        [leafletOptions]=\"options\" (leafletClick)=\"putLocationMarker($event)\"></div>\n    <div style=\"width: 94%; height: 14%; display: flex; justify-content: space-between; margin: 3%; flex-wrap: wrap;\">\n        <label style=\"font-size: 15px; min-width:  30% ; margin: auto; margin-bottom: 15px;\">\n            Latitud: <b style=\"color: #dbb735;;\">{{locationMarker.getLatLng().lat}}</b> <br> \n            Longitud: <b style=\"color: #ca382d;\">{{locationMarker.getLatLng().lng}}</b>\n        </label>\n        <button mat-stroked-button color=\"primary\" style=\"width: 60%; min-width: 200px; margin: 0 auto\"\n            matTooltip=\"Arrastre el marcador hasta la nueva ubicación y presione el botón para guardar\"\n            [disabled]=\"company.latitude == locationMarker.getLatLng().lat && company.longitude == locationMarker.getLatLng().lng\"\n            (click)=\"updateCompanyLocation()\">\n            Guardar ubicación\n            <mat-icon style=\"margin-left: 5%;\">check</mat-icon></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-requests/company-requests.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-requests/company-requests.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"companyRequests\" style=\"padding: 5%;\">\n    <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n        <mat-label>Buscar por nombre y/o apellido</mat-label>\n        <input matInput [(ngModel)]=\"filter.input\" />\n    </mat-form-field>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Fecha</th>\n                    <th scope=\"col\">Hora</th>\n                    <th scope=\"col\">Nombre del usuario</th>\n                    <th scope=\"col\">Email del usuario</th>\n                    <th scope=\"col\" style=\"text-align: center;\">Aceptar/ Rechazar</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let request of this.companyRequests | filterBy: filter.filter\">\n                    <td>{{ dateString(request.request_date) }}</td>\n                    <td>{{ timeString(request.request_date) }}</td>\n                    <td>{{ request.user_info.name + ' ' + request.user_info.lastName }}</td>\n                    <td>{{ request.user_info.email }}</td>\n                    <td>\n                        <div style=\"display: flex; justify-content: space-around; flex-wrap: wrap;\">\n                            <button mat-stroked-button color=\"primary\"\n                                style=\"min-width: fit-content; margin: 1px; color: green;\"\n                                (click)=\"allowUnion(request)\" matTooltip=\"Aceptar solicitud\">\n                                <mat-icon>done</mat-icon>\n                            </button>\n                            <button mat-stroked-button color=\"warn\" style=\"min-width: fit-content; margin: 1px;\"\n                                (click)=\"denyUnion(request)\" matTooltip=\"Rechazar solicitud\">\n                                <mat-icon>clear</mat-icon>\n                            </button>\n                        </div>\n                    </td>\n                </tr>\n\n            </tbody>\n        </table>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"this.companyRequests.length === 0\">\n            La empresa <span class=\"text-danger\">{{company.name}}</span> no tiene ninguna solicitud de unión de usuario pendiente\n        </div>\n\n        <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n            *ngIf=\"!(this.companyRequests.length === 0) && (this.companyRequests | filterBy: filter.filter).length === 0\">\n            Ninguna usuario solicitante coincide con nombre y/o apellido <span class=\"text-danger\">{{filter.input}}</span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-add-user/company-add-user.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-add-user/company-add-user.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #loadingB>\n    <mat-progress-bar  style=\"margin: auto\" mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>\n<mat-progress-bar *ngIf=\"!users\" mode=\"indeterminate\"></mat-progress-bar>\n<div *ngIf=\"users\" style=\"padding: 2vh;\">\n    <mat-form-field class=\"container-fluid\" appearance=\"outline\" style=\"margin-bottom: 2vh;\">\n      <mat-label>Buscar por nombre y/o apellido</mat-label>\n      <input matInput [(ngModel)]=\"filter.input\" />\n    </mat-form-field>\n    <div class=\"table-responsive\" style=\"max-height: 50vh; overflow-y: auto;\">\n      <table class=\"table\" >\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Nombre completo</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\" >Estado del usuario</th>\n            <th scope=\"col\" style=\"text-align: center;\">Agregar como empleado</th>\n            <th scope=\"col\" style=\"text-align: center;\"> o como administrador</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of this.users | filterBy: this.filter.filter\">\n            <td>{{ user.info.name + \" \" + user.info.lastName}}</td>\n            <td>{{ user.info.email }}</td>\n            <td>\n              <section>\n                <mat-slide-toggle color=\"primary\" [checked]=\"user.info.available && user.info.state\" disabled>\n                </mat-slide-toggle>\n              </section>\n            </td>\n            <td>\n              <div style=\"display: flex; height: 33.6px;\">\n                <button mat-stroked-button style=\"min-width: fit-content; margin: auto; color: green\" *ngIf=\"!loading; else loadingB\"\n                  (click)=\"addUserToCompany(user)\" matTooltip=\"Agregar usuario a la empresa como empleado\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </td>\n            <td>\n              <div style=\"display: flex;  height: 33.6px;\">\n                <button mat-stroked-button color=\"accent\" style=\"min-width: fit-content; margin: auto;\" *ngIf=\"!loading; else loadingB\"\n                  (click)=\"addUserToCompany(user, true)\" matTooltip=\"Agregar usuario a la empresa como administrador\">\n                  <mat-icon>lock_open</mat-icon>\n                </button>\n              </div>\n            </td>\n          </tr>\n  \n        </tbody>\n      </table>\n      <!-- in case you want to show empty message -->\n      <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"this.users.length === 0\">\n        La empresa <span class=\"text-danger\">{{data.company.name}}</span> no tiene ningún usuario asociado\n      </div>\n  \n      <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n        *ngIf=\"!(this.users.length === 0) && (this.users | filterBy: filter.filter).length === 0\">\n        Ningún usuario coincide con nombre y/o apellido <span class=\"text-danger\">{{filter.input}}</span>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-users.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-users.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"companyUsers\" style=\"padding: 5%;\">\n  <div class=\"float-right mb-3 \">\n    <button mat-raised-button color=\"primary\" class=\"btn-add\" matTooltip=\"Agregar usuario a la empresa\"\n      (click)=\"openAddUserToCompanyDialog()\">Agregar usuario</button>\n  </div>\n  <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n    <mat-label>Buscar por nombre y/o apellido</mat-label>\n    <input matInput [(ngModel)]=\"filter.input\" />\n  </mat-form-field>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Apellidos</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Estado del usuario</th>\n          <th scope=\"col\" style=\"text-align: center;\">Asociar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of this.companyUsers | filterBy: filter.filter\">\n          <td>{{ user.name }}</td>\n          <td>{{ user.lastName }}</td>\n          <td>{{ user.email }}</td>\n          <td>\n            <section>\n              <mat-slide-toggle color=\"primary\" [checked]=\"user.available && user.state\" disabled>\n              </mat-slide-toggle>\n            </section>\n          </td>\n          <td>\n            <div style=\"display: flex;\">\n              <button mat-stroked-button color=\"warn\" style=\"min-width: fit-content; margin: auto\"\n                (click)=\"deleteUserFromCompany(user)\" matTooltip=\"Desasociar usuario de la empresa\">\n                <mat-icon>clear</mat-icon>\n              </button>\n            </div>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n    <!-- in case you want to show empty message -->\n    <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"this.companyUsers.length === 0\">\n      La empresa <span class=\"text-danger\">{{company.name}}</span> no tiene ningún usuario asociado\n    </div>\n\n    <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n      *ngIf=\"!(this.companyUsers.length === 0) && (this.companyUsers | filterBy: filter.filter).length === 0\">\n      Ningún usuario coincide con nombre y/o apellido <span class=\"text-danger\">{{filter.input}}</span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/management.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/management.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n    <mat-tab label=\"Detalles\">\n        <app-company-details *ngIf=\"company; else loadingCompany\" [company]=\"company\"></app-company-details>\n    </mat-tab>\n    <mat-tab label=\"Ubicación\">\n        <app-company-map *ngIf=\"company; else loadingCompany\" [company]=\"company\"></app-company-map>\n    </mat-tab>\n    <mat-tab label=\"Usuarios\">\n        <app-company-users *ngIf=\"company; else loadingCompany\" [company]=\"company\"></app-company-users>\n    </mat-tab>\n    <mat-tab *ngIf=\"_auth.getUser().role_id === 1\" label=\"Solicitudes de unión a la empresa\">\n        <app-company-requests *ngIf=\"company; else loadingCompany\" [company]=\"company\"></app-company-requests>\n    </mat-tab>\n</mat-tab-group>\n\n<ng-template #loadingCompany>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/request-tabs/request-tabs.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/request-tabs/request-tabs.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n\n    <mat-tab label=\"Usuarios\">\n      <div class=\"container justify-content\">\n        <app-requests></app-requests>\n      </div>    \n    </mat-tab>\n\n    <mat-tab label=\"Evento\">\n        <div class=\"container justify-content\">\n          <app-union-event-request></app-union-event-request>\n        </div>    \n    </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/requests/requests.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/requests/requests.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1 class=\"text-center font-weight-light mt-3\">Solicitudes de unión a empresas</h1>\n  <div >\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; margin: 4rem 0 0 0\">\n      <mat-form-field class=\"container-fluid\" appearance=\"outline\" style=\"width: 40%; min-width: 300px; margin: auto\">\n        <mat-label>Buscar por nombre de empresa o usuario</mat-label>\n        <input matInput [(ngModel)]=\"filter.name\" />\n      </mat-form-field>\n      <mat-radio-group class=\"radio-button-group\" color=\"primary\"\n        [(ngModel)]=\"filter.state\" (change)=\"refresh()\">\n        <mat-radio-button value=\"1\" style=\"color: rgb(160, 105, 0)\">\n          Pendientes\n        </mat-radio-button>\n        <mat-radio-button value=\"2\" style=\"color: rgb(0, 90, 0)\">\n          Aceptadas\n        </mat-radio-button>\n        <mat-radio-button value=\"3\" style=\"color: rgb(90, 0, 0)\">\n          Rechazadas\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n      <table class=\"table\" >\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" style=\"text-align: center;\">Fecha de solicitud</th>\n            <th scope=\"col\" matTooltip=\"Nombre de persona que solicitó la unión\">Solicitante</th>\n            <th scope=\"col\" matTooltip=\"Correo electrónico de persona que solicitó la unión\">Email</th>\n            <th scope=\"col\" matTooltip=\"Nombre la empresa a la que se envió la solicitud\">Empresa</th>\n            <th scope=\"col\" matTooltip=\"Pendiente / Aceptada / Rechazada\">Estado</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"!this.loading\">\n          <tr *ngFor=\"let request of this.companyUsersService.requests | filterBy: filter.filter\">\n            <td style=\"text-align: center;\">{{ dateString(request.request_date) }} <br>\n              {{ timeString(request.request_date) }}</td>\n            <td>{{ request.user_info.name + ' ' + request.user_info.lastName }}</td>\n            <td>{{ request.user_info.email }}</td>\n            <td>{{ request.company_info.name }}</td>\n            <td>\n              <label color=\"primary\" style=\"cursor: default;\"\n                [style.color]=\"request.state == 1? 'rgb(160, 105, 0)': request.state == 2? 'rgb(0, 90, 0)': 'rgb(90, 0, 0)'\">\n                {{ request.state == 1? 'Pendiente': request.state == 2? 'Aceptado': 'Rechazado' }}\n              </label>\n\n            </td>\n            <td>\n              <div style=\"display: flex; justify-content: space-around; flex-wrap: wrap;\" *ngIf=\"request.state == 1\">\n                <button mat-stroked-button color=\"primary\"\n                  style=\"min-width: fit-content; margin: 1px; color: green;\" (click)=\"allowUnion(request)\"\n                  matTooltip=\"Aceptar solicitud\">\n                  <mat-icon>done</mat-icon>\n                </button>\n                <button mat-stroked-button color=\"warn\" style=\"margin: 1px; min-width: fit-content;\" (click)=\"denyUnion(request)\"\n                  matTooltip=\"Rechazar solicitud\">\n                  <mat-icon>clear</mat-icon>\n                </button>\n              </div>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      <ng-container *ngIf=\"this.loading\">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </ng-container>\n      <!-- in case you want to show empty message -->\n      <div class=\"alert alert-info text-center\" role=\"alert\"\n        *ngIf=\"!this.loading && (this.companyUsersService.requests | filterBy: filter.filter).length === 0 \">\n        No se encuentra ninguna solicitud\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/union-event-request/union-event-request.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/union-event-request/union-event-request.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"text-center font-weight-light mt-3\">Solicitudes de unión de empresas a eventos</h1>\n    <div >\n        <ng-container *ngIf=\"this.loading\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-container>\n        <div style=\"display: flex; flex-wrap: wrap; justify-content: space-evenly; margin: 4rem 0 0 0\">\n            <mat-form-field class=\"container-fluid\" appearance=\"outline\" style=\"width: 40%; min-width: 300px; margin: auto\">\n                <mat-label>Buscar por nombre del evento o usuario</mat-label>\n                <input matInput [(ngModel)]=\"filter.name\"/>\n                <button\n                    mat-icon-button\n                    matSuffix\n                    [attr.aria-label]=\"'Hide password'\"\n                    [attr.aria-pressed]=\"hide\"\n                    (click)=\"openShowFilterOptionsDialog()\"\n                >\n                    <mat-icon>library_books</mat-icon>\n                </button>\n                <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar por otros valores.</mat-hint>\n            </mat-form-field>\n            <mat-radio-group class=\"radio-button-group\" color=\"primary\" [(ngModel)]=\"filter.state\" (change)=\"refresh()\">\n                <mat-radio-button value=\"0\" style=\"color: rgb(103,58,183);\">\n                    Todas\n                </mat-radio-button>\n                <mat-radio-button value=\"1\" style=\"color: rgb(0, 90, 0)\">\n                    Aceptadas\n                </mat-radio-button>\n                <mat-radio-button value=\"2\" style=\"color: rgb(160, 105, 0) \">\n                    Pendientes\n                </mat-radio-button>\n                <mat-radio-button value=\"3\" style=\"color: rgb(90, 0, 0)\">\n                    Rechazadas\n                </mat-radio-button>\n            </mat-radio-group>\n            <div *ngIf=\"isFilters\" class=\"container-text-left\">\n                <button  mat-raised-button color=\"primary\" (click)=\"refreshAll()\" [disabled]=\"loading\">Limpiar filtro</button>\n            </div> \n            <label *ngIf=\"isFilters && currentCompanyName != undefined\" color=\"primary\" style=\"cursor: default;\">\n                Empresa Filtrada: {{currentCompanyName}}\n            </label>\n        </div>\n        <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n        <table class=\"table\" >\n            <thead class=\"thead-light\">\n            <tr>\n                <th scope=\"col\" matTooltip=\"Nombre de persona que solicitó la unión\">Solicitante</th>\n                <th scope=\"col\" matTooltip=\"Nombre la empresa a la que se envió la solicitud\">Empresa</th>\n                <th scope=\"col\" matTooltip=\"Evento al que se desea unir la empresa\">Evento</th>\n                <th scope=\"col\" matTooltip=\"Detalles del evento al que se desea unir la empresa\">Detalles</th>\n                <th scope=\"col\" matTooltip=\"Pendiente / Aceptada / Rechazada\" *ngIf=\"filter.state == '0'\">Estado</th>\n                <th scope=\"col\" *ngIf=\"filter.state == '0' || filter.state == '2'\">Acciones</th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"!this.loading\">\n            <tr *ngFor=\"let request of eventRequests | filterBy: filter.filter\">\n                <td>{{ request.user_name }}</td>\n                <td>{{request.company_name}}</td>\n                <td>{{request.event_info.info.name}}</td>\n                <td>\n                    <button mat-stroked-button (click)=\"showEventDetails(true, request.event_info.info)\" matTooltip=\"Detalles del evento\" style=\"color: rgb(82, 82, 82); font-size: 14px;\">\n                        Ver Detalles\n                    </button>\n                </td>\n                <td *ngIf=\"filter.state == '0'\" >\n                    <label color=\"primary\" style=\"cursor: default;\"\n                        [style.color]=\"request.petition_state_company == 2? 'rgb(160, 105, 0)': request.petition_state_company == 1? 'rgb(0, 90, 0)': 'rgb(90, 0, 0)'\">\n                        {{ request.petition_state_company == 2? 'Pendiente': request.petition_state_company == 1? 'Aceptado': 'Rechazado' }}\n                    </label>\n                </td>\n                <td>\n                    <div style=\"display: flex; justify-content: space-around; flex-wrap: wrap;\" *ngIf=\"request.petition_state_company == 2\">\n                        <button mat-stroked-button color=\"primary\" style=\"min-width: fit-content; margin: 1px; color: green;\" (click)=\"changeStatus(request.petition_id, 1)\" matTooltip=\"Aceptar solicitud\">\n                            <mat-icon>done</mat-icon>\n                        </button>\n                        <button mat-stroked-button color=\"warn\" style=\"margin: 1px; min-width: fit-content;\" (click)=\"changeStatus(request.petition_id, 3)\" matTooltip=\"Rechazar solicitud\">\n                            <mat-icon>clear</mat-icon>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n\n            </tbody>\n        </table>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"!this.loading && (eventRequests| filterBy: filter.filter).length === 0 \">\n            No se encuentra ninguna solicitud\n        </div>\n        </div>\n    </div>\n</div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-create/event-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-create/event-create.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Creación de Evento</h1>\n<form [formGroup]=\"eventFG\"  class=\"container\">\n\n    <div class=\"container\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Nombre</mat-label>\n            <input matInput formControlName=\"name\" matTooltip=\"Nombre del evento\" required>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Costo</mat-label>\n            <input matInput formControlName=\"cost\" required>\n        </mat-form-field>\n    \n        <mat-form-field appearance=\"outline\">\n            <mat-label>Dirección</mat-label>\n            <textarea \n                matInput \n                formControlName=\"address\" \n                matTooltip=\"Dirección exacta del evento\" \n                type=\"text\"\n                required></textarea>\n        </mat-form-field>\n    \n        <mat-form-field appearance=\"outline\" >\n            <mat-label>Detalles</mat-label>\n            <textarea \n                matInput \n                formControlName=\"detail\" \n                matTooltip=\"Detalles del evento\" \n                type=\"text\"\n                required></textarea>\n        </mat-form-field>\n\n        <div  class=\"chip-list\">\n            <mat-form-field class=\"chip-list\" appearance=\"outline\">\n              <mat-chip-list #chipList aria-label=\"Categories selection\">\n                <mat-chip class=\"chip\"\n                  *ngFor=\"let category of allCategories\"\n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\">\n                  {{category.name}}\n                  <i matChipRemove class=\"material-icons\" (click)=\"removeCategory(category)\">cancel</i>\n                </mat-chip>\n                <input\n                  placeholder=\"Seleccione las categorías\"\n                  #tagInput\n                  formControlName=\"categories\" \n                  [matChipInputFor]=\"chipList\"\n                  [matAutocomplete]=\"auto\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n              </mat-chip-list>\n              <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedCategory($event)\">\n                <mat-option *ngFor=\"let c of filteredCategories \" [value]=\"c\">\n                  {{c.name}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        </div>\n\n        <div  class=\"chip-list\">\n            <mat-form-field class=\"chip-list\" appearance=\"outline\">\n              <mat-chip-list #chipList2 aria-label=\"Companies selection\">\n                <mat-chip class=\"chip\"\n                  *ngFor=\"let company of allCompanies\"\n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\">\n                  {{company.name}}\n                  <i matChipRemove class=\"material-icons\" (click)=\"removeCompany(company)\">cancel</i>\n                </mat-chip>\n                <input\n                  placeholder=\"Seleccione las compañías\"\n                  #tagInput2\n                  formControlName=\"companies\" \n                  [matChipInputFor]=\"chipList\"\n                  [matAutocomplete]=\"autoCompany\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n              </mat-chip-list>\n              <mat-autocomplete #autoCompany=\"matAutocomplete\" (optionSelected)=\"selectedCompany($event)\">\n                <mat-option *ngFor=\"let c of filteredCompanies \" [value]=\"c\">\n                  {{c.name}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        </div>\n\n    </div>\n</form>\n\n<div class=\"container\">\n    \n    <div class=\"toggle\">\n        <div style=\"text-align: center;\">\n            <label>Todo el día:</label>\n            <mat-slide-toggle style=\"margin-left: 3%;\" (change)=\"changeState($event)\" color=\"primary\" [checked]= \"false\"></mat-slide-toggle>\n            <label style=\"margin-left: 5%; margin-right: 3%;\"> {{!this.allDay? \"No\": \"Sí\"}} </label>\n            <mat-form-field *ngIf=\"this.allDay\" style=\"width: 50%;\"  appearance=\"outline\">\n                <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"commonDate\"  [min]=\"today\"  placeholder=\"Fecha\" [(ngModel)]=\"common_date\" disabled >\n                <mat-datepicker-toggle matSuffix [for]=\"commonDate\" ></mat-datepicker-toggle>\n                <mat-datepicker #commonDate disabled=\"false\" ></mat-datepicker>\n            </mat-form-field>\n        </div>\n\n        <div style=\" display: flex;\">\n            <mat-form-field *ngIf=\"allDay== false\" style=\"width: 50%; \" appearance=\"outline\">\n                <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"startDate\" [min]=\"today\"  placeholder=\"Fecha Inicial\" [(ngModel)]=\"initial_date\" disabled >\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\" ></mat-datepicker-toggle>\n                <mat-datepicker #startDate disabled=\"false\" ></mat-datepicker>\n            </mat-form-field>\n    \n            <mat-form-field *ngIf=\"allDay== false\"  style=\"width: 50%; \" appearance=\"outline\">\n                <input matTooltip=\"Presione el Icono\" matInput [matDatepicker]=\"endDate\" [matDatepickerFilter]=\"dateFilter\" placeholder=\"Fecha de Finalización\" [(ngModel)]=\"final_date\" disabled >\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker  #endDate [disabled]=\"initial_date == undefined\" [startAt]=\"initial_date\"></mat-datepicker>\n            </mat-form-field>\n            \n            <div *ngIf=\"allDay == true\">\n                <mat-form-field  appearance=\"outline\" style=\"width: 45%;\">\n                    <mat-label>Hora Inicial</mat-label>\n                    <input type=\"time\" matInput [(ngModel)]=\"initial_time\" matToolTip=\"Hora de inicio\" >\n                </mat-form-field>\n               \n                <mat-form-field  appearance=\"outline\" style=\"width: 45%;\">\n                    <mat-label>Hora de finalización</mat-label>\n                    <input type=\"time\"  [disabled]=\"initial_time == undefined\" matToolTip=\"Hora de finalización\" matInput [(ngModel)]=\"final_time\">\n                </mat-form-field>\n                <mat-hint style=\"padding-left: 2.5%;\">Presione <mat-icon>schedule</mat-icon> para seleccionar una hora.</mat-hint>\n            </div>\n        </div>\n        <mat-hint *ngIf=\"allDay== false\" style=\"padding-left: 2.5%;\">Presione <mat-icon>today</mat-icon> para seleccionar una fecha.</mat-hint>\n    </div>\n\n    <div class=\"color-picker\">\n        <label>Selecciona un color </label>\n        <color-circle  (onChangeComplete)=\"changeComplete($event)\" ></color-circle> \n    </div>\n\n    <div class=\"file\">\n        <div class=\"uploadFile\">\n            <label for=\"file-upload\"  style=\"width: 100%; margin: 0%; cursor: pointer; color: #dbb735; text-align: center; padding-top: 2%;\"> Añadir Imágenes </label> \n            <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"getFiles($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>\n        </div>\n        <mat-hint *ngIf=\"this.eventImages.length == 0\" style=\"padding-left: 2.5%; color: crimson;\">¡Debes añadir imagenes!</mat-hint>\n        <mat-hint *ngIf=\"this.eventImages.length != 0\" style=\"padding-left: 2.5%;\">Imágenes añadidas: {{this.eventImages.length}}</mat-hint>\n    </div>\n\n</div>\n\n\n\n<div class=\"buttonContainer\">\n    <button mat-raised-button  [disabled]=\"disableDialog()\" color=\"primary\" (click)=\"onSubmit()\">\n        Continuar la Creacón\n    </button>\n    <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\" [disabled]=\"loading\">\n        Cancelar<mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<ng-container *ngIf=\"this.loading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request-filters/event-request-filters.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request-filters/event-request-filters.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n    <h4 class=\"text-muted text-center font-weight-light\">\n      Seleccione la empresa para filtrar\n    </h4>\n    <hr>\n    <form [formGroup]=\"eventRequestFiltersFG\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Empresa</mat-label>\n        <mat-select formControlName=\"companies\">\n          <mat-option *ngFor=\"let c of companies\" [value]=\"c.company_id\">\n            {{c.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n     \n      <div class=\"buttonContainer\">\n        <button (click)=\"submit(); false\" mat-raised-button color=\"primary\" [disabled]=\"!eventRequestFiltersFG.valid\">\n          Aceptar<mat-icon>check</mat-icon>\n        </button>\n        <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\">\n          Cerrar<mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </form>\n    \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"text-center font-weight-light mt-3\">Peticiones de Eventos</h1>\n\n    <div *ngIf=\"this.eventService.eventRequest; else loading\" >\n        <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n            <mat-label>Buscar por nombre del usuario</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\"/>\n            <!-- \n            <button\n            mat-icon-button\n            matSuffix\n            [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\"\n            (click)=\"openFilterOptionsDialog()\"\n          >\n            <mat-icon>library_books</mat-icon>\n          </button>\n          <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar por compañía.</mat-hint>\n          -->\n      </mat-form-field>\n      <div *ngIf=\"isFilters\" class=\"container-text-left\">\n        <button  mat-raised-button color=\"primary\" (click)=\"obtainAllEventRequest()\">Limpiar filtro</button>\n      </div> \n        \n        <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n            <table class=\"table\" *ngIf=\"this.eventService.eventRequest\">\n            <thead class=\"thead-light\">\n                <tr>\n                <th scope=\"col\">Usuario</th>\n                <th scope=\"col\">Correo</th>\n                <th scope=\"col\">Evento</th>\n                <th scope=\"col\" style=\"text-align: center;\">Detalles del Evento</th>\n                <th scope=\"col\" style=\"text-align: center;\">Aceptar/Rechazar</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let request of this.eventService.eventRequest | filterBy: filter \">\n                <td>{{ request.user_name}}</td>\n                <td>{{ request.user_email}}</td>\n                <td>{{ request.name}}</td>\n                <td style=\"text-align: center;\"> \n                    <button mat-stroked-button (click)=\"showEventDetails(true, request)\" matTooltip=\"Detalles del evento\" style=\"color: rgb(82, 82, 82); font-size: 14px;\">\n                        Ver Detalles\n                    </button>\n                </td>\n                <td style=\"text-align: center;\">\n                    <button mat-raised-button class=\"acceptBtn\" color=\"primary\" (click)=\"changeStateRequest(request, 1)\">\n                        Aceptar\n                    </button>\n                    <button mat-raised-button class=\"denyBtn\" color=\"warn\" (click)=\"changeStateRequest(request, 3)\" >\n                        Rechazar\n                    </button>\n                </td>\n                </tr>\n            </tbody>   \n            </table>\n            <div class=\"alert alert-info text-center\" role=\"alert\"   *ngIf=\"(this.eventService.eventRequest | filterBy: filter).length === 0\">\n              ¡No hay peticiones pendientes<span class=\"text-danger\"></span>!\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/event-filters/event-filters.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/event-filters/event-filters.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n    <h4 class=\"text-muted text-center font-weight-light\">\n      Seleccione la categoría para filtrar\n    </h4>\n    <hr>\n    <form [formGroup]=\"eventFiltersFG\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Tipo de categoría</mat-label>\n        <mat-select formControlName=\"categories\">\n          <mat-option *ngFor=\"let c of categories\" [value]=\"c.category_id\">\n            {{c.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n     \n      <div class=\"buttonContainer\">\n        <button (click)=\"submit(); false\" mat-raised-button color=\"primary\" [disabled]=\"!eventFiltersFG.valid\">\n          Aceptar<mat-icon>check</mat-icon>\n        </button>\n        <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\">\n          Cerrar<mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </form>\n    \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/events.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/events.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"text-center font-weight-light mt-3\">Gestión de Eventos</h1>\n    <div class=\"float-right mb-3 \" style=\"width: 40%; text-align: end;\">\n      <button mat-raised-button color=\"primary\" matTooltip=\"Agregar un evento\" (click)=\"openCreateEventDialog()\">\n          <i class=\"material-icons\">add</i>Agregar Evento</button>\n      <button *ngIf=\"this.authService.getUser().role_id === 1\" mat-raised-button color=\"accent\"  matTooltip=\"Mostrar Peticiones de Eventos\" [routerLink]=\"['/event', 'request']\">\n        <i class=\"material-icons\">list</i>Solicitudes de Eventos</button>\n    </div>\n    <div *ngIf=\"this.eventService.events; else loading\">\n        <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n            <mat-label>Buscar por nombre del evento</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\"/>\n            <button\n              mat-icon-button\n              matSuffix\n              [attr.aria-label]=\"'Hide password'\"\n              [attr.aria-pressed]=\"hide\"\n              (click)=\"openShowFilterOptionsDialog()\"\n            >\n              <mat-icon>library_books</mat-icon>\n            </button>\n            <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar por otros valores.</mat-hint>\n        </mat-form-field>\n        <div *ngIf=\"isFilters\" class=\"container-text-left\">\n          <button  mat-raised-button color=\"primary\" (click)=\"obtainAllEvents()\">Limpiar filtro</button>\n        </div> \n        \n        <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n            <table class=\"table\" *ngIf=\"this.eventService.events\">\n            <thead class=\"thead-light\">\n                <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Costo</th>\n                <th scope=\"col\">Todo el día</th>\n                <th scope=\"col\">Fecha Inicio</th>\n                <th scope=\"col\">Fecha Fin</th>\n                <th scope=\"col\" *ngIf=\"this.authService.getUser().role_id === 1\" style=\"text-align: center;\">Activo</th>\n                <th scope=\"col\" *ngIf=\"this.authService.getUser().role_id === 1\" style=\"text-align: center;\">Acciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let event of this.eventService.events | filterBy: filter\">\n                <td>{{event.name}}</td>\n                <td>{{event.cost}}</td>\n                <td *ngIf=\"event.all_day==true\">Sí</td>\n                <td *ngIf=\"event.all_day==false\">No</td>\n                <td>{{event.date_range.initial_date | date: 'dd/MM/yyyy'}}</td>\n                <td>{{event.date_range.final_date | date: 'dd/MM/yyyy'}}</td>\n                <td style=\"text-align: center;\" *ngIf=\"this.authService.getUser().role_id === 1\">\n                    <section (click)=\"$event.stopPropagation()\">\n                        <mat-slide-toggle (change)=\"changeState(event, $event)\" color=\"primary\"\n                          [checked]= event.is_active>\n                        </mat-slide-toggle>\n                      </section>\n                </td>\n                <td style=\"text-align: center;\" *ngIf=\"this.authService.getUser().role_id === 1\"> \n                    <button mat-stroked-button [routerLink]=\"['/event', event.event_id]\" matTooltip=\"Detalles del evento\" style=\"color: rgb(82, 82, 82); font-size: 14px; \">\n                        Ver Detalles\n                    </button>\n                </td>\n                </tr>\n            </tbody>   \n            </table>\n            <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"(this.eventService.events | filterBy: filter).length === 0\">\n              ¡No hay eventos disponibles<span class=\"text-danger\"></span>!\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/event-details/event-details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/event-details/event-details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.loading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-container>\n<div style=\"display: flex; justify-content: space-around;\">\n\n    <h2 style=\"color: #dbb735; text-align: center; margin: auto 0\">{{event.name}}</h2>\n    <div style=\"display: flex;  margin: auto 0; padding: 0 20px\">\n        <h2 style=\"margin: auto\" [style.color]=\"event.is_active? '#673ab7': 'gray'\">\n            {{event.is_active? \"Activo\": \"Inactivo\"}}</h2>\n        <mat-slide-toggle style=\"width: min-content; margin-left: 3%; margin-top: 5%;\" (change)=\"changeEventState(event, $event)\"\n            color=\"primary\" [checked]=event.is_active>\n        </mat-slide-toggle>\n    </div>\n\n</div>\n\n\n<div style=\"display: flex; margin-top: 20px; padding: 0 20px; flex-wrap: wrap;\">\n    <div style=\"width: 50%; min-width: 300px;\">\n        \n        <form [formGroup]=\"eventFG\" class=\"container-fluid d-flex flex-column justify-content-center\" style=\"padding: 25px\">\n\n            <mat-form-field  appearance=\"outline\">\n                <mat-label>Nombre</mat-label>\n                <input matInput formControlName=\"name\" matTooltip=\"Nombre del evento\" required>\n            </mat-form-field>\n    \n            <mat-form-field appearance=\"outline\">\n                <mat-label>Costo</mat-label>\n                <input matInput formControlName=\"cost\" required>\n            </mat-form-field>\n        \n            <mat-form-field appearance=\"outline\">\n                <mat-label>Dirección</mat-label>\n                <textarea \n                    style=\"resize: none;\" \n                    matInput \n                    formControlName=\"address\" \n                    matTooltip=\"Dirección exacta del evento\" \n                    type=\"text\"\n                    required></textarea>\n            </mat-form-field>\n        \n            <mat-form-field  appearance=\"outline\" >\n                <mat-label>Detalles</mat-label>\n                <textarea \n                    style=\"resize: none;\" \n                    matInput \n                    formControlName=\"detail\" \n                    matTooltip=\"Detalles del evento\" \n                    type=\"text\"\n                    required></textarea>\n            </mat-form-field>\n\n            <div  class=\"chip-list\">\n                <mat-form-field class=\"chip-list\" appearance=\"outline\" style=\"width: 100%;\">\n                  <mat-chip-list #chipList aria-label=\"Categories selection\">\n                    <mat-chip class=\"chip\"\n                      *ngFor=\"let category of allCategories\"\n                      [selectable]=\"selectable\"\n                      [removable]=\"removable\">\n                      {{category.name}}\n                      <i matChipRemove class=\"material-icons\" (click)=\"remove(category)\">cancel</i>\n                    </mat-chip>\n                    <input\n                      placeholder=\"Seleccione las categorías\"\n                      #tagInput\n                      formControlName=\"categories\" \n                      [matChipInputFor]=\"chipList\"\n                      [matAutocomplete]=\"auto\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                  </mat-chip-list>\n                  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                    <mat-option *ngFor=\"let c of filteredCategories \" [value]=\"c\">\n                      {{c.name}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n            </div>\n\n            <div  class=\"chip-list\">\n                <mat-form-field class=\"chip-list\" appearance=\"outline\" style=\"width: 100%;\">\n                  <mat-chip-list #chipList2 aria-label=\"Companies selection\">\n                    <mat-chip class=\"chip\"\n                      *ngFor=\"let company of allCompanies\"\n                      [selectable]=\"selectable\"\n                      [removable]=\"removable\">\n                      {{company.name}}\n                      <i matChipRemove class=\"material-icons\" (click)=\"removeCompany(company)\">cancel</i>\n                    </mat-chip>\n                    <input\n                      placeholder=\"Seleccione las compañías\"\n                      #tagInput2\n                      formControlName=\"companies\" \n                      [matChipInputFor]=\"chipList\"\n                      [matAutocomplete]=\"autoCompany\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                  </mat-chip-list>\n                  <mat-autocomplete #autoCompany=\"matAutocomplete\" (optionSelected)=\"selectedCompany($event)\">\n                    <mat-option *ngFor=\"let c of filteredCompanies \" [value]=\"c\">\n                      {{c.name}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n            </div>\n        </form>\n    </div>\n\n    <div *ngIf=\"eventImages.length != 0\"\n        style=\"width: 50%; display: flex; flex-direction: column; border-radius: 20px; border: solid 1.5px rgb(220, 220, 220); margin: auto; min-width: 280px;\">\n        <ngb-carousel class=\"container-fluid\" (slide)=\"onSlide($event)\">\n            <ng-template *ngFor=\"let i of eventImages; let index = index\" [id]=\"'slideId_' + index\" ngbSlide>              \n                <img class=\"d-block w-100\" style=\"height: 500px !important; border-radius: 10px;\" src=\"{{url}}{{eventImages[index]}}\"/>\n            </ng-template>\n        </ngb-carousel>\n        <div style=\" display: flex; height: 70px;\">\n            <div title=\"Añadir imágenes al evento\"\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-right: solid 0.75px rgb(220, 220, 220);\">\n                <label for=\"file-upload\"  class=\"image-buttons\" style=\"border-radius: 0 0 0 20px; color: #dbb735; text-align: center; padding-top:10%;\" ><mat-icon>find_replace</mat-icon></label> \n                <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"uploadFile($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>   \n            </div>\n            <div title=\"Eliminar imagen del evento\"\n                style=\"width: 50%; border-top: solid 1.5px rgb(220, 220, 220); border-left: solid 0.75px rgb(220, 220, 220);\">\n                <button [disabled]=\"loading\" mat-button style=\"border-radius: 0 0 20px 0\" (click)=\"deleteImage();\"\n                    class=\"image-buttons\" color=\"warn\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"eventImages.length == 0\" title=\"Añadir imágenes al evento\" class=\"noImageButton\">\n        <label for=\"file-upload\"  style=\"width: 100%; margin: 0%; cursor: pointer; color: #dbb735; text-align: center; padding-top: 2%;\"> Añadir Imagen </label> \n        <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"uploadFile($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>   \n    </div>\n    \n</div>\n\n\n<div class=\"container\" style=\" width: 95%; padding-top: 2%; margin-left: 2.5%;\">\n    \n    <div class=\"toggle\">\n        <label>Todo el día:</label>\n        <mat-slide-toggle style=\"margin-left: 3%;\" (change)=\"changeState($event)\" color=\"primary\" [checked]= \"allDay\"></mat-slide-toggle>\n        <label style=\"margin-left: 5%; margin-right: 5%;\"> {{!this.allDay? \"No\": \"Sí\"}} </label>\n        \n        <mat-form-field *ngIf=\"allDay== true\" style=\"width: 45%; \">\n            <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"commonDate\"  [min]=\"today\"  placeholder=\"Fecha\" [(ngModel)]=\"common_date\" disabled >\n            <mat-datepicker-toggle matSuffix [for]=\"commonDate\" ></mat-datepicker-toggle>\n            <mat-datepicker #commonDate disabled=\"false\" ></mat-datepicker>\n        </mat-form-field>\n\n        <div style=\"display: flex;\">\n    \n            <mat-form-field *ngIf=\"allDay== false\" style=\"width: 45%; \">\n                <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"startDate\" [min]=\"today\"  placeholder=\"Fecha Inicial\" [(ngModel)]=\"initial_date\" disabled >\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\" ></mat-datepicker-toggle>\n                <mat-datepicker #startDate disabled=\"false\" ></mat-datepicker>\n            </mat-form-field>\n    \n            <mat-form-field *ngIf=\"allDay== false\"  style=\"width: 45%; margin-left: 3%;\">\n                <input matTooltip=\"Presione el Icono\" matInput [matDatepicker]=\"endDate\" [matDatepickerFilter]=\"dateFilter\" placeholder=\"Fecha de Finalización\" [(ngModel)]=\"final_date\" disabled >\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker  #endDate [disabled]=\"initial_date == undefined\" [startAt]=\"initial_date\"></mat-datepicker>\n            </mat-form-field>\n    \n            <div *ngIf=\"allDay == true\">\n                <mat-form-field  appearance=\"outline\">\n                    <mat-label>Hora Inicial</mat-label>\n                    <input type=\"time\" matInput [(ngModel)]=\"initial_time\" matToolTip=\"Hora de inicio\" >\n                </mat-form-field>\n               \n                <mat-form-field  style=\"margin-left: 3%;\" appearance=\"outline\">\n                    <mat-label>Hora de finalización</mat-label>\n                    <input type=\"time\"  [disabled]=\"initial_time == undefined\" matToolTip=\"Hora de finalización\" matInput [(ngModel)]=\"final_time\">\n                </mat-form-field>\n                <mat-hint>Presione <mat-icon>schedule</mat-icon> para seleccionar una hora.</mat-hint>\n            </div>\n        </div>\n        <mat-hint *ngIf=\"allDay== false\">Presione <mat-icon>today</mat-icon> para seleccionar una fecha.</mat-hint>\n    </div>\n\n    <div class=\"color-picker\">\n        <label>Selecciona un color </label>\n        <color-circle  [color]=\"color\" (onChangeComplete)=\"changeComplete($event)\" ></color-circle> \n    </div>\n</div>\n\n<div class=\"buttonContainer\">\n    <button mat-stroked-button color=\"primary\"  [disabled]=\"disableDialog()\"\n        style=\"width: 47%; min-width: fit-content; margin-top: 10px;\" (click)=\"modifyEvent()\" >\n        Guardar cambios\n    </button>\n\n    <button mat-stroked-button color=\"warn\" [disabled]=\"loading\"\n        style=\"width: 47%; min-width: fit-content;margin-top: 10px;\" (click)=\"setData()\">\n        Descartar cambios\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/location/location.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/location/location.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\" style=\"height: calc(100vh - 150px); display: flex; flex-direction: column;\" (mouseenter)=\"refreshMap()\">\n    <div class=\"shadow-sm rounded\" class=\"map container-fluid\" leaflet (leafletMapReady)=\"onMapReady($event)\"\n        [leafletOptions]=\"options\" (leafletClick)=\"putLocationMarker($event)\"></div>\n    <div style=\"width: 94%; height: 14%; display: flex; justify-content: space-between; margin: 3%; flex-wrap: wrap;\">\n        <label style=\"font-size: 15px; min-width:  30% ; margin: auto; margin-bottom: 15px;\">\n            Latitud: <b style=\"color: #dbb735;;\">{{locationMarker.getLatLng().lat}}</b> <br> \n            Longitud: <b style=\"color: #ca382d;\">{{locationMarker.getLatLng().lng}}</b>\n        </label>\n        <button mat-stroked-button color=\"primary\" style=\"width: 60%; min-width: 200px; margin: 0 auto\"\n            matTooltip=\"Arrastre el marcador hasta la nueva ubicación y presione el botón para guardar\"\n            [disabled]=\"myEvent.latitude == locationMarker.getLatLng().lat && myEvent.longitude == locationMarker.getLatLng().lng\"\n            (click)=\"updateEventLocation()\">\n            Guardar ubicación\n            <mat-icon style=\"margin-left: 5%;\">check</mat-icon></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/management.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/management.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n    <mat-tab label=\"Detalles\">\n        <app-event-details *ngIf=\"myEvent; else null\" [event]=\"myEvent[0]\"></app-event-details>\n        <ng-template #loading>\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Ubicación\">\n        <app-location *ngIf=\"myEvent; else null\" [myEvent]=\"myEvent\"></app-location>\n        <ng-template #loading>\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-template>\n    </mat-tab>\n</mat-tab-group> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/carousel/carousel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/carousel/carousel.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel class=\"container-fluid\" *ngIf=\"data.images\">\n  <ng-template *ngFor=\"let i of data.images; let index = index\" ngbSlide>\n    <div class=\"container-fluid text-center\">\n      <img class=\"img img-fluid\" src=\"{{url}}{{data.images[index]}}\" alt=\"Image\" />\n    </div>\n    <div *ngIf=\"data.local\" class=\"carousel-caption\">\n      <button mat-raised-button (click)=\"deleteImage(index); false\"><mat-icon>delete</mat-icon></button>\n    </div>\n  </ng-template>\n</ngb-carousel>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n  <h4 class=\"text-muted text-center font-weight-light\">\n    Introduzca los valores a filtrar\n  </h4>\n  <small class=\"text-muted\"><i>Deje en blanco los campos sobre los que no desea filtrar</i></small>\n  <hr>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Duración</mat-label>\n    <input [(ngModel)]=\"filters.duration\" matInput />\n    <mat-icon matSuffix>access_time</mat-icon>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Precio total</mat-label>\n    <input [(ngModel)]=\"filters.totalPrice\" matInput />\n    <mat-icon matSuffix>attach_money</mat-icon>\n  </mat-form-field>\n  <mat-form-field *ngIf=\"categories\" appearance=\"fill\">\n    <mat-label>Categoría</mat-label>\n    <mat-select [(ngModel)]=\"filters.category\">\n      <mat-option *ngFor=\"let c of categories\" [value]=\"c.category_id\">\n        {{c.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field *ngIf=\"groupTypes\" appearance=\"fill\">\n    <mat-label>Tipo de grupo</mat-label>\n    <mat-select [(ngModel)]=\"filters.groupType\">\n      <mat-option *ngFor=\"let g of groupTypes\" [value]=\"g.group_type_id\">\n        {{g.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"container-fluid text-center\">\n    <button (click)=\"submit(); false\" mat-raised-button color=\"primary\"><mat-icon>check</mat-icon></button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"dataSource; else loading\">\n  <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n    <mat-label>Escriba cualquier valor para filtrar</mat-label>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" />\n    <button\n      mat-icon-button\n      matSuffix\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide\"\n      (click)=\"openShowFilterOptionsDialog(); false\"\n    >\n      <mat-icon>library_books</mat-icon>\n    </button>\n    <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar desde el servidor</mat-hint>\n  </mat-form-field>\n  <div *ngIf=\"isFilters\" class=\"container text-left\">\n    <button (click)=\"getItinerariesMinimalInfo(); false\" mat-raised-button color=\"primary\">Limpiar filtro</button>\n  </div>\n  <br>\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"w-100 mat-elevation-z8\">\n    <ng-container matColumnDef=\"position\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>No.</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element; let i = index\">\n        {{ i + 1 }}\n      </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Nombre</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element\">\n        {{ element.name }}\n      </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container class=\"text-center\" matColumnDef=\"actions\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Acciones</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element\">\n        <button [routerLink]=\"['/itineraries/dashboard']\"\n          (click)=\"assignItineraryId(element.itinerary_id)\"\n          mat-stroked-button\n          color=\"primary\"\n        >\n          Ver más\n      </button>\n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt-5 pt-3 d-flex flex-column w-100 justify-content-center\">\n  <div class=\"containner\">\n    <h1 class=\"font-weight-light text-center\">Gestión de Itinerarios</h1>\n  </div>\n  <div class=\"container-fluid flex-row d-flex mb-2 justify-content-sm-end\">\n    <button (click)=\"openItineraryDialog(); false\" mat-raised-button color=\"accent\">Agregar nuevo</button>\n  </div>\n  <div class=\"container-fluid mh-50\">\n    <app-itineraries-table></app-itineraries-table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"itineraryFG\"\n  (ngSubmit)=\"onSubmit()\"\n  class=\"p-0 container-fluid d-flex flex-column justify-content-center\"\n>\n  <h5 class=\"font-weight-light text-center\">Agregar nuevo itinerario</h5>\n  <hr />\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Nombre</mat-label>\n    <input [formControl]=\"itineraryFG.get('name')\" matInput type=\"text\" />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Cantidad de adultos</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('adultsQuantity')\"\n      matInput\n      type=\"number\"\n    />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Cantidad de niños</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('childrenQuantity')\"\n      matInput\n      type=\"number\"\n    />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Precio por día</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('pricePerDay')\"\n      matInput\n      type=\"number\"\n    />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Precio total</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('totalPrice')\"\n      matInput\n      type=\"number\"\n    />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Descripción</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('description')\"\n      matInput\n      type=\"text\"\n    />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Duración en días</mat-label>\n    <input [formControl]=\"itineraryFG.get('duration')\" matInput type=\"number\" />\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Tipo de grupo</mat-label>\n    <mat-select [formControl]=\"itineraryFG.get('groupType')\">\n      <mat-option *ngFor=\"let t of groupTypes\" [value]=\"t.group_type_id\">\n        {{ t.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Categoría</mat-label>\n    <mat-select [formControl]=\"itineraryFG.get('category')\">\n      <mat-option (click)=\"linkCategory(c); false\" *ngFor=\"let c of categories\" [value]=\"c.category_id\">\n        {{ c.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-list *ngIf=\"linkedCategories.length > 0\" role=\"list\">\n    <mat-list-item *ngFor=\"let c of linkedCategories; let index = index\" role=\"listitem\">\n      <div class=\"container-fluid d-flex flex-row justify-content-between\">\n        <span>{{c.name}}</span>\n        <button color=\"warn\" (click)=\"deleteLinkedCategory(index); false\" mat-raised-button><mat-icon>delete</mat-icon></button>\n      </div >\n    </mat-list-item>\n  </mat-list>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Consejos de viaje</mat-label>\n    <textarea\n      [formControl]=\"itineraryFG.get('travelAdvices')\"\n      matInput\n      type=\"text\"\n    ></textarea>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Fecha de inicio</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('startDate')\"\n      matInput\n      [matDatepicker]=\"startPicker\"\n    />\n    <mat-datepicker-toggle\n      matSuffix\n      [for]=\"startPicker\"\n    ></mat-datepicker-toggle>\n    <mat-datepicker\n      touchUi\n      #startPicker\n      startView=\"month\"\n      [startAt]=\"startDate\"\n    ></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Fecha fin</mat-label>\n    <input\n      [formControl]=\"itineraryFG.get('endDate')\"\n      matInput\n      [matDatepicker]=\"endPicker\"\n    />\n    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n    <mat-datepicker\n      touchUi\n      #endPicker\n      startView=\"month\"\n      [startAt]=\"startDate\"\n    ></mat-datepicker>\n  </mat-form-field>\n\n  <mat-radio-group\n    [formControl]=\"itineraryFG.get('status')\"\n    aria-label=\"Estado\"\n    class=\"m-auto\"\n  >\n    <mat-radio-button class=\"mr-1\" value=\"true\">Público</mat-radio-button>\n    <mat-radio-button class=\"ml-1\" value=\"false\">Privada</mat-radio-button>\n  </mat-radio-group>\n  <app-upload-images [uploader]=\"_image.uploader\" (selectedImages)=\"catchSelectedImages($event);\"></app-upload-images>\n  <app-carousel (deletedImage)=\"catchDeletedImage($event)\" class=\"mb-3\" [data]=\"data\"></app-carousel>\n  <div class=\"container text-center mb-3\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"><mat-icon>done</mat-icon></button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"dropzone shadow-sm container mb-2\"\n  dropZone\n  (hovered)=\"toggleHover($event)\"\n  (dropped)=\"prepareFiles($event)\"\n  [class.hovering]=\"isHovering\"\n>\n  <h3 class=\"text-white font-weight-light\">Seleccione o arrastre el archivo</h3>\n\n  <div class=\"container text-center\">\n    <input\n      *ngIf=\"uploader\"\n      ng2FileSelect\n      [uploader]=\"uploader\"\n      multiple\n      style=\"color: transparent\"\n      type=\"file\"\n      (change)=\"prepareFiles($event.target.files)\"\n    />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n  <mat-tab label=\"Detalles\">\n    <app-itinerary-distribution [it]=\"itinerary\" *ngIf=\"itinerary\"></app-itinerary-distribution>\n  </mat-tab\n  >\n  <mat-tab label=\"Mapa\"> <app-itinerary-map></app-itinerary-map> </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n  <h3 class=\"text-center font-weight-light text-primary\">\n    {{it.info.name}}\n  </h3>\n  <div class=\"container-fluid\">\n    <app-carousel *ngIf=\"it.imgs.length > 0 && it.imgs[0] !== null\" [data]=\"data\"></app-carousel>\n  </div>\n  <hr>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      Precio por día\n      <span class=\"badge badge-primary badge-pill\">${{it.info.price_per_day}}</span>\n    </li>\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      Precio total\n      <span class=\"badge badge-primary badge-pill\">${{it.info.total_price}}</span>\n    </li>\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      Número de adultos\n      <span class=\"badge badge-primary badge-pill\">{{it.info.adult_number}}</span>\n    </li>\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      Número de niños\n      <span class=\"badge badge-primary badge-pill\">{{it.info.child_number}}</span>\n    </li>\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      {{it.info.description}}\n    </li>\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      Duración\n      <span class=\"badge badge-primary badge-pill\">{{it.info.duration}} días</span>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Detalles del día</mat-label>\n    <textarea [(ngModel)]=\"data.details\" matInput></textarea>\n  </mat-form-field>\n  <div class=\"container text-center\">\n    <button (click)=\"save(); false\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon>save</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-around p-0\">\n  <app-itinerary-details [it]=\"it\"></app-itinerary-details>\n  <div class=\"text-left container-fluid mt-2 example-box \">\n    <mat-slide-toggle\n      *ngIf=\"sesionService.actualUser.role_id === 1; else status\"\n      (change)=\"setAvailable(!it.info.active, it.itinerary_id, it.info)\"\n      [checked]=\"it.info.active\"\n      >{{ it.info.active ? \"Habilitado\" : \"Deshabilitado\" }}</mat-slide-toggle\n    >\n\n    <ng-template #status>\n      <h2 class=\"font-weight-light\">{{\n        it.info.active\n          ? \"Itinerario habilitado\"\n          : \"Este itinerario se encuentra deshabilitado\"\n      }}</h2>\n    </ng-template>\n\n    <button\n      *ngIf=\"favorites.includes(it.itinerary_id); else filled\"\n      mat-icon-button\n      mat-button\n      class=\"btn\"\n    >\n      <mat-icon\n        matTooltip=\"Remover de favoritos\"\n        color=\"primary\"\n        (click)=\"removeFavoriteItinerary(it.itinerary_id)\"\n        >favorite</mat-icon\n      >\n    </button>\n\n    <ng-template #filled>\n      <button mat-icon-button mat-button class=\"btn\">\n        <mat-icon\n          matTooltip=\"Agregar a favoritos\"\n          color=\"primary\"\n          (click)=\"addFavoriteItinerary(it.itinerary_id)\"\n          >favorite_border</mat-icon\n        >\n      </button>\n    </ng-template>\n  </div>\n  <app-offers *ngIf=\"it\" [it]=\"it\"></app-offers>\n  <hr />\n  <app-promotions></app-promotions>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt-2 text-right\">\n  <button mat-button (click)=\"addDay(); (false)\">Agregar día</button>\n</div>\n<div *ngIf=\"days.length > 0; else noDays\">\n  <div class=\"container-fluid p-0\">\n    <h2 class=\"text-center text-warning font-weight-light\">\n      Días del itinerario\n    </h2>\n    <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n      <mat-label>Escriba cualquier valor para buscar</mat-label>\n      <input [formControl]=\"searchOffersCTRL\" matInput />\n    </mat-form-field>\n    <div cdkDropListGroup>\n      <div\n        *ngIf=\"filteredOffers\"\n        cdkDropList\n        [cdkDropListData]=\"filteredOffers\"\n        class=\"col-sm-4 shadow m-auto draggable-list\"\n        (cdkDropListDropped)=\"drop($event)\"\n      >\n        <div class=\"draggable-box\" *ngFor=\"let r of filteredOffers\" cdkDrag>\n          {{ r.name }}\n        </div>\n      </div>\n      <div\n        class=\"container-fluid d-flex flex-row flex-wrap justify-content-sm-center\"\n      >\n        <div *ngFor=\"let item of days; let i = index\" class=\"col-sm-4\">\n          <div\n            class=\"flex-row d-flex justify-content-sm-between align-items-center\"\n          >\n            <strong>Día {{ item.day_number }}</strong>\n            <button mat-icon-button (click)=\"deleteDay(item.day_number, i)\">\n              <mat-icon matTooltip=\"Eliminar día del itinerario\" color=\"warn\"\n                >delete</mat-icon\n              >\n            </button>\n          </div>\n          <div\n            cdkDropList\n            [cdkDropListData]=\"item.items\"\n            class=\"draggable-list m-0 shadow bg-transparent\"\n            (cdkDropListDropped)=\"drop($event)\"\n          >\n            <mat-accordion\n              class=\"draggable-box\"\n              *ngFor=\"let offer of item.items; let index = index\"\n              cdkDrag\n            >\n              <mat-expansion-panel\n                *ngIf=\"offer !== null\"\n                class=\"m-0 p-0 container-fluid\"\n              >\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    {{ offer.name }}\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <div\n                  class=\"m-0 p-0 d-flex flex-column justify-content-sm-around\"\n                >\n                  <mat-list class=\"container-fluid p-0 m-0\" role=\"list\">\n                    <mat-list-item role=\"listitem\"\n                      ><strong>Inicio: </strong>\n                      <span class=\"ml-2\">{{\n                        offer.initial_time\n                      }}</span></mat-list-item\n                    >\n                    <mat-list-item role=\"listitem\"\n                      ><strong>Fin: </strong>\n                      <span class=\"ml-2\">{{\n                        offer.final_time\n                      }}</span></mat-list-item\n                    >\n                  </mat-list>\n                </div>\n                <div class=\"container-fluid text-right\">\n                  <button\n                    mat-icon-button\n                    matSuffix\n                    mat-button\n                    (click)=\"\n                      unlinkOffer(offer.offer_id, offer.day_number, index, i)\n                    \"\n                  >\n                    <mat-icon matTooltip=\"Eliminar oferta del día\" color=\"warn\"\n                      >delete</mat-icon\n                    >\n                  </button>\n\n                  <button\n                    *ngIf=\"favorites.includes(offer.offer_id); else filled\"\n                    mat-icon-button\n                    mat-button\n                  >\n                    <mat-icon\n                      matTooltip=\"Remover de favoritos\"\n                      color=\"primary\"\n                      (click)=\"removeOfferFavorite(offer.offer_id)\"\n                      >favorite</mat-icon\n                    >\n                  </button>\n                  <ng-template #filled>\n                    <button mat-icon-button matSuffix mat-button class=\"btn\">\n                      <mat-icon matTooltip=\"Agregar a favoritos\"\n                        color=\"primary\"\n                        (click)=\"addOfferFavorite(offer.offer_id)\"\n                        >favorite_border</mat-icon>\n                    </button>\n                  </ng-template>\n\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </div>\n          <div class=\"container-fluid mt-3 text-center\">\n            <button\n              class=\"mr-1\"\n              mat-raised-button\n              [disabled]=\"\n                !this.daysDetails[i] || this.daysDetails[i].details === null\n              \"\n              (click)=\"openDayDetails(i); (false)\"\n              color=\"accent\"\n            >\n              Detalles\n            </button>\n            <button\n              (click)=\"updateDayDistribution(item.day_number, i); (false)\"\n              class=\"ml-1 text-white\"\n              mat-raised-button\n              style=\"background-color: #0687F5\"\n            >\n              Actualizar\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #noDays>\n  <h4 class=\"font-weight-light text-muted text-center\">\n    Sin información de días\n  </h4>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-5\">\n  <h2 class=\"text-center text-warning font-weight-light\">\n    Promociones del itinerario\n  </h2>\n  <mat-form-field class=\"container-fluid\" appearance=\"outline\">\n    <mat-label>Escriba el nombre de la promoción a buscar</mat-label>\n    <input matInput [(ngModel)]=\"filter.name\"/>\n  </mat-form-field>\n  <!-- View Promotions -->\n  <div class=\"row container-fluid\">\n    <!-- View Promotions that aren't add in itinerary -->\n    <div class=\"col\">\n      <br>\n      <h4 class=\"text-center font-weight-light text-warning\"> Agregar Promociones </h4>\n      <mat-spinner *ngIf=\"promotionLoading\" style=\"margin:0 auto;\" class=\"mt-4\"></mat-spinner>\n      <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"(promotions | filterBy: filter).length === 0 && !promotionLoading\">\n        No se encuentran promociones\n      </div>\n      <cdk-virtual-scroll-viewport  *ngIf=\"!promotionLoading\" itemSize=\"50\" class=\"containerPromotions\">\n        <div class=\"example-box d-flex flex-row justify-content-sm-between rounded\" *cdkVirtualFor=\"let promotion of promotions | filterBy: filter\">\n          <span>{{ promotion.name }}</span>\n\n          <button mat-icon-button mat-button class=\"btn\">\n            <mat-icon matTooltip=\"Agregar promoción\" color=\"primary\" (click)=\"addPromotionInItinerary(promotion.promotion_id)\">add</mat-icon>\n          </button>\n          \n        </div>\n      </cdk-virtual-scroll-viewport>\n      <!-- in case you want to show empty message -->\n\n    </div>\n    <!-- View Promotions that aren add in itinerary -->\n\n    <div class=\"col\">\n      <br>\n      <h4 class=\"text-center font-weight-light text-warning\"> Promociones Agregadas </h4>\n      <mat-spinner *ngIf=\"addedPromotionLoading\" class=\"mt-4\" style=\"margin:0 auto;\"></mat-spinner>\n      <cdk-virtual-scroll-viewport *ngIf=\"!addedPromotionLoading\" itemSize=\"50\" class=\"containerPromotions\">\n        <div class=\"example-box d-flex flex-row justify-content-sm-between rounded\" *cdkVirtualFor=\"let addedPromotion of addedPromotions\">\n          <span>{{ addedPromotion.name }}</span>\n\n          <button mat-icon-button mat-button class=\"btn\">\n            <mat-icon matTooltip=\"Eliminar promoción\" color=\"warn\" (click)=\"deletePromotionOfItinerary(addedPromotion.promotion_id)\">delete</mat-icon>\n          </button>\n\n        </div>\n      </cdk-virtual-scroll-viewport>\n    </div>\n  </div>\n  <!--<button mat-icon-button matSuffix mat-button class=\"btn-delete\">\n    <mat-icon matTooltip=\"Eliminar promoción del día\" color=\"warn\">delete</mat-icon>\n  </button>\n  -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n  <p>{{ details }}</p>\n  <div class=\"container-fluid text-center\">\n    <button (click)=\"dialogRef.close(); false\" mat-raised-button>Cerrar</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt-3 mb-3\" >\n  <div class=\"shadow-sm rounded\"  class=\"map container-fluid\" leaflet (leafletMapReady)=\"onMapReady($event)\" [leafletOptions]=\"options\" >\n    <div *ngFor=\"let l of layers\" [leafletLayer]=\"l\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password/forgot-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password/forgot-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h5 class=\"font-weight-light text-center\">Recuperar Contraseña</h5>\n  <br>\n  <mat-spinner class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n\n  <form [formGroup]=\"forgotPasswordForm\" class=\"p-0 container-fluid d-flex flex-column justify-content-center\"\n    *ngIf=\"!loading && !isSendEmail\">\n    <p>Después de llenar este formulario revise su <span class=\"text-info\">correo electrónico</span></p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Digite su correo electrónico</mat-label>\n      <input matInput [formControl]=\"forgotPasswordForm.get('email')\">\n    </mat-form-field>\n    <div class=\"text-center\">\n      <button mat-button color=\"primary\" [disabled]=\"!forgotPasswordForm.valid\" (click)=\"sendCodePassword()\">\n        <i class=\"material-icons\">{{icon}}</i>\n      </button>\n    </div>\n  </form>\n\n  <form [formGroup]=\"changePasswordForm\" class=\"p-0 container-fluid d-flex flex-column justify-content-center\"\n    *ngIf=\"!loading && isSendEmail\">\n    <p>Si <span class=\"text-danger\">cierra</span> este formulario tendrá que hacer el proceso nuevamente</p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Digite su nueva contraseña</mat-label>\n      <input matInput [type]=\"hide_pass ? 'password' : 'text'\" [formControl]=\"changePasswordForm.get('password')\">\n      <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n        <mat-icon (click)=\"hide_pass = !hide_pass\">{{hide_pass ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n    </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Confirmar contraseña</mat-label>\n        <input matInput [type]=\"hide_newpass ? 'password' : 'text'\" [formControl]=\"changePasswordForm.get('confirmPassword')\">\n        <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n          <mat-icon (click)=\"hide_newpass = !hide_newpass\">{{hide_newpass ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Digite su código</mat-label>\n      <input matInput [type]=\"hide_code ? 'password' : 'text'\" [formControl]=\"changePasswordForm.get('code')\">\n      <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n        <mat-icon (click)=\"hide_code = !hide_code\">{{hide_code ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n      <mat-hint>Copie el <span class=\"text-info\">código</span> que enviamos a su correo y pegue aquí</mat-hint>\n    </mat-form-field>\n    <br>\n    <div class=\"text-center\">\n      <button mat-button color=\"primary\" [disabled]=\"!changePasswordForm.valid\" (click)=\"changePasswordByCode()\">\n        <i class=\"material-icons\">{{icon}}</i>\n      </button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-content\" >\n  <div class=\"main-div\">\n    <mat-card class=\"example-card\">\n      <h2 class=\"text-center font-weight-light title\">Intelitur</h2>\n      <hr>\n      <mat-spinner class=\"spinner\" *ngIf=\"this.sessionService.loadingLogin\"></mat-spinner>\n      <div *ngIf=\"!this.sessionService.loadingLogin\">\n        <form [formGroup]=\"loginForm\" class=\"p-0 container-fluid d-flex flex-column justify-content-center\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Correo electrónico</mat-label>\n            <input matInput [formControl]=\"loginForm.get('email')\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Contraseña</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" [formControl]=\"loginForm.get('password')\">\n            <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n              <mat-icon (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n          </mat-form-field>\n        </form>\n        <button mat-button color=\"primary\" (click)=\"registerBusinessman()\">Regístrese aquí!</button>\n        <button mat-button color=\"primary\" (click)=\"forgotPassword()\">¿Olvidó su contraseña?</button>\n        <div class=\"text-center\">\n          <button mat-button color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"loginUser()\">\n            <i class=\"material-icons\">{{icon}}</i>\n          </button>\n        </div>\n      </div>\n    </mat-card>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register-business-man/register-business-man.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register-business-man/register-business-man.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!loading\">\n  <h5 class=\"font-weight-light text-center\">Registrar un empresario</h5>\n  <br>\n  <form [formGroup]=\"addBusinessmanForm\" class=\"p-0 container-fluid d-flex flex-column justify-content-center\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Nombre</mat-label>\n      <input matInput [formControl]=\"addBusinessmanForm.get('name')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Apellido</mat-label>\n      <input matInput [formControl]=\"addBusinessmanForm.get('lastName')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Nombre de la empresa</mat-label>\n      <input matInput [formControl]=\"addBusinessmanForm.get('businessName')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Correo electrónico</mat-label>\n      <input matInput [formControl]=\"addBusinessmanForm.get('email')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [type]=\"hide ? 'password' : 'text'\" [formControl]=\"addBusinessmanForm.get('password')\">\n      <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n        <mat-icon (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n    </mat-form-field>\n\n\n    <div class=\"text-center\">\n      <button class=\"mt-3 \" mat-button color=\"primary\" [disabled]=\"!addBusinessmanForm.valid\"\n        (click)=\"addBusinessman()\">\n        <i class=\"material-icons\">{{icon}}</i>\n      </button>\n    </div>\n  </form>\n\n</div>\n<mat-spinner class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item *ngIf=\"_auth.getUser().role_id === 1\" [routerLink]=\"['user/user-managment']\" routerLinkActive=\"router-link-active\" href=\"#\">Gestión de usuarios</a>\n      <a mat-list-item [routerLink]=\"['/itineraries/show-all']\" routerLinkActive=\"router-link-active\" href=\"#\">Gestión de itinerarios</a>\n      <a mat-list-item *ngIf=\"_auth.getUser().role_id === 1\" [routerLink]=\"['/company/all']\" routerLinkActive=\"router-link-active\" href=\"#\">Gestión de empresas</a>\n      <a mat-list-item *ngIf=\"_auth.getUser().role_id === 1\" [routerLink]=\"['/event/all']\" routerLinkActive=\"router-link-active\" href=\"#\">Gestión de Eventos</a>\n      <a mat-list-item *ngIf=\"_auth.getUser().role_id === 1\" [routerLink]=\"['/category/all']\" routerLinkActive=\"router-link-active\" href=\"#\">Gestión de Categorías</a>\n      <a mat-list-item [routerLink]=\"['user/profile']\" routerLinkActive=\"router-link-active\" href=\"#\">Cuenta</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Intelitur | {{sessionService.actualUser.name}}</span>\n      <span class=\"fx-spacer\"></span>\n      <button mat-icon-button (click)=\"_auth.logout()\" matTooltip=\"Salir\">\n        <mat-icon mat-list-icon>exit_to_app</mat-icon>\n      </button>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/add-admin/add-admin.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/add-admin/add-admin.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!loading\">\n  <h5 class=\"font-weight-light text-center\">Agregar nuevo administrador</h5>\n  <br>\n  <form [formGroup]=\"addAdminForm\" class=\"p-0 container-fluid d-flex flex-column justify-content-center\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Nombre</mat-label>\n      <input matInput [formControl]=\"addAdminForm.get('name')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Apellido</mat-label>\n      <input matInput [formControl]=\"addAdminForm.get('lastName')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Correo electrónico</mat-label>\n      <input matInput [formControl]=\"addAdminForm.get('email')\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [type]=\"hide ? 'password' : 'text'\" [formControl]=\"addAdminForm.get('password')\">\n      <button mat-icon-button matSuffix mat-button class=\"btn-eye\">\n        <mat-icon (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n    </mat-form-field>\n\n    <div class=\"text-center\">\n      <button class=\"mt-3\" mat-button color=\"primary\" [disabled]=\"!addAdminForm.valid\" (click)=\"addAdmin()\">\n        <i class=\"material-icons\">{{icon}}</i>\n      </button>\n    </div>\n  </form>\n\n</div>\n<mat-spinner class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-event-request/add-event-request.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-event-request/add-event-request.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-mini-fab id=\"exit\" ><i (click)=\"closeDialog()\" style=\"color: black;\" class=\"material-icons\"> clear </i></button>\n<mat-horizontal-stepper linear #stepper>\n    <mat-step [stepControl]=\"eventFG\" >\n        <ng-template matStepLabel>Datos Básicos</ng-template>\n\n        <form [formGroup]=\"eventFG\"  class=\"container\">\n\n            <div class=\"container\">\n                <mat-form-field appearance=\"outline\" >\n                    <mat-label>Nombre</mat-label>\n                    <input matInput formControlName=\"name\" matTooltip=\"Nombre del evento\"  required>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Costo</mat-label>\n                    <input matInput formControlName=\"cost\" required>\n                </mat-form-field>\n            \n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Dirección</mat-label>\n                    <textarea \n                        matInput \n                        formControlName=\"address\" \n                        matTooltip=\"Dirección exacta del evento\" \n                        type=\"text\"\n                        required></textarea>\n                </mat-form-field>\n            \n                <mat-form-field appearance=\"outline\" >\n                    <mat-label>Detalles</mat-label>\n                    <textarea \n                        matInput \n                        formControlName=\"detail\" \n                        matTooltip=\"Detalles del evento\" \n                        type=\"text\"\n                        required></textarea>\n                </mat-form-field>\n\n                <div  class=\"chip-list\" [hidden]=\"petition\">\n                    <mat-form-field class=\"chip-list\" appearance=\"outline\">\n                    <mat-chip-list #chipList aria-label=\"Categories selection\">\n                        <mat-chip class=\"chip\"\n                        *ngFor=\"let category of allCategories\"\n                        [selectable]=\"selectable\"\n                        [removable]=\"removable\">\n                        {{category.name}}\n                        <i matChipRemove class=\"material-icons\" (click)=\"removeCategory(category)\">cancel</i>\n                        </mat-chip>\n                        <input\n                        placeholder=\"Seleccione las categorías\"\n                        #tagInput\n                        formControlName=\"categories\" \n                        [matChipInputFor]=\"chipList\"\n                        [matAutocomplete]=\"auto\"\n                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                    </mat-chip-list>\n                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedCategory($event)\">\n                        <mat-option *ngFor=\"let c of filteredCategories \" [value]=\"c\">\n                        {{c.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n\n                <div  class=\"chip-list\" [hidden]=\"petition\">\n                    <mat-form-field class=\"chip-list\" appearance=\"outline\">\n                    <mat-chip-list #chipList2 aria-label=\"Companies selection\">\n                        <mat-chip class=\"chip\"\n                        *ngFor=\"let company of allCompanies\"\n                        [selectable]=\"selectable\"\n                        [removable]=\"removable\">\n                        {{company.name}}\n                        <i matChipRemove class=\"material-icons\" (click)=\"removeCompany(company)\">cancel</i>\n                        </mat-chip>\n                        <input\n                        placeholder=\"Seleccione las compañías\"\n                        #tagInput2\n                        formControlName=\"companies\" \n                        [matChipInputFor]=\"chipList\"\n                        [matAutocomplete]=\"autoCompany\"\n                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                    </mat-chip-list>\n                    <mat-autocomplete #autoCompany=\"matAutocomplete\" (optionSelected)=\"selectedCompany($event)\">\n                        <mat-option *ngFor=\"let c of filteredCompanies \" [value]=\"c\">\n                        {{c.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </form>\n\n        <div class=\"container\">\n            <div class=\"toggle\">\n                <div style=\"text-align: center;\">\n                    <label>Todo el día:</label>\n                    <mat-slide-toggle style=\"margin-left: 3%;\" (change)=\"changeState($event)\" color=\"primary\" [checked]= \"false\"></mat-slide-toggle>\n                    <label style=\"margin-left: 5%; margin-right: 6%;\"> {{!this.allDay? \"No\": \"Sí\"}} </label>\n                    <mat-form-field *ngIf=\"this.allDay\" style=\"width: 45%;\"  appearance=\"outline\">\n                        <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"commonDate\"  [min]=\"today\"  placeholder=\"Fecha\" [(ngModel)]=\"common_date\" disabled >\n                        <mat-datepicker-toggle matSuffix [for]=\"commonDate\" ></mat-datepicker-toggle>\n                        <mat-datepicker #commonDate disabled=\"false\" ></mat-datepicker>\n                    </mat-form-field>\n                </div>\n        \n                <div style=\" display: flex;\">\n                    <mat-form-field *ngIf=\"allDay== false\" style=\"width: 50%; \" appearance=\"outline\">\n                        <input  matTooltip=\"Presione el Icono\"  matInput [matDatepicker]=\"startDate\" [min]=\"today\"  placeholder=\"Fecha Inicial\" [(ngModel)]=\"initial_date\" disabled >\n                        <mat-datepicker-toggle matSuffix [for]=\"startDate\" ></mat-datepicker-toggle>\n                        <mat-datepicker #startDate disabled=\"false\" ></mat-datepicker>\n                    </mat-form-field>\n            \n                    <mat-form-field *ngIf=\"allDay== false\"  style=\"width: 50%; \" appearance=\"outline\">\n                        <input matTooltip=\"Presione el Icono\" matInput [matDatepicker]=\"endDate\" [matDatepickerFilter]=\"dateFilter\" placeholder=\"Fecha de Finalización\" [(ngModel)]=\"final_date\" disabled >\n                        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                        <mat-datepicker  #endDate [disabled]=\"initial_date == undefined\" [startAt]=\"initial_date\"></mat-datepicker>\n                    </mat-form-field>\n                    \n                    <div *ngIf=\"allDay == true\">\n                        <mat-form-field  appearance=\"outline\" style=\"width: 45%;\">\n                            <mat-label>Hora Inicial</mat-label>\n                            <input type=\"time\" matInput [(ngModel)]=\"initial_time\" matToolTip=\"Hora de inicio\" >\n                        </mat-form-field>\n                       \n                        <mat-form-field  appearance=\"outline\" style=\"width: 45%;\">\n                            <mat-label>Hora de finalización</mat-label>\n                            <input type=\"time\"  [disabled]=\"initial_time == undefined\" matToolTip=\"Hora de finalización\" matInput [(ngModel)]=\"final_time\">\n                        </mat-form-field>\n                        <mat-hint style=\"padding-left: 2.5%;\">Presione <mat-icon>schedule</mat-icon> para seleccionar una hora.</mat-hint>\n                    </div>\n                </div>\n                <mat-hint *ngIf=\"allDay== false\" style=\"padding-left: 2.5%;\">Presione <mat-icon>today</mat-icon> para seleccionar una fecha.</mat-hint>\n            </div>\n        \n            <div class=\"color-picker\">\n                <label>Selecciona un color </label>\n                <color-circle  (onChangeComplete)=\"changeComplete($event)\"  [color]=\"color\"></color-circle> \n            </div>\n        \n            <div class=\"file\" *ngIf=\"!this.data.action\">\n                <div class=\"uploadFile\">\n                    <label for=\"file-upload\"  style=\"width: 100%; margin: 0%; cursor: pointer; color: #dbb735; text-align: center; padding-top: 2%;\"> Añadir Imágenes </label> \n                    <input [disabled]=\"loading\"  id=\"file-upload\" (change)=\"getFiles($event.target.files)\" type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none;\" multiple/>\n                </div>\n                <mat-hint *ngIf=\"this.eventImages.length == 0\" style=\"padding-left: 2.5%; color: crimson;\">¡Debes añadir imagenes!</mat-hint>\n                <mat-hint *ngIf=\"this.eventImages.length != 0\" style=\"padding-left: 2.5%;\">Imágenes añadidas: {{this.eventImages.length}}</mat-hint>\n            </div>\n        </div>\n\n        <div class=\"buttonContainer\" *ngIf=\"!showInfo\">\n            <button mat-raised-button  style=\"width: 40%; min-width: 200px; margin: 0 auto;\" matStepperNext [disabled]=\"disableDialog()\" color=\"primary\" >\n                Continuar la Creación\n            </button>\n        </div>\n\n        <div class=\"buttonContainer\" *ngIf=\"showInfo\">\n            <button mat-raised-button  style=\"width: 40%; min-width: 200px; margin: 0 auto;\" matStepperNext color=\"primary\" >\n                Ver Ubicacion\n            </button>\n        </div>\n    </mat-step>\n\n    <mat-step>\n        <ng-template matStepLabel>Ubicación</ng-template>\n\n        <div class=\"m-3\" style=\"height: calc(100vh - 150px); display: flex; flex-direction: column; justify-content:space-around;\" (mouseenter)=\"refreshMap()\">\n            <div class=\"shadow-sm rounded\" class=\"map container-fluid\" leaflet (leafletMapReady)=\"onMapReady($event)\"\n                [leafletOptions]=\"options\" (leafletClick)=\"putLocationMarker($event)\">\n            </div>\n\n            <div style=\"width: 94%; height: 14%; display: flex; justify-content: space-between; margin: 3%; flex-wrap: wrap;\">\n                <label style=\"font-size: 15px; min-width:  30% ; margin: auto; margin-bottom: 15px;\">\n                    Latitud: <b style=\"color: #dbb735;;\">{{locationMarker.getLatLng().lat}}</b> \n                </label>\n                <label style=\"font-size: 15px; min-width:  30% ; margin: auto; margin-bottom: 15px;\">\n                    Longitud: <b style=\"color: #ca382d;\">{{locationMarker.getLatLng().lng}}</b>\n                </label>\n            </div>\n\n            <div style=\"width: 100%; display: flex; justify-content: space-around; flex-wrap: wrap;\">\n                <button  mat-raised-button matStepperPrevious color=\"accent\" [disabled]=\"loading\">\n                    <mat-icon>reply</mat-icon>Atrás\n                </button>\n                \n                <button *ngIf=\"!showInfo\" mat-raised-button color=\"primary\" style=\"width: 40%; min-width: 200px; margin: 0 auto\"\n                    [disabled]=\"myEvent.latitude == locationMarker.getLatLng().lat && myEvent.longitude == locationMarker.getLatLng().lng || loading\"\n                    (click)=\"onSubmit()\">\n                    Crear Petición de Evento\n                    <mat-icon style=\"margin-left: 5%;\">check</mat-icon>\n                </button>\n            </div>\n        </div>        \n    </mat-step>\n</mat-horizontal-stepper>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\">\n    <mat-form-field style=\"width: 100%\">\n        <input type=\"text\" placeholder=\"Compañía a la que desea unirse\" matInput [formControl]=\"companyControl\"\n            [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let company of filteredCompanies | async\"\n                [value]=\"company.company_id + ' | ' + company.name\">\n                <span>{{company.name}} | </span><small style=\"font-weight: 100;\">{{company.legal_id}}</small>\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n    <div style=\"display:flex; justify-content: end;\">\n        <button mat-raised-button color=\"accent\" class=\"btn-add mr-3 mt-2\" style=\"margin:auto\" (click)=\"requestUnion()\"\n            matTooltip=\"Agregar una nueva solicitud a empresa\" [disabled]=\"!companyControl.valid\" >Solicitar unión</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/create-even-request/create-even-request.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/create-even-request/create-even-request.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div style=\"display:flex; justify-content: end; margin-top: 1rem;\">\n        <button mat-raised-button color=\"primary\" class=\"btn-add mr-3 mt-3\" style=\"margin:auto\"\n          matTooltip=\"Agregar solicitud de creación de evento\" (click)=\"submit(false)\">Solicitar Evento</button>\n      </div>\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; margin: 1rem 0 0 0\">\n        <mat-form-field class=\"container-fluid\" appearance=\"outline\" style=\"width: 40%; min-width: 300px; margin: auto\">\n            <mat-label>Buscar por nombre de evento</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\" />\n        </mat-form-field>\n        <mat-radio-group class=\"radio-button-group\" color=\"primary\" [(ngModel)]=\"filter.state\" (change)=\"refresh()\">\n            <mat-radio-button value=\"0\" style=\"color: rgb(103,58,183);\">\n                Todas\n            </mat-radio-button>\n            <mat-radio-button value=\"1\" style=\"color: rgb(0, 90, 0)\">\n                Aceptadas\n            </mat-radio-button>\n            <mat-radio-button value=\"2\" style=\"color: rgb(160, 105, 0) \">\n                Pendientes\n            </mat-radio-button>\n            <mat-radio-button value=\"3\" style=\"color: rgb(90, 0, 0)\">\n                Rechazadas\n            </mat-radio-button>\n        </mat-radio-group>\n    </div>\n    <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n        <table class=\"table\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\" >Fecha de solicitud</th>\n                    <th scope=\"col\">Evento</th>\n                    <th scope=\"col\" style=\"text-align: center;\" >Detalles de Evento</th>\n                    <th scope=\"col\" style=\"text-align: center;\"   matTooltip=\"Pendiente / Aceptada / Rechazada\" *ngIf=\"filter.state == '0'\">Estado</th>\n                    <th scope=\"col\" style=\"text-align: center;\" *ngIf=\"filter.state == '0' || filter.state == '2'\"> Acciones </th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"!this.loading\">\n                <tr *ngFor=\"let request of eventRequests | filterBy: filter.filter\">\n                    <td >{{request.petition_moment | date: 'dd/MM/yyyy'}}</td>\n                    <td>{{ request.name }}</td>\n                    <td style=\"text-align: center;\" >\n                        <button mat-stroked-button matTooltip=\"Detalles del evento\"  (click)=\"submit(true, request)\" style=\"color: rgb(82, 82, 82); font-size: 14px; \">\n                            Ver Detalles\n                        </button>\n                    </td>\n                    <td *ngIf=\"filter.state == '0'\" style=\"text-align: center;\" >\n                        <label color=\"primary\" style=\"cursor: default;\"\n                            [style.color]=\"request.petition_state == 1?  'rgb(0, 90, 0)': request.petition_state ==  2? 'rgb(160, 105, 0)': 'rgb(90, 0, 0)'\">\n                            {{ request.petition_state == 1? 'Aceptado' : request.petition_state ==  2? 'Pendiente': 'Rechazado' }}\n                        </label>\n\n                    </td>\n                    <td class=\"buttonContainer\"  *ngIf=\"filter.state == '2' || filter.state == '0'\" style=\"text-align: center;\" > \n                        <div *ngIf=\"request.petition_state == 2\">\n                            <button mat-raised-button color=\"warn\" (click)=\"deleteRequest(request)\" matTooltip=\"Cancelar solicitud\">\n                                Cancelar\n                            </button>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <ng-container *ngIf=\"this.loading\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-container>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\"\n            *ngIf=\"!this.loading && (this.eventRequests | filterBy: filter.filter).length === 0 \">\n            No se encuentra ninguna solicitud a su nombre\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"dataSource; else loading\">\n  <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n    <mat-label>Buscar por nombre</mat-label>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" />\n  </mat-form-field>\n  <br />\n  <table\n    *ngIf=\"dataSource\"\n    mat-table\n    [dataSource]=\"dataSource\"\n    class=\"w-100 mat-elevation-z8\"\n  >\n    <ng-container matColumnDef=\"position\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>No.</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element; let i = index\">\n        {{ i + 1 }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Nombre</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element\">\n        {{ element.name }}\n      </td>\n    </ng-container>\n    <ng-container class=\"text-center\" matColumnDef=\"actions\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Acciones</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element; let i = index\">\n        <button\n          [routerLink]=\"['/itineraries/dashboard']\"\n          (click)=\"assignItineraryId(element.itinerary_id)\"\n          mat-stroked-button\n          color=\"primary\"\n          class=\"mr-2\"\n        >\n          Ver más\n        </button>\n\n        <button\n          mat-icon-button\n          matSuffix\n          mat-button\n          mat-stroked-button\n          color=\"primary\"\n        >\n          <mat-icon\n            matTooltip=\"Eliminar de favoritos\"\n            color=\"primary\"\n            (click)=\"removeItineraryFavorite(element.itinerary_id, i)\"\n            >favorite</mat-icon\n          >\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-offer/favorite-offer.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-offer/favorite-offer.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\" *ngIf=\"dataSource; else loading\">\n  <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n    <mat-label>Buscar por nombre</mat-label>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" />\n  </mat-form-field>\n  <br>\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"w-100 mat-elevation-z8\">\n    <ng-container matColumnDef=\"position\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>No.</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element; let i = index\">\n        {{ i + 1 }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Nombre</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element\">\n        {{ element.name }}\n      </td>\n    </ng-container>\n    <ng-container class=\"text-center\" matColumnDef=\"actions\">\n      <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Acciones</th>\n      <td class=\"text-center\" mat-cell *matCellDef=\"let element; let i = index\">\n        <button mat-icon-button matSuffix mat-button class=\"btn\" mat-stroked-button color=\"primary\">\n          <mat-icon matTooltip=\"Eliminar de favoritos\"\n            color=\"primary\"\n            (click)=\"removeOfferFavorite(element.offer_id, i)\"\n            >favorite</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</div>\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-companies/profile-companies.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-companies/profile-companies.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userCompanies\" style=\"padding: 0 5%;\">\n    <mat-form-field class=\"container-fluid mb-3 mt-1\" appearance=\"outline\">\n        <mat-label>Buscar por nombre y/o apellido</mat-label>\n        <input matInput [(ngModel)]=\"filter.input\" />\n    </mat-form-field>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Cédula Jurídica</th>\n                    <th scope=\"col\">Email</th>\n                    <th scope=\"col\">Teléfono</th>\n                    <th scope=\"col\">Activa</th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let company of this.userCompanies | filterBy: filter.filter\">\n                    <td>{{ company.name }}</td>\n                    <td>{{ company.legal_id }}</td>\n                    <td>{{ company.email? company.email: \"No registrado\" }}</td>\n                    <td>{{ company.phone_number? company.phone_number: \"No registrado\" }}</td>\n                    <td>\n                        <section>\n                            <mat-slide-toggle color=\"primary\" disabled [checked]=company.state>\n                            </mat-slide-toggle>\n                        </section>\n                    </td>\n                    <td>\n                        <div style=\"display: flex;\">\n                            <button mat-stroked-button color=\"warn\" style=\"min-width: fit-content; margin: auto\"\n                                (click)=\"deleteUserFromCompany(company)\" matTooltip=\"Desasociar usuario de la empresa\">\n                                <mat-icon>clear</mat-icon>\n                            </button>\n                        </div>\n                    </td>\n\n                </tr>\n\n            </tbody>\n        </table>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"this.userCompanies.length === 0\">\n            <span class=\"text-danger\">{{user.name}}</span> no está asociado a ninguna empresa\n        </div>\n\n        <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n            *ngIf=\"!(this.userCompanies.length === 0) && (this.userCompanies | filterBy: filter.filter).length === 0\">\n            El usuario no está asociado a ninguna empresa con nombre que coincida con <span\n                class=\"text-danger\">{{filter.input}}</span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-events/profile-events.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-events/profile-events.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userEvents\">\n    <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n        <mat-label>Buscar por nombre del evento</mat-label>\n        <input matInput [(ngModel)]=\"filter.name\"/>\n    </mat-form-field>\n\n    <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n        <table class=\"table\">\n        <thead class=\"thead-light\">\n            <tr>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Costo</th>\n            <th scope=\"col\" style=\"text-align: center;\">Todo el día</th>\n            <th scope=\"col\">Fecha Inicio</th>\n            <th scope=\"col\">Fecha Fin</th>\n            <th scope=\"col\" style=\"text-align: center;\">Acciones</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let event of userEvents | filterBy: filter\">\n            <td>{{event.name}}</td>\n            <td>{{event.cost}}</td>\n            <td *ngIf=\"event.all_day==true\"  style=\"text-align: center;\">Sí</td>\n            <td *ngIf=\"event.all_day==false\"  style=\"text-align: center;\">No</td>\n            <td>{{event.date_range.initial_date | date: 'dd/MM/yyyy'}}</td>\n            <td>{{event.date_range.final_date | date: 'dd/MM/yyyy'}}</td>\n            <td style=\"text-align: center;\"> \n                <button mat-stroked-button [routerLink]=\"['/event', event.event_id]\" matTooltip=\"Detalles del evento\" style=\"color: rgb(82, 82, 82); font-size: 14px; \">\n                    Ver Detalles\n                </button>\n            </td>\n            </tr>\n        </tbody>   \n        </table>\n        <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"(this.userEvents | filterBy: filter).length === 0\">\n            ¡El usuario <span class=\"text-danger\">{{user.name}}</span> no tiene eventos asociados!\n        </div>\n\n        <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n            *ngIf=\"!(this.userEvents.length === 0) && (this.userEvents| filterBy: filter).length === 0\">\n            ¡El usuario no está asociado a ningún evento con un nombre que coincida con <span\n                class=\"text-danger\">{{filter.name}}</span>\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-info/profile-info.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-info/profile-info.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"this.user\">\n  <h2 class=\"text-center font-weight-light mt-3\">Editar información</h2>\n  <form\n    [formGroup]=\"editProfileForm\"\n    class=\"p-0 container-fluid d-flex flex-column justify-content-center\"\n  >\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Nombre</mat-label>\n      <input matInput [formControl]=\"editProfileForm.get('name')\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Apellido</mat-label>\n      <input matInput [formControl]=\"editProfileForm.get('lastName')\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Correo electrónico</mat-label>\n      <input matInput [formControl]=\"editProfileForm.get('email')\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"password-width\">\n      <mat-label>Contraseña</mat-label>\n      <input\n        matInput\n        [type]=\"hide ? 'password' : 'text'\"\n        [formControl]=\"editProfileForm.get('password')\"\n      />\n\n      <button matSuffix mat-icon-button class=\"btn-icon\">\n        <mat-icon (click)=\"hide = !hide\">{{\n          hide ? \"visibility_off\" : \"visibility\"\n        }}</mat-icon>\n      </button>\n      \n    </mat-form-field>\n    <div class=\"text-center\">\n      <button\n        class=\"mt-3\"\n        mat-button\n        color=\"primary\"\n        [disabled]=\"!editProfileForm.valid\"\n        (click)=\"saveChanges()\"\n      >\n        <i class=\"material-icons\">{{ icon }}</i>\n      </button>\n    </div>\n  </form>\n</div>\n<mat-spinner class=\"spinner \" *ngIf=\"!this.user\"></mat-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n\n  <mat-tab label=\"Perfil\">\n    <div class=\"container justify-content\">\n      <app-profile-info></app-profile-info>\n    </div>    \n  </mat-tab>\n\n  <mat-tab label=\"Itinerarios favoritos\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Ver itinerarios favoritos</h2> \n      <app-favorite-itinerary></app-favorite-itinerary>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Ofertas favoritos\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Ver ofertas favoritos</h2> \n      <app-favorite-offer></app-favorite-offer>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Mis empresas\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Mis empresas asociadas</h2> \n      <app-profile-companies></app-profile-companies>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Mis solicitudes de Empresas\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Mis solicitudes de unión a empresas</h2> \n      <app-request-company-union></app-request-company-union>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Mis Eventos\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Mis eventos asociados</h2> \n      <app-profile-events></app-profile-events>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Mis solicitudes de Eventos\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Mis solicitudes de creación de eventos</h2> \n      <app-create-even-request></app-create-even-request>\n    </div> \n  </mat-tab>\n\n  <mat-tab label=\"Peticiones\">\n    <div class=\"container justify-content\">\n      <h2 class=\"text-center font-weight-light mt-3\">Mis solicitudes de unión de empresa a evento</h2> \n      <app-union-event-request></app-union-event-request>\n    </div> \n  </mat-tab>\n</mat-tab-group>\n\n\n \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/request-company-union/request-company-union.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/request-company-union/request-company-union.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div style=\"display:flex; justify-content: end; margin-top: 1rem;\">\n        <button mat-raised-button color=\"primary\" class=\"btn-add mr-3 mt-3\" style=\"margin:auto\"\n          matTooltip=\"Agregar una nueva solicitud a empresa\" (click)=\"addRequestUnion()\">Solicitar unión</button>\n      </div>\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; margin: 1rem 0 0 0\">\n        <mat-form-field class=\"container-fluid\" appearance=\"outline\" style=\"width: 40%; min-width: 300px; margin: auto\">\n            <mat-label>Buscar por nombre de empresa</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\" />\n        </mat-form-field>\n        <mat-radio-group class=\"radio-button-group\" color=\"primary\" [(ngModel)]=\"filter.state\" (change)=\"refresh()\">\n            <mat-radio-button value=\"1\" style=\"color: rgb(160, 105, 0)\">\n                Pendientes\n            </mat-radio-button>\n            <mat-radio-button value=\"2\" style=\"color: rgb(0, 90, 0)\">\n                Aceptadas\n            </mat-radio-button>\n            <mat-radio-button value=\"3\" style=\"color: rgb(90, 0, 0)\">\n                Rechazadas\n            </mat-radio-button>\n        </mat-radio-group>\n    </div>\n    <div class=\"table-responsive\" style=\"padding: 0 3%;\">\n        <table class=\"table\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\" style=\"text-align: center;\">Fecha de solicitud</th>\n                    <th scope=\"col\" matTooltip=\"Nombre la empresa a la que se envió la solicitud\">Empresa</th>\n                    <th scope=\"col\" matTooltip=\"Correo electrónico de persona que solicitó la unión\">Email de la empresa</th>\n                    <th scope=\"col\" matTooltip=\"Pendiente / Aceptada / Rechazada\">Estado</th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"!this.loading\">\n                <tr *ngFor=\"let request of this.userRequests | filterBy: filter.filter\">\n                    <td style=\"text-align: center;\">{{ dateString(request.request_date) }} <br>\n                        {{ timeString(request.request_date) }}</td>\n                        <td>{{ request.company_info.name }}</td>\n                        <td>{{ request.company_info.email }}</td>\n                    <td>\n                        <label color=\"primary\" style=\"cursor: default;\"\n                            [style.color]=\"request.state == 1? 'rgb(160, 105, 0)': request.state == 2? 'rgb(0, 90, 0)': 'rgb(90, 0, 0)'\">\n                            {{ request.state == 1? 'Pendiente': request.state == 2? 'Aceptado': 'Rechazado' }}\n                        </label>\n\n                    </td>\n                    <td>\n                        <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\"\n                            *ngIf=\"request.state == 1\">\n                            <button mat-stroked-button color=\"warn\" style=\"min-width: fit-content;\"\n                                (click)=\"deleteRequest(request)\" matTooltip=\"Eliminar solicitud\">\n                                <mat-icon>clear</mat-icon>\n                            </button>\n                        </div>\n                    </td>\n                </tr>\n\n            </tbody>\n        </table>\n        <ng-container *ngIf=\"this.loading\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </ng-container>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\"\n            *ngIf=\"!this.loading && (this.userRequests | filterBy: filter.filter).length === 0 \">\n            No se encuentra ninguna solicitud a su nombre\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid d-flex flex-column justify-content-sm-center\">\n    <h4 class=\"text-muted text-center font-weight-light\">\n      Seleccione la empresa para filtrar\n    </h4>\n    <hr>\n    <form [formGroup]=\"petitionsFiltersFG\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Empresa</mat-label>\n        <mat-select formControlName=\"companies\">\n          <mat-option *ngFor=\"let c of companies\" [value]=\"c\">\n            {{c.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n     \n      <div class=\"buttonContainer\">\n        <button (click)=\"submit(); false\" mat-raised-button color=\"primary\" [disabled]=\"!petitionsFiltersFG.valid\">\n          Aceptar<mat-icon>check</mat-icon>\n        </button>\n        <button (click)=\"closeDialog()\" mat-raised-button color=\"warn\">\n          Cerrar<mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </form>\n    \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/union-event-request.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/union-event-request.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.loading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-container>\n<div *ngIf=\"userRequest\" style=\"padding: 0 5%;\">\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-evenly; margin: 1rem 0 0 0\">\n        <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\"  style=\"width: 50%; min-width: 300px; margin: auto\">\n            <mat-label>Buscar por nombre del evento</mat-label>\n            <input matInput [(ngModel)]=\"filter.name\"/>\n            <button\n                mat-icon-button\n                matSuffix\n                [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\"\n                (click)=\"openShowFilterOptionsDialog()\"\n            >\n                <mat-icon>library_books</mat-icon>\n            </button>\n            <mat-hint>Presione <mat-icon>library_books</mat-icon> para filtrar por otros valores.</mat-hint>\n        </mat-form-field>\n        <mat-radio-group  class=\"radio-button-group\" color=\"primary\" [(ngModel)]=\"filter.state\" (change)=\"refresh()\">\n            <mat-radio-button value=\"0\" style=\"color: rgb(103,58,183);\" >\n                Todas\n            </mat-radio-button>\n            <mat-radio-button value=\"1\" style=\"color: rgb(0, 90, 0)\">\n                Aceptadas\n            </mat-radio-button>\n            <mat-radio-button value=\"2\" style=\"color: rgb(160, 105, 0) \">\n                Pendientes\n            </mat-radio-button>\n            <mat-radio-button value=\"3\" style=\"color: rgb(90, 0, 0)\">\n                Rechazadas\n            </mat-radio-button>\n        </mat-radio-group>\n        <div *ngIf=\"isFilters\" class=\"container-text-left\">\n            <button  mat-raised-button color=\"primary\" (click)=\"refreshAll()\" [disabled]=\"loading\">Limpiar filtro</button>\n        </div> \n        <label *ngIf=\"isFilters && currentCompanyName != undefined\"  color=\"primary\" style=\"cursor: default;\">\n            Empresa Filtrada: {{currentCompanyName}}\n        </label>\n    </div>\n    \n\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\" >Empresa</th>\n                    <th scope=\"col\" style=\"text-align: center;\">Evento</th>\n                    <th scope=\"col\" *ngIf=\"filter.state == '0'\">Estado</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let request of this.userRequest | filterBy: filter.filter\">\n                    <td> {{request.company_name}}</td>\n                    <td> \n                        <button mat-stroked-button (click)=\"showEventDetails(true, request.event_info.info)\" matTooltip=\"Detalles del evento\" style=\"color: rgb(82, 82, 82); font-size: 14px;\">\n                            Ver Detalles\n                        </button>\n                    </td>\n                    <td *ngIf=\"filter.state == '0'\">\n                        <label color=\"primary\" style=\"cursor: default;\"\n                            [style.color]=\"request.petition_state_company == 2? 'rgb(160, 105, 0)': request.petition_state_company == 1? 'rgb(0, 90, 0)': 'rgb(90, 0, 0)'\">\n                            {{ request.petition_state_company == 2? 'Pendiente': request.petition_state_company == 1? 'Aceptado': 'Rechazado' }}\n                        </label>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <!-- in case you want to show empty message -->\n        <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"this.userRequest.length === 0\">\n            ¡<span class=\"text-danger\">{{user.name}}</span> no tienes ninguna petición!\n        </div>\n\n        <div class=\"alert alert-info text-center\" style=\"margin: auto 5%\" role=\"alert\"\n            *ngIf=\"!(this.userRequest.length === 0) && (this.userRequest | filterBy: filter.filter).length === 0\">\n            ¡El usuario no tiene ninguna petición de evento con un nombre que coincida con <span class=\"text-danger\">{{filter.name}}</span>!\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/users-management/users-management.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/users-management/users-management.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1 class=\"text-center font-weight-light mt-3\">Gestión de usuarios</h1>\n  <div class=\"float-right mb-3 \">\n    <button mat-fab color=\"primary\" class=\"btn-add\" matTooltip=\"Agregar un administrador\"\n      (click)=\"openDialogToAddAdmin()\"><i class=\"material-icons\">add</i></button>\n  </div>\n  <div *ngIf=\"this.userManagmentService.users\">\n    <mat-form-field class=\"container-fluid mb-3\" appearance=\"outline\">\n      <mat-label>Buscar por nombre de usuario</mat-label>\n      <input matInput [(ngModel)]=\"filter.info.name\"/>\n    </mat-form-field>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Apellidos</th>\n            <th scope=\"col\">Empresa</th>\n            <th scope=\"col\">Rol</th>\n            <th scope=\"col\">Habilitar</th>\n            <th scope=\"col\">Estado</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of this.userManagmentService.users | filterBy: filter\">\n            <td>{{ user.info.name }}</td>\n            <td>{{ user.info.lastName }}</td>\n            <td *ngIf=\"user.role_id === 1\">No aplica</td>\n            <td *ngIf=\"user.role_id === 2\">{{user.info.businessName}}</td>\n            <td *ngIf=\"user.role_id === 1\">Administrador</td>\n            <td *ngIf=\"user.role_id === 2\">Emprendedor</td>\n            <td>\n              <section>\n                <mat-slide-toggle (change)=\"setAvailable(!user.info.available,user.user_id, user.info)\" color=\"primary\"\n                  [checked]=user.info.available>\n                </mat-slide-toggle>\n              </section>\n            </td>\n            <td *ngIf=\"user.info.state\">\n              <button mat-raised-button matTooltip=\"Empresario esta registrado correctamente\" color=\"primary\">\n                Aceptado\n              </button>\n            </td>\n            <td *ngIf=\"!user.info.state\">\n              <button mat-raised-button matTooltip=\"Validar empresario\" color=\"warn\"\n                (click)=\"setAcceptance(user.user_id,user.info)\">\n                Validar\n              </button>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      <!-- in case you want to show empty message -->\n      <div class=\"alert alert-info text-center\" role=\"alert\" *ngIf=\"(this.userManagmentService.users | filterBy: filter).length === 0\">\n        No se encuentra el usuario con el id <span class=\"text-danger\">{{filter.user_id}}</span>!\n      </div>\n    </div>\n  </div>\n</div>\n<mat-spinner class=\"spinner \" *ngIf=\"!this.userManagmentService.users\"></mat-spinner>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _logged_in_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logged-in.guard */ "./src/app/logged-in.guard.ts");




const routes = [
    {
        path: "itinerary",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./itinerary/itinerary.module */ "./src/app/itinerary/itinerary.module.ts")).then(i => i.ItineraryModule),
        canActivateChild: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
    },
    {
        path: "users",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(i => i.UsersModule),
        canActivateChild: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
    },
    {
        path: "companies",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./company/company.module */ "./src/app/company/company.module.ts")).then(i => i.CompanyModule),
        canActivateChild: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
    },
    {
        path: "events",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./event/event.module */ "./src/app/event/event.module.ts")).then(i => i.EventModule),
        canActivateChild: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
    },
    {
        path: "categories",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/category/category.module.ts")).then(i => i.CategoryModule),
        canActivateChild: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-services/auth.service */ "./src/app/general-services/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(sessionService, _auth) {
        this.sessionService = sessionService;
        this._auth = _auth;
        this.title = "AdministratorModule";
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _itinerary_itinerary_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./itinerary/itinerary.module */ "./src/app/itinerary/itinerary.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_business_man_register_business_man_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/register-business-man/register-business-man.component */ "./src/app/login/register-business-man/register-business-man.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _company_company_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company/company.module */ "./src/app/company/company.module.ts");
/* harmony import */ var _event_event_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event/event.module */ "./src/app/event/event.module.ts");
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/category.module */ "./src/app/category/category.module.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _login_register_business_man_register_business_man_component__WEBPACK_IMPORTED_MODULE_12__["RegisterBusinessManComponent"],
            _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _itinerary_itinerary_module__WEBPACK_IMPORTED_MODULE_9__["ItineraryModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_10__["UsersModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _company_company_module__WEBPACK_IMPORTED_MODULE_15__["CompanyModule"],
            _event_event_module__WEBPACK_IMPORTED_MODULE_16__["EventModule"],
            _category_category_module__WEBPACK_IMPORTED_MODULE_17__["CategoryModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_login_register_business_man_register_business_man_component__WEBPACK_IMPORTED_MODULE_12__["RegisterBusinessManComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/category/category-root.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-root.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRootComponent", function() { return CategoryRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryRootComponent = class CategoryRootComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-root',
        template: `
    <router-outlet></router-outlet>
  `
    })
], CategoryRootComponent);



/***/ }),

/***/ "./src/app/category/category-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-root.component */ "./src/app/category/category-root.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/category/components/categories/categories.component.ts");
/* harmony import */ var _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-management/category-management.component */ "./src/app/category/components/category-management/category-management.component.ts");





const routes = [
    {
        path: "category",
        component: _category_root_component__WEBPACK_IMPORTED_MODULE_2__["CategoryRootComponent"],
        children: [
            {
                path: "all",
                component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
            },
            {
                path: ":category_id",
                component: _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_4__["CategoryManagementComponent"]
            }
        ]
    }
];
const CategoryRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/category/components/categories/categories.component.ts");
/* harmony import */ var _components_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-create/category-create.component */ "./src/app/category/components/category-create/category-create.component.ts");
/* harmony import */ var _category_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-root.component */ "./src/app/category/category-root.component.ts");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/category/category-routing.module.ts");
/* harmony import */ var _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/category-management/category-management.component */ "./src/app/category/components/category-management/category-management.component.ts");
/* harmony import */ var _components_categories_category_filters_category_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/categories/category-filters/category-filters.component */ "./src/app/category/components/categories/category-filters/category-filters.component.ts");
/* harmony import */ var _components_category_management_details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/category-management/details/details.component */ "./src/app/category/components/category-management/details/details.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");













let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
            _components_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCreateComponent"],
            _category_root_component__WEBPACK_IMPORTED_MODULE_7__["CategoryRootComponent"],
            _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_9__["CategoryManagementComponent"],
            _components_categories_category_filters_category_filters_component__WEBPACK_IMPORTED_MODULE_10__["CategoryFiltersComponent"],
            _components_category_management_details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_8__["CategoryRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipeModule"]
        ],
        entryComponents: [
            _components_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCreateComponent"],
            _components_categories_category_filters_category_filters_component__WEBPACK_IMPORTED_MODULE_10__["CategoryFiltersComponent"]
        ]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/category/components/categories/categories.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/category/components/categories/categories.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n\nbutton {\n  margin-right: 3%;\n}\n\n.container-text-left {\n  margin-bottom: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG50cntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4uY29udGFpbmVyLXRleHQtbGVmdHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59IiwidGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLmNvbnRhaW5lci10ZXh0LWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/category/components/categories/categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/category/components/categories/categories.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var _category_create_category_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-create/category-create.component */ "./src/app/category/components/category-create/category-create.component.ts");
/* harmony import */ var _category_filters_category_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-filters/category-filters.component */ "./src/app/category/components/categories/category-filters/category-filters.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let CategoriesComponent = class CategoriesComponent {
    constructor(commonService, dialogService, categoryService) {
        this.commonService = commonService;
        this.dialogService = dialogService;
        this.categoryService = categoryService;
        this.filter = {
            name: ""
        };
        this.isFilters = false;
    }
    ngOnInit() {
        this.obtainAllCategories();
    }
    /**
     * @function to open the create category dialog
     */
    openCreateCategoryDialog() {
        const dialog = this.dialogService.open(_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_4__["CategoryCreateComponent"], { width: "60%", minWidth: "280px", disableClose: true });
        dialog.afterClosed().subscribe(data => {
            console.log(data);
        });
    }
    /**
     * @function to change the status of the category from active to inactive and vice versa
     * @param category to obtain the category's id
     * @param param1 to change the toggle
     */
    changeState(category, { source }) {
        var id = {
            category_id: category.category_id
        };
        this.categoryService
            .changeStateCategory(id)
            .subscribe({
            next: (data) => {
                if (data.status == 200) {
                    category.is_active = !category.is_active;
                    source.checked = category.is_active;
                    if (category.is_active)
                        this.commonService.openSnackBar(`La categoría ${category.name} ha sido activada`, "OK");
                    else
                        this.commonService.openSnackBar(`La categoría ${category.name} ha sido desactivada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = category.is_active;
            }
        });
    }
    /**
     * @function to show the fiters option dialog
     */
    openShowFilterOptionsDialog() {
        const dialog = this.dialogService.open(_category_filters_category_filters_component__WEBPACK_IMPORTED_MODULE_5__["CategoryFiltersComponent"], { width: "50", minWidth: "280px", disableClose: true });
        dialog.afterClosed().subscribe(type_id => {
            if (type_id != undefined) {
                this.isFilters = true;
                this.subscription = this.categoryService.getAllCategories(type_id)
                    .subscribe({
                    next: (data) => {
                        this.categoryService.categories = data;
                        this.subscription.unsubscribe();
                    }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
                });
            }
        });
    }
    /**
     * @function to get categories without filters
     */
    obtainAllCategories() {
        this.isFilters = false;
        this.subscription = this.categoryService.getAllCategories()
            .subscribe({
            next: (data) => {
                this.categoryService.categories = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.scss */ "./src/app/category/components/categories/categories.component.scss")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/category/components/categories/category-filters/category-filters.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/category/components/categories/category-filters/category-filters.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonContainer {\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yeS1maWx0ZXJzL2NhdGVnb3J5LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yeS1maWx0ZXJzL2NhdGVnb3J5LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yeS1maWx0ZXJzL2NhdGVnb3J5LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7O1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/category/components/categories/category-filters/category-filters.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/category/components/categories/category-filters/category-filters.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CategoryFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFiltersComponent", function() { return CategoryFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CategoryFiltersComponent = class CategoryFiltersComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.types = [
            { id: 1, name: "Evento" },
            { id: 2, name: "Itinerario" },
            { id: 3, name: "Servicio" }
        ];
    }
    ngOnInit() {
        this.categoryFiltersFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var type_id = this.categoryFiltersFG.controls['type'].value;
        this.dialogRef.close(type_id);
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
CategoryFiltersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
CategoryFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-filters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/categories/category-filters/category-filters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-filters.component.scss */ "./src/app/category/components/categories/category-filters/category-filters.component.scss")).default]
    })
], CategoryFiltersComponent);



/***/ }),

/***/ "./src/app/category/components/category-create/category-create.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/category/components/category-create/category-create.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  margin: 0%;\n  margin-bottom: 3%;\n  font-size: medium;\n}\n\n.fileChooser {\n  border-radius: 20px;\n  background-color: #673ab7;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2%;\n}\n\n.fileChooserFile {\n  padding-top: 3%;\n  padding-bottom: 5%;\n  color: white;\n}\n\n.buttonContainer {\n  margin-top: 2%;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktY3JlYXRlL2NhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcnkvY29tcG9uZW50cy9jYXRlZ29yeS1jcmVhdGUvY2F0ZWdvcnktY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jb21wb25lbnRzL2NhdGVnb3J5LWNyZWF0ZS9jYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmZpbGVDaG9vc2Vye1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw1OCwxODMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5maWxlQ2hvb3NlckZpbGV7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b25Db250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDs7XG59XG4iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uZmlsZUNob29zZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5maWxlQ2hvb3NlckZpbGUge1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/category/components/category-create/category-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/category/components/category-create/category-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreateComponent", function() { return CategoryCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let CategoryCreateComponent = class CategoryCreateComponent {
    constructor(categoryService, commonService, router, dialogRef) {
        this.categoryService = categoryService;
        this.commonService = commonService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.types = [
            { id: 1, name: "Evento" },
            { id: 2, name: "Itinerario" },
            { id: 3, name: "Servicio" }
        ];
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.categoryFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onSubmit() {
        let category = {
            name: this.categoryFG.value.name,
            type: this.categoryFG.value.type,
            url: []
        };
        this.createCategory(category);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    createCategory(category) {
        this.loading = true;
        this.categoryFG.disable();
        this.categoryService.createCategory(category).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.commonService.openSnackBar(`La categoría ${this.categoryFG.value.name} se ha creado`, "OK");
                    this.dialogRef.close();
                    this.router.navigate([`/category/all`]);
                }
                else {
                    this.commonService.openSnackBar(`Error al crear la categoría: ${data.error}`, "OK");
                    this.categoryFG.enable();
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.categoryFG.enable();
            }
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
CategoryCreateComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }
];
CategoryCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-create/category-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-create.component.scss */ "./src/app/category/components/category-create/category-create.component.scss")).default]
    })
], CategoryCreateComponent);



/***/ }),

/***/ "./src/app/category/components/category-management/category-management.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/category/components/category-management/category-management.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-buttons {\n  width: 100%;\n  height: 100%;\n}\n\n.image-buttons:focus {\n  outline: none !important;\n  border: 0.5px solid gainsboro;\n}\n\n.image-buttons mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktbWFuYWdlbWVudC9jYXRlZ29yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jb21wb25lbnRzL2NhdGVnb3J5LW1hbmFnZW1lbnQvY2F0ZWdvcnktbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktbWFuYWdlbWVudC9jYXRlZ29yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWJ1dHRvbnN7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWJ1dHRvbnM6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uaW1hZ2UtYnV0dG9ucyBtYXQtaWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7IFxuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG59IiwiLmltYWdlLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtYnV0dG9uczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87XG59XG5cbi5pbWFnZS1idXR0b25zIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/category/components/category-management/category-management.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/category/components/category-management/category-management.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementComponent", function() { return CategoryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/category/services/category.service.ts");




let CategoryManagementComponent = class CategoryManagementComponent {
    constructor(route, categoryService) {
        this.route = route;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.categorySubscription = this.route.paramMap.subscribe((params) => {
            this.category_id = Number(params.get("category_id"));
            this.recharge();
        });
    }
    ngOnDestroy() {
        this.categorySubscription.unsubscribe();
    }
    recharge() {
        this.categoryService.getCategory(Number(this.category_id)).subscribe((data) => {
            this.category = data;
        });
    }
};
CategoryManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
CategoryManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/category-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-management.component.scss */ "./src/app/category/components/category-management/category-management.component.scss")).default]
    })
], CategoryManagementComponent);



/***/ }),

/***/ "./src/app/category/components/category-management/details/details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/category/components/category-management/details/details.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-buttons {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.image-buttons:focus mat-icon:focus {\n  outline: none !important;\n  border: 0.5px solid gainsboro;\n}\n\n.image-buttons mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.noImageButton {\n  align-self: center;\n  text-align: center;\n  width: 20%;\n  height: 35%;\n  border: solid 1.5px gainsboro;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nngb-carousel.container-fluid.carousel.slide {\n  padding: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktbWFuYWdlbWVudC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktbWFuYWdlbWVudC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NvbXBvbmVudHMvY2F0ZWdvcnktbWFuYWdlbWVudC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtYnV0dG9uc3tcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlLWJ1dHRvbnM6Zm9jdXMgbWF0LWljb246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uaW1hZ2UtYnV0dG9ucyBtYXQtaWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7IFxuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5ub0ltYWdlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMjAlOyBcbiAgICBoZWlnaHQ6IDM1JTsgXG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCByZ2IoMjIwLCAyMjAsIDIyMCk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5nYi1jYXJvdXNlbC5jb250YWluZXItZmx1aWQuY2Fyb3VzZWwuc2xpZGUge1xuICAgIHBhZGRpbmc6IDAlO1xufSIsIi5pbWFnZS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtYnV0dG9uczpmb2N1cyBtYXQtaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87XG59XG5cbi5pbWFnZS1idXR0b25zIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubm9JbWFnZUJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDM1JTtcbiAgYm9yZGVyOiBzb2xpZCAxLjVweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5uZ2ItY2Fyb3VzZWwuY29udGFpbmVyLWZsdWlkLmNhcm91c2VsLnNsaWRlIHtcbiAgcGFkZGluZzogMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/category/components/category-management/details/details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/category/components/category-management/details/details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");





let DetailsComponent = class DetailsComponent {
    constructor(categoryService, commonService) {
        this.categoryService = categoryService;
        this.commonService = commonService;
        this.categoryImages = [];
        this.imageIndex = 0;
        this.loading = false;
        this.url = "https://intelitur.sytes.net/files/images/";
        this.types = [
            { id: 1, name: "Evento" },
            { id: 2, name: "Itinerario" },
            { id: 3, name: "Servicio" }
        ];
        this.fileToUpload = null;
        this.categoryFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")])
        });
    }
    onSlide(event) {
        this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    }
    ngOnInit() {
        let category_name = this.category.name;
        this.categoryFG.controls['name'].setValue(category_name);
        this.categoryImages = this.category.url;
        console.log(this.category);
    }
    setData() {
        this.categoryFG.controls['name'].setValue(this.category.name);
    }
    changeState({ source }) {
        var id = this.category.category_id;
        this.categoryService
            .changeStateCategory(id)
            .subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.category.is_active = !this.category.is_active;
                    source.checked = this.category.is_active;
                    if (this.category.is_active)
                        this.commonService.openSnackBar(`La categoría ${this.category.name} ha sido activada`, "OK");
                    else
                        this.commonService.openSnackBar(`La categoría ${this.category.name} ha sido desactivada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = this.category.is_active;
            }
        });
    }
    modifyCategory() {
        this.loading = true;
        this.categoryFG.disable();
        let category = Object.assign({}, this.category, this.categoryFG.value);
        let values = {
            url: category.url,
            name: category.name,
            category_id: category.category_id
        };
        this.categoryService.modifyCategory(values).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.loading = false;
                    this.categoryFG.enable();
                    this.category = category;
                    this.commonService.openSnackBar(`La categoría ${this.category.name} ha sido cambiada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.categoryFG.enable();
            }
        });
    }
    isChanged() {
        let oldCategory = {
            name: this.category.name,
            type: this.category.type,
            url: this.category.url
        };
        return !(JSON.stringify(oldCategory) === JSON.stringify(this.categoryFG.value));
    }
    uploadFile(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.categoryFG.disable();
            let images = [];
            for (let i = 0; i < files.length; i++) {
                yield this.commonService.uploadFile(files[i]).then((data) => {
                    images.push(data.filename);
                });
            }
            this.categoryImages.length != 0 ? images = images.concat(this.categoryImages) : null;
            this.updateImages(images);
        });
    }
    deleteImage() {
        this.loading = true;
        this.categoryFG.disable();
        this.categoryImages.splice(this.imageIndex, 1);
        this.updateImages(this.categoryImages);
    }
    updateImages(images) {
        let category = {
            url: images,
            name: this.category.name,
            category_id: this.category.category_id,
            type: this.category.type,
            is_active: this.category.is_active
        };
        this.categoryService.modifyCategory(category).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.loading = false;
                    this.categoryFG.enable();
                    this.category = category;
                    this.categoryImages = images;
                    this.commonService.openSnackBar(`La categoría ${this.category.name} ha sido cambiada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.categoryFG.enable();
            }
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailsComponent.prototype, "category", void 0);
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/components/category-management/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.scss */ "./src/app/category/components/category-management/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/category/services/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/category/services/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general-services/common.service */ "./src/app/general-services/common.service.ts");





let CategoryService = class CategoryService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.module = "categories";
    }
    /**
     * @function to create a new category
     * @param category the category to be added
     */
    createCategory(category) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/CreateCategory`, category, { observe: 'response' });
    }
    /**
     * @function to modify a category
     * @param category the category to be modified
     */
    modifyCategory(category) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${category.category_id}`, category, { observe: 'response' });
    }
    /**
     * @function to activate or deactivate a category
     * @param id category's id that will change status
     */
    changeStateCategory(id) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${id}/state`, null, { observe: 'response' });
    }
    /**
     * @function to get only one specific category
     * @param category_id category's id to be obtained
     */
    getCategory(category_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${category_id}`);
    }
    /**
     * @function to get all categories
     */
    getAllCategories(type) {
        let query = { state: type };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/`, { params: query });
    }
    /**
     * @function to get the categories related to an specific event
     * @param id of the event
     */
    getEventCategories(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${id}/events`);
    }
    /**
     * @function to get the events related to an specific category
     * @param id of the category
     */
    getEventsByCategory(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${id}/category`);
    }
    /**
     * @function to delete a category from an event
     * @param category_id
     * @param event_id
     */
    deleteCategoryFromEvent(category_id, event_id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/RemoveCategoryInEvent/${category_id}/${event_id}`, { observe: 'response' });
    }
    getCategoryImages(category_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${category_id}/images/10`);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/company/company-root.component.ts":
/*!***************************************************!*\
  !*** ./src/app/company/company-root.component.ts ***!
  \***************************************************/
/*! exports provided: CompanyRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRootComponent", function() { return CompanyRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyRootComponent = class CompanyRootComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-root',
        template: `
    <router-outlet></router-outlet>
  `
    })
], CompanyRootComponent);



/***/ }),

/***/ "./src/app/company/company-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/company/company-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/company/components/companies/companies.component.ts");
/* harmony import */ var _company_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-root.component */ "./src/app/company/company-root.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/company/components/management/management.component.ts");
/* harmony import */ var _components_request_tabs_request_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/request-tabs/request-tabs.component */ "./src/app/company/components/request-tabs/request-tabs.component.ts");






const routes = [
    {
        path: "company",
        component: _company_root_component__WEBPACK_IMPORTED_MODULE_3__["CompanyRootComponent"],
        children: [
            {
                path: "all",
                component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"]
            },
            {
                path: "requests",
                component: _components_request_tabs_request_tabs_component__WEBPACK_IMPORTED_MODULE_5__["RequestTabsComponent"]
            },
            {
                path: ":company_id",
                component: _components_management_management_component__WEBPACK_IMPORTED_MODULE_4__["ManagementComponent"]
            },
        ]
    }
];
const CompanyRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/company/company.module.ts":
/*!*******************************************!*\
  !*** ./src/app/company/company.module.ts ***!
  \*******************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/company/components/management/management.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/company/components/companies/companies.component.ts");
/* harmony import */ var _company_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-root.component */ "./src/app/company/company-root.component.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/company/company-routing.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var _components_management_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/management/company-details/company-details.component */ "./src/app/company/components/management/company-details/company-details.component.ts");
/* harmony import */ var _components_management_company_users_company_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/management/company-users/company-users.component */ "./src/app/company/components/management/company-users/company-users.component.ts");
/* harmony import */ var _components_management_company_map_company_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/management/company-map/company-map.component */ "./src/app/company/components/management/company-map/company-map.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _components_management_company_requests_company_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/management/company-requests/company-requests.component */ "./src/app/company/components/management/company-requests/company-requests.component.ts");
/* harmony import */ var _components_company_create_company_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/company-create/company-create.component */ "./src/app/company/components/company-create/company-create.component.ts");
/* harmony import */ var _components_management_company_users_company_add_user_company_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/management/company-users/company-add-user/company-add-user.component */ "./src/app/company/components/management/company-users/company-add-user/company-add-user.component.ts");
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/requests/requests.component */ "./src/app/company/components/requests/requests.component.ts");
/* harmony import */ var _components_request_tabs_request_tabs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/request-tabs/request-tabs.component */ "./src/app/company/components/request-tabs/request-tabs.component.ts");
/* harmony import */ var _components_union_event_request_union_event_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/union-event-request/union-event-request.component */ "./src/app/company/components/union-event-request/union-event-request.component.ts");




















let CompanyModule = class CompanyModule {
};
CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_management_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
            _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesComponent"],
            _company_root_component__WEBPACK_IMPORTED_MODULE_5__["CompanyRootComponent"],
            _components_management_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_10__["CompanyDetailsComponent"],
            _components_management_company_users_company_users_component__WEBPACK_IMPORTED_MODULE_11__["CompanyUsersComponent"],
            _components_management_company_map_company_map_component__WEBPACK_IMPORTED_MODULE_12__["CompanyMapComponent"],
            _components_management_company_requests_company_requests_component__WEBPACK_IMPORTED_MODULE_14__["CompanyRequestsComponent"],
            _components_company_create_company_create_component__WEBPACK_IMPORTED_MODULE_15__["CompanyCreateComponent"],
            _components_management_company_users_company_add_user_company_add_user_component__WEBPACK_IMPORTED_MODULE_16__["CompanyAddUserComponent"], _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_17__["RequestsComponent"], _components_request_tabs_request_tabs_component__WEBPACK_IMPORTED_MODULE_18__["RequestTabsComponent"], _components_union_event_request_union_event_request_component__WEBPACK_IMPORTED_MODULE_19__["UnionEventRequestComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompanyRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipeModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_13__["LeafletModule"],
        ],
        entryComponents: [
            _components_company_create_company_create_component__WEBPACK_IMPORTED_MODULE_15__["CompanyCreateComponent"],
            _components_management_company_users_company_add_user_company_add_user_component__WEBPACK_IMPORTED_MODULE_16__["CompanyAddUserComponent"]
        ]
    })
], CompanyModule);



/***/ }),

/***/ "./src/app/company/components/companies/companies.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/company/components/companies/companies.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG50cntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59IiwidGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/company/components/companies/companies.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/company/components/companies/companies.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var _company_create_company_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-create/company-create.component */ "./src/app/company/components/company-create/company-create.component.ts");






let CompaniesComponent = class CompaniesComponent {
    constructor(commonService, dialogService, companyService) {
        this.commonService = commonService;
        this.dialogService = dialogService;
        this.companyService = companyService;
        this.filter = {
            name: ""
        };
    }
    ngOnInit() {
        this.subscription = this.companyService.getCompanies()
            .subscribe({
            next: (data) => {
                console.log(data);
                this.companyService.companies = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * Functions
     */
    /**
    * @function Set Available user (block or available)
    * @param state
    * @param userID
    */
    changeState(company, { source }) {
        this.companyService
            .chageCompanyState(company)
            .subscribe({
            next: (data) => {
                if (data.status == 204) {
                    company.state = !company.state;
                    source.checked = company.state;
                    if (company.state)
                        this.commonService.openSnackBar(`La empresa ${company.name} ha sido activada`, "OK");
                    else
                        this.commonService.openSnackBar(`La empresa ${company.name} ha sido desactivada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = company.state;
            }
        });
    }
    openCreateCompanyDialog() {
        this.dialogService.open(_company_create_company_create_component__WEBPACK_IMPORTED_MODULE_5__["CompanyCreateComponent"], { width: "60%", minWidth: "280px" });
    }
};
CompaniesComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_3__["DialogManagerService"] },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] }
];
CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/companies/companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.component.scss */ "./src/app/company/components/companies/companies.component.scss")).default]
    })
], CompaniesComponent);



/***/ }),

/***/ "./src/app/company/components/company-create/company-create.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/company-create/company-create.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9jb21wYW55LWNyZWF0ZS9jb21wYW55LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/company/components/company-create/company-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/company-create/company-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCreateComponent", function() { return CompanyCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let CompanyCreateComponent = class CompanyCreateComponent {
    constructor(companyService, commonService, router, dialog) {
        this.companyService = companyService;
        this.commonService = commonService;
        this.router = router;
        this.dialog = dialog;
        this.loading = false;
    }
    ngOnInit() {
        this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            legal_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([1-9][0-9]{9})$")]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([0-9]{4}[ ][0-9]{4})$")),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(.{1,})[@](.{1,})[.](.{1,})$')),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    createCompany() {
        this.loading = true;
        this.companyForm.disable();
        this.companyService.createCompany(this.companyForm.value).subscribe({
            next: (data) => {
                this.loading = false;
                if (data.status == 200) {
                    console.log(data);
                    this.commonService.openSnackBar(`La empresa ${this.companyForm.value.name} se ha creado`, "OK");
                    this.router.navigate(['/company', data.body.company_id]);
                    this.dialog.closeAll();
                }
                else {
                    this.commonService.openSnackBar(`Error al crear la empresa: ${data.error}`, "OK");
                    this.companyForm.enable();
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
            }
        });
    }
};
CompanyCreateComponent.ctorParameters = () => [
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
CompanyCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/company-create/company-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-create.component.scss */ "./src/app/company/components/company-create/company-create.component.scss")).default]
    })
], CompanyCreateComponent);



/***/ }),

/***/ "./src/app/company/components/management/company-details/company-details.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/company/components/management/company-details/company-details.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-buttons {\n  width: 100%;\n  height: 100%;\n}\n\n.image-buttons:focus {\n  outline: none !important;\n  border: 0.5px solid gainsboro;\n}\n\n.image-buttons mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktZGV0YWlscy9jb21wYW55LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktZGV0YWlscy9jb21wYW55LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvbWFuYWdlbWVudC9jb21wYW55LWRldGFpbHMvY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWJ1dHRvbnN7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWJ1dHRvbnM6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uaW1hZ2UtYnV0dG9ucyBtYXQtaWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7IFxuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG59IiwiLmltYWdlLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtYnV0dG9uczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87XG59XG5cbi5pbWFnZS1idXR0b25zIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/company/components/management/company-details/company-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/company/components/management/company-details/company-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");





let CompanyDetailsComponent = class CompanyDetailsComponent {
    constructor(cd, companyService, commonService) {
        this.cd = cd;
        this.companyService = companyService;
        this.commonService = commonService;
        this.loading = false;
        this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            legal_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([1-9][0-9]{9})$")]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([0-9]{4}[ ][0-9]{4})$")),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(.{1,})[@](.{1,})[.](.{1,})$')),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this.company);
        this.companyForm.patchValue(this.company);
        this.cd.detectChanges();
    }
    changeState({ source }) {
        this.loading = true;
        this.companyForm.disable();
        this.companyService
            .chageCompanyState(this.company)
            .subscribe({
            next: (data) => {
                this.loading = false;
                this.companyForm.enable();
                if (data.status == 204) {
                    this.company.state = !this.company.state;
                    source.checked = this.company.state;
                    if (this.company.state)
                        this.commonService.openSnackBar(`La empresa ${this.company.name} ha sido activada`, "OK");
                    else
                        this.commonService.openSnackBar(`La empresa ${this.company.name} ha sido desactivada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = this.company.state;
                this.loading = false;
                this.companyForm.enable();
            }
        });
    }
    applyChanges() {
        this.loading = true;
        this.companyForm.disable();
        let company = Object.assign({}, this.company, this.companyForm.value);
        this.companyService.updateCompany(company).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.loading = false;
                    this.companyForm.enable();
                    this.company = company;
                    this.commonService.openSnackBar(`La empresa ${this.company.name} ha sido cambiada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.companyForm.enable();
            }
        });
    }
    isChanged() {
        let old = {
            name: this.company.name,
            legal_id: this.company.legal_id,
            phone_number: this.company.phone_number,
            email: this.company.email,
            location: this.company.location
        };
        return !(JSON.stringify(old) === JSON.stringify(this.companyForm.value));
    }
};
CompanyDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CompanyDetailsComponent.prototype, "company", void 0);
CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-details/company-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-details.component.scss */ "./src/app/company/components/management/company-details/company-details.component.scss")).default]
    })
], CompanyDetailsComponent);



/***/ }),

/***/ "./src/app/company/components/management/company-map/company-map.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/company/components/management/company-map/company-map.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  height: 500px;\n  padding: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktbWFwL2NvbXBhbnktbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvbWFuYWdlbWVudC9jb21wYW55LW1hcC9jb21wYW55LW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wb25lbnRzL21hbmFnZW1lbnQvY29tcGFueS1tYXAvY29tcGFueS1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvXG4gIH0iLCIubWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/company/components/management/company-map/company-map.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/company/components/management/company-map/company-map.component.ts ***!
  \************************************************************************************/
/*! exports provided: CompanyMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMapComponent", function() { return CompanyMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CompanyMapComponent = class CompanyMapComponent {
    constructor(cd, commonService, companyService, route) {
        this.cd = cd;
        this.commonService = commonService;
        this.companyService = companyService;
        this.route = route;
        this.refreshed = false;
        this.locationMarker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"](Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(10.471868647924616, -84.64508235454561), {
            draggable: true,
            icon: new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                iconUrl: 'assets/marker-icon.png',
                iconSize: [24, 41],
                iconAnchor: [12, 41],
                shadowUrl: 'assets/marker-shadow.png'
            })
        });
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "..."
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(10.471691479992346, -84.64503407478333)
        };
        this.refreshMap = this.refreshMap.bind(this);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (document.getElementById("mat-tab-label-0-2")) {
            document.getElementById("mat-tab-label-0-2").parameters = { map: this.map, company: this.company };
            document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
        }
        setTimeout(() => this.map.invalidateSize(), 2000);
    }
    onMapReady(map) {
        this.map = map;
        map.addLayer(this.locationMarker);
        if (this.company.latitude && this.company.longitude) {
            this.locationMarker.setLatLng(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.company.latitude, this.company.longitude));
        }
    }
    refreshMap() {
        this.map.invalidateSize();
        if (!this.refreshed) {
            this.refreshed = true;
            if (this.company.latitude && this.company.longitude)
                this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.company.latitude, this.company.longitude), 18);
        }
    }
    putLocationMarker(event) {
        this.locationMarker.setLatLng(event.latlng);
    }
    updateCompanyLocation() {
        let updatedCompany = Object.assign({}, this.company, { latitude: this.locationMarker.getLatLng().lat, longitude: this.locationMarker.getLatLng().lng });
        console.log(updatedCompany);
        this.companyService.updateCompany(updatedCompany)
            .subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.company = updatedCompany;
                    this.commonService.openSnackBar(`La ubicación de ${this.company.name} ha sido actualizada`, "OK");
                    this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.company.latitude, this.company.longitude), 18);
                }
                else {
                    this.commonService.openSnackBar(`Error actualizar la ubicación: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
            }
        });
    }
};
CompanyMapComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CompanyMapComponent.prototype, "company", void 0);
CompanyMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-map/company-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-map.component.scss */ "./src/app/company/components/management/company-map/company-map.component.scss")).default]
    })
], CompanyMapComponent);



/***/ }),

/***/ "./src/app/company/components/management/company-requests/company-requests.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/company/components/management/company-requests/company-requests.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktcmVxdWVzdHMvY29tcGFueS1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wb25lbnRzL21hbmFnZW1lbnQvY29tcGFueS1yZXF1ZXN0cy9jb21wYW55LXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvbWFuYWdlbWVudC9jb21wYW55LXJlcXVlc3RzL2NvbXBhbnktcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSIsInRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/company/components/management/company-requests/company-requests.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/company/components/management/company-requests/company-requests.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CompanyRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRequestsComponent", function() { return CompanyRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");




let CompanyRequestsComponent = class CompanyRequestsComponent {
    constructor(companyUsersService, commonService) {
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.filter = {
            input: "",
            filter: ({ user_info }) => (user_info.name.toLowerCase() + ' ' + user_info.lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1
        };
        this.dateString = (text) => text.split("T")[0];
        this.timeString = (text) => text.split("T")[1].slice(0, 5);
        this.allowUnion = (request) => this.updateRequestState(request, 2);
        this.denyUnion = (request) => this.updateRequestState(request, 3);
    }
    ngOnInit() {
        this.refreshRequests();
    }
    refreshRequests() {
        this.companyUsersService.getCompanyRequests(this.company.company_id, 1).subscribe((data) => {
            this.companyRequests = data;
            console.log(this.companyRequests);
        });
    }
    updateRequestState(request, state) {
        this.companyUsersService.updateRequesState(request, state).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    request.state = state;
                    this.refreshRequests();
                    if (state == 2)
                        this.commonService.openSnackBar(`La solicitud de ${request.user_info.name} ha sido aceptada`, "OK");
                    else
                        this.commonService.openSnackBar(`La solicitud de ${request.user_info.name} ha sido rechazada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
            }
        });
    }
};
CompanyRequestsComponent.ctorParameters = () => [
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CompanyRequestsComponent.prototype, "company", void 0);
CompanyRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-requests/company-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-requests.component.scss */ "./src/app/company/components/management/company-requests/company-requests.component.scss")).default]
    })
], CompanyRequestsComponent);



/***/ }),

/***/ "./src/app/company/components/management/company-users/company-add-user/company-add-user.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/company/components/management/company-users/company-add-user/company-add-user.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktdXNlcnMvY29tcGFueS1hZGQtdXNlci9jb21wYW55LWFkZC11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvbWFuYWdlbWVudC9jb21wYW55LXVzZXJzL2NvbXBhbnktYWRkLXVzZXIvY29tcGFueS1hZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wb25lbnRzL21hbmFnZW1lbnQvY29tcGFueS11c2Vycy9jb21wYW55LWFkZC11c2VyL2NvbXBhbnktYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSIsInRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/company/components/management/company-users/company-add-user/company-add-user.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/company/components/management/company-users/company-add-user/company-add-user.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CompanyAddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddUserComponent", function() { return CompanyAddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");






let CompanyAddUserComponent = class CompanyAddUserComponent {
    constructor(usersService, companyUsersService, commonService, dialogRef, data) {
        this.usersService = usersService;
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = false;
        this.filter = {
            input: '',
            filter: ({ info }) => ((info.name.toLowerCase() + ' ' + info.lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1)
        };
    }
    ngOnInit() {
        this.usersService.getAllUser().subscribe(({ code, data }) => {
            if (code == 200) {
                console.log(data);
                this.users = data;
                let companyUsers = this.data.users.map(user => user.user_id);
                this.users = this.users.filter((user) => !companyUsers.includes(user.user_id));
            }
        });
    }
    addUserToCompany(user, isAdmin = false) {
        this.loading = true;
        console.log(user);
        this.companyUsersService.addUserToCompany(user.user_id, this.data.company.company_id, isAdmin).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.users = this.users.filter((u) => u != user);
                    this.commonService.openSnackBar(`Se ha asociado el usuario ${user.info.name} a la empresa ${this.data.company.name} como ${isAdmin ? 'administrador' : 'empleado'}`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al asociar el usuario: ${data.error}`, "OK");
                }
                this.loading = false;
            },
            error: (err) => {
                console.log(err);
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
            }
        });
    }
};
CompanyAddUserComponent.ctorParameters = () => [
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_4__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
CompanyAddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-add-user/company-add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-add-user.component.scss */ "./src/app/company/components/management/company-users/company-add-user/company-add-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CompanyAddUserComponent);



/***/ }),

/***/ "./src/app/company/components/management/company-users/company-users.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/company/components/management/company-users/company-users.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L2NvbXBhbnktdXNlcnMvY29tcGFueS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wb25lbnRzL21hbmFnZW1lbnQvY29tcGFueS11c2Vycy9jb21wYW55LXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvbWFuYWdlbWVudC9jb21wYW55LXVzZXJzL2NvbXBhbnktdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/company/components/management/company-users/company-users.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/company/components/management/company-users/company-users.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CompanyUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUsersComponent", function() { return CompanyUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var _company_add_user_company_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-add-user/company-add-user.component */ "./src/app/company/components/management/company-users/company-add-user/company-add-user.component.ts");






let CompanyUsersComponent = class CompanyUsersComponent {
    constructor(companyUsersService, commonService, dialogService) {
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.dialogService = dialogService;
        this.filter = {
            input: "",
            filter: ({ name, lastName }) => (name.toLowerCase() + ' ' + lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1
        };
    }
    ngOnInit() {
        this.refresh();
    }
    refresh() {
        this.companyUsersService.getCompanyUsers(this.company.company_id).subscribe((data) => {
            console.log(data);
            this.companyUsers = data;
        });
    }
    deleteUserFromCompany(user) {
        this.companyUsersService.deleteUserFromCompany(user).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.refresh();
                    this.commonService.openSnackBar(`Se ha desasociado el usuario ${user.name} de la empresa ${this.company.name}`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al desasociar el usuario: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
            }
        });
    }
    openAddUserToCompanyDialog() {
        this.dialogService.open(_company_add_user_company_add_user_component__WEBPACK_IMPORTED_MODULE_5__["CompanyAddUserComponent"], { width: "90%", minWidth: "280px", maxHeight: "90%", data: { company: this.company, users: this.companyUsers } }).subscribe(() => this.refresh());
    }
};
CompanyUsersComponent.ctorParameters = () => [
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__["DialogManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CompanyUsersComponent.prototype, "company", void 0);
CompanyUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/company-users/company-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-users.component.scss */ "./src/app/company/components/management/company-users/company-users.component.scss")).default]
    })
], CompanyUsersComponent);



/***/ }),

/***/ "./src/app/company/components/management/management.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/company/components/management/management.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9tYW5hZ2VtZW50L21hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/company/components/management/management.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/company/components/management/management.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");





let ManagementComponent = class ManagementComponent {
    constructor(route, companyService, _auth) {
        this.route = route;
        this.companyService = companyService;
        this._auth = _auth;
    }
    ngOnInit() {
        this.companySubscription = this.route.paramMap.subscribe((params) => {
            this.company_id = Number(params.get("company_id"));
            this.recharge();
        });
    }
    ngOnDestroy() {
        this.companySubscription.unsubscribe();
    }
    recharge() {
        this.companyService.getCompany(Number(this.company_id)).subscribe((data) => {
            this.company = data;
        });
    }
};
ManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/management/management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.scss */ "./src/app/company/components/management/management.component.scss")).default]
    })
], ManagementComponent);



/***/ }),

/***/ "./src/app/company/components/request-tabs/request-tabs.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/company/components/request-tabs/request-tabs.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9yZXF1ZXN0LXRhYnMvcmVxdWVzdC10YWJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/company/components/request-tabs/request-tabs.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/company/components/request-tabs/request-tabs.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTabsComponent", function() { return RequestTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequestTabsComponent = class RequestTabsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RequestTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/request-tabs/request-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-tabs.component.scss */ "./src/app/company/components/request-tabs/request-tabs.component.scss")).default]
    })
], RequestTabsComponent);



/***/ }),

/***/ "./src/app/company/components/requests/requests.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/company/components/requests/requests.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n\n.radio-button-group {\n  width: 50%;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 300px;\n  margin: auto;\n  padding-bottom: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wb25lbnRzL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBvbmVudHMvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmFkaW8tYnV0dG9uLWdyb3Vwe1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn0iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yYWRpby1idXR0b24tZ3JvdXAge1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/company/components/requests/requests.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/company/components/requests/requests.component.ts ***!
  \*******************************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_company_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");




let RequestsComponent = class RequestsComponent {
    constructor(companyUsersService, commonService) {
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.filter = {
            state: '',
            name: '',
            filter: (request) => (request.user_info.name + ' ' + request.user_info.lastName + " " + request.company_info.name)
                .toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
        };
        this.loading = false;
        this.dateString = (datetime) => (new Date(datetime.slice(0, 10))).toLocaleDateString();
        this.timeString = (datetime) => datetime.slice(11, 16);
        this.allowUnion = (request) => this.updateRequestState(request, 2);
        this.denyUnion = (request) => this.updateRequestState(request, 3);
        this.refresh = this.refresh.bind(this);
    }
    ngOnInit() {
        this.refresh();
    }
    refresh() {
        this.loading = true;
        this.companyUsersService.getRequests(this.filter.state).subscribe((data) => {
            this.companyUsersService.requests = data;
            this.loading = false;
        });
    }
    updateRequestState(request, state) {
        this.loading = true;
        this.companyUsersService.updateRequesState(request, state).subscribe({
            next: (data) => {
                this.loading = false;
                if (data.status == 204) {
                    request.state = state;
                    this.refresh();
                    if (state == 2)
                        this.commonService.openSnackBar(`La solicitud de ${request.user_info.name} ha sido aceptada`, "OK");
                    else
                        this.commonService.openSnackBar(`La solicitud de ${request.user_info.name} ha sido rechazada`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
            }
        });
    }
};
RequestsComponent.ctorParameters = () => [
    { type: _services_company_users_service__WEBPACK_IMPORTED_MODULE_2__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/requests/requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./requests.component.scss */ "./src/app/company/components/requests/requests.component.scss")).default]
    })
], RequestsComponent);



/***/ }),

/***/ "./src/app/company/components/union-event-request/union-event-request.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/company/components/union-event-request/union-event-request.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.container-text-left {\n  margin: 1% 0 2% 0;\n}\n\nth, td {\n  text-align: center;\n}\n\ntr {\n  font-size: 15px;\n}\n\n.radio-button-group {\n  width: 50%;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 300px;\n  margin: auto;\n  padding-bottom: 1.34375em;\n}\n\n.denyBtn, .acceptBtn {\n  margin-left: 1%;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy91bmlvbi1ldmVudC1yZXF1ZXN0L3VuaW9uLWV2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy91bmlvbi1ldmVudC1yZXF1ZXN0L3VuaW9uLWV2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcG9uZW50cy91bmlvbi1ldmVudC1yZXF1ZXN0L3VuaW9uLWV2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRhaW5lci10ZXh0LWxlZnR7XG4gICAgbWFyZ2luOiAxJSAwIDIlIDA7XG59XG5cbnRoLCB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50cntcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yYWRpby1idXR0b24tZ3JvdXB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4uZGVueUJ0biwgLmFjY2VwdEJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRhaW5lci10ZXh0LWxlZnQge1xuICBtYXJnaW46IDElIDAgMiUgMDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJhZGlvLWJ1dHRvbi1ncm91cCB7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLmRlbnlCdG4sIC5hY2NlcHRCdG4ge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/company/components/union-event-request/union-event-request.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/company/components/union-event-request/union-event-request.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnionEventRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionEventRequestComponent", function() { return UnionEventRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _services_company_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_users_components_profile_union_event_request_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component */ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.ts");
/* harmony import */ var src_app_users_components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/users/components/profile/add-event-request/add-event-request.component */ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts");









let UnionEventRequestComponent = class UnionEventRequestComponent {
    constructor(userService, companyUserService, commonService, companyService, dialogService) {
        this.userService = userService;
        this.companyUserService = companyUserService;
        this.commonService = commonService;
        this.companyService = companyService;
        this.dialogService = dialogService;
        this.eventRequests = [];
        this.isFilters = false;
        this.loading = false;
        this.filter = {
            name: '',
            state: '0',
            filter: (request) => (request.event_info.info.name + ' ' + request.user_name).toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
        };
    }
    ngOnInit() {
        this.user = this.userService.actualUser;
        console.log(this.user);
        this.refresh();
    }
    refresh() {
        this.loading = true;
        let state = Number(this.filter.state);
        state == 0 ? state = -1 : state = Number(this.filter.state);
        if (this.currentCompanyId == undefined && state == -1) {
            this.currentCompanyId = -1;
            this.isFilters = false;
        }
        state != -1 ? this.isFilters = true : null;
        this.subscription = this.companyService.getCompanyEventRequests(this.user.user_id, this.currentCompanyId, state).subscribe({
            next: (data) => {
                console.log(data);
                this.eventRequests = data;
                this.subscription.unsubscribe();
                this.loading = false;
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    refreshAll() {
        this.filter.state = '0';
        this.currentCompanyId = undefined;
        this.currentCompanyName = undefined;
        this.refresh();
    }
    openShowFilterOptionsDialog() {
        const dialog = this.dialogService.open(src_app_users_components_profile_union_event_request_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_7__["PetitionsFilterComponent"], { width: "50", minWidth: "280px", disableClose: true });
        dialog.afterClosed().subscribe(company => {
            if (company != undefined) {
                this.currentCompanyId = company.company_id;
                this.currentCompanyName = company.name;
                this.isFilters = true;
                this.refresh();
            }
        });
    }
    showEventDetails(_action, _event) {
        this.dialogService.open(src_app_users_components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_8__["AddEventRequestComponent"], { height: "95%", width: "80%", minWidth: "280px", disableClose: true, data: { action: _action, event: _event, petition: true } });
    }
    changeStatus(request_id, status) {
        this.companyService.changeCompanyEventRequestState(request_id, status).subscribe({
            next: (data) => {
                if (status == 1) {
                    this.commonService.openSnackBar("¡Se ha aceptado la petición!", 'Ok');
                }
                else if (status == 3) {
                    this.commonService.openSnackBar("¡Se ha rechazado la petición!", 'Ok');
                }
            }
        });
    }
};
UnionEventRequestComponent.ctorParameters = () => [
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_company_users_service__WEBPACK_IMPORTED_MODULE_3__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
UnionEventRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-union-event-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./union-event-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/components/union-event-request/union-event-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./union-event-request.component.scss */ "./src/app/company/components/union-event-request/union-event-request.component.scss")).default]
    })
], UnionEventRequestComponent);



/***/ }),

/***/ "./src/app/company/services/company-users.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/company/services/company-users.service.ts ***!
  \***********************************************************/
/*! exports provided: CompanyUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUsersService", function() { return CompanyUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CompanyUsersService = class CompanyUsersService {
    constructor(http) {
        this.http = http;
        this.companyModule = "company";
        this.requestModule = "request";
        this.userModule = "generalUsers";
    }
    /**
     * @funtion Get all companies
     */
    getCompanyUsers(company_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.companyModule}/${company_id}/users`);
    }
    ;
    getCompanyRequests(company_id, state) {
        let query = { state };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}/company/${company_id}/`, { params: query });
    }
    ;
    getUserRequests(user_id, state) {
        let query = { state };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}/user/${user_id}/`, { params: query });
    }
    ;
    updateRequesState({ user_company_id }, state, is_admin = false) {
        let body = { state, is_admin };
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, body, { observe: 'response' });
    }
    deleteUserFromCompany({ user_company_id }) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, { observe: 'response' });
    }
    getUserCompanies(user_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.userModule}/${user_id}/companies/`);
    }
    addUserToCompany(user_id, company_id, is_admin = false) {
        const body = { user_id, is_admin };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.companyModule}/${company_id}/users`, body, { observe: 'response' });
    }
    getRequests(state) {
        let query = { state };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}`, { params: query });
    }
    requesUnion(user_id, company_id) {
        let body = { user_id, company_id };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.requestModule}`, body, { observe: 'response' });
    }
};
CompanyUsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CompanyUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyUsersService);



/***/ }),

/***/ "./src/app/company/services/company.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/company/services/company.service.ts ***!
  \*****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general-services/common.service */ "./src/app/general-services/common.service.ts");





let CompanyService = class CompanyService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.module = "company";
    }
    /**
     * @funtion Get all companies
     */
    getCompanies(stateFilter) {
        let query = { state: stateFilter };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/`, { params: query });
    }
    ;
    /**
     * @funtion Get all companies
     */
    getCompany(company_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${company_id}`);
    }
    ;
    /**
     * @funtion Change company state
     */
    chageCompanyState({ company_id }) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${company_id}/state`, undefined, { observe: "response" });
    }
    ;
    updateCompany(company) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${company.company_id}`, company, { observe: "response" });
    }
    ;
    createCompany(company) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/`, company, { observe: "response" });
    }
    /**
     * @function to get companies related to a specific event
     * @param event_id
     */
    getCompaniesByEvent(event_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/getCompaniesByEvent/${event_id}`);
    }
    getCompanyEventRequests(user_id, company_id, state) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}petitions/petitions_add_to_company/${state}/${user_id}/${company_id}`);
    }
    changeCompanyEventRequestState(event_company_id, status) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}petitions/${event_company_id}/${status}`, { observe: 'response' });
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/event/components/event-create/event-create.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/event/components/event-create/event-create.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  resize: none;\n}\n\nh1 {\n  text-align: center;\n  margin: 0%;\n  margin-bottom: 1%;\n  font-size: larger;\n}\n\n.buttonContainer {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: space-around;\n}\n\nform {\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 45%;\n  margin-right: 2.5%;\n  margin-left: 2.5%;\n}\n\n.color-picker {\n  width: 30%;\n  padding-left: 5%;\n  align-self: center;\n}\n\n.toggle {\n  width: 40%;\n}\n\n.chip-list {\n  width: -webkit-fill-available;\n}\n\n.file {\n  align-self: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 20%;\n}\n\n.uploadFile {\n  text-align: center;\n  width: -webkit-fill-available;\n  margin-right: 2.5%;\n  margin-left: 2.5%;\n  margin-bottom: 2%;\n  border: solid 1.5px gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9ldmVudC1jcmVhdGUvZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhe1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5idXR0b25Db250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiBcbmZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY29sb3ItcGlja2Vye1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50b2dnbGV7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLmNoaXAtbGlzdHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgXG59XG5cbi5maWxle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi51cGxvYWRGaWxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGJvcmRlcjogc29saWQgMS41cHggcmdiKDIyMCwgMjIwLCAyMjApO1xufSIsInRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY29sb3ItcGlja2VyIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9nZ2xlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNoaXAtbGlzdCB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uZmlsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi51cGxvYWRGaWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGJvcmRlcjogc29saWQgMS41cHggZ2FpbnNib3JvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/event/components/event-create/event-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/event/components/event-create/event-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function() { return EventCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");











let EventCreateComponent = class EventCreateComponent {
    constructor(dialogRef, commonService, eventService, router, categoryService, companyService, userService) {
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.eventService = eventService;
        this.router = router;
        this.categoryService = categoryService;
        this.companyService = companyService;
        this.userService = userService;
        this.allDay = false;
        this.loading = false;
        this.initial_date = undefined;
        this.final_date = undefined;
        this.today = new Date();
        this.initial_time = undefined;
        this.final_time = undefined;
        this.common_date = undefined;
        this.eventImages = [];
        //chipList
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.allCategories = [];
        this.allCompanies = [];
        /**
         * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
         */
        this.dateFilter = (date) => {
            return date >= this.initial_date;
        };
    }
    ngOnInit() {
        this.eventFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.user = this.userService.actualUser;
        this.subscription = this.categoryService.getAllCategories(1)
            .subscribe({
            next: (data) => {
                this.filteredCategories = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        this.subscription2 = this.companyService.getCompanies()
            .subscribe({
            next: (data) => {
                this.filteredCompanies = data;
                this.subscription2.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * Toogle
     * @param param0
     */
    changeState({ source }) {
        this.allDay == false ? this.allDay = true : this.allDay = false;
        source.checked = this.allDay;
    }
    /**
     * Color picker
     * @param event
     */
    changeComplete(event) {
        this.color = event.color.hex;
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.eventFG.disable();
            this.allDay == true ? (this.initial_date = this.common_date, this.final_date = this.common_date) : null;
            this.initial_time == undefined ? this.initial_time = null : null;
            this.final_time == undefined ? this.final_time = null : null;
            let urlImages = yield this.uploadFiles();
            console.log(urlImages);
            let event = {
                name: this.eventFG.controls['name'].value,
                cost: this.eventFG.controls['cost'].value,
                address: this.eventFG.controls['address'].value,
                detail: this.eventFG.controls['detail'].value,
                all_day: this.allDay,
                color: this.color,
                date_range: {
                    initial_date: this.initial_date,
                    final_date: this.final_date
                },
                initial_time: this.initial_time,
                final_time: this.final_time,
                user_id: this.userService.actualUser.user_id,
                images: urlImages
            };
            this.createEvent(event);
        });
    }
    createEvent(event) {
        this.eventService.createEvent(event).subscribe({
            next: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (data.status == 200) {
                    /**Añadiendo compañías y categorías al evento */
                    this.getCategories();
                    this.getCompanies();
                    yield this.eventRelations(data.body[0]);
                    this.commonService.openSnackBar(`El evento ${this.eventFG.value.name} se ha creado`, "OK");
                    this.dialogRef.close();
                    this.router.navigate(['/event', data.body[0]]);
                }
                else {
                    this.commonService.openSnackBar(`Error al crear el evento: ${data.error}`, "OK");
                    this.eventFG.enable();
                }
            }),
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.eventFG.enable();
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    closeDialog() {
        this.dialogRef.close();
    }
    disableDialog() {
        if (!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || this.color == undefined ||
            (this.allDay == false && this.final_date == undefined) || (this.allDay == true && this.initial_time == undefined) ||
            (this.allDay == true && this.final_time == undefined) || (this.allDay == true && this.common_date == undefined) ||
            (this.initial_time >= this.final_time) || this.eventImages.length == 0 || this.loading == true) {
            return true;
        }
        return false;
    }
    //chipList 
    removeCategory(category) {
        let index = this.allCategories.indexOf(category);
        if (index >= 0) {
            this.allCategories.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selectedCategory(event) {
        let index = this.allCategories.indexOf(event.option.value);
        if (index < 0) {
            this.allCategories.push(event.option.value);
            this.eventFG.controls['categories'].setValue(null);
        }
        else {
            this.commonService.openSnackBar("¡La categoría ya ha sido agregada!", "OK");
        }
    }
    removeCompany(company) {
        let index = this.allCompanies.indexOf(company);
        if (index >= 0) {
            this.allCompanies.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selectedCompany(event) {
        let index = this.allCompanies.indexOf(event.option.value);
        if (index < 0) {
            this.allCompanies.push(event.option.value);
            this.eventFG.controls['companies'].setValue(null);
        }
        else {
            this.commonService.openSnackBar("¡La compañía ya ha sido agregada!", "OK");
        }
    }
    /**
     * Metodo para obtener únicamente los ids de los tags que se guardaron
     */
    getCategories() {
        let categoryIDs = [];
        for (let i = 0; i < this.allCategories.length; i++) {
            categoryIDs.push(this.allCategories[i].category_id);
        }
        this.allCategories = categoryIDs;
    }
    /**
     * Metodo para obtener únicamente los ids de los tags que se guardaron
     */
    getCompanies() {
        let companyIDs = [];
        for (let i = 0; i < this.allCompanies.length; i++) {
            companyIDs.push(this.allCompanies[i].company_id);
        }
        this.allCompanies = companyIDs;
    }
    eventRelations(event_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //compañías
            for (let i = 0; i < this.allCompanies.length; i++) {
                yield this.eventService.addCompanyToEvent(this.allCompanies[i], event_id, this.user.user_id).toPromise();
            }
            //Categorias
            for (let i = 0; i < this.allCategories.length; i++) {
                yield this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise();
            }
        });
    }
    getFiles(files) {
        this.eventImages = files;
    }
    uploadFiles() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let images = [];
            for (let i = 0; i < this.eventImages.length; i++) {
                yield this.commonService.uploadFile(this.eventImages[i]).then((data) => {
                    images.push(data.filename);
                });
            }
            return images;
        });
    }
};
EventCreateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false })
], EventCreateComponent.prototype, "matAutocomplete", void 0);
EventCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-create/event-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-create.component.scss */ "./src/app/event/components/event-create/event-create.component.scss")).default]
    })
], EventCreateComponent);



/***/ }),

/***/ "./src/app/event/components/event-request/event-request-filters/event-request-filters.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/event/components/event-request/event-request-filters/event-request-filters.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonContainer {\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnQtcmVxdWVzdC9ldmVudC1yZXF1ZXN0LWZpbHRlcnMvZXZlbnQtcmVxdWVzdC1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ldmVudC9jb21wb25lbnRzL2V2ZW50LXJlcXVlc3QvZXZlbnQtcmVxdWVzdC1maWx0ZXJzL2V2ZW50LXJlcXVlc3QtZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9ldmVudC1yZXF1ZXN0L2V2ZW50LXJlcXVlc3QtZmlsdGVycy9ldmVudC1yZXF1ZXN0LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7O1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/event/components/event-request/event-request-filters/event-request-filters.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/event/components/event-request/event-request-filters/event-request-filters.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EventRequestFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRequestFiltersComponent", function() { return EventRequestFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");






let EventRequestFiltersComponent = class EventRequestFiltersComponent {
    constructor(dialogRef, companyService, commonService) {
        this.dialogRef = dialogRef;
        this.companyService = companyService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.eventRequestFiltersFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.subscription = this.companyService.getCompanies().subscribe({
            next: (data) => {
                this.companies = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var company_id = this.eventRequestFiltersFG.controls['companies'].value;
        console.log(company_id);
        this.dialogRef.close(company_id);
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
EventRequestFiltersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
EventRequestFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-request-filters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-request-filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request-filters/event-request-filters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-request-filters.component.scss */ "./src/app/event/components/event-request/event-request-filters/event-request-filters.component.scss")).default]
    })
], EventRequestFiltersComponent);



/***/ }),

/***/ "./src/app/event/components/event-request/event-request.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/event/components/event-request/event-request.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".denyBtn, .acceptBtn {\n  margin-left: 1%;\n  font-size: 14px;\n}\n\nth {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n\nbutton {\n  margin-right: 3%;\n}\n\n.container-text-left {\n  margin-bottom: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnQtcmVxdWVzdC9ldmVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ldmVudC9jb21wb25lbnRzL2V2ZW50LXJlcXVlc3QvZXZlbnQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9ldmVudC1yZXF1ZXN0L2V2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kZW55QnRuLCAuYWNjZXB0QnRuICB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudGh7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi5jb250YWluZXItdGV4dC1sZWZ0e1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn0iLCIuZGVueUJ0biwgLmFjY2VwdEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4uY29udGFpbmVyLXRleHQtbGVmdCB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59Il19 */");

/***/ }),

/***/ "./src/app/event/components/event-request/event-request.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/event/components/event-request/event-request.component.ts ***!
  \***************************************************************************/
/*! exports provided: EventRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRequestComponent", function() { return EventRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/components/profile/add-event-request/add-event-request.component */ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts");






let EventRequestComponent = class EventRequestComponent {
    constructor(eventService, dialogService, commonService, matDialog) {
        this.eventService = eventService;
        this.dialogService = dialogService;
        this.commonService = commonService;
        this.matDialog = matDialog;
        this.filter = {
            name: ""
        };
        this.isFilters = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.eventService.getAllPendingEventRequests().toPromise().then((data) => {
                this.eventService.eventRequest = data;
            });
            console.log(this.eventService.eventRequest);
        });
    }
    showEventDetails(_action, _event) {
        this.matDialog.open(src_app_users_components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_5__["AddEventRequestComponent"], { height: "95%", width: "80%", minWidth: "280px", disableClose: true, data: { action: _action, event: _event } });
    }
    changeStateRequest(event, state) {
        this.eventService.changeRequestState(event.event_id, state).subscribe({
            next: (data) => {
                data.status == 201 ? this.eventService.getAllPendingEventRequests() : null;
            }
        });
    }
};
EventRequestComponent.ctorParameters = () => [
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
EventRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/event-request/event-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-request.component.scss */ "./src/app/event/components/event-request/event-request.component.scss")).default]
    })
], EventRequestComponent);



/***/ }),

/***/ "./src/app/event/components/events/event-filters/event-filters.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/event/components/events/event-filters/event-filters.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonContainer {\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWZpbHRlcnMvZXZlbnQtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9ldmVudHMvZXZlbnQtZmlsdGVycy9ldmVudC1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1maWx0ZXJzL2V2ZW50LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7O1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/event/components/events/event-filters/event-filters.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/event/components/events/event-filters/event-filters.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EventFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFiltersComponent", function() { return EventFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");






let EventFiltersComponent = class EventFiltersComponent {
    constructor(dialogRef, categoryService, commonService) {
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.eventFiltersFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.subscription = this.categoryService.getAllCategories().subscribe({
            next: (data) => {
                this.categories = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var category_id = this.eventFiltersFG.controls['categories'].value;
        this.dialogRef.close(category_id);
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
EventFiltersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
EventFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-filters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/event-filters/event-filters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-filters.component.scss */ "./src/app/event/components/events/event-filters/event-filters.component.scss")).default]
    })
], EventFiltersComponent);



/***/ }),

/***/ "./src/app/event/components/events/events.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/event/components/events/events.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n\nbutton {\n  margin-right: 3%;\n}\n\n.container-text-left {\n  margin-bottom: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG50cntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4uY29udGFpbmVyLXRleHQtbGVmdHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59IiwidGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLmNvbnRhaW5lci10ZXh0LWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/event/components/events/events.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/event/components/events/events.component.ts ***!
  \*************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-create/event-create.component */ "./src/app/event/components/event-create/event-create.component.ts");
/* harmony import */ var _event_filters_event_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-filters/event-filters.component */ "./src/app/event/components/events/event-filters/event-filters.component.ts");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");









let EventsComponent = class EventsComponent {
    constructor(eventService, commonService, dialogService, categoryService, authService) {
        this.eventService = eventService;
        this.commonService = commonService;
        this.dialogService = dialogService;
        this.categoryService = categoryService;
        this.authService = authService;
        this.filter = {
            name: ""
        };
        this.isFilters = false;
    }
    ngOnInit() {
        this.obtainAllEvents();
    }
    obtainAllEvents() {
        this.isFilters = false;
        this.subscription = this.eventService.getAllEvents()
            .subscribe({
            next: (data) => {
                this.eventService.events = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    openCreateEventDialog() {
        this.dialogService.open(_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_4__["EventCreateComponent"], { height: "95%", width: "80%", minWidth: "280px", disableClose: true });
    }
    changeState(event, { source }) {
        this.eventService.changeEventState(event.event_id).subscribe({
            next: (data) => {
                if (data.status == 200) {
                    event.is_active = !event.is_active;
                    source.checked = event.is_active;
                    if (event.is_active)
                        this.commonService.openSnackBar(`El evento ${event.name} ha sido activado`, "OK");
                    else
                        this.commonService.openSnackBar(`El evento ${event.name} ha sido desactivado`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = event.is_active;
            }
        });
    }
    openShowFilterOptionsDialog() {
        const dialog = this.dialogService.open(_event_filters_event_filters_component__WEBPACK_IMPORTED_MODULE_5__["EventFiltersComponent"], { width: "50", minWidth: "280px", disableClose: true });
        dialog.afterClosed().subscribe(category_id => {
            if (category_id != undefined) {
                this.isFilters = true;
                this.subscription = this.categoryService.getEventsByCategory(category_id)
                    .subscribe({
                    next: (data) => {
                        this.eventService.events = data;
                        this.subscription.unsubscribe();
                    }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
                });
            }
        });
    }
};
EventsComponent.ctorParameters = () => [
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.scss */ "./src/app/event/components/events/events.component.scss")).default]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/event/components/management/event-details/event-details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/event/components/management/event-details/event-details.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-buttons {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.image-buttons:focus mat-icon:focus {\n  outline: none !important;\n  border: 0.5px solid gainsboro;\n}\n\n.image-buttons mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.noImageButton {\n  align-self: center;\n  text-align: center;\n  width: 20%;\n  height: 45%;\n  border: solid 1.5px gainsboro;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-left: 15%;\n}\n\nngb-carousel.container-fluid.carousel.slide {\n  padding: 0%;\n}\n\n.image-buttons:focus {\n  outline: none !important;\n  border: 0.5px solid gainsboro;\n}\n\n.toggle, .color-picker {\n  width: 45%;\n  margin-left: 2.5%;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.buttonContainer {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvbWFuYWdlbWVudC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvbWFuYWdlbWVudC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvbWFuYWdlbWVudC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtYnV0dG9uc3tcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlLWJ1dHRvbnM6Zm9jdXMgbWF0LWljb246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uaW1hZ2UtYnV0dG9ucyBtYXQtaWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7IFxuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5ub0ltYWdlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMjAlOyBcbiAgICBoZWlnaHQ6IDQ1JTsgXG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCByZ2IoMjIwLCAyMjAsIDIyMCk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxubmdiLWNhcm91c2VsLmNvbnRhaW5lci1mbHVpZC5jYXJvdXNlbC5zbGlkZSB7XG4gICAgcGFkZGluZzogMCU7XG59XG5cbi5pbWFnZS1idXR0b25zOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjAsIDIyMCwgMjIwKTtcbn1cblxuLnRvZ2dsZSwuY29sb3ItcGlja2Vye1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG59XG5cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSIsIi5pbWFnZS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtYnV0dG9uczpmb2N1cyBtYXQtaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87XG59XG5cbi5pbWFnZS1idXR0b25zIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubm9JbWFnZUJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDQ1JTtcbiAgYm9yZGVyOiBzb2xpZCAxLjVweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG5uZ2ItY2Fyb3VzZWwuY29udGFpbmVyLWZsdWlkLmNhcm91c2VsLnNsaWRlIHtcbiAgcGFkZGluZzogMCU7XG59XG5cbi5pbWFnZS1idXR0b25zOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybztcbn1cblxuLnRvZ2dsZSwgLmNvbG9yLXBpY2tlciB7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/event/components/management/event-details/event-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/event/components/management/event-details/event-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");









let EventDetailsComponent = class EventDetailsComponent {
    constructor(commonService, eventService, categoryService, companyService, userService) {
        this.commonService = commonService;
        this.eventService = eventService;
        this.categoryService = categoryService;
        this.companyService = companyService;
        this.userService = userService;
        this.allDay = false;
        this.loading = false;
        this.initial_date = undefined;
        this.final_date = undefined;
        this.today = new Date();
        this.initial_time = undefined;
        this.final_time = undefined;
        this.common_date = undefined;
        this.eventImages = [];
        this.url = "https://intelitur.sytes.net/files/images/";
        this.imageIndex = 0;
        //chipList
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.filteredCategories = [];
        this.allCategories = [];
        this.filteredCompanies = [];
        this.allCompanies = [];
        this.allOldCategories = [];
        this.allOldCompanies = [];
        /**
         * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
         */
        this.dateFilter = (date) => {
            return date >= this.initial_date;
        };
    }
    ngOnInit() {
        this.eventFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.subscription = this.categoryService.getAllCategories(1)
            .subscribe({
            next: (data) => {
                this.filteredCategories = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        this.subscription2 = this.companyService.getCompanies()
            .subscribe({
            next: (data) => {
                this.filteredCompanies = data;
                this.subscription2.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        this.user = this.userService.actualUser;
        this.event.images != undefined ? this.eventImages = this.event.images : this.eventImages = [];
        this.setData();
    }
    /**
     * Toogle
     * @param param0
     */
    changeState({ source }) {
        this.allDay == false ? this.allDay = true : this.allDay = false;
        source.checked = this.allDay;
    }
    /**
     * Color picker
     * @param event
     */
    changeComplete(event) {
        this.color = event.color.hex;
    }
    disableDialog() {
        if (!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || this.color == undefined ||
            (this.allDay == false && this.final_date == undefined) || (this.allDay == true && this.initial_time == undefined) ||
            (this.allDay == true && this.final_time == undefined) || (this.allDay == true && this.common_date == undefined)
            || (this.allDay == true && (this.initial_time >= this.final_time)) || this.loading == true) {
            return true;
        }
        return false;
    }
    setData() {
        this.eventFG.controls['name'].setValue(this.event.name);
        this.eventFG.controls['cost'].setValue(this.event.cost);
        this.eventFG.controls['address'].setValue(this.event.address);
        this.eventFG.controls['detail'].setValue(this.event.detail);
        this.allDay = this.event.all_day;
        this.color = this.event.color;
        this.initial_date = new Date(this.event.date_range.initial_date);
        this.final_date = new Date(this.event.date_range.final_date);
        this.initial_time = this.event.initial_time;
        this.final_time = this.event.final_time;
        this.allDay ? this.common_date = this.event.date_range.initial_date : this.common_date = undefined;
        //categorias
        this.subscription3 = this.categoryService.getEventCategories(this.event.event_id).subscribe({
            next: (data) => {
                this.allCategories = [];
                this.allOldCategories = [];
                data.forEach(val => this.allCategories.push(val));
                this.allCategories.forEach(val => this.allOldCategories.push(val.category_id));
                this.subscription3.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        //compañías
        this.subscription4 = this.companyService.getCompaniesByEvent(this.event.event_id).subscribe({
            next: (data) => {
                this.allCompanies = [];
                this.allOldCompanies = [];
                data.forEach(val => this.allCompanies.push(val));
                this.allCompanies.forEach(val => this.allOldCompanies.push(val.company_id));
                this.subscription4.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    //chipList 
    remove(category) {
        let index = this.allCategories.indexOf(category);
        if (index >= 0) {
            this.allCategories.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selected(event) {
        for (let i = 0; i < this.allCategories.length; i++) {
            if (this.allCategories[i].category_id === event.option.value.category_id) {
                this.commonService.openSnackBar("¡La categoría ya ha sido agregada!", "OK");
                return;
            }
        }
        this.allCategories.push(event.option.value);
        this.eventFG.controls['categories'].setValue(null);
    }
    removeCompany(company) {
        let index = this.allCompanies.indexOf(company);
        if (index >= 0) {
            this.allCompanies.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selectedCompany(event) {
        for (let i = 0; i < this.allCompanies.length; i++) {
            if (this.allCompanies[i].company_id === event.option.value.company_id) {
                this.commonService.openSnackBar("¡La compañía ya ha sido agregada!", "OK");
                return;
            }
        }
        this.allCompanies.push(event.option.value);
        this.eventFG.controls['companies'].setValue(null);
    }
    modifyEvent() {
        this.loading = true;
        this.eventFG.disable();
        this.allDay == true ? (this.initial_date = this.common_date, this.final_date = this.common_date) : null;
        this.initial_time == undefined ? this.initial_time = null : null;
        this.final_time == undefined ? this.final_time = null : null;
        let event = {
            event_id: this.event.event_id,
            name: this.eventFG.controls['name'].value,
            cost: this.eventFG.controls['cost'].value,
            address: this.eventFG.controls['address'].value,
            detail: this.eventFG.controls['detail'].value,
            all_day: this.allDay,
            color: this.color,
            date_range: {
                initial_date: this.initial_date,
                final_date: this.final_date
            },
            initial_time: this.initial_time,
            final_time: this.final_time,
            user_id: this.user.user_id,
            is_active: this.event.is_active,
            images: this.event.images
        };
        let json = {
            "info": event,
            "latitude": this.event.latitude,
            "longuitude": this.event.longitude
        };
        this.eventService.modifyEvent(json).subscribe({
            next: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (data.status == 200) {
                    this.eventFG.enable();
                    this.event = event;
                    /**Añadiendo compañías y categorías al evento */
                    this.getCategoriesID();
                    this.getCompaniesID();
                    yield this.eventRelations(this.event.event_id);
                    this.commonService.openSnackBar(`El evento ${this.event.name} ha sido cambiado`, "OK");
                    this.loading = false;
                    location.reload();
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            }),
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.eventFG.enable();
            }
        });
    }
    changeEventState(event, { source }) {
        this.eventService.changeEventState(event.event_id).subscribe({
            next: (data) => {
                if (data.status == 200) {
                    event.is_active = !event.is_active;
                    source.checked = event.is_active;
                    if (event.is_active)
                        this.commonService.openSnackBar(`El evento ${event.name} ha sido activado`, "OK");
                    else
                        this.commonService.openSnackBar(`El evento ${event.name} ha sido desactivado`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = event.is_active;
            }
        });
    }
    /**
     * Metodo para obtener únicamente los ids de las categorías que se seleccionaron
     */
    getCategoriesID() {
        let categoryIDs = [];
        for (let i = 0; i < this.allCategories.length; i++) {
            categoryIDs.push(this.allCategories[i].category_id);
        }
        this.allCategories = categoryIDs;
    }
    /**
     * Metodo para obtener únicamente los ids de los compañías que se seleccionaron
     */
    getCompaniesID() {
        let companyIDs = [];
        for (let i = 0; i < this.allCompanies.length; i++) {
            companyIDs.push(this.allCompanies[i].company_id);
        }
        this.allCompanies = companyIDs;
    }
    eventRelations(event_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.allCategories.length; i++) {
                if (this.allOldCategories.indexOf(this.allCategories[i]) === -1) {
                    yield this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise();
                }
            }
            for (let i = 0; i < this.allOldCategories.length; i++) {
                if (this.allCategories.indexOf(this.allOldCategories[i]) === -1) {
                    yield this.categoryService.deleteCategoryFromEvent(this.allOldCategories[i], event_id).toPromise();
                }
            }
            for (let i = 0; i < this.allCompanies.length; i++) {
                if (this.allOldCompanies.indexOf(this.allCompanies[i]) === -1) {
                    yield this.eventService.addCompanyToEvent(this.allCompanies[i], event_id, this.user.user_id).toPromise();
                }
            }
            for (let i = 0; i < this.allOldCompanies.length; i++) {
                if (this.allCompanies.indexOf(this.allOldCompanies[i]) === -1) {
                    yield this.eventService.deleteCompanyFromEvent(this.allOldCompanies[i], event_id).toPromise();
                }
            }
        });
    }
    //Metodos de imagenes
    onSlide(event) {
        this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    }
    uploadFile(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.eventFG.disable();
            let images = [];
            for (let i = 0; i < files.length; i++) {
                yield this.commonService.uploadFile(files[i]).then((data) => {
                    images.push(data.filename);
                });
            }
            this.eventImages.length != 0 ? images = images.concat(this.eventImages) : null;
            this.updateImages(images);
        });
    }
    deleteImage() {
        this.loading = true;
        this.eventFG.disable();
        this.eventImages.splice(this.imageIndex, 1);
        this.updateImages(this.eventImages);
    }
    updateImages(images) {
        let event = {
            event_id: this.event.event_id,
            name: this.event.name,
            cost: this.event.cost,
            address: this.event.address,
            detail: this.event.detail,
            all_day: this.event.all_day,
            color: this.event.color,
            date_range: {
                initial_date: this.event.date_range.initial_date,
                final_date: this.event.date_range.final_date
            },
            initial_time: this.event.initial_time,
            final_time: this.event.final_time,
            user_id: this.event.user_id,
            images: images,
            is_active: this.event.is_active
        };
        console.log(event);
        let json = {
            "info": event,
            "latitude": this.event.latitude,
            "longuitude": this.event.longitude
        };
        this.eventService.modifyEvent(json).subscribe({
            next: (data) => {
                if (data.status == 200) {
                    this.loading = false;
                    this.eventFG.enable();
                    this.event = event;
                    this.eventImages = images;
                    this.commonService.openSnackBar(`El evento ${this.event.name} ha sido cambiado`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al cambiar el estado: ${data.error}`, "OK");
                    this.loading = false;
                    this.eventFG.enable();
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.eventFG.enable();
            }
        });
    }
};
EventDetailsComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EventDetailsComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false })
], EventDetailsComponent.prototype, "matAutocomplete", void 0);
EventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/event-details/event-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-details.component.scss */ "./src/app/event/components/management/event-details/event-details.component.scss")).default]
    })
], EventDetailsComponent);



/***/ }),

/***/ "./src/app/event/components/management/location/location.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/event/components/management/location/location.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  height: 500px;\n  padding: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvbWFuYWdlbWVudC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXZlbnQvY29tcG9uZW50cy9tYW5hZ2VtZW50L2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9jb21wb25lbnRzL21hbmFnZW1lbnQvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvXG4gIH0iLCIubWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/event/components/management/location/location.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/event/components/management/location/location.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LocationComponent = class LocationComponent {
    constructor(cd, commonService, eventService, route) {
        this.cd = cd;
        this.commonService = commonService;
        this.eventService = eventService;
        this.route = route;
        this.refreshed = false;
        this.locationMarker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"](Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(10.471868647924616, -84.64508235454561), {
            draggable: true,
            icon: new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                iconUrl: 'assets/marker-icon.png',
                iconSize: [24, 41],
                iconAnchor: [12, 41],
                shadowUrl: 'assets/marker-shadow.png'
            })
        });
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "..."
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(10.471691479992346, -84.64503407478333)
        };
        this.refreshMap = this.refreshMap.bind(this);
    }
    ngOnInit() {
        this.myEvent = this.myEvent[0];
    }
    ngAfterViewInit() {
        if (document.getElementById("mat-tab-label-0-2")) {
            document.getElementById("mat-tab-label-0-2").parameters = { map: this.map, event: this.myEvent };
            document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
        }
        setTimeout(() => this.map.invalidateSize(), 2000);
    }
    onMapReady(map) {
        this.map = map;
        map.addLayer(this.locationMarker);
        if (this.myEvent.latitude && this.myEvent.longitude) {
            this.locationMarker.setLatLng(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.myEvent.latitude, this.myEvent.longitude));
        }
    }
    refreshMap() {
        this.map.invalidateSize();
        if (!this.refreshed) {
            this.refreshed = true;
            if (this.myEvent.latitude && this.myEvent.longitude)
                this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.myEvent.latitude, this.myEvent.longitude), 18);
        }
    }
    putLocationMarker(event) {
        this.locationMarker.setLatLng(event.latlng);
    }
    updateEventLocation() {
        console.log(this.myEvent);
        let infoEvent = {
            address: this.myEvent.address,
            all_day: this.myEvent.all_day,
            color: this.myEvent.color,
            cost: this.myEvent.cost,
            date_range: this.myEvent.date_range,
            detail: this.myEvent.detail,
            final_time: this.myEvent.final_time,
            initial_time: this.myEvent.initial_time,
            name: this.myEvent.name,
            event_id: this.myEvent.event_id,
        };
        let updatedEvent = {
            info: infoEvent,
            latitude: this.locationMarker.getLatLng().lat,
            longitude: this.locationMarker.getLatLng().lng
        };
        this.eventService.modifyEvent(updatedEvent)
            .subscribe({
            next: (data) => {
                if (data.status == 200) {
                    this.myEvent = updatedEvent.info;
                    this.myEvent.latitude = updatedEvent.latitude;
                    this.myEvent.longitude = updatedEvent.longitude;
                    this.commonService.openSnackBar(`La ubicación de ${this.myEvent.name} ha sido actualizada`, "OK");
                    this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.myEvent.latitude, this.myEvent.longitude), 18);
                }
                else {
                    this.commonService.openSnackBar(`Error actualizar la ubicación: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
            }
        });
    }
};
LocationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LocationComponent.prototype, "myEvent", void 0);
LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/location/location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.scss */ "./src/app/event/components/management/location/location.component.scss")).default]
    })
], LocationComponent);



/***/ }),

/***/ "./src/app/event/components/management/management.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/event/components/management/management.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2NvbXBvbmVudHMvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/event/components/management/management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/event/components/management/management.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ManagementComponent = class ManagementComponent {
    constructor(route, eventService) {
        this.route = route;
        this.eventService = eventService;
    }
    ngOnInit() {
        this.eventSubscription = this.route.paramMap.subscribe((params) => {
            this.event_id = Number(params.get("event_id"));
            this.recharge();
        });
    }
    ngOnDestroy() {
        this.eventSubscription.unsubscribe();
    }
    recharge() {
        this.eventService.getEvent(Number(this.event_id)).subscribe((data) => {
            this.myEvent = data;
        });
    }
};
ManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
];
ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/components/management/management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.scss */ "./src/app/event/components/management/management.component.scss")).default]
    })
], ManagementComponent);



/***/ }),

/***/ "./src/app/event/event-root.component.ts":
/*!***********************************************!*\
  !*** ./src/app/event/event-root.component.ts ***!
  \***********************************************/
/*! exports provided: EventRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRootComponent", function() { return EventRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventRootComponent = class EventRootComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-root',
        template: `
    <router-outlet></router-outlet>
  `
    })
], EventRootComponent);



/***/ }),

/***/ "./src/app/event/event-rounting.module.ts":
/*!************************************************!*\
  !*** ./src/app/event/event-rounting.module.ts ***!
  \************************************************/
/*! exports provided: EventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoutingModule", function() { return EventRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _event_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-root.component */ "./src/app/event/event-root.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/event/components/management/management.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/event/components/events/events.component.ts");
/* harmony import */ var _components_event_request_event_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/event-request/event-request.component */ "./src/app/event/components/event-request/event-request.component.ts");






const routes = [
    {
        path: "event",
        component: _event_root_component__WEBPACK_IMPORTED_MODULE_2__["EventRootComponent"],
        children: [
            {
                path: "all",
                component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"]
            },
            {
                path: "request",
                component: _components_event_request_event_request_component__WEBPACK_IMPORTED_MODULE_5__["EventRequestComponent"]
            },
            {
                path: ":event_id",
                component: _components_management_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"]
            }
        ]
    }
];
const EventRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/event/components/events/events.component.ts");
/* harmony import */ var _components_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/event-create/event-create.component */ "./src/app/event/components/event-create/event-create.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/event/components/management/management.component.ts");
/* harmony import */ var _event_root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-root.component */ "./src/app/event/event-root.component.ts");
/* harmony import */ var _event_rounting_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-rounting.module */ "./src/app/event/event-rounting.module.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color/circle */ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js");
/* harmony import */ var _components_management_location_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/management/location/location.component */ "./src/app/event/components/management/location/location.component.ts");
/* harmony import */ var _components_management_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/management/event-details/event-details.component */ "./src/app/event/components/management/event-details/event-details.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _components_events_event_filters_event_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/events/event-filters/event-filters.component */ "./src/app/event/components/events/event-filters/event-filters.component.ts");
/* harmony import */ var _components_event_request_event_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/event-request/event-request.component */ "./src/app/event/components/event-request/event-request.component.ts");
/* harmony import */ var _components_event_request_event_request_filters_event_request_filters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/event-request/event-request-filters/event-request-filters.component */ "./src/app/event/components/event-request/event-request-filters/event-request-filters.component.ts");



















let EventModule = class EventModule {
};
EventModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"],
            _components_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_6__["EventCreateComponent"],
            _components_management_management_component__WEBPACK_IMPORTED_MODULE_7__["ManagementComponent"],
            _event_root_component__WEBPACK_IMPORTED_MODULE_8__["EventRootComponent"],
            _components_management_location_location_component__WEBPACK_IMPORTED_MODULE_12__["LocationComponent"],
            _components_management_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_13__["EventDetailsComponent"],
            _components_events_event_filters_event_filters_component__WEBPACK_IMPORTED_MODULE_15__["EventFiltersComponent"],
            _components_event_request_event_request_component__WEBPACK_IMPORTED_MODULE_16__["EventRequestComponent"],
            _components_event_request_event_request_filters_event_request_filters_component__WEBPACK_IMPORTED_MODULE_17__["EventRequestFiltersComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _event_rounting_module__WEBPACK_IMPORTED_MODULE_9__["EventRoutingModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipeModule"],
            ngx_color_circle__WEBPACK_IMPORTED_MODULE_11__["ColorCircleModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_14__["LeafletModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        entryComponents: [
            _components_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_6__["EventCreateComponent"],
            _components_events_event_filters_event_filters_component__WEBPACK_IMPORTED_MODULE_15__["EventFiltersComponent"],
            _components_event_request_event_request_filters_event_request_filters_component__WEBPACK_IMPORTED_MODULE_17__["EventRequestFiltersComponent"]
        ]
    })
], EventModule);



/***/ }),

/***/ "./src/app/event/services/event.service.ts":
/*!*************************************************!*\
  !*** ./src/app/event/services/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general-services/common.service */ "./src/app/general-services/common.service.ts");





let EventService = class EventService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.events = [];
        this.module = 'events/';
    }
    /**
     * @function to obtain all events
     */
    getAllEvents() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}`);
    }
    /**
     * @function to get only one specific event
     * @param event_id event's id to be obtained
     */
    getEvent(event_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${event_id}`);
    }
    /**
     * @function to create a new event
     * @param event to be added
     * @param request false is just a normal event : true needs de user id who wants to create the event
     */
    createEvent(event, request) {
        let json;
        if (request == true) {
            json = {
                "info": event,
                "latitude": event.latitude,
                "longitude": event.longitude,
            };
        }
        else {
            json = {
                "info": event,
                "latitude": 10.471681129073,
                "longitude": -84.64514404535
            };
        }
        console.log(json);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}`, json, { observe: 'response' });
    }
    /**
     * @function to modify an event
     * @param event to modified
     */
    modifyEvent(event) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}${event.info.event_id}`, event, { observe: 'response' });
    }
    /**
     * @function to change the event status
     * @param event_id to identify which event will change status
     */
    changeEventState(id) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}${id}/state`, null, { observe: 'response' });
    }
    /**
     * @function  to relate a company and event
     * @param company_id
     * @param event_id
     */
    addCompanyToEvent(company_id, event_id, user_id) {
        let json = {
            company_id,
            event_id,
            user_id
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}EventToCompany`, json, { observe: 'response' });
    }
    /**
     * @function to delete a company from an event
     * @param company_id
     * @param event_id
     */
    deleteCompanyFromEvent(company_id, event_id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}RemoveEventFromCompany/${company_id}/${event_id}`, { observe: 'response' });
    }
    /**
     * @function  to relate a category and event
     * @param category_id
     * @param event_id
     */
    addCategoryToEvent(category_id, event_id) {
        let json = {
            "category_id": category_id,
            "event_id": event_id
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}AddCategoryToEvent`, json, { observe: 'response' });
    }
    getAllPendingEventRequests() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}petitions/2/-1`);
    }
    getEventRequestByCompany(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}${this.module}/${id}`); //cambiar
    }
    getEventRequestsByUser(id, state) {
        console.log(id + " " + state);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}petitions/${state}/${id}`);
    }
    changeRequestState(event_id, state) {
        let json = {
            "event_id": event_id,
            "state": state
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}petitions/`, json, { observe: 'response' });
    }
};
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/general-services/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/general-services/auth.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService, AUTH_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PROVIDERS", function() { return AUTH_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    /**
     * This method set item of type User to localStorage
     * @param user
     */
    login(user) {
        localStorage.setItem(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localstorage_key}`, JSON.stringify(user));
    }
    /**
     * RemoveItem from localStorage based on environment's key
     */
    logout() {
        localStorage.removeItem(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localstorage_key}`);
    }
    /**
     * Return parsed item from LocalStorage
     */
    getUser() {
        return JSON.parse(localStorage.getItem(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localstorage_key}`));
    }
    /**
     * Check if the user is logged
     */
    isLoggedIn() {
        return this.getUser() !== null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);

/**
 * export service to be provided in the root level
 */
const AUTH_PROVIDERS = [
    { provide: AuthService, useClass: AuthService }
];


/***/ }),

/***/ "./src/app/general-services/common.service.ts":
/*!****************************************************!*\
  !*** ./src/app/general-services/common.service.ts ***!
  \****************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let CommonService = class CommonService {
    constructor(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
    }
    /**
     * @Function Open Snackbar
     * @param msg
     * @param action
     */
    openSnackBar(msg, action) {
        this.snackBar.open(msg, action, {
            duration: 3000,
        });
    }
    handleError(err) {
        if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log("An error occurred:", err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`);
        }
    }
    getImage(name) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].IMAGES_URL_BASE}/files/images/${name}`).subscribe({
            next: (data) => {
                console.log(data);
            }
        });
    }
    uploadFile(file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(file);
            let data = new FormData();
            data.append("file", file);
            let promise = new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === this.DONE) {
                        resolve(JSON.parse(this.response));
                    }
                });
                xhr.open("POST", "https://intelitur.sytes.net/image");
                xhr.send(data);
            });
            return promise;
        });
    }
    deleteImage(name) {
        console.log(name);
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].IMAGES_URL_BASE}/image/${name}`).subscribe({
            next: (data) => {
                console.log(data);
            }
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/general-services/dialog-manager.service.ts":
/*!************************************************************!*\
  !*** ./src/app/general-services/dialog-manager.service.ts ***!
  \************************************************************/
/*! exports provided: DialogManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogManagerService", function() { return DialogManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _users_components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/components/add-admin/add-admin.component */ "./src/app/users/components/add-admin/add-admin.component.ts");
/* harmony import */ var _login_register_business_man_register_business_man_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/register-business-man/register-business-man.component */ "./src/app/login/register-business-man/register-business-man.component.ts");
/* harmony import */ var _itinerary_components_itineraries_itinerary_form_dialog_itinerary_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component */ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.ts");
/* harmony import */ var _itinerary_components_itinerary_dashboard_itinerary_distribution_create_day_create_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.ts");
/* harmony import */ var _itinerary_components_itinerary_dashboard_itinerary_distribution_show_day_details_show_day_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.ts");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _itinerary_components_itineraries_itineraries_table_filter_options_dialog_filter_options_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component */ "./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.ts");










let DialogManagerService = class DialogManagerService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openItineraryFormDialog() {
        const dialogRef = this.dialog.open(_itinerary_components_itineraries_itinerary_form_dialog_itinerary_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ItineraryFormDialogComponent"], {
            panelClass: "custom-dialog"
        });
        return dialogRef.afterClosed();
    }
    openFilterOptionsDialog() {
        const dialogRef = this.dialog.open(_itinerary_components_itineraries_itineraries_table_filter_options_dialog_filter_options_dialog_component__WEBPACK_IMPORTED_MODULE_9__["FilterOptionsDialogComponent"]);
        return dialogRef.afterClosed();
    }
    openCreateDay(data) {
        const dialogRef = this.dialog.open(_itinerary_components_itinerary_dashboard_itinerary_distribution_create_day_create_day_component__WEBPACK_IMPORTED_MODULE_6__["CreateDayComponent"], {
            data: data
        });
        return dialogRef.afterClosed();
    }
    openShowDayDetails(details) {
        const dialogRef = this.dialog.open(_itinerary_components_itinerary_dashboard_itinerary_distribution_show_day_details_show_day_details_component__WEBPACK_IMPORTED_MODULE_7__["ShowDayDetailsComponent"], {
            data: details
        });
        return dialogRef.afterClosed();
    }
    /**
     * @function Open dialog to add admin
     */
    openAddAdminFormDialog() {
        this.dialog.open(_users_components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_3__["AddAdminComponent"], {
            panelClass: "custom-dialog-add-admin"
        });
    }
    openAddBusinessmanFormDialog() {
        this.dialog.open(_login_register_business_man_register_business_man_component__WEBPACK_IMPORTED_MODULE_4__["RegisterBusinessManComponent"], {
            panelClass: "custom-dialog-add-businessman"
        });
    }
    /**
     * open
     */
    openForgotPasswordDialog() {
        this.dialog.open(_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], {});
    }
    open(component, options) {
        const dialogRef = this.dialog.open(component, options);
        return dialogRef.afterClosed();
    }
};
DialogManagerService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DialogManagerService);



/***/ }),

/***/ "./src/app/itinerary/components/carousel/carousel.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/itinerary/components/carousel/carousel.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .img {\n    height: 60vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .img {\n    height: 75vh !important;\n  }\n}\n@media (min-width: 62em) {\n  .img {\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .img {\n    height: 75vh !important;\n  }\n}\n.img {\n  width: 60vw !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLHVCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSx1QkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UsdUJBQUE7RUNGRjtBQUNGO0FES0E7RUFDRSxzQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzRlbSkge1xuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDYwdncgIWltcG9ydGFudDtcbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAzNGVtKSB7XG4gIC5pbWcge1xuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmltZyB7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWcge1xuICAgIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nIHtcbiAgd2lkdGg6IDYwdncgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/itinerary/components/carousel/carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/itinerary/components/carousel/carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let CarouselComponent = class CarouselComponent {
    constructor() {
        this.deletedImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.url = this.data.local ? "" : src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].IMAGES_URL_BASE;
    }
    /**
     * @function delete image
     * @param index: number
     */
    deleteImage(index) {
        this.data.images.splice(index, 1);
        this.deletedImage.emit(index);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CarouselComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CarouselComponent.prototype, "deletedImage", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-carousel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.scss */ "./src/app/itinerary/components/carousel/carousel.component.scss")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyaWVzLXRhYmxlL2ZpbHRlci1vcHRpb25zLWRpYWxvZy9maWx0ZXItb3B0aW9ucy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: FilterOptionsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOptionsDialogComponent", function() { return FilterOptionsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");






let FilterOptionsDialogComponent = class FilterOptionsDialogComponent {
    constructor(dialogRef, _itineray, _common, _session) {
        this.dialogRef = dialogRef;
        this._itineray = _itineray;
        this._common = _common;
        this._session = _session;
        this.filters = { role: 0 };
    }
    ngOnInit() {
        this.filters.role = this._session.actualUser.role_id;
        this.filters.user_id = this._session.actualUser.user_id;
        this.categorySubs = this._itineray.getCategories().subscribe({
            next: (response) => (this.categories = response.data),
            error: (err) => this._common.handleError(err)
        });
        this.groupTypeSubs = this._itineray.getGroupTypes().subscribe({
            next: (response) => (this.groupTypes = response.data),
            error: (err) => this._common.handleError(err)
        });
    }
    /**
     * @function close dialog
     */
    submit() {
        this.dialogRef.close(this.filters);
    }
    /**
     * @function close dialog
     */
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        if (this.categorySubs)
            this.categorySubs.unsubscribe();
        if (this.groupTypeSubs)
            this.groupTypeSubs.unsubscribe();
    }
};
FilterOptionsDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
FilterOptionsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-filter-options-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-options-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-options-dialog.component.scss */ "./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.scss")).default]
    })
], FilterOptionsDialogComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyaWVzLXRhYmxlL2l0aW5lcmFyaWVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcmllcy9pdGluZXJhcmllcy10YWJsZS9pdGluZXJhcmllcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyaWVzLXRhYmxlL2l0aW5lcmFyaWVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICBvdXRsaW5lOiBub25lO1xufSIsImJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ItinerariesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItinerariesTableComponent", function() { return ItinerariesTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");







let ItinerariesTableComponent = class ItinerariesTableComponent {
    constructor(_dialog, _itinerary, _common, sesionService) {
        this._dialog = _dialog;
        this._itinerary = _itinerary;
        this._common = _common;
        this.sesionService = sesionService;
        this.displayedColumns = ["position", "name", "actions"];
        this.isFilters = false;
    }
    ngOnInit() {
        this.getItinerariesMinimalInfo();
    }
    /**
     * @function get minimal info of itinerary
     */
    getItinerariesMinimalInfo() {
        this.subscription = this._itinerary
            .getItineraryMinimalInfoByUser(this.sesionService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data.data);
            },
            error: (err) => this._common.handleError(err)
        });
        this.isFilters = false;
    }
    /**
     * @function open filter dialog
     */
    openShowFilterOptionsDialog() {
        this.dialogSubscription = this._dialog.openFilterOptionsDialog().subscribe({
            next: (filters) => {
                if (filters) {
                    this.filterItinerariesSubs = this._itinerary
                        .filterItineraries(filters)
                        .subscribe({
                        next: (response) => {
                            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
                        },
                        error: (err) => this._common.handleError(err)
                    });
                    this.isFilters = true;
                }
            }
        });
    }
    /**
     * @function apply filter
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
        if (this.dialogSubscription)
            this.dialogSubscription.unsubscribe();
    }
    /**
     * @funtion Assign id of itinerary to will used in other components
     * @param id
     */
    assignItineraryId(id) {
        this._itinerary.itinerary_id = id;
    }
};
ItinerariesTableComponent.ctorParameters = () => [
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__["DialogManagerService"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
ItinerariesTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itineraries-table",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itineraries-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itineraries-table.component.scss */ "./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.scss")).default]
    })
], ItinerariesTableComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  outline: none;\n}\n\n/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */\n\n@media screen and (min-width: 601px) {\n  h1 {\n    font-size: 80px;\n  }\n}\n\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\n\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcmllcy9pdGluZXJhcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQSxpRkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0Y7O0FERUEsaUZBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJpZXMvaXRpbmVyYXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDFweCB3aWRlIG9yIG1vcmUsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDgwcHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gIH1cbn1cblxuLyogSWYgdGhlIHNjcmVlbiBzaXplIGlzIDYwMHB4IHdpZGUgb3IgbGVzcywgc2V0IHRoZSBmb250LXNpemUgb2YgPGRpdj4gdG8gMzBweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufSIsImJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDFweCB3aWRlIG9yIG1vcmUsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDgwcHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gIH1cbn1cbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDBweCB3aWRlIG9yIGxlc3MsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDMwcHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itineraries.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itineraries.component.ts ***!
  \***************************************************************************/
/*! exports provided: ItinerariesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItinerariesComponent", function() { return ItinerariesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");



let ItinerariesComponent = class ItinerariesComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
    }
    ngOnInit() {
    }
    openItineraryDialog() {
        this._dialog.openItineraryFormDialog();
    }
};
ItinerariesComponent.ctorParameters = () => [
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__["DialogManagerService"] }
];
ItinerariesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-itinerary-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itineraries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itineraries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itineraries.component.scss */ "./src/app/itinerary/components/itineraries/itineraries.component.scss")).default]
    })
], ItinerariesComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .custom-dialog {\n    width: 100vw !important;\n    height: 100vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .custom-dialog {\n    width: 100vw !important;\n  }\n}\n@media (min-width: 62em) {\n  .custom-dialog {\n    width: 70vw !important;\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .custom-dialog {\n    width: 65vw !important;\n    height: 100vh !important;\n  }\n}\n.custom-dialog {\n  overflow-y: auto;\n}\n.mat-dialog-container {\n  padding: 15px !important;\n}\n::ng-deep .cdk-overlay-container {\n  position: fixed !important;\n  z-index: 100000 !important;\n  /* set value you need */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyeS1mb3JtLWRpYWxvZy9pdGluZXJhcnktZm9ybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyeS1mb3JtLWRpYWxvZy9pdGluZXJhcnktZm9ybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNBRjtBQUNGO0FESUE7RUFDRTtJQUNFLHVCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0UsZ0JBQUE7QUNMRjtBRE9BO0VBQ0Usd0JBQUE7QUNKRjtBRE9BO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUE0Qix1QkFBQTtBQ0g5QiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyeS1mb3JtLWRpYWxvZy9pdGluZXJhcnktZm9ybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSAobWluLXdpZHRoOiAzNGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuY3VzdG9tLWRpYWxvZyB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA2NXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jdXN0b20tZGlhbG9nIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDAwICFpbXBvcnRhbnQ7IC8qIHNldCB2YWx1ZSB5b3UgbmVlZCAqL1xufVxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDM0ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAuY3VzdG9tLWRpYWxvZyB7XG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA2NXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB9XG59XG4uY3VzdG9tLWRpYWxvZyB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDAwICFpbXBvcnRhbnQ7XG4gIC8qIHNldCB2YWx1ZSB5b3UgbmVlZCAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ItineraryFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryFormDialogComponent", function() { return ItineraryFormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_itinerary_models_Itinerary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/itinerary/models/Itinerary */ "./src/app/itinerary/models/Itinerary.ts");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_itinerary_services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/itinerary/services/image.service */ "./src/app/itinerary/services/image.service.ts");








let ItineraryFormDialogComponent = class ItineraryFormDialogComponent {
    constructor(dialogRef, _fb, _itinerary, _common, _image) {
        this.dialogRef = dialogRef;
        this._fb = _fb;
        this._itinerary = _itinerary;
        this._common = _common;
        this._image = _image;
        this.linkedCategories = [];
        this.images = [];
        this.data = {
            local: true,
            images: []
        };
        this.savedImagePaths = [];
    }
    ngOnInit() {
        this.setupUploader();
        this.itineraryFG = this._fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pricePerDay: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalPrice: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adultsQuantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            childrenQuantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            duration: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            groupType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            travelAdvices: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            startDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDate: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] // public or private
        });
        this.setupValueChangesTotalPrice();
        this.getGroupTypes();
        this.getCategories();
        this.setupEndDate();
    }
    /**
     * @function setud end date
     */
    setupEndDate() {
        this.itineraryFG.get("startDate").valueChanges.subscribe(val => {
            if (this.itineraryFG.get("startDate").value) {
                var date = new Date(val);
                if (this.itineraryFG.get("duration").value) {
                    date.setDate(date.getDate() + this.itineraryFG.get("duration").value);
                    this.itineraryFG.get('endDate').setValue(date);
                }
            }
        });
    }
    /**
     * @function setup changes of total price
     */
    setupValueChangesTotalPrice() {
        this.itineraryFG.get("pricePerDay").valueChanges.subscribe(val => {
            if (this.itineraryFG.get("duration").value) {
                let duration = this.itineraryFG.get("duration").value;
                this.itineraryFG.controls["totalPrice"].setValue(val * duration);
            }
        });
        this.itineraryFG.get("duration").valueChanges.subscribe(val => {
            if (this.itineraryFG.get("pricePerDay").value) {
                let pricePerDay = this.itineraryFG.get("pricePerDay").value;
                this.itineraryFG.controls["totalPrice"].setValue(val * pricePerDay);
            }
        });
    }
    /**
     * @function setup up loader
     */
    setupUploader() {
        this._image.uploader.onAfterAddingFile = file => {
            file.withCredentials = false;
        };
        this._image.uploader.onSuccessItem = (item, response, status, headers) => {
            let path = JSON.parse(response).data;
            this.savedImagePaths.push(path);
        };
        this._image.uploader.onCompleteAll = () => {
            this.savedImagePaths.forEach(e => {
                this.subscription = this._itinerary
                    .saveImageUrl(this.savedIt, e)
                    .subscribe({
                    error: (err) => this._common.handleError(err)
                });
            });
        };
    }
    /**
     * @function link category
     */
    linkCategory(c) {
        if (!this.linkedCategories.includes(c))
            this.linkedCategories.unshift(c);
    }
    /**
     * @function delete linked category
     */
    deleteLinkedCategory(index) {
        this.linkedCategories.splice(index, 1);
    }
    /**
     * @function get group types
     */
    getGroupTypes() {
        this.subscription = this._itinerary.getGroupTypes().subscribe({
            next: (data) => {
                this.groupTypes = [];
                data.data.forEach((el) => {
                    this.groupTypes.unshift(el);
                });
            },
            error: (err) => this._common.handleError(err)
        });
    }
    /**
     * @function get categories
     */
    getCategories() {
        this.subscription = this._itinerary.getCategories().subscribe({
            next: (result) => {
                this.categories = result.data;
            },
            error: (err) => this._common.handleError(err)
        });
    }
    /**
     * @function catch selected images
     */
    catchSelectedImages(files) {
        for (let i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.readAsDataURL(files[i].rawFile);
            reader.onload = (event) => {
                // called once readAsDataURL is completed
                this.images.push(event.target.result);
                this.data.images = this.images;
            };
        }
    }
    /**
     * @function catch deleted image
     */
    catchDeletedImage(index) {
        this._image.uploader.removeFromQueue(this._image.uploader.queue[index]);
    }
    onSubmit() {
        let fv = this.itineraryFG.value;
        this.subscription = this._itinerary
            .saveItinerary(new src_app_itinerary_models_Itinerary__WEBPACK_IMPORTED_MODULE_4__["Itinerary"]({
            name: fv.name,
            total_price: this.itineraryFG.get('totalPrice').value,
            price_per_day: fv.pricePerDay,
            adult_number: fv.adultsQuantity,
            child_number: fv.childrenQuantity,
            description: fv.description,
            duration: fv.duration,
            active: false,
            public: fv.status,
            initial_date: fv.startDate,
            final_date: fv.endDate
        }, fv.groupType), this.linkedCategories.map(e => e.category_id))
            .subscribe({
            next: (result) => {
                this._common.openSnackBar("Itinerario guardado con éxito", "Ok");
                this.savedIt = result.data;
                this.uploadImages();
            },
            error: (err) => this._common.handleError(err)
        });
    }
    /**
     * @function upload images
     */
    uploadImages() {
        this._image.uploader.uploadAll();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ItineraryFormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_5__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_itinerary_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] }
];
ItineraryFormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-form-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itinerary-form-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itinerary-form-dialog.component.scss */ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.scss")).default]
    })
], ItineraryFormDialogComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 601px) {\n  .dropzone {\n    width: 70%;\n  }\n}\n@media screen and (max-width: 700px) {\n  .dropzone {\n    width: 95%;\n  }\n}\nprogress::-webkit-progress-value {\n  transition: width 0.1 ease;\n}\nprogress {\n  width: 100%;\n}\n.dropzone:hover {\n  box-shadow: 10px 10px 8px #888888;\n}\n.dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  border: 0.5px dashed black;\n  border-radius: 5px;\n  background: transparent;\n  background-color: #FF9A8B;\n  background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);\n}\n.dropzone.hovering {\n  border: 2px solid #f16624;\n  color: #dadada !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyeS1mb3JtLWRpYWxvZy91cGxvYWQtaW1hZ2VzL3VwbG9hZC1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyaWVzL2l0aW5lcmFyeS1mb3JtLWRpYWxvZy91cGxvYWQtaW1hZ2VzL3VwbG9hZC1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSwwQkFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0FDQ0Y7QURDQTtFQUNFLGlDQUFBO0FDRUY7QURBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwrRUFBQTtBQ0dGO0FEREU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcmllcy9pdGluZXJhcnktZm9ybS1kaWFsb2cvdXBsb2FkLWltYWdlcy91cGxvYWQtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgLmRyb3B6b25lIHtcbiAgICB3aWR0aDogNzAlXG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5kcm9wem9uZXtcbiAgICB3aWR0aDogOTUlXG4gIH1cbn1cblxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjEgZWFzZVxufVxucHJvZ3Jlc3Mge1xuICB3aWR0aDogMTAwJVxufVxuLmRyb3B6b25lOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAjODg4ODg4O1xufVxuLmRyb3B6b25lIHsgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAwLjVweCBkYXNoZWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlBOEI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGOUE4QiAwJSwgI0ZGNkE4OCA1NSUsICNGRjk5QUMgMTAwJSk7XG5cbiAgJi5ob3ZlcmluZyB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjE2NjI0O1xuICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbiAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIC5kcm9wem9uZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRyb3B6b25lIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMSBlYXNlO1xufVxuXG5wcm9ncmVzcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcHpvbmU6aG92ZXIge1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOHB4ICM4ODg4ODg7XG59XG5cbi5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IDAuNXB4IGRhc2hlZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUE4QjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkY5QThCIDAlLCAjRkY2QTg4IDU1JSwgI0ZGOTlBQyAxMDAlKTtcbn1cbi5kcm9wem9uZS5ob3ZlcmluZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XG4gIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: UploadImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImagesComponent", function() { return UploadImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploadImagesComponent = class UploadImagesComponent {
    constructor() {
        this.selectedImages = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /**
     * @function prepare files
     */
    prepareFiles() {
        this.selectedImages.emit(this.uploader.queue.map(e => e.file));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadImagesComponent.prototype, "uploader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UploadImagesComponent.prototype, "selectedImages", void 0);
UploadImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-images.component.scss */ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.scss")).default]
    })
], UploadImagesComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .custom-dialog {\n    width: 100vw !important;\n    height: 100vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .custom-dialog {\n    width: 100vw !important;\n  }\n}\n@media (min-width: 62em) {\n  .custom-dialog {\n    width: 70vw !important;\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .custom-dialog {\n    width: 65vw !important;\n    height: 85vh !important;\n  }\n}\n.custom-dialog {\n  overflow-y: auto;\n}\n.mat-dialog-container {\n  padding: 15px !important;\n}\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJ5LWRhc2hib2FyZC9pdGluZXJhcnktZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0U7SUFDRSx1QkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFLGdCQUFBO0FDSEY7QURLQTtFQUNFLHdCQUFBO0FDRkY7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDREY7QURLQTtFQUNFLFVBQUE7QUNGRjtBREtBO0VBQ0Usc0RBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0ZGO0FES0E7RUFDRSxzREFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJ5LWRhc2hib2FyZC9pdGluZXJhcnktZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDM0ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuY3VzdG9tLWRpYWxvZyB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA2NXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmN1c3RvbS1kaWFsb2cge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAzNGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2cge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jdXN0b20tZGlhbG9nIHtcbiAgICB3aWR0aDogNjV2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODV2aCAhaW1wb3J0YW50O1xuICB9XG59XG4uY3VzdG9tLWRpYWxvZyB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItineraryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryDashboardComponent", function() { return ItineraryDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");





let ItineraryDashboardComponent = class ItineraryDashboardComponent {
    constructor(_itinerary, _common, _router) {
        this._itinerary = _itinerary;
        this._common = _common;
        this._router = _router;
        this.checked = false;
    }
    ngOnInit() {
        if (!this._itinerary.itinerary_id)
            this._router.navigate(["itineraries/show-all"]);
        else
            this.subscription = this._itinerary
                .getItineraryFullInfo(this._itinerary.itinerary_id)
                .subscribe({
                next: (data) => {
                    this.itinerary = data.data;
                },
                error: (err) => this._common.handleError(err)
            });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
ItineraryDashboardComponent.ctorParameters = () => [
    { type: _services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ItineraryDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itinerary-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itinerary-dashboard.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.scss")).default]
    })
], ItineraryDashboardComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRldGFpbHMvaXRpbmVyYXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ItineraryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryDetailsComponent", function() { return ItineraryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItineraryDetailsComponent = class ItineraryDetailsComponent {
    constructor() {
        this.data = {
            local: false,
            images: []
        };
    }
    ngOnInit() {
        this.data.images = this.it.imgs;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItineraryDetailsComponent.prototype, "it", void 0);
ItineraryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itinerary-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itinerary-details.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.scss")).default]
    })
], ItineraryDetailsComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9jcmVhdGUtZGF5L2NyZWF0ZS1kYXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CreateDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDayComponent", function() { return CreateDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");





let CreateDayComponent = class CreateDayComponent {
    constructor(dialogRef, data, _common, _itinerary) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._common = _common;
        this._itinerary = _itinerary;
    }
    ngOnInit() {
    }
    /**
     * @function Save day
     */
    save() {
        this.subscription = this._itinerary
            .addDay(this.data.id_itinerary, this.data.day_number, this.data.details, this.data.duration + 1)
            .subscribe({
            next: (result) => {
                this._common.openSnackBar(result.message, "Ok");
                return this.dialogRef.close(this.data);
            },
            error: (err) => this._common.handleError(err)
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CreateDayComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] }
];
CreateDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-day-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-day.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CreateDayComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  outline: none;\n}\n\n.example-box {\n  padding: 10px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9pdGluZXJhcnktZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcnktZGFzaGJvYXJkL2l0aW5lcmFyeS1kaXN0cmlidXRpb24vaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJ5LWRhc2hib2FyZC9pdGluZXJhcnktZGlzdHJpYnV0aW9uL2l0aW5lcmFyeS1kaXN0cmlidXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIiwiLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ItineraryDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryDistributionComponent", function() { return ItineraryDistributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");






let ItineraryDistributionComponent = class ItineraryDistributionComponent {
    constructor(commonService, sesionService, dialogService, itineraryService) {
        this.commonService = commonService;
        this.sesionService = sesionService;
        this.dialogService = dialogService;
        this.itineraryService = itineraryService;
        this.favorites = [];
    }
    ngOnInit() {
        this.subscription = this.itineraryService
            .getFavoriteItinerary(this.sesionService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                if (data.data.length > 0) {
                    this.favorites = data.data[0].get_favorite_itinerary;
                }
            },
            error: (err) => this.commonService.handleError(err)
        });
    }
    /**
     * @function set available
     * @param state: boolean
     * @param itineraryID: number
     * @param info: any
     */
    setAvailable(state, itineraryID, info) {
        let modifyInfo = info;
        modifyInfo.active = state;
        this.subscription = this.itineraryService
            .changeActiveState(itineraryID, modifyInfo)
            .subscribe({
            next: () => {
                if (state) {
                    this.commonService.openSnackBar(`El itinerario ${itineraryID} ha sido habilitado`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`El itinerario ${itineraryID} ha sido desabilitado`, "OK");
                }
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @function add favorite from itinerary
     * @param itineraryID: number
     */
    addFavoriteItinerary(itineraryID) {
        this.favorites.push(itineraryID);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this.itineraryService
            .addFavoriteItinerary(itineraryID, userID)
            .subscribe({
            next: () => {
                this.commonService.openSnackBar(`El itinerario ${itineraryID} ha sido agregado a favoritos`, "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @function remove favorite from itinerary
     * @param itineraryID: number
     */
    removeFavoriteItinerary(itineraryID) {
        this.favorites.splice(this.favorites.indexOf(itineraryID, 0), 1);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this.itineraryService
            .removeFavoriteItinerary(itineraryID, userID)
            .subscribe({
            next: () => {
                this.commonService.openSnackBar(`El itinerario ${itineraryID} ha sido removido de favoritos`, "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
};
ItineraryDistributionComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_2__["DialogManagerService"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItineraryDistributionComponent.prototype, "it", void 0);
ItineraryDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-distribution",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itinerary-distribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itinerary-distribution.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.scss")).default]
    })
], ItineraryDistributionComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".draggable-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.btn-delete {\n  outline: none;\n}\n\n.draggable-box {\n  padding: 10px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcnktZGFzaGJvYXJkL2l0aW5lcmFyeS1kaXN0cmlidXRpb24vb2ZmZXJzL29mZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNFRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNEQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJ5LWRhc2hib2FyZC9pdGluZXJhcnktZGlzdHJpYnV0aW9uL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kcmFnZ2FibGUtbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJ0bi1kZWxldGV7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZHJhZ2dhYmxlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiIsIi5kcmFnZ2FibGUtbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLWRlbGV0ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kcmFnZ2FibGUtYm94IHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");












let OffersComponent = class OffersComponent {
    constructor(commonService, sesionService, _itinerary, _dialog, http) {
        this.commonService = commonService;
        this.sesionService = sesionService;
        this._itinerary = _itinerary;
        this._dialog = _dialog;
        this.http = http;
        this.days = [];
        this.favorites = [];
        this.searchOffersCTRL = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.isLoading = false;
        this.daysDetails = [];
    }
    /**
     * in this hook an observable is configured to filter offers based on
     * input value
     */
    ngOnInit() {
        this.days = new Array(this.it.info["duration"]);
        this.days = this.fillArray(this.it.info["duration"]);
        this.subscription = this._itinerary
            .getFavoriteOffer(this.sesionService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                if (data.data[0])
                    this.favorites = data.data[0].get_favorite_offer;
            },
            error: (err) => this.commonService.handleError(err)
        });
        if (this.it) {
            this.getDaysInfo();
            this.searchOffersCTRL.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => {
                this.filteredOffers = [];
                this.isLoading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(value => this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_BASE_URL}itinerary/filterOffers?value=${value}&it_id=${this.it["itinerary_id"]}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                this.isLoading = false;
            }))))
                .subscribe((result) => {
                this.filteredOffers = result.data;
            });
        }
    }
    /**
     * @function fill array
     */
    fillArray(duration) {
        let array = [];
        for (let i = 1; i <= duration; i++) {
            array.push({ day_number: i, items: [] });
        }
        return array;
    }
    /**
     * @function add offer to favorite
     * @param offerID
     */
    addOfferFavorite(offerID) {
        this.favorites.push(offerID);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this._itinerary
            .addFavoriteOffer(offerID, userID)
            .subscribe({
            next: () => {
                this.commonService.openSnackBar(`La oferta ${offerID} ha sido agregado a favoritos`, "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @function add remove offer to favorite
     * @param offerID
     */
    removeOfferFavorite(offerID) {
        this.favorites.splice(this.favorites.indexOf(offerID, 0), 1);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this._itinerary
            .removeFavoriteOffer(offerID, userID)
            .subscribe({
            next: () => {
                this.commonService.openSnackBar(`La oferta ${offerID} ha sido eliminada de favoritos`, "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * is needed to add + 1 to represent day number
     * @param index represent day number
     */
    updateDayDistribution(day_number, index) {
        let distArray = this.days[index].items.map((e) => {
            return {
                it: this.it["itinerary_id"],
                offer_id: e.offer_id,
                day_number: day_number,
                initial_time: "21:40:12.585447",
                final_time: "21:40:12.585447"
            };
        });
        if (distArray.length === 0)
            distArray = [
                {
                    it: this.it["itinerary_id"],
                    day_number: index + 1,
                    delete_all: true
                }
            ];
        this.subscription = this._itinerary
            .updateDayDistribution(distArray)
            .subscribe({
            next: (result) => this.commonService.openSnackBar(result.message, "Ok"),
            error: (err) => this.commonService.handleError(err)
        });
    }
    /**
     * this method get all days for a specific itinerary
     */
    getDaysInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._itinerary
                .getDayInfo(this.it["itinerary_id"])
                .toPromise()
                .then((data) => {
                if (data.data.day !== null) {
                    this.formatDaysArray(data.data.day);
                }
            })
                .catch((err) => this.commonService.handleError(err));
            this.subscription = this._itinerary
                .getDaysDetails(this.it["itinerary_id"])
                .subscribe({
                next: (result) => (this.daysDetails = result.data),
                error: (err) => this.commonService.handleError(err)
            });
        });
    }
    /**
     * @function format days
     * @param data: Array<any>
     */
    formatDaysArray(data) {
        let source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(data);
        let obs = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["groupBy"])(d => d.day_number), 
        // return each item in group as array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["toArray"])())));
        this.formatArraySubscription = obs.subscribe({
            next: (val) => {
                if (this.days[val[0].day_number - 1])
                    this.days[val[0].day_number - 1].items = val;
            }
        });
    }
    /**
     * @function fillEmptyDays
     * @param duration: number
     */
    fillEmptyDays(duration) {
        for (let i = 1; i <= duration; i++) {
            this.days.push({
                day_number: i
            });
        }
    }
    /**
     * @function method needed to sort an array of days
     * This is needed because in some cases the second promise respond first
     */
    sortArray() {
        this.days.sort((a, b) => {
            if (a.day[0] && b.day[0] && a.day[0].day_number > b.day[0].day_number)
                return 1;
            if (a.day[0] && b.day[0] && a.day[0].day_number < b.day[0].day_number)
                return -1;
            // a must be equal to b
            return 0;
        });
    }
    /**
     * @function drop offer
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * @function delete day
     * @param day_number: number
     * @param index: number
     */
    deleteDay(day_number, index) {
        this.deleteDaySubs = this._itinerary
            .deleteDay(this.it["itinerary_id"], day_number)
            .subscribe({
            next: (result) => {
                this.commonService.openSnackBar(result.message, "Ok");
                this.days.splice(index, 1);
            },
            error: (err) => this.commonService.handleError(err)
        });
    }
    /**
     * @function add day
     */
    addDay() {
        this._dialog
            .openCreateDay({
            details: "",
            id_itinerary: this.it["itinerary_id"],
            day_number: this.days.length + 1,
            duration: this.it.info["duration"]
        })
            .subscribe({
            next: (createdDay) => {
                this.days.push({ day_number: createdDay.day_number, items: [] });
                this.daysDetails.push({ details: createdDay.details });
            }
        });
    }
    /**
     * @function unlink offer
     * @param offer_id: number
     * @param day_number: number
     * @param offer_index: number
     * @param day_index: number
     */
    unlinkOffer(offer_id, day_number, offer_index, day_index) {
        this.subscription = this._itinerary
            .unlinkOffer(offer_id, this.it["itinerary_id"], day_number)
            .subscribe({
            next: (result) => {
                this.commonService.openSnackBar(result.message, "Ok");
                this.days[day_index].items.splice(offer_index, 1);
            },
            error: (err) => this.commonService.handleError(err)
        });
    }
    /**
     * @function open day details
     * @param i:number
     */
    openDayDetails(i) {
        this._dialog.openShowDayDetails(this.daysDetails[i].details);
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
        if (this.formatArraySubscription)
            this.formatArraySubscription.unsubscribe();
    }
};
OffersComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_5__["ItineraryService"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__["DialogManagerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersComponent.prototype, "it", void 0);
OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-offers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.scss")).default]
    })
], OffersComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  outline: none;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 25vh;\n}\n\ncdk-virtual-scroll-viewport::-webkit-scrollbar {\n  width: 0.2em;\n}\n\ncdk-virtual-scroll-viewport::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n}\n\ncdk-virtual-scroll-viewport::-webkit-scrollbar-thumb {\n  background-color: #eea94f;\n}\n\n.example-box {\n  padding: 10px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9wcm9tb3Rpb25zL3Byb21vdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9wcm9tb3Rpb25zL3Byb21vdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0U7RUFDRSxZQUFBO0FDREo7O0FESUU7RUFDRSxvREFBQTtBQ0ZKOztBREtFO0VBQ0UseUJBQUE7QUNISjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2NvbXBvbmVudHMvaXRpbmVyYXJ5LWRhc2hib2FyZC9pdGluZXJhcnktZGlzdHJpYnV0aW9uL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XG4gIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAyNXZoO1xuXG4gIC8vIEJvbnVzIHBvaW50c1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuMmVtO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDE2OSwgNzkpO1xuICB9XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iLCIuYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwLjJlbTtcbn1cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWE5NGY7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");





let PromotionsComponent = class PromotionsComponent {
    constructor(commonService, sesionService, itineraryService) {
        this.commonService = commonService;
        this.sesionService = sesionService;
        this.itineraryService = itineraryService;
        this.addedPromotions = new Array();
        this.promotions = new Array();
        this.promotionLoading = false;
        this.addedPromotionLoading = false;
        this.filter = { name: "" };
    }
    ngOnInit() {
        this.promotionLoading = true;
        this.addedPromotionLoading = true;
        this.getAllPromotions();
        this.getPromotionByItineraryID();
    }
    /**
     *@funtion Get promotions by itinerary id
     */
    getPromotionByItineraryID() {
        this.subscriptionAddedPromotion = this.itineraryService.getPromotionByItineraryID().subscribe({
            next: (data) => {
                this.addedPromotions = data.data.rows;
                this.addedPromotionLoading = false;
                this.subscriptionAddedPromotion.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @funtion Get all promotions
     */
    getAllPromotions() {
        this.subscriptionPromotion = this.itineraryService.getAllPromotions().subscribe({
            next: (data) => {
                this.promotions = data.data;
                this.promotionLoading = false;
                this.subscriptionPromotion.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @funtion Add Promotion in itinerary
     * @param promotion_id
     */
    addPromotionInItinerary(promotion_id) {
        this.subscription = this.itineraryService
            .addPromotionInItinerary(promotion_id)
            .subscribe({
            next: (data) => {
                this.addPromotionToListAddedPromotion(promotion_id);
                this.commonService.openSnackBar("Se ha agregado la promoción correctamente", "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * Add promotion to list added promotion
     * @param promotion_id
     */
    addPromotionToListAddedPromotion(promotion_id) {
        let prom = this.promotions.filter(item => item.promotion_id === promotion_id)[0]; // Get promotion to add in addedPromotions
        this.promotions = this.promotions.filter(item => item.promotion_id !== promotion_id); // Filter promotions to remove added promotion
        this.addedPromotions.push(prom); // Add promotion
        this.addedPromotions = this.addedPromotions.filter(item => item); // Refresh list
    }
    /**
     * @funtion Delete promotion of itinerary
     * @param promotion_id
     */
    deletePromotionOfItinerary(promotion_id) {
        this.subscription = this.itineraryService
            .deletePromotionOfItinerary(promotion_id)
            .subscribe({
            next: (data) => {
                this.returnPromotionToPromotions(promotion_id);
                this.commonService.openSnackBar("Se ha eliminado la promoción correctamente", "OK");
                this.subscription.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * Return promotion deleted to promotions
     * @param promotion_id
     */
    returnPromotionToPromotions(promotion_id) {
        let prom = this.addedPromotions.filter(item => item.promotion_id === promotion_id)[0];
        this.addedPromotions = this.addedPromotions.filter(item => item.promotion_id !== promotion_id);
        this.promotions.push(prom);
        this.promotions = this.promotions.filter(item => item); // Refresh list
    }
};
PromotionsComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] }
];
PromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-promotions",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./promotions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./promotions.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.scss")).default]
    })
], PromotionsComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LWRpc3RyaWJ1dGlvbi9zaG93LWRheS1kZXRhaWxzL3Nob3ctZGF5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ShowDayDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDayDetailsComponent", function() { return ShowDayDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ShowDayDetailsComponent = class ShowDayDetailsComponent {
    constructor(dialogRef, details) {
        this.dialogRef = dialogRef;
        this.details = details;
    }
    ngOnInit() {
    }
};
ShowDayDetailsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ShowDayDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-day-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-day-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-day-details.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ShowDayDetailsComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  height: 600px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2l0aW5lcmFyeS9jb21wb25lbnRzL2l0aW5lcmFyeS1kYXNoYm9hcmQvaXRpbmVyYXJ5LW1hcC9pdGluZXJhcnktbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcnktZGFzaGJvYXJkL2l0aW5lcmFyeS1tYXAvaXRpbmVyYXJ5LW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pdGluZXJhcnkvY29tcG9uZW50cy9pdGluZXJhcnktZGFzaGJvYXJkL2l0aW5lcmFyeS1tYXAvaXRpbmVyYXJ5LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLm1hcCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ItineraryMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryMapComponent", function() { return ItineraryMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");





let ItineraryMapComponent = class ItineraryMapComponent {
    constructor(itineraryService, _common) {
        this.itineraryService = itineraryService;
        this._common = _common;
        this.layers = new Array();
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "..."
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(10.475215, -84.648328)
        };
    }
    ngOnInit() {
        this.itineraryService.itinerary_id !== undefined ?
            this.itineraryService.getEventGeomByItineraryID().subscribe({
                next: (data) => {
                    this.markers = data.data;
                    this.fillMarkers(); // Fill info
                },
                error: (err) => this._common.handleError(err)
            }) : null;
    }
    /**
     * @function Fill info markers
     */
    fillMarkers() {
        this.markers.forEach(mark => {
            this.layers.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([mark.lat, mark.lon], {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../../../../../assets/marker-icon.png',
                    shadowUrl: '../../../../../assets/marker-shadow.png',
                })
            }).bindPopup(mark.name));
        });
    }
    /**
     * @function Map ready
     * @param map: Map
     */
    onMapReady(map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 2000);
    }
};
ItineraryMapComponent.ctorParameters = () => [
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
ItineraryMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-map",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itinerary-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itinerary-map.component.scss */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.scss")).default]
    })
], ItineraryMapComponent);



/***/ }),

/***/ "./src/app/itinerary/components/itinerary-root.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/itinerary/components/itinerary-root.component.ts ***!
  \******************************************************************/
/*! exports provided: ItineraryRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryRootComponent", function() { return ItineraryRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItineraryRootComponent = class ItineraryRootComponent {
    constructor() { }
    ngOnInit() { }
};
ItineraryRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-itinerary-root",
        template: `
    <router-outlet></router-outlet>
  `
    })
], ItineraryRootComponent);



/***/ }),

/***/ "./src/app/itinerary/itinerary-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/itinerary/itinerary-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ItineraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryRoutingModule", function() { return ItineraryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_itinerary_dashboard_itinerary_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-dashboard.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.ts");
/* harmony import */ var _components_itinerary_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/itinerary-root.component */ "./src/app/itinerary/components/itinerary-root.component.ts");
/* harmony import */ var _components_itineraries_itineraries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/itineraries/itineraries.component */ "./src/app/itinerary/components/itineraries/itineraries.component.ts");





const routes = [
    {
        path: "itineraries",
        component: _components_itinerary_root_component__WEBPACK_IMPORTED_MODULE_3__["ItineraryRootComponent"],
        children: [
            {
                path: "show-all",
                component: _components_itineraries_itineraries_component__WEBPACK_IMPORTED_MODULE_4__["ItinerariesComponent"]
            },
            {
                path: "dashboard",
                component: _components_itinerary_dashboard_itinerary_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ItineraryDashboardComponent"]
            }
        ]
    }
];
const ItineraryRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/itinerary/itinerary.module.ts":
/*!***********************************************!*\
  !*** ./src/app/itinerary/itinerary.module.ts ***!
  \***********************************************/
/*! exports provided: ItineraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryModule", function() { return ItineraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/itinerary/components/carousel/carousel.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-dashboard.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-dashboard.component.ts");
/* harmony import */ var _itinerary_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itinerary-routing.module */ "./src/app/itinerary/itinerary-routing.module.ts");
/* harmony import */ var _components_itineraries_itinerary_form_dialog_itinerary_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component */ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component.ts");
/* harmony import */ var _components_itineraries_itineraries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/itineraries/itineraries.component */ "./src/app/itinerary/components/itineraries/itineraries.component.ts");
/* harmony import */ var _components_itinerary_root_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/itinerary-root.component */ "./src/app/itinerary/components/itinerary-root.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_distribution_itinerary_distribution_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_map_itinerary_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-map/itinerary-map.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-map/itinerary-map.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _components_itineraries_itineraries_table_itineraries_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/itineraries/itineraries-table/itineraries-table.component */ "./src/app/itinerary/components/itineraries/itineraries-table/itineraries-table.component.ts");
/* harmony import */ var _components_itineraries_itinerary_form_dialog_upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/itineraries/itinerary-form-dialog/upload-images/upload-images.component */ "./src/app/itinerary/components/itineraries/itinerary-form-dialog/upload-images/upload-images.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-details/itinerary-details.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_distribution_offers_offers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-distribution/offers/offers.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/offers/offers.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_distribution_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var _components_itinerary_dashboard_itinerary_distribution_create_day_create_day_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component.ts");
/* harmony import */ var _components_itinerary_dashboard_itinerary_distribution_show_day_details_show_day_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component */ "./src/app/itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component.ts");
/* harmony import */ var _components_itineraries_itineraries_table_filter_options_dialog_filter_options_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component */ "./src/app/itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component.ts");























let ItineraryModule = class ItineraryModule {
};
ItineraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_itineraries_itineraries_component__WEBPACK_IMPORTED_MODULE_8__["ItinerariesComponent"],
            _components_itineraries_itineraries_table_itineraries_table_component__WEBPACK_IMPORTED_MODULE_13__["ItinerariesTableComponent"],
            _components_itineraries_itinerary_form_dialog_itinerary_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ItineraryFormDialogComponent"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
            _components_itineraries_itinerary_form_dialog_upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_14__["UploadImagesComponent"],
            _components_itinerary_dashboard_itinerary_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ItineraryDashboardComponent"],
            _components_itinerary_root_component__WEBPACK_IMPORTED_MODULE_9__["ItineraryRootComponent"],
            _components_itinerary_dashboard_itinerary_distribution_itinerary_distribution_component__WEBPACK_IMPORTED_MODULE_10__["ItineraryDistributionComponent"],
            _components_itinerary_dashboard_itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_15__["ItineraryDetailsComponent"],
            _components_itinerary_dashboard_itinerary_distribution_offers_offers_component__WEBPACK_IMPORTED_MODULE_16__["OffersComponent"],
            _components_itinerary_dashboard_itinerary_distribution_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_17__["PromotionsComponent"],
            _components_itinerary_dashboard_itinerary_map_itinerary_map_component__WEBPACK_IMPORTED_MODULE_11__["ItineraryMapComponent"],
            _components_itinerary_dashboard_itinerary_distribution_create_day_create_day_component__WEBPACK_IMPORTED_MODULE_20__["CreateDayComponent"],
            _components_itinerary_dashboard_itinerary_distribution_show_day_details_show_day_details_component__WEBPACK_IMPORTED_MODULE_21__["ShowDayDetailsComponent"],
            _components_itineraries_itineraries_table_filter_options_dialog_filter_options_dialog_component__WEBPACK_IMPORTED_MODULE_22__["FilterOptionsDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _itinerary_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItineraryRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipeModule"]
        ],
        exports: [_components_itinerary_root_component__WEBPACK_IMPORTED_MODULE_9__["ItineraryRootComponent"]],
        entryComponents: [
            _components_itineraries_itinerary_form_dialog_itinerary_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ItineraryFormDialogComponent"],
            _components_itinerary_dashboard_itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_15__["ItineraryDetailsComponent"],
            _components_itinerary_dashboard_itinerary_distribution_create_day_create_day_component__WEBPACK_IMPORTED_MODULE_20__["CreateDayComponent"],
            _components_itinerary_dashboard_itinerary_distribution_show_day_details_show_day_details_component__WEBPACK_IMPORTED_MODULE_21__["ShowDayDetailsComponent"],
            _components_itineraries_itineraries_table_filter_options_dialog_filter_options_dialog_component__WEBPACK_IMPORTED_MODULE_22__["FilterOptionsDialogComponent"]
        ]
    })
], ItineraryModule);



/***/ }),

/***/ "./src/app/itinerary/models/Itinerary.ts":
/*!***********************************************!*\
  !*** ./src/app/itinerary/models/Itinerary.ts ***!
  \***********************************************/
/*! exports provided: Itinerary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Itinerary", function() { return Itinerary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Itinerary {
    constructor(info, group_type_id, itineray_id, imgs) {
        this.info = info;
        this.group_type_id = group_type_id;
        this.itineray_id = itineray_id;
        this.imgs = imgs;
    }
}


/***/ }),

/***/ "./src/app/itinerary/services/image.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/itinerary/services/image.service.ts ***!
  \*****************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");





let ImageService = class ImageService {
    constructor(_http) {
        this._http = _http;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}image/upload`,
            itemAlias: "file"
        });
    }
    saveImages(images) {
        for (var p of images) {
            console.log(p);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Accept", "application/json");
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}image/upload`, images, { headers: headers });
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ImageService);



/***/ }),

/***/ "./src/app/itinerary/services/itinerary.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/itinerary/services/itinerary.service.ts ***!
  \*********************************************************/
/*! exports provided: ItineraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryService", function() { return ItineraryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");





let ItineraryService = class ItineraryService {
    constructor(_http, _auth) {
        this._http = _http;
        this._auth = _auth;
    }
    getFavoriteItinerary(user_id) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/getFavoriteItinerary/${user_id}`);
    }
    getFavoriteOffer(user_id) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/getFavoriteOffer/${user_id}`);
    }
    ;
    addFavoriteItinerary(itinerary_id, user_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/addFavoriteItinerary`, { id_itinerary: itinerary_id, id_user: user_id });
    }
    ;
    addFavoriteOffer(offer_id, user_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/addFavoriteOffer`, { id_offer: offer_id, id_user: user_id });
    }
    ;
    removeFavoriteItinerary(itinerary_id, user_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/removeFavoriteItinerary`, { id_itinerary: itinerary_id, id_user: user_id });
    }
    ;
    removeFavoriteOffer(offer_id, user_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/removeFavoriteOffer`, { id_offer: offer_id, id_user: user_id });
    }
    ;
    getFavoriteItineraryMinimalInfoByUser(id_user) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/itineraryFavoriteInfo/${id_user}`);
    }
    getFavoriteOfferInfoByUser(id_user) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}favorite/offerFavoriteInfo/${id_user}`);
    }
    getItineraryMinimalInfoByUser(id_user) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/minimalInfo/${id_user}`);
    }
    changeActiveState(itinerary_id, info) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/changeActiveState`, { id: itinerary_id, info: info });
    }
    ;
    saveItinerary(it, categories_ids) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/save`, {
            info: it.info,
            categories_ids: categories_ids,
            group_type_id: it.group_type_id,
            user_id: this._auth.getUser().user_id
        });
    }
    getItineraryFullInfo(id_itinerary) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/fullInfo/${id_itinerary}`);
    }
    filterItineraries(filters) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/filter`, filters);
    }
    addDay(id_itinerary, day_number, details, new_duration) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}day/save`, {
            id_itinerary: id_itinerary,
            day_number: day_number,
            details: details,
            new_duration: new_duration
        });
    }
    getDayInfo(id_itinerary) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}day/dayInfo/${id_itinerary}`);
    }
    unlinkOffer(offer_id, itinerary_id, day_number) {
        return this._http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/unlinkOffer?it_id=${itinerary_id}&off_id=${offer_id}&day=${day_number}`);
    }
    getGroupTypes() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}groupType/getAll`);
    }
    getCategories() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}category/getAll`);
    }
    /**
     * @function Add Promotion in itinerary
     * @param promotion_id
     */
    addPromotionInItinerary(promotion_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/addPromotionInItinerary`, { itinerary_id: this.itinerary_id, promotion_id: promotion_id });
    }
    /**
     * @function Get promotion by itinerary id
     */
    getPromotionByItineraryID() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/getPromotionByItinerayID/${this.itinerary_id}`);
    }
    /**
     * @funtion Get all promotion except added promotion in itinerary
     */
    getAllPromotions() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/getAllPromotions/${this.itinerary_id}`);
    }
    /**
     * @funtion Get all promotion except added promotion in itinerary
     */
    getDaysDetails(itinerary_id) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}day/daysDetails/${itinerary_id}`);
    }
    saveImageUrl(it_id, url) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/saveImageUrl`, { it_id: it_id, url: url });
    }
    updateDayDistribution(day_distribution) {
        console.log(day_distribution);
        return this._http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}day/updateDayDistribution`, { day_distribution: day_distribution });
    }
    /**
     * @funtion delete promotion of itinerary
     * @param promotion_id
     */
    deletePromotionOfItinerary(promotion_id) {
        return this._http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/deletePromotionOfItinerary`, { itinerary_id: this.itinerary_id, promotion_id: promotion_id });
    }
    /**
     * @function Get all event geometry points by itinerary id
     */
    getEventGeomByItineraryID() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}itinerary/getEventGeomByItineraryID/${this.itinerary_id}`);
    }
    deleteDay(id_itinerary, day_number) {
        return this._http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL}day/deleteDay/${id_itinerary}/${day_number}`);
    }
};
ItineraryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ItineraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ItineraryService);



/***/ }),

/***/ "./src/app/logged-in.guard.ts":
/*!************************************!*\
  !*** ./src/app/logged-in.guard.ts ***!
  \************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-services/auth.service */ "./src/app/general-services/auth.service.ts");



let LoggedInGuard = class LoggedInGuard {
    constructor(authService) {
        this.authService = authService;
    }
    /**
     *
     * @param next
     * @param state
     */
    canActivateChild(_next, _state) {
        const isLoggedIn = this.authService.isLoggedIn();
        return isLoggedIn;
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoggedInGuard);



/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .custom-dialog-forgot-password {\n    width: 100vw !important;\n    height: 90vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .custom-dialog-forgot-password {\n    width: 100vw !important;\n  }\n}\n@media (min-width: 62em) {\n  .custom-dialog-forgot-password {\n    width: 80vw !important;\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .custom-dialog-forgot-password {\n    width: 75vw !important;\n    height: 90vh !important;\n  }\n}\n.mat-dialog-container {\n  padding: 15px !important;\n}\n::ng-deep .cdk-overlay-container {\n  position: fixed !important;\n}\n.spinner {\n  margin: 0 auto;\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsdUJBQUE7RUNDRjtBQUNGO0FER0E7RUFDRTtJQUNFLHVCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0Usd0JBQUE7QUNKRjtBRE9BO0VBQ0UsMEJBQUE7QUNKRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzRlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1mb3Jnb3QtcGFzc3dvcmQge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICB9XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctZm9yZ290LXBhc3N3b3JkIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1mb3Jnb3QtcGFzc3dvcmQge1xuICAgIHdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctZm9yZ290LXBhc3N3b3JkIHtcbiAgICB3aWR0aDogNzV2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbn1cbi5zcGlubmVye1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNSU7XG5cbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAzNGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWZvcmdvdC1wYXNzd29yZCB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWZvcmdvdC1wYXNzd29yZCB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWZvcmdvdC1wYXNzd29yZCB7XG4gICAgd2lkdGg6IDgwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctZm9yZ290LXBhc3N3b3JkIHtcbiAgICB3aWR0aDogNzV2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICB9XG59XG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG59XG5cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");






let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(dialogRef, dialog, sessionService, commonService, _fb) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.sessionService = sessionService;
        this.commonService = commonService;
        this._fb = _fb;
        this.icon = "warning";
        this.hide_pass = true; // Controller to show button
        this.hide_newpass = true;
        this.hide_code = true;
        this.loading = false;
        this.isSendEmail = false;
        // Variable to controller the form group
        this.forgotPasswordForm = this._fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.changePasswordForm = this._fb.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        // Trigger to change icon
        this.forgotPasswordForm.valueChanges.subscribe(() => {
            if (this.forgotPasswordForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
        this.changePasswordForm.valueChanges.subscribe(() => {
            if (this.forgotPasswordForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
    }
    /**
     * @funtion send email to recovery password
     */
    sendCodePassword() {
        this.loading = true;
        this.subscribeForgotPassword = this.sessionService.sendCodePassword(this.forgotPasswordForm.get("email").value).subscribe({
            next: (data) => {
                this.loading = false;
                this.commonService.openSnackBar("Verifique su correo electrónico", "OK");
                this.isSendEmail = true;
            }, error: (err) => {
                this.loading = false;
                this.commonService.openSnackBar(err.error.message, "OK");
            }
        });
    }
    /**
     * @function send new password
     */
    changePasswordByCode() {
        this.loading = true;
        if (this.changePasswordForm.get("password").value !== this.changePasswordForm.get("confirmPassword").value) {
            this.loading = false;
            this.commonService.openSnackBar("Las contraseñas no coinciden!", "OK");
            return false;
        }
        else {
            this.subscribeForgotPassword = this.sessionService.changePasswordByCode(this.changePasswordForm.get("password").value, this.changePasswordForm.get("code").value).subscribe({
                next: (data) => {
                    this.loading = false;
                    this.commonService.openSnackBar("Las contraseña ha sido actualizada!", "OK");
                    this.dialog.closeAll();
                }, error: (err) => {
                    this.loading = false;
                    this.commonService.openSnackBar(err.error.message, "OK");
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.subscribeForgotPassword)
            this.subscribeForgotPassword.unsubscribe();
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/login/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -5;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.btn-eye {\n  outline: none;\n}\n\n.main-div {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.example-card {\n  max-width: 400px;\n}\n\n.spinner {\n  margin: 0 auto;\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC01O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcblxufVxuXG4uYnRuLWV5ZXtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tYWluLWRpdntcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5zcGlubmVye1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNSU7XG5cbn1cbiIsIi5iZy1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmJ0bi1leWUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFpbi1kaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(_fb, dialogService, sessionService, _auth, _router) {
        this._fb = _fb;
        this.dialogService = dialogService;
        this.sessionService = sessionService;
        this._auth = _auth;
        this._router = _router;
        this.hide = true; // Controller to show button
        this.icon = "warning";
        this.loginForm = this._fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        document.body.classList.add("bg-img");
        // Trigger to change icon
        this.loginForm.valueChanges.subscribe(() => {
            if (this.loginForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
    }
    /**
     * @funtion Open Dialog to register businessman
     */
    registerBusinessman() {
        this.dialogService.openAddBusinessmanFormDialog();
    }
    /**
     * @function Open Dialog to recovery password
     */
    forgotPassword() {
        this.dialogService.openForgotPasswordDialog();
    }
    /**
     * @funtion Login to system
     */
    loginUser() {
        this.sessionService.loadingLogin = true;
        this.subscribeLogin = this.sessionService
            .login(this.loginForm.get("email").value, this.loginForm.get("password").value)
            .subscribe({
            next: (data) => {
                this.sessionService.loadingLogin = false;
                this._auth.login({
                    name: data.data.name,
                    user_id: data.data.user_id,
                    role_id: data.data.role_id
                });
                this.sessionService.actualUser = this._auth.getUser();
                this.sessionService.commonService.openSnackBar(`Bienvenido ${this.sessionService.actualUser.name}`, "OK");
                this._router.navigate(["/itineraries/show-all"]);
            },
            error: (_err) => {
                console.log(_err);
                this.sessionService.commonService.openSnackBar(`Error en la autenticación`, "OK");
                this.sessionService.loadingLogin = false;
            }
        });
    }
    ngOnDestroy() {
        if (this.subscribeLogin)
            this.subscribeLogin.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_3__["DialogManagerService"] },
    { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/register-business-man/register-business-man.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/login/register-business-man/register-business-man.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .custom-dialog-add-businessman {\n    width: 100vw !important;\n    height: 82vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .custom-dialog-add-businessman {\n    width: 100vw !important;\n  }\n}\n@media (min-width: 62em) {\n  .custom-dialog-add-businessman {\n    width: 70vw !important;\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .custom-dialog-add-businessman {\n    width: 65vw !important;\n    height: 82vh !important;\n  }\n}\n.custom-dialog-add-businessman {\n  overflow-y: auto;\n}\n.mat-dialog-container {\n  padding: 15px !important;\n}\n::ng-deep .cdk-overlay-container {\n  position: fixed !important;\n}\n.btn-eye {\n  outline: none;\n}\n.spinner {\n  margin: 0 auto;\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL2xvZ2luL3JlZ2lzdGVyLWJ1c2luZXNzLW1hbi9yZWdpc3Rlci1idXNpbmVzcy1tYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyLWJ1c2luZXNzLW1hbi9yZWdpc3Rlci1idXNpbmVzcy1tYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsdUJBQUE7RUNBRjtBQUNGO0FESUE7RUFDRTtJQUNFLHVCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0UsZ0JBQUE7QUNMRjtBRE9BO0VBQ0Usd0JBQUE7QUNKRjtBRE9BO0VBQ0UsMEJBQUE7QUNKRjtBRE1BO0VBQ0UsYUFBQTtBQ0hGO0FES0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vcmVnaXN0ZXItYnVzaW5lc3MtbWFuL3JlZ2lzdGVyLWJ1c2luZXNzLW1hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIChtaW4td2lkdGg6IDM0ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWJ1c2luZXNzbWFuIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgydmggIWltcG9ydGFudDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWFkZC1idXNpbmVzc21hbiB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWJ1c2luZXNzbWFuIHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWFkZC1idXNpbmVzc21hbiB7XG4gICAgd2lkdGg6IDY1dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgydmggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY3VzdG9tLWRpYWxvZy1hZGQtYnVzaW5lc3NtYW4ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xufVxuLmJ0bi1leWV7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3Bpbm5lcntcbiAgbWFyZ2luOjAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjUlO1xuXG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMzRlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1hZGQtYnVzaW5lc3NtYW4ge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODJ2aCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1hZGQtYnVzaW5lc3NtYW4ge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1hZGQtYnVzaW5lc3NtYW4ge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWFkZC1idXNpbmVzc21hbiB7XG4gICAgd2lkdGg6IDY1dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgydmggIWltcG9ydGFudDtcbiAgfVxufVxuLmN1c3RvbS1kaWFsb2ctYWRkLWJ1c2luZXNzbWFuIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWV5ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/register-business-man/register-business-man.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/login/register-business-man/register-business-man.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterBusinessManComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterBusinessManComponent", function() { return RegisterBusinessManComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");






let RegisterBusinessManComponent = class RegisterBusinessManComponent {
    constructor(dialogRef, dialog, _fb, sessionService, commonService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this._fb = _fb;
        this.sessionService = sessionService;
        this.commonService = commonService;
        this.hide = true; // Controller to show button
        this.icon = "warning";
        this.loading = false;
        // Variable to controller the form group
        this.addBusinessmanForm = this._fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            businessName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        // Trigger to change icon
        this.addBusinessmanForm.valueChanges.subscribe(() => {
            if (this.addBusinessmanForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
    }
    /**
     * @function add businessman
     */
    addBusinessman() {
        this.loading = true; // Charge loading
        let info = {
            name: this.addBusinessmanForm.get('name').value,
            lastName: this.addBusinessmanForm.get('lastName').value,
            businessName: this.addBusinessmanForm.get('businessName').value,
            email: this.addBusinessmanForm.get('email').value,
            password: this.addBusinessmanForm.get('password').value,
            available: false,
            state: false
        };
        this.subscription = this.sessionService.saveUser(info, 2).subscribe({
            next: (_data) => {
                this.loading = false;
                this.commonService.openSnackBar(`Se ha registrado ${info.name}, espere la validación de su cuenta`, "OK");
                this.dialog.closeAll();
            }, error: (err) => { this.commonService.openSnackBar(`Error: ${err}`, "OK"); this.subscription.unsubscribe(); }
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
RegisterBusinessManComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
RegisterBusinessManComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-business-man',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-business-man.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register-business-man/register-business-man.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-business-man.component.scss */ "./src/app/login/register-business-man/register-business-man.component.scss")).default]
    })
], RegisterBusinessManComponent);



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(128, 89, 89, 0.15);\n}\n\n.fx-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar.mat-primary {\n  position: relative;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-drawer-side {\n  border: none;\n}\n\n.router-link-active {\n  color: #673ab7;\n  box-shadow: 2px 0 5px rgba(103, 58, 183, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLDZDQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMTI4LCA4OSwgODksIDAuMTUpO1xufVxuXG4uZngtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgY29sb3I6IHJnYigxMDMsNTgsMTgzKTtcbiAgYm94LXNoYWRvdzogMnB4IDAgNXB4IHJnYmEoMTAzLDU4LDE4MywwLjIpO1xufVxuXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgxMjgsIDg5LCA4OSwgMC4xNSk7XG59XG5cbi5meC1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5yb3V0ZXItbGluay1hY3RpdmUge1xuICBjb2xvcjogIzY3M2FiNztcbiAgYm94LXNoYWRvdzogMnB4IDAgNXB4IHJnYmEoMTAzLCA1OCwgMTgzLCAwLjIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-services/auth.service */ "./src/app/general-services/auth.service.ts");






let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver, sessionService, _auth) {
        this.breakpointObserver = breakpointObserver;
        this.sessionService = sessionService;
        this._auth = _auth;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/main-nav/main-nav.component.scss")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"]
        ],
        exports: [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/users/components/add-admin/add-admin.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/users/components/add-admin/add-admin.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 34em) {\n  .custom-dialog-add-admin {\n    width: 100vw !important;\n    height: 70vh !important;\n  }\n}\n@media (min-width: 48em) {\n  .custom-dialog-add-admin {\n    width: 100vw !important;\n  }\n}\n@media (min-width: 62em) {\n  .custom-dialog-add-admin {\n    width: 70vw !important;\n    height: 75vh !important;\n  }\n}\n@media (min-width: 75em) {\n  .custom-dialog-add-admin {\n    width: 65vw !important;\n    height: 70vh !important;\n  }\n}\n.custom-dialog-add-admin {\n  overflow-y: auto;\n}\n.mat-dialog-container {\n  padding: 15px !important;\n}\n::ng-deep .cdk-overlay-container {\n  position: fixed !important;\n  z-index: 100000 !important;\n  /* set value you need */\n}\n.spinner {\n  position: fixed;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvYWRkLWFkbWluL2FkZC1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9hZGQtYWRtaW4vYWRkLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLHVCQUFBO0VDQ0Y7QUFDRjtBREdBO0VBQ0U7SUFDRSx1QkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ0hGO0FBQ0Y7QURNQTtFQUNFLGdCQUFBO0FDSkY7QURNQTtFQUNFLHdCQUFBO0FDSEY7QURNQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFBNEIsdUJBQUE7QUNGOUI7QURLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9hZGQtYWRtaW4vYWRkLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDM0ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWFkbWluIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWFkZC1hZG1pbiB7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWFkbWluIHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jdXN0b20tZGlhbG9nLWFkZC1hZG1pbiB7XG4gICAgd2lkdGg6IDY1dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY3VzdG9tLWRpYWxvZy1hZGQtYWRtaW4ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDAgIWltcG9ydGFudDsgLyogc2V0IHZhbHVlIHlvdSBuZWVkICovXG59XG5cbi5zcGlubmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcblxufVxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDM0ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWFkbWluIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWFkbWluIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmN1c3RvbS1kaWFsb2ctYWRkLWFkbWluIHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3VzdG9tLWRpYWxvZy1hZGQtYWRtaW4ge1xuICAgIHdpZHRoOiA2NXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jdXN0b20tZGlhbG9nLWFkZC1hZG1pbiB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDAwICFpbXBvcnRhbnQ7XG4gIC8qIHNldCB2YWx1ZSB5b3UgbmVlZCAqL1xufVxuXG4uc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/components/add-admin/add-admin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/users/components/add-admin/add-admin.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/users/services/user.service.ts");






let AddAdminComponent = class AddAdminComponent {
    constructor(dialogRef, dialog, _fb, sessionService, commonService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this._fb = _fb;
        this.sessionService = sessionService;
        this.commonService = commonService;
        this.hide = true; // Controller to show button
        this.icon = "warning";
        this.loading = false;
        // Variable to controller the form group
        this.addAdminForm = this._fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        // Trigger to change icon
        this.addAdminForm.valueChanges.subscribe(() => {
            if (this.addAdminForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
    }
    /**
     * @function add administrator user
     */
    addAdmin() {
        this.loading = true; // Charge loading
        let info = {
            name: this.addAdminForm.get('name').value,
            lastName: this.addAdminForm.get('lastName').value,
            email: this.addAdminForm.get('email').value,
            password: this.addAdminForm.get('password').value,
            available: true,
            state: true
        };
        this.subscription = this.sessionService.saveUserAdmi(info, 1).subscribe({
            next: () => {
                this.loading = false;
                this.commonService.openSnackBar(`Se ha registrado el usuario administrador ${info.name}`, "OK");
                this.dialog.closeAll();
            }, error: (err) => {
                this.commonService.openSnackBar(`Error: ${err}`, "OK");
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
AddAdminComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
AddAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/add-admin/add-admin.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-admin.component.scss */ "./src/app/users/components/add-admin/add-admin.component.scss")).default]
    })
], AddAdminComponent);



/***/ }),

/***/ "./src/app/users/components/profile/add-event-request/add-event-request.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/users/components/profile/add-event-request/add-event-request.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  resize: none;\n}\n\n.buttonContainer {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 3%;\n  margin-bottom: 3;\n}\n\nform {\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 45%;\n  margin-right: 2.5%;\n  margin-left: 2.5%;\n}\n\n.color-picker {\n  width: 30%;\n  padding-left: 5%;\n  align-self: center;\n}\n\n.toggle {\n  width: 40%;\n}\n\n.chip-list {\n  width: -webkit-fill-available;\n}\n\n.file {\n  align-self: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 20%;\n}\n\n.uploadFile {\n  text-align: center;\n  width: -webkit-fill-available;\n  margin-right: 2.5%;\n  margin-left: 2.5%;\n  margin-bottom: 2%;\n  border: solid 1.5px gainsboro;\n}\n\n.chip-list {\n  width: -webkit-fill-available;\n}\n\n.map {\n  height: 500px;\n  padding: 0;\n  margin: auto;\n}\n\n::ng-deep .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n\n#exit {\n  float: right;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9hZGQtZXZlbnQtcmVxdWVzdC9hZGQtZXZlbnQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL2FkZC1ldmVudC1yZXF1ZXN0L2FkZC1ldmVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9hZGQtZXZlbnQtcmVxdWVzdC9hZGQtZXZlbnQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhe1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDNcbn1cbiBcbmZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY29sb3ItcGlja2Vye1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50b2dnbGV7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLmNoaXAtbGlzdHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgXG59XG5cbi5maWxle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi51cGxvYWRGaWxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGJvcmRlcjogc29saWQgMS41cHggcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uY2hpcC1saXN0e1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyBcbn1cblxuLm1hcCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0b1xufVxuXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVye1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNleGl0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iLCJ0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMztcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY29sb3ItcGlja2VyIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9nZ2xlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNoaXAtbGlzdCB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uZmlsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi51cGxvYWRGaWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGJvcmRlcjogc29saWQgMS41cHggZ2FpbnNib3JvO1xufVxuXG4uY2hpcC1saXN0IHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jZXhpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/users/components/profile/add-event-request/add-event-request.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddEventRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventRequestComponent", function() { return AddEventRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/category/services/category.service */ "./src/app/category/services/category.service.ts");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");












let AddEventRequestComponent = class AddEventRequestComponent {
    constructor(data, dialogRef, commonService, eventService, router, categoryService, companyService, userService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.eventService = eventService;
        this.router = router;
        this.categoryService = categoryService;
        this.companyService = companyService;
        this.userService = userService;
        this.petition = false;
        this.showInfo = false;
        this.allDay = false;
        this.loading = false;
        this.initial_date = undefined;
        this.final_date = undefined;
        this.today = new Date();
        this.initial_time = undefined;
        this.final_time = undefined;
        this.common_date = undefined;
        this.eventImages = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.allCategories = [];
        this.allCompanies = [];
        this.myEvent = {
            name: null,
            address: null,
            detail: null,
            color: null,
            date_range: {
                initial_date: null,
                final_date: null
            },
            cost: null,
            all_day: null,
            initial_time: null,
            final_time: null,
            user_id: null,
            images: null
        };
        this.refreshed = false;
        this.locationMarker = new leaflet__WEBPACK_IMPORTED_MODULE_10__["Marker"](Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLng"])(10.471868647924616, -84.64508235454561), {
            draggable: true,
            icon: new leaflet__WEBPACK_IMPORTED_MODULE_10__["Icon"]({
                iconUrl: 'assets/marker-icon.png',
                iconSize: [24, 41],
                iconAnchor: [12, 41],
                shadowUrl: 'assets/marker-shadow.png'
            })
        });
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["tileLayer"])("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "..."
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLng"])(10.471691479992346, -84.64503407478333)
        };
        /**
         * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
         */
        this.dateFilter = (date) => {
            return date >= this.initial_date;
        };
        this.refreshMap = this.refreshMap.bind(this);
    }
    ngOnInit() {
        this.eventFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action }),
            companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.data.action })
        });
        this.data.action ? this.selectable = false : this.selectable = true;
        this.data.action ? this.removable = false : this.removable = true;
        this.data.action ? this.visible = false : this.visible = true;
        this.subscription = this.categoryService.getAllCategories(1)
            .subscribe({
            next: (data) => {
                this.filteredCategories = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        this.subscription2 = this.companyService.getCompanies()
            .subscribe({
            next: (data) => {
                this.filteredCompanies = data;
                this.subscription2.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
        this.user = this.userService.actualUser;
        this.showInfo = this.data.action;
        this.petition = this.data.petition;
        this.showInfo ? this.setData(this.data.event) : null;
        this.showInfo ? this.myEvent.latitude = this.data.event.latitude : null;
        this.showInfo ? this.myEvent.longitude = this.data.event.longitude : null;
    }
    /**
     * Toogle
     * @param param0
     */
    changeState({ source }) {
        this.allDay == false ? this.allDay = true : this.allDay = false;
        source.checked = this.allDay;
        console.log(this.allDay);
    }
    /**
     * Color picker
     * @param event
     */
    changeComplete(event) {
        this.color = event.color.hex;
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.allDay == true ? (this.initial_date = this.common_date, this.final_date = this.common_date) : null;
            this.initial_time == undefined ? this.initial_time = null : null;
            this.final_time == undefined ? this.final_time = null : null;
            let urlImages = yield this.uploadFiles();
            this.myEvent.name = this.eventFG.controls['name'].value;
            this.myEvent.cost = this.eventFG.controls['cost'].value;
            this.myEvent.address = this.eventFG.controls['address'].value;
            this.myEvent.detail = this.eventFG.controls['detail'].value;
            this.myEvent.all_day = this.allDay;
            this.myEvent.color = this.color;
            this.myEvent.date_range = {
                initial_date: this.initial_date,
                final_date: this.final_date
            };
            this.myEvent.initial_time = this.initial_time,
                this.myEvent.final_time = this.final_time,
                this.myEvent.latitude = this.locationMarker.getLatLng().lat,
                this.myEvent.longitude = this.locationMarker.getLatLng().lng;
            this.myEvent.user_id = this.user.user_id;
            this.myEvent.images = urlImages;
            this.createRequest(this.myEvent);
        });
    }
    createRequest(event) {
        this.loading = true;
        this.eventFG.disable();
        this.eventService.createEvent(event, true).subscribe({
            next: (data) => {
                if (data.status == 200) {
                    this.commonService.openSnackBar(`La petición del evento ${this.eventFG.value.name} se ha creado`, "OK");
                    this.dialogRef.close();
                    /**Añadiendo compañías y categorías al evento */
                    this.getCategories();
                    this.getCompanies();
                    this.eventRelations(data.body[0]);
                    this.router.navigate(['/event', data.body[0]]);
                }
                else {
                    this.commonService.openSnackBar(`Error al crear el evento: ${data.error}`, "OK");
                    this.eventFG.enable();
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                this.loading = false;
                this.eventFG.enable();
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    closeDialog() {
        this.dialogRef.close();
    }
    disableDialog() {
        if (!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || this.color == undefined ||
            (this.allDay == false && this.final_date == undefined) || (this.allDay == true && this.initial_time == undefined) ||
            (this.allDay == true && this.final_time == undefined) || (this.allDay == true && this.common_date == undefined)
            || this.allCategories.length === 0 || (this.initial_time >= this.final_time) || this.eventImages.length == 0) {
            return true;
        }
        return false;
    }
    //chipList 
    removeCategory(category) {
        let index = this.allCategories.indexOf(category);
        if (index >= 0) {
            this.allCategories.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selectedCategory(event) {
        for (let i = 0; i < this.allCategories.length; i++) {
            if (this.allCategories[i].category_id === event.option.value.category_id) {
                this.commonService.openSnackBar("¡La categoría ya ha sido agregada!", "OK");
                return;
            }
        }
        this.allCategories.push(event.option.value);
        this.eventFG.controls['categories'].setValue(null);
    }
    removeCompany(company) {
        let index = this.allCompanies.indexOf(company);
        if (index >= 0) {
            this.allCompanies.splice(index, 1);
        }
    }
    /**
     * Añade el tag seleccionado a la lista para mostarlo y lo guarda
     * @param event
     */
    selectedCompany(event) {
        for (let i = 0; i < this.allCompanies.length; i++) {
            if (this.allCompanies[i].company_id === event.option.value.company_id) {
                this.commonService.openSnackBar("¡La compañía ya ha sido agregada!", "OK");
                return;
            }
        }
        this.allCompanies.push(event.option.value);
        this.eventFG.controls['companies'].setValue(null);
    }
    /**
     * Metodo para obtener únicamente los ids de los tags que se guardaron
     */
    getCategories() {
        let categoryIDs = [];
        for (let i = 0; i < this.allCategories.length; i++) {
            categoryIDs.push(this.allCategories[i].category_id);
        }
        this.allCategories = categoryIDs;
    }
    /**
     * Metodo para obtener únicamente los ids de los tags que se guardaron
     */
    getCompanies() {
        let companyIDs = [];
        for (let i = 0; i < this.allCompanies.length; i++) {
            companyIDs.push(this.allCompanies[i].company_id);
        }
        this.allCompanies = companyIDs;
    }
    eventRelations(event_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //compañías
            for (let i = 0; i < this.allCompanies.length; i++) {
                yield this.eventService.addCompanyToEvent(this.allCompanies[i], event_id, this.user.user_id).toPromise();
            }
            //Categorias
            for (let i = 0; i < this.allCategories.length; i++) {
                yield this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise();
            }
        });
    }
    ngAfterViewInit() {
        if (document.getElementById("mat-tab-label-0-2")) {
            document.getElementById("mat-tab-label-0-2").parameters = { map: this.map, event: this.myEvent };
            document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
        }
        setTimeout(() => this.map.invalidateSize(), 2000);
    }
    onMapReady(map) {
        this.map = map;
        map.addLayer(this.locationMarker);
        if (this.myEvent.latitude && this.myEvent.longitude) {
            this.locationMarker.setLatLng(Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLng"])(this.myEvent.latitude, this.myEvent.longitude));
        }
        console.log(this.myEvent.latitude);
        console.log(this.myEvent.longitude);
    }
    refreshMap() {
        this.map.invalidateSize();
        if (!this.refreshed) {
            this.refreshed = true;
            if (this.myEvent.latitude && this.myEvent.longitude)
                this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLng"])(this.myEvent.latitude, this.myEvent.longitude), 18);
        }
    }
    putLocationMarker(event) {
        this.locationMarker.setLatLng(event.latlng);
    }
    setData(event) {
        console.log(event.color);
        this.eventFG.controls['name'].setValue(event.name);
        this.eventFG.controls['address'].setValue(event.address);
        this.eventFG.controls['detail'].setValue(event.detail);
        this.eventFG.controls['cost'].setValue(event.cost);
        this.allDay = event.all_day;
        this.color = event.color;
        this.initial_date = new Date(event.date_range.initial_date);
        this.final_date = new Date(event.date_range.final_date);
        this.initial_time = event.initial_time;
        this.final_time = event.final_time;
        this.allDay ? this.common_date = event.date_range.initial_date : this.common_date = undefined;
        //categorias
        console.log(this.petition);
        if (!this.petition) {
            this.subscription3 = this.categoryService.getEventCategories(event.event_id).subscribe({
                next: (data) => {
                    this.allCategories = [];
                    data.forEach(val => this.allCategories.push(val));
                    this.subscription3.unsubscribe();
                }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
            });
            //compañías
            this.subscription4 = this.companyService.getCompaniesByEvent(event.event_id).subscribe({
                next: (data) => {
                    this.allCompanies = [];
                    data.forEach(val => this.allCompanies.push(val));
                    this.subscription4.unsubscribe();
                }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
            });
        }
    }
    getFiles(files) {
        this.eventImages = files;
    }
    uploadFiles() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let images = [];
            for (let i = 0; i < this.eventImages.length; i++) {
                yield this.commonService.uploadFile(this.eventImages[i]).then((data) => {
                    images.push(data.filename);
                });
            }
            return images;
        });
    }
};
AddEventRequestComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false })
], AddEventRequestComponent.prototype, "matAutocomplete", void 0);
AddEventRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-event-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-event-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-event-request/add-event-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-event-request.component.scss */ "./src/app/users/components/profile/add-event-request/add-event-request.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], AddEventRequestComponent);



/***/ }),

/***/ "./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9hZGQtcmVxdWVzdC1jb21wYW55LXVuaW9uL2FkZC1yZXF1ZXN0LWNvbXBhbnktdW5pb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddRequestCompanyUnionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestCompanyUnionComponent", function() { return AddRequestCompanyUnionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_users_models_User_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/users/models/User.class */ "./src/app/users/models/User.class.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");









let AddRequestCompanyUnionComponent = class AddRequestCompanyUnionComponent {
    constructor(companyService, companyUsersService, commonService, user, dialog) {
        this.companyService = companyService;
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.user = user;
        this.dialog = dialog;
        this.loading = false;
        this.companyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]{1,} [|] [A-z0-9 ]{1,}')]);
    }
    ngOnInit() {
        this.companyService.getCompanies().subscribe((data) => {
            console.log(data);
            this.companies = data;
        });
        this.filteredCompanies = this.companyControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        if (this.companies) {
            const filterValue = value.toLowerCase();
            return this.companies.filter(option => option.name.toLowerCase().includes(filterValue));
        }
    }
    requestUnion() {
        this.loading = true;
        let company_id = Number(this.companyControl.value.split(" | ")[0]);
        this.companyUsersService.requesUnion(this.user.user_id, company_id).subscribe({
            next: (response) => {
                if (response.status == 204) {
                    this.commonService.snackBar.open("La solicitud de unión ha sido enviada", "Ok");
                    this.loading = false;
                    this.dialog.close();
                }
            },
            error: (err) => {
                console.log(err);
                if (err.status == 400)
                    this.commonService.snackBar.open(err.error, "Ok");
                else
                    this.commonService.snackBar.open("Ha ocurrido un error con la base de datos", "Ok");
                this.loading = false;
            }
        });
    }
};
AddRequestCompanyUnionComponent.ctorParameters = () => [
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_5__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: src_app_users_models_User_class__WEBPACK_IMPORTED_MODULE_7__["User"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }
];
AddRequestCompanyUnionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-request-company-union',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-request-company-union.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-request-company-union.component.scss */ "./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], AddRequestCompanyUnionComponent);



/***/ }),

/***/ "./src/app/users/components/profile/create-even-request/create-even-request.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/users/components/profile/create-even-request/create-even-request.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n\n.radio-button-group {\n  width: 50%;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 300px;\n  margin: auto;\n  padding-bottom: 1.34375em;\n}\n\n.buttonContainer {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9jcmVhdGUtZXZlbi1yZXF1ZXN0L2NyZWF0ZS1ldmVuLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9jcmVhdGUtZXZlbi1yZXF1ZXN0L2NyZWF0ZS1ldmVuLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9jcmVhdGUtZXZlbi1yZXF1ZXN0L2NyZWF0ZS1ldmVuLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmFkaW8tYnV0dG9uLWdyb3Vwe1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgXG4gICAgZmxleC13cmFwOiB3cmFwOyBcbn0iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yYWRpby1idXR0b24tZ3JvdXAge1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/components/profile/create-even-request/create-even-request.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/users/components/profile/create-even-request/create-even-request.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateEvenRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEvenRequestComponent", function() { return CreateEvenRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-event-request/add-event-request.component */ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts");






let CreateEvenRequestComponent = class CreateEvenRequestComponent {
    constructor(eventService, userService, matDialog) {
        this.eventService = eventService;
        this.userService = userService;
        this.matDialog = matDialog;
        this.filter = {
            name: '',
            state: '0',
            filter: (request) => request.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
        };
        this.loading = true;
        this.eventRequests = [];
    }
    refresh() {
        this.loading = true;
        let state = Number(this.filter.state);
        state == 0 ? state = -1 : state = Number(this.filter.state);
        this.eventService.getEventRequestsByUser(this.userService.actualUser.user_id, state).subscribe((data) => {
            console.log(data);
            this.eventRequests = data;
            this.loading = false;
        });
    }
    ngOnInit() {
        this.refresh();
    }
    deleteRequest(event) {
        this.eventService.changeRequestState(event.event_id, 3).subscribe({
            next: (data) => {
                data.status == 201 ? this.refresh() : null;
            }
        });
    }
    /**
     *
     * @param action false to create true to show info
     */
    submit(_action, _event) {
        this.matDialog.open(_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_5__["AddEventRequestComponent"], { height: "95%", width: "80%", minWidth: "280px", disableClose: true, data: { action: _action, event: _event, petition: false } });
    }
};
CreateEvenRequestComponent.ctorParameters = () => [
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
CreateEvenRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-even-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-even-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/create-even-request/create-even-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-even-request.component.scss */ "./src/app/users/components/profile/create-even-request/create-even-request.component.scss")).default]
    })
], CreateEvenRequestComponent);



/***/ }),

/***/ "./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9mYXZvcml0ZS1pdGluZXJhcnkvZmF2b3JpdGUtaXRpbmVyYXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FavoriteItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteItineraryComponent", function() { return FavoriteItineraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let FavoriteItineraryComponent = class FavoriteItineraryComponent {
    constructor(_itinerary, _common, sesionService) {
        this._itinerary = _itinerary;
        this._common = _common;
        this.sesionService = sesionService;
        this.displayedColumns = ["position", "name", "actions"];
    }
    ngOnInit() {
        this.subscription = this._itinerary
            .getFavoriteItineraryMinimalInfoByUser(this.sesionService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data.data);
            },
            error: (err) => this._common.handleError(err)
        });
    }
    /**
     * @function apply filter
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    /**
     * @function remove favarite from itinerary
     */
    removeItineraryFavorite(itineraryID, elementIndex) {
        this.dataSource.filteredData.splice(elementIndex, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataSource.filteredData);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this._itinerary
            .removeFavoriteItinerary(itineraryID, userID)
            .subscribe({
            next: () => {
                this._common.openSnackBar(`El itinerario ${itineraryID} ha sido eliminado de favoritos`, "OK");
            },
            error: (err) => this._common.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    /**
     * @funtion Assign id of itinerary to will used in other components
     * @param id
     */
    assignItineraryId(id) {
        this._itinerary.itinerary_id = id;
    }
};
FavoriteItineraryComponent.ctorParameters = () => [
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_2__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
FavoriteItineraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-itinerary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-itinerary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite-itinerary.component.scss */ "./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.scss")).default]
    })
], FavoriteItineraryComponent);



/***/ }),

/***/ "./src/app/users/components/profile/favorite-offer/favorite-offer.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/users/components/profile/favorite-offer/favorite-offer.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9mYXZvcml0ZS1vZmZlci9mYXZvcml0ZS1vZmZlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/components/profile/favorite-offer/favorite-offer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/users/components/profile/favorite-offer/favorite-offer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FavoriteOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteOfferComponent", function() { return FavoriteOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/itinerary/services/itinerary.service */ "./src/app/itinerary/services/itinerary.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let FavoriteOfferComponent = class FavoriteOfferComponent {
    constructor(_itinerary, _common, sesionService) {
        this._itinerary = _itinerary;
        this._common = _common;
        this.sesionService = sesionService;
        this.displayedColumns = ["position", "name", "actions"];
    }
    ngOnInit() {
        this.subscription = this._itinerary
            .getFavoriteOfferInfoByUser(this.sesionService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data.data);
            },
            error: (err) => this._common.handleError(err)
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    /**
     * @function apply filter
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    /**
     * @function remover offer from favorite
     */
    removeOfferFavorite(offerID, elementIndex) {
        this.dataSource.filteredData.splice(elementIndex, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataSource.filteredData);
        let userID = this.sesionService.actualUser.user_id;
        this.subscription = this._itinerary
            .removeFavoriteOffer(offerID, userID)
            .subscribe({
            next: () => {
                this._common.openSnackBar(`La oferta ${offerID} ha sido eliminada de favoritos`, "OK");
            },
            error: (err) => this._common.openSnackBar(`Error: ${err}`, "OK")
        });
    }
};
FavoriteOfferComponent.ctorParameters = () => [
    { type: src_app_itinerary_services_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
FavoriteOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-offer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-offer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/favorite-offer/favorite-offer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite-offer.component.scss */ "./src/app/users/components/profile/favorite-offer/favorite-offer.component.scss")).default]
    })
], FavoriteOfferComponent);



/***/ }),

/***/ "./src/app/users/components/profile/profile-companies/profile-companies.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-companies/profile-companies.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWNvbXBhbmllcy9wcm9maWxlLWNvbXBhbmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtY29tcGFuaWVzL3Byb2ZpbGUtY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1jb21wYW5pZXMvcHJvZmlsZS1jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuIiwidGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/components/profile/profile-companies/profile-companies.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-companies/profile-companies.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfileCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCompaniesComponent", function() { return ProfileCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");





let ProfileCompaniesComponent = class ProfileCompaniesComponent {
    constructor(companyUsersService, commonService, sessionService) {
        this.companyUsersService = companyUsersService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.filter = {
            input: "",
            filter: ({ name }) => name.toLowerCase().indexOf(this.filter.input.toLowerCase()) > -1
        };
    }
    ngOnInit() {
        this.user = this.sessionService.actualUser;
        this.refresh();
    }
    refresh() {
        this.companyUsersService.getUserCompanies(this.user.user_id).subscribe((data) => {
            this.userCompanies = data;
            console.log(this.userCompanies);
        });
    }
    deleteUserFromCompany(company) {
        this.companyUsersService.deleteUserFromCompany(company).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.refresh();
                    this.commonService.openSnackBar(`Se le ha desasociado de la empresa ${company.name}`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`Error al desasociar el usuario: ${data.error}`, "OK");
                }
            },
            error: (err) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
            }
        });
    }
};
ProfileCompaniesComponent.ctorParameters = () => [
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ProfileCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-companies/profile-companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-companies.component.scss */ "./src/app/users/components/profile/profile-companies/profile-companies.component.scss")).default]
    })
], ProfileCompaniesComponent);



/***/ }),

/***/ "./src/app/users/components/profile/profile-events/profile-events.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-events/profile-events.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n\nbutton {\n  margin-right: 3%;\n}\n\n.container-text-left {\n  margin-bottom: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWV2ZW50cy9wcm9maWxlLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZXZlbnRzL3Byb2ZpbGUtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWV2ZW50cy9wcm9maWxlLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG50cntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4uY29udGFpbmVyLXRleHQtbGVmdHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59IiwidGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLmNvbnRhaW5lci10ZXh0LWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/components/profile/profile-events/profile-events.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-events/profile-events.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventsComponent", function() { return ProfileEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event/services/event.service */ "./src/app/event/services/event.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");





let ProfileEventsComponent = class ProfileEventsComponent {
    constructor(commonService, userService, eventService) {
        this.commonService = commonService;
        this.userService = userService;
        this.eventService = eventService;
        this.userEvents = [];
        this.isFilters = false;
        this.filter = {
            name: ""
        };
    }
    ngOnInit() {
        this.user = this.userService.actualUser;
        this.eventService.getEventRequestsByUser(this.user.user_id, 1).subscribe({
            next: (data) => {
                console.log(data);
                this.userEvents = data;
            }
        });
    }
};
ProfileEventsComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_event_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
];
ProfileEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-events/profile-events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-events.component.scss */ "./src/app/users/components/profile/profile-events/profile-events.component.scss")).default]
    })
], ProfileEventsComponent);



/***/ }),

/***/ "./src/app/users/components/profile/profile-info/profile-info.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-info/profile-info.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  position: fixed;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm8vcHJvZmlsZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIFxuICB9IiwiLnNwaW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/users/components/profile/profile-info/profile-info.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/users/components/profile/profile-info/profile-info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");





let ProfileInfoComponent = class ProfileInfoComponent {
    constructor(_fb, commonService, userService) {
        this._fb = _fb;
        this.commonService = commonService;
        this.userService = userService;
        this.hide = true;
        this.icon = "done";
        this.loading = false;
        this.userLoading = false;
        this.addedUserLoading = false;
    }
    ngOnInit() {
        this.subscriptionUserProfile = this.userService
            .getUser(this.userService.actualUser.user_id)
            .subscribe({
            next: (data) => {
                this.user = data.data[0];
                this.subscriptionUserProfile.unsubscribe();
                this.loadUser();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @function load user
     */
    loadUser() {
        this.editProfileForm = this._fb.group({
            name: [this.user.info.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [this.user.info.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [this.user.info.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            password: [""]
        });
        this.editProfileForm.valueChanges.subscribe(() => {
            if (this.editProfileForm.invalid == false)
                this.icon = "done";
            else
                this.icon = "warning";
        });
    }
    /**
     * @function Save changes by user
     */
    saveChanges() {
        let passChanged = false;
        if (this.editProfileForm.get("password").value != "") {
            this.user.info.password = this.editProfileForm.get("password").value;
            passChanged = true;
        }
        this.user.info.name = this.editProfileForm.get("name").value;
        this.user.info.lastName = this.editProfileForm.get("lastName").value;
        this.user.info.email = this.editProfileForm.get("email").value;
        this.subscriptionUserProfile = this.userService
            .updateUser(this.user.user_id, this.user.info, passChanged)
            .subscribe({
            next: (data) => {
                this.commonService.openSnackBar(`Se ha actualizado el usuario  ${this.user.info.name}`, "OK");
                this.subscriptionUserProfile.unsubscribe();
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
        if (this.subscriptionUserProfile)
            this.subscriptionUserProfile.unsubscribe();
    }
};
ProfileInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile-info/profile-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-info.component.scss */ "./src/app/users/components/profile/profile-info/profile-info.component.scss")).default]
    })
], ProfileInfoComponent);



/***/ }),

/***/ "./src/app/users/components/profile/profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/users/components/profile/profile.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: 100%;\n}\n\n.password-width {\n  width: 100%;\n}\n\n.btn-icon {\n  outline: none;\n}\n\n.spinner {\n  position: fixed;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFzc3dvcmQtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWljb257XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcGlubmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcblxufVxuIiwiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc3N3b3JkLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4taWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogc2hvdztcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/users/components/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/users/components/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/users/components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/users/components/profile/request-company-union/request-company-union.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/users/components/profile/request-company-union/request-company-union.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n}\n\ntr {\n  font-size: 15px;\n}\n\n.radio-button-group {\n  width: 50%;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 300px;\n  margin: auto;\n  padding-bottom: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS9yZXF1ZXN0LWNvbXBhbnktdW5pb24vcmVxdWVzdC1jb21wYW55LXVuaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvcmVxdWVzdC1jb21wYW55LXVuaW9uL3JlcXVlc3QtY29tcGFueS11bmlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3JlcXVlc3QtY29tcGFueS11bmlvbi9yZXF1ZXN0LWNvbXBhbnktdW5pb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmFkaW8tYnV0dG9uLWdyb3Vwe1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn0iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yYWRpby1idXR0b24tZ3JvdXAge1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/users/components/profile/request-company-union/request-company-union.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/profile/request-company-union/request-company-union.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RequestCompanyUnionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCompanyUnionComponent", function() { return RequestCompanyUnionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_request_company_union_add_request_company_union_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-request-company-union/add-request-company-union.component */ "./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.ts");






let RequestCompanyUnionComponent = class RequestCompanyUnionComponent {
    constructor(companyUserService, userService, matDialog) {
        this.companyUserService = companyUserService;
        this.userService = userService;
        this.matDialog = matDialog;
        this.filter = {
            name: '',
            state: '',
            filter: (request) => request.company_info.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
        };
        this.loading = true;
        this.dateString = (datetime) => (new Date(datetime.slice(0, 10))).toLocaleDateString();
        this.timeString = (datetime) => datetime.slice(11, 16);
    }
    refresh() {
        this.loading = true;
        this.companyUserService.getUserRequests(this.userService.actualUser.user_id, Number(this.filter.state)).subscribe((data) => {
            console.log(data);
            this.userRequests = data;
            this.loading = false;
        });
    }
    ngOnInit() {
        this.refresh();
    }
    deleteRequest(user_company_id) {
    }
    addRequestUnion() {
        this.matDialog.open(_add_request_company_union_add_request_company_union_component__WEBPACK_IMPORTED_MODULE_5__["AddRequestCompanyUnionComponent"], { width: '500px', data: this.userService.actualUser });
    }
};
RequestCompanyUnionComponent.ctorParameters = () => [
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_2__["CompanyUsersService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
RequestCompanyUnionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-company-union',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-company-union.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/request-company-union/request-company-union.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-company-union.component.scss */ "./src/app/users/components/profile/request-company-union/request-company-union.component.scss")).default]
    })
], RequestCompanyUnionComponent);



/***/ }),

/***/ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonContainer {\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS91bmlvbi1ldmVudC1yZXF1ZXN0L3BldGl0aW9ucy1maWx0ZXIvcGV0aXRpb25zLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy9wcm9maWxlL3VuaW9uLWV2ZW50LXJlcXVlc3QvcGV0aXRpb25zLWZpbHRlci9wZXRpdGlvbnMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvdW5pb24tZXZlbnQtcmVxdWVzdC9wZXRpdGlvbnMtZmlsdGVyL3BldGl0aW9ucy1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7O1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PetitionsFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetitionsFilterComponent", function() { return PetitionsFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");







let PetitionsFilterComponent = class PetitionsFilterComponent {
    constructor(dialogRef, commonService, companyService, userService) {
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.companyService = companyService;
        this.userService = userService;
    }
    ngOnInit() {
        this.petitionsFiltersFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.user = this.userService.actualUser;
        this.subscription = this.companyService.getCompanies().subscribe({
            next: (data) => {
                this.companies = data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var company_id = this.petitionsFiltersFG.controls['companies'].value;
        this.dialogRef.close(company_id);
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
PetitionsFilterComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
PetitionsFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-petitions-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./petitions-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./petitions-filter.component.scss */ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.scss")).default]
    })
], PetitionsFilterComponent);



/***/ }),

/***/ "./src/app/users/components/profile/union-event-request/union-event-request.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/users/components/profile/union-event-request/union-event-request.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n\ntd {\n  text-align: center;\n}\n\ntr {\n  font-size: 15px;\n  cursor: pointer;\n}\n\ntr:hover {\n  background-color: #f7f7f7;\n}\n\nbutton {\n  margin-right: 3%;\n}\n\n.container-text-left {\n  margin: 1% 0 2% 0;\n}\n\n.radio-button-group {\n  width: 50%;\n  justify-content: space-around;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 300px;\n  margin: auto;\n  padding-bottom: 1.34375em;\n}\n\n.buttonContainer {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS91bmlvbi1ldmVudC1yZXF1ZXN0L3VuaW9uLWV2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvcHJvZmlsZS91bmlvbi1ldmVudC1yZXF1ZXN0L3VuaW9uLWV2ZW50LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3Byb2ZpbGUvdW5pb24tZXZlbnQtcmVxdWVzdC91bmlvbi1ldmVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi5jb250YWluZXItdGV4dC1sZWZ0e1xuICAgIG1hcmdpbjogMSUgMCAyJSAwO1xufVxuXG4ucmFkaW8tYnV0dG9uLWdyb3Vwe1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgXG4gICAgZmxleC13cmFwOiB3cmFwOyBcbn0iLCJ0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4uY29udGFpbmVyLXRleHQtbGVmdCB7XG4gIG1hcmdpbjogMSUgMCAyJSAwO1xufVxuXG4ucmFkaW8tYnV0dG9uLWdyb3VwIHtcbiAgd2lkdGg6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/users/components/profile/union-event-request/union-event-request.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/users/components/profile/union-event-request/union-event-request.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UnionEventRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionEventRequestComponent", function() { return UnionEventRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/company/services/company-users.service */ "./src/app/company/services/company-users.service.ts");
/* harmony import */ var src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/company/services/company.service */ "./src/app/company/services/company.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./petitions-filter/petitions-filter.component */ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.ts");
/* harmony import */ var _add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-event-request/add-event-request.component */ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts");









let UnionEventRequestComponent = class UnionEventRequestComponent {
    constructor(userService, companyUserService, commonService, companyService, dialogService) {
        this.userService = userService;
        this.companyUserService = companyUserService;
        this.commonService = commonService;
        this.companyService = companyService;
        this.dialogService = dialogService;
        this.userRequest = [];
        this.isFilters = false;
        this.currentCompanyId = undefined;
        this.loading = false;
        this.filter = {
            name: '',
            state: '0',
            filter: (request) => request.event_info.info.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = this.userService.actualUser;
            console.log(this.user);
            this.refresh();
        });
    }
    refresh() {
        this.loading = true;
        let state = Number(this.filter.state);
        state == 0 ? state = -1 : state = Number(this.filter.state);
        if (this.currentCompanyId == undefined && state == -1) {
            this.currentCompanyId = -1;
            this.isFilters = false;
        }
        state != -1 ? this.isFilters = true : null;
        this.subscription = this.companyService.getCompanyEventRequests(this.user.user_id, this.currentCompanyId, state).subscribe({
            next: (data) => {
                console.log(data);
                this.userRequest = data;
                this.subscription.unsubscribe();
                this.loading = false;
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    refreshAll() {
        this.filter.state = '0';
        this.currentCompanyId = undefined;
        this.currentCompanyName = undefined;
        this.refresh();
    }
    openShowFilterOptionsDialog() {
        const dialog = this.dialogService.open(_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_7__["PetitionsFilterComponent"], { width: "50", minWidth: "280px", disableClose: true });
        dialog.afterClosed().subscribe(company => {
            if (company != undefined) {
                this.currentCompanyId = company.company_id;
                this.currentCompanyName = company.name;
                this.isFilters = true;
                this.refresh();
            }
        });
    }
    showEventDetails(_action, _event) {
        this.dialogService.open(_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_8__["AddEventRequestComponent"], { height: "95%", width: "80%", minWidth: "280px", disableClose: true, data: { action: _action, event: _event, petition: true } });
    }
};
UnionEventRequestComponent.ctorParameters = () => [
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_company_services_company_users_service__WEBPACK_IMPORTED_MODULE_4__["CompanyUsersService"] },
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_company_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
UnionEventRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-union-event-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./union-event-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/profile/union-event-request/union-event-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./union-event-request.component.scss */ "./src/app/users/components/profile/union-event-request/union-event-request.component.scss")).default]
    })
], UnionEventRequestComponent);



/***/ }),

/***/ "./src/app/users/components/users-management/users-management.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/users/components/users-management/users-management.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-add {\n  outline: none;\n}\n\n.spinner {\n  position: fixed;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlbGl0dXIvYWRtaW5pc3RyYXRvci9zcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy91c2Vycy1tYW5hZ2VtZW50L3VzZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFkZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcGlubmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcblxufVxuIiwiLmJ0bi1hZGQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/components/users-management/users-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/users/components/users-management/users-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsersManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersManagementComponent", function() { return UsersManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/dialog-manager.service */ "./src/app/general-services/dialog-manager.service.ts");
/* harmony import */ var src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users/services/user.service */ "./src/app/users/services/user.service.ts");






let UsersManagementComponent = class UsersManagementComponent {
    constructor(commonService, dialogService, dialog, userManagmentService) {
        this.commonService = commonService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.userManagmentService = userManagmentService;
        this.filter = { info: {
                name: ""
            } };
    }
    ngOnInit() {
        this.subscription = this.userManagmentService.getAllUser()
            .subscribe({
            next: (data) => {
                this.userManagmentService.users = data.data;
                this.subscription.unsubscribe();
            }, error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * Functions
     */
    /**
     * @function Set Available user (block or available)
     * @param state
     * @param userID
     */
    setAvailable(state, userID, info) {
        let modifyInfo = info;
        modifyInfo.available = state;
        this.subscription = this.userManagmentService
            .changeAvailableOrStateUser(userID, modifyInfo)
            .subscribe({
            next: (data) => {
                if (state) {
                    this.commonService.openSnackBar(`El usuario ${userID} ha sido habilitado`, "OK");
                }
                else {
                    this.commonService.openSnackBar(`El usuario ${userID} ha sido desabilitado`, "OK");
                }
                this.subscription.unsubscribe();
                let idx = this.userManagmentService.users.findIndex(user => user.user_id === userID);
                this.userManagmentService.users[idx].info.available = state;
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @function Set Acceptance business user
     * @param accept
     * @param userID
     */
    setAcceptance(userID, info) {
        let modifyInfo = info;
        modifyInfo.state = true;
        this.subscription = this.userManagmentService
            .changeAvailableOrStateUser(userID, modifyInfo)
            .subscribe({
            next: (data) => {
                this.commonService.openSnackBar(`El id de usuario ${userID} ha sido registrado correctamente`, "OK");
                this.subscription.unsubscribe();
                let idx = this.userManagmentService.users.findIndex(user => user.user_id === userID);
                this.userManagmentService.users[idx].info.state = true;
            },
            error: (err) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
    }
    /**
     * @funtion Open dialog to add new admin
     */
    openDialogToAddAdmin() {
        this.dialogService.openAddAdminFormDialog();
    }
};
UsersManagementComponent.ctorParameters = () => [
    { type: src_app_general_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_general_services_dialog_manager_service__WEBPACK_IMPORTED_MODULE_4__["DialogManagerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UsersManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-users-management",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/components/users-management/users-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-management.component.scss */ "./src/app/users/components/users-management/users-management.component.scss")).default]
    })
], UsersManagementComponent);



/***/ }),

/***/ "./src/app/users/models/User.class.ts":
/*!********************************************!*\
  !*** ./src/app/users/models/User.class.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(name, user_id, role_id) {
        this.name = name;
        this.user_id = user_id;
        this.role_id = role_id;
    }
}


/***/ }),

/***/ "./src/app/users/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general-services/common.service */ "./src/app/general-services/common.service.ts");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");






let UserService = class UserService {
    constructor(http, commonService, authService) {
        this.http = http;
        this.commonService = commonService;
        this.authService = authService;
        this.loadingLogin = false;
        this.actualUser = this.authService.getUser();
    }
    /**
     * @funtion Get all user
     */
    getAllUser() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/getAllUsers`);
    }
    ;
    /**
     * @funtion Change available or state for user
     * @param user_id
     * @param info
     */
    changeAvailableOrStateUser(user_id, info) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/changeAvailableOrStateUser`, { id: user_id, info: info });
    }
    ;
    /**
    * @funtion Register Businessman and return user_id
    * @param info
    * @return observable with user_id
    */
    saveUser(info, role_id) {
        // NOTE: role_id = 1 is admin, 2 = businessman
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/saveUser`, { info: info, role_id: role_id });
    }
    /**
     * @function Save user admin
     * @param info
     * @param role_id
     */
    saveUserAdmi(info, role_id) {
        // NOTE: role_id = 1 is admin, 2 = businessman
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/saveUser`, { info: info, role_id: role_id });
    }
    /**
     * @function Login user
     * @param email
     * @param password
     */
    login(email, password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/loginUser`, { email: email, password: password });
    }
    /**
     * @function Send code to change password
     * @param email
     */
    sendCodePassword(email) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/sendCodePassword`, { email: email });
    }
    /**
     * @function Send code and password to change password
     * @param password
     * @param code
     */
    changePasswordByCode(password, code) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/changePasswordByCode`, { password: password, code: code });
    }
    /**
     * @function Log out session
     */
    logOut() {
        this.authService.logout();
        this.actualUser = null;
    }
    /**
      * @funtion Get user
      * @param id User id
      */
    getUser(user_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/getUser/${user_id}`);
    }
    ;
    /**
     * @function Update User
     * @param user_id
     * @param user_info
     * @param passChanged
     */
    updateUser(user_id, user_info, passChanged) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_BASE_URL}generalUsers/updateUser`, { id: user_id, info: user_info, passCheck: passChanged });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _general_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/users/user-root.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user-root.component.ts ***!
  \**********************************************/
/*! exports provided: UserRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRootComponent", function() { return UserRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserRootComponent = class UserRootComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-root',
        template: `
    <router-outlet></router-outlet>
  `
    })
], UserRootComponent);



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_users_management_users_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users-management/users-management.component */ "./src/app/users/components/users-management/users-management.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/users/components/profile/profile.component.ts");
/* harmony import */ var _user_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-root.component */ "./src/app/users/user-root.component.ts");





const routes = [
    {
        path: "user",
        component: _user_root_component__WEBPACK_IMPORTED_MODULE_4__["UserRootComponent"],
        children: [
            {
                path: "profile",
                component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
            },
            {
                path: "user-managment",
                component: _components_users_management_users_management_component__WEBPACK_IMPORTED_MODULE_2__["UsersManagementComponent"]
            }
        ]
    }
];
const UsersRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/users/components/profile/profile.component.ts");
/* harmony import */ var _components_users_management_users_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users-management/users-management.component */ "./src/app/users/components/users-management/users-management.component.ts");
/* harmony import */ var _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-admin/add-admin.component */ "./src/app/users/components/add-admin/add-admin.component.ts");
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color/circle */ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var _user_root_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-root.component */ "./src/app/users/user-root.component.ts");
/* harmony import */ var _components_profile_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile-info/profile-info.component */ "./src/app/users/components/profile/profile-info/profile-info.component.ts");
/* harmony import */ var _components_profile_favorite_itinerary_favorite_itinerary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/favorite-itinerary/favorite-itinerary.component */ "./src/app/users/components/profile/favorite-itinerary/favorite-itinerary.component.ts");
/* harmony import */ var _components_profile_favorite_offer_favorite_offer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/favorite-offer/favorite-offer.component */ "./src/app/users/components/profile/favorite-offer/favorite-offer.component.ts");
/* harmony import */ var _components_profile_profile_companies_profile_companies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile-companies/profile-companies.component */ "./src/app/users/components/profile/profile-companies/profile-companies.component.ts");
/* harmony import */ var _components_profile_request_company_union_request_company_union_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile/request-company-union/request-company-union.component */ "./src/app/users/components/profile/request-company-union/request-company-union.component.ts");
/* harmony import */ var _components_profile_add_request_company_union_add_request_company_union_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile/add-request-company-union/add-request-company-union.component */ "./src/app/users/components/profile/add-request-company-union/add-request-company-union.component.ts");
/* harmony import */ var _components_profile_create_even_request_create_even_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profile/create-even-request/create-even-request.component */ "./src/app/users/components/profile/create-even-request/create-even-request.component.ts");
/* harmony import */ var _components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/add-event-request/add-event-request.component */ "./src/app/users/components/profile/add-event-request/add-event-request.component.ts");
/* harmony import */ var _components_profile_profile_events_profile_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile-events/profile-events.component */ "./src/app/users/components/profile/profile-events/profile-events.component.ts");
/* harmony import */ var _components_profile_union_event_request_union_event_request_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/profile/union-event-request/union-event-request.component */ "./src/app/users/components/profile/union-event-request/union-event-request.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _components_profile_union_event_request_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/profile/union-event-request/petitions-filter/petitions-filter.component */ "./src/app/users/components/profile/union-event-request/petitions-filter/petitions-filter.component.ts");
























let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
            _components_users_management_users_management_component__WEBPACK_IMPORTED_MODULE_5__["UsersManagementComponent"],
            _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_6__["AddAdminComponent"],
            _user_root_component__WEBPACK_IMPORTED_MODULE_11__["UserRootComponent"],
            _components_profile_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_12__["ProfileInfoComponent"],
            _components_profile_favorite_itinerary_favorite_itinerary_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteItineraryComponent"],
            _components_profile_favorite_offer_favorite_offer_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteOfferComponent"],
            _components_profile_profile_companies_profile_companies_component__WEBPACK_IMPORTED_MODULE_15__["ProfileCompaniesComponent"],
            _components_profile_request_company_union_request_company_union_component__WEBPACK_IMPORTED_MODULE_16__["RequestCompanyUnionComponent"],
            _components_profile_add_request_company_union_add_request_company_union_component__WEBPACK_IMPORTED_MODULE_17__["AddRequestCompanyUnionComponent"],
            _components_profile_create_even_request_create_even_request_component__WEBPACK_IMPORTED_MODULE_18__["CreateEvenRequestComponent"],
            _components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_19__["AddEventRequestComponent"],
            _components_profile_profile_events_profile_events_component__WEBPACK_IMPORTED_MODULE_20__["ProfileEventsComponent"],
            _components_profile_union_event_request_union_event_request_component__WEBPACK_IMPORTED_MODULE_21__["UnionEventRequestComponent"],
            _components_profile_union_event_request_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_23__["PetitionsFilterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_9__["UsersRoutingModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipeModule"],
            ngx_color_circle__WEBPACK_IMPORTED_MODULE_7__["ColorCircleModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_22__["LeafletModule"]
        ],
        exports: [_user_root_component__WEBPACK_IMPORTED_MODULE_11__["UserRootComponent"]],
        entryComponents: [_components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_6__["AddAdminComponent"], _components_profile_add_request_company_union_add_request_company_union_component__WEBPACK_IMPORTED_MODULE_17__["AddRequestCompanyUnionComponent"], _components_profile_add_event_request_add_event_request_component__WEBPACK_IMPORTED_MODULE_19__["AddEventRequestComponent"], _components_profile_union_event_request_petitions_filter_petitions_filter_component__WEBPACK_IMPORTED_MODULE_23__["PetitionsFilterComponent"]]
    })
], UsersModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    localstorage_key: 'key_user',
    SERVER_BASE_URL: 'https://intelitur.sytes.net/',
    IMAGES_URL_BASE: 'https://intelitur.sytes.net/files/images/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/intelitur/administrator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map