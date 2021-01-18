(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsDefaultState = exports.BillingDocumentsDao = exports.BillingDocumentsService = exports.BillingDocumentsPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "BillingDocumentsPlugin", { enumerable: true, get: function () { return index_1.BillingDocumentsPlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "BillingDocumentsService", { enumerable: true, get: function () { return index_2.BillingDocumentsService; } });
var index_3 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "BillingDocumentsDao", { enumerable: true, get: function () { return index_3.BillingDocumentsDao; } });
var billing_documents_default_1 = __webpack_require__(/*! ./src/store/billing-documents.default */ "./src/store/billing-documents.default.ts");
Object.defineProperty(exports, "BillingDocumentsDefaultState", { enumerable: true, get: function () { return billing_documents_default_1.BillingDocumentsDefaultState; } });
__exportStar(__webpack_require__(/*! ./src/types */ "./src/types/index.ts"), exports);


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "query-string"));
var BillingDocumentsDao = /** @class */ (function () {
    function BillingDocumentsDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    BillingDocumentsDao.prototype.getBillingDocuments = function (_a, token, storeCode) {
        var customerId = _a.customerId, pageSize = _a.pageSize, currentPage = _a.currentPage, sortBy = _a.sortBy, sortDir = _a.sortDir;
        var query = {
            pageSize: pageSize,
            currentPage: currentPage,
            sortBy: sortBy,
            sortDir: sortDir,
            token: token,
            storeCode: storeCode
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/' + customerId + '?' + query_string_1.default.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BillingDocumentsDao.prototype.getBillingDocument = function (entityId, token, storeCode) {
        var query = {
            token: token,
            storeCode: storeCode
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/single/' + entityId + '?' + query_string_1.default.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BillingDocumentsDao.prototype.getBillingDocumentTypes = function (_a, token, storeCode) {
        var customerId = _a.customerId, pageSize = _a.pageSize, currentPage = _a.currentPage, sortBy = _a.sortBy, sortDir = _a.sortDir;
        var query = {
            pageSize: pageSize,
            currentPage: currentPage,
            sortBy: sortBy,
            sortDir: sortDir,
            token: token,
            storeCode: storeCode
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/type/' + customerId + '?' + query_string_1.default.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BillingDocumentsDao.prototype.getBillingDocumentType = function (typeId, token, storeCode) {
        var query = {
            token: token,
            storeCode: storeCode
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/type/single/' + typeId + '?' + query_string_1.default.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BillingDocumentsDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], BillingDocumentsDao);
    return BillingDocumentsDao;
}());
exports.BillingDocumentsDao = BillingDocumentsDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var billing_documents_reducer_1 = __webpack_require__(/*! ./store/billing-documents.reducer */ "./src/store/billing-documents.reducer.ts");
var billing_documents_default_1 = __webpack_require__(/*! ./store/billing-documents.default */ "./src/store/billing-documents.default.ts");
/**
 * Plugin for handling customer billing documents
 * A billing document is created for a credit memo, debit memo, an invoice or a cancelled transaction.
 */
exports.BillingDocumentsPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.BillingDocumentsDao).to(dao_1.BillingDocumentsDao);
    libstorefront.getIOCContainer().bind(service_1.BillingDocumentsService).to(service_1.BillingDocumentsService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('billingDocuments', billing_documents_reducer_1.billingDocumentsReducer, billing_documents_default_1.BillingDocumentsDefaultState));
    });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var billing_documents_thunks_1 = __webpack_require__(/*! ../store/billing-documents.thunks */ "./src/store/billing-documents.thunks.ts");
var BillingDocumentsService = /** @class */ (function () {
    function BillingDocumentsService(store) {
        this.store = store;
    }
    /**
     * Returns list of customer billing documents
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    BillingDocumentsService.prototype.getBillingDocuments = function (_a) {
        var _b = _a === void 0 ? {} : _a, sortBy = _b.sortBy, sortDir = _b.sortDir, pageSize = _b.pageSize, currentPage = _b.currentPage;
        return this.store.dispatch(billing_documents_thunks_1.BillingDocumentsThunks.getBillingDocuments({ sortBy: sortBy, sortDir: sortDir, pageSize: pageSize, currentPage: currentPage }));
    };
    /**
     * Returns billing document details
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    BillingDocumentsService.prototype.getBillingDocument = function (storeCreditId) {
        return this.store.dispatch(billing_documents_thunks_1.BillingDocumentsThunks.getBillingDocument(storeCreditId));
    };
    /**
     * Returns list of billing document types
     * @param {number} amount
     * @returns {Promise<void>}
     */
    BillingDocumentsService.prototype.getBillingDocumentTypes = function (_a) {
        var _b = _a === void 0 ? {} : _a, sortBy = _b.sortBy, sortDir = _b.sortDir, pageSize = _b.pageSize, currentPage = _b.currentPage;
        return this.store.dispatch(billing_documents_thunks_1.BillingDocumentsThunks.getBillingDocumentTypes({ sortBy: sortBy, sortDir: sortDir, pageSize: pageSize, currentPage: currentPage }));
    };
    /**
     * Returns billing document type details
     * @returns {Promise<BillingDocumentType>}
     */
    BillingDocumentsService.prototype.getBillingDocumentType = function (typeId) {
        return this.store.dispatch(billing_documents_thunks_1.BillingDocumentsThunks.getBillingDocumentType(typeId));
    };
    BillingDocumentsService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], BillingDocumentsService);
    return BillingDocumentsService;
}());
exports.BillingDocumentsService = BillingDocumentsService;


/***/ }),

/***/ "./src/store/billing-documents.actions.ts":
/*!************************************************!*\
  !*** ./src/store/billing-documents.actions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsActions = void 0;
var BillingDocumentsActions;
(function (BillingDocumentsActions) {
    BillingDocumentsActions.SN_BILLING_DOCUMENTS = 'billing-documents';
    BillingDocumentsActions.SET_BILLING_DOCUMENTS = BillingDocumentsActions.SN_BILLING_DOCUMENTS + '/SET_BILLING_DOCUMENTS';
    BillingDocumentsActions.setBillingDocuments = function (documents) { return ({
        type: BillingDocumentsActions.SET_BILLING_DOCUMENTS,
        payload: documents
    }); };
    BillingDocumentsActions.SET_CURRENT = BillingDocumentsActions.SN_BILLING_DOCUMENTS + '/SET_CURRENT';
    BillingDocumentsActions.setCurrentBillingDocument = function (document) { return ({
        type: BillingDocumentsActions.SET_CURRENT,
        payload: document
    }); };
})(BillingDocumentsActions = exports.BillingDocumentsActions || (exports.BillingDocumentsActions = {}));


/***/ }),

/***/ "./src/store/billing-documents.default.ts":
/*!************************************************!*\
  !*** ./src/store/billing-documents.default.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsDefaultState = void 0;
exports.BillingDocumentsDefaultState = {
    items: [],
    current: null
};


/***/ }),

/***/ "./src/store/billing-documents.reducer.ts":
/*!************************************************!*\
  !*** ./src/store/billing-documents.reducer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.billingDocumentsReducer = void 0;
var billing_documents_default_1 = __webpack_require__(/*! ./billing-documents.default */ "./src/store/billing-documents.default.ts");
var billing_documents_actions_1 = __webpack_require__(/*! ./billing-documents.actions */ "./src/store/billing-documents.actions.ts");
var billingDocumentsReducer = function (state, action) {
    switch (action.type) {
        case billing_documents_actions_1.BillingDocumentsActions.SET_BILLING_DOCUMENTS: {
            return __assign(__assign({}, state), { items: action.payload || [] });
        }
        case billing_documents_actions_1.BillingDocumentsActions.SET_CURRENT: {
            return __assign(__assign({}, state), { current: action.payload });
        }
        default: return state || billing_documents_default_1.BillingDocumentsDefaultState;
    }
};
exports.billingDocumentsReducer = billingDocumentsReducer;


/***/ }),

/***/ "./src/store/billing-documents.thunks.ts":
/*!***********************************************!*\
  !*** ./src/store/billing-documents.thunks.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDocumentsThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var billing_documents_actions_1 = __webpack_require__(/*! ./billing-documents.actions */ "./src/store/billing-documents.actions.ts");
var BillingDocumentsThunks;
(function (BillingDocumentsThunks) {
    var _this = this;
    BillingDocumentsThunks.getBillingDocuments = function (filter) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, token, storeCode, customerId, response, items, docs, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    token = customer.token;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !token || !customer.current) {
                        throw new Error('Cannot fetch documents for unauthorized user');
                    }
                    customerId = customer.current.id;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BillingDocumentsDao).getBillingDocuments(__assign({ customerId: customerId }, filter), token, storeCode)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    items = response.result.items;
                    docs = items instanceof Array ? items[0] : items;
                    return [4 /*yield*/, dispatch(billing_documents_actions_1.BillingDocumentsActions.setBillingDocuments(docs))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, docs];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_1.message);
                    throw e_1;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    BillingDocumentsThunks.getBillingDocument = function (entityId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, token, storeCode, customerId, response, document_1, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    token = customer.token;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !token || !customer.current) {
                        throw new Error('Cannot fetch documents for unauthorized user');
                    }
                    customerId = customer.current.id;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BillingDocumentsDao).getBillingDocument(entityId, token, storeCode)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    document_1 = response.result;
                    return [4 /*yield*/, dispatch(billing_documents_actions_1.BillingDocumentsActions.setCurrentBillingDocument(document_1))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, document_1];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_2.message);
                    throw e_2;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    BillingDocumentsThunks.getBillingDocumentTypes = function (filter) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, token, storeCode, customerId, response, items, docs, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    token = customer.token;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !token || !customer.current) {
                        throw new Error('Cannot fetch documents types for unauthorized user');
                    }
                    customerId = customer.current.id;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BillingDocumentsDao).getBillingDocumentTypes(__assign({ customerId: customerId }, filter), token, storeCode)];
                case 1:
                    response = _a.sent();
                    if (response && response.code === libstorefront_1.HttpStatus.OK) {
                        items = response.result.items;
                        docs = items instanceof Array ? items[0] : items;
                        return [2 /*return*/, docs];
                    }
                    else {
                        throw new Error('Not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_3.message);
                    throw e_3;
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
    BillingDocumentsThunks.getBillingDocumentType = function (typeId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, token, storeCode, response, docType, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    token = customer.token;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !token || !customer.current) {
                        throw new Error('Cannot fetch documents types for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BillingDocumentsDao).getBillingDocumentType(typeId, token, storeCode)];
                case 1:
                    response = _a.sent();
                    if (response && response.code === libstorefront_1.HttpStatus.OK) {
                        docType = response.result;
                        return [2 /*return*/, docType];
                    }
                    else {
                        throw new Error('Not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_4.message);
                    throw e_4;
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
})(BillingDocumentsThunks = exports.BillingDocumentsThunks || (exports.BillingDocumentsThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map