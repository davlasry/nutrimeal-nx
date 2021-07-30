(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/nutrimeal-api/src/app/app.controller.ts":
/*!******************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/app.controller.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nutrimeal-api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    getDataTest() {
        return { message: 'This is a test for nutrimeal-api!' };
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
tslib_1.__decorate([
    common_1.Get('/test'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getDataTest", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/app.module.ts":
/*!**************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/app.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/nutrimeal-api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nutrimeal-api/src/app/app.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const products_module_1 = __webpack_require__(/*! ./products/products.module */ "./apps/nutrimeal-api/src/app/products/products.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const search_module_1 = __webpack_require__(/*! ./search/search.module */ "./apps/nutrimeal-api/src/app/search/search.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            search_module_1.SearchModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://davidl:PjfhdTgRXBHWC3PH@cluster0.qikgx.mongodb.net/nutrimeal?retryWrites=true&w=majority'),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/app.service.ts":
/*!***************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/app.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to nutrimeal-api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/products/product.model.ts":
/*!**************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/products/product.model.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/products/products.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/products/products.controller.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./apps/nutrimeal-api/src/app/products/products.service.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProduct(prodTitle, prodDesc, prodPrice) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const generatedId = yield this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
            return { id: generatedId };
        });
    }
    getAllProducts() {
        return this.productsService.getProducts();
    }
    getProduct(prodId) {
        return this.productsService.getSingleProduct(prodId);
    }
    updateProduct(prodId, prodTitle, prodDesc, prodPrice) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }
    removeProduct(prodId) {
        this.productsService.deleteProduct(prodId);
        return null;
    }
};
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body('title')),
    tslib_1.__param(1, common_1.Body('description')),
    tslib_1.__param(2, common_1.Body('price')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsController.prototype, "getAllProducts", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
tslib_1.__decorate([
    common_1.Patch(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Body('title')),
    tslib_1.__param(2, common_1.Body('description')),
    tslib_1.__param(3, common_1.Body('price')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsController.prototype, "updateProduct", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsController.prototype, "removeProduct", null);
ProductsController = tslib_1.__decorate([
    common_1.Controller('products'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);
exports.ProductsController = ProductsController;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/products/products.module.ts":
/*!****************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/products/products.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./apps/nutrimeal-api/src/app/products/products.service.ts");
const products_controller_1 = __webpack_require__(/*! ./products.controller */ "./apps/nutrimeal-api/src/app/products/products.controller.ts");
const product_model_1 = __webpack_require__(/*! ./product.model */ "./apps/nutrimeal-api/src/app/products/product.model.ts");
let ProductsModule = class ProductsModule {
};
ProductsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_model_1.ProductSchema }]),
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/products/products.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/products/products.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
        this.products = [];
    }
    insertProduct(title, desc, price) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prodId = Math.random().toString();
            const newProduct = new this.productModel({
                title,
                description: desc,
                price,
            });
            const result = yield newProduct.save();
            return result.id;
        });
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(productId) {
        const product = this.findProduct(productId)[0];
        return Object.assign({}, product);
    }
    updateProduct(productId, title, desc, price) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = Object.assign({}, product);
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        // this.products[index] = updatedProduct;
    }
    deleteProduct(prodId) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }
    findProduct(id) {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return [product, productIndex];
    }
};
ProductsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel('Product')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ProductsService);
exports.ProductsService = ProductsService;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/search/search.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/search/search.controller.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const search_service_1 = __webpack_require__(/*! ./search.service */ "./apps/nutrimeal-api/src/app/search/search.service.ts");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    searchFood(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.searchService.searchFood(query);
        });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SearchController.prototype, "searchFood", null);
SearchController = tslib_1.__decorate([
    common_1.Controller('search'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" ? _a : Object])
], SearchController);
exports.SearchController = SearchController;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/search/search.module.ts":
/*!************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/search/search.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const search_service_1 = __webpack_require__(/*! ./search.service */ "./apps/nutrimeal-api/src/app/search/search.service.ts");
const search_controller_1 = __webpack_require__(/*! ./search.controller */ "./apps/nutrimeal-api/src/app/search/search.controller.ts");
let SearchModule = class SearchModule {
};
SearchModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [search_controller_1.SearchController],
        providers: [search_service_1.SearchService],
    })
], SearchModule);
exports.SearchModule = SearchModule;


/***/ }),

/***/ "./apps/nutrimeal-api/src/app/search/search.service.ts":
/*!*************************************************************!*\
  !*** ./apps/nutrimeal-api/src/app/search/search.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let SearchService = class SearchService {
    constructor(configService) {
        this.configService = configService;
    }
    searchFood(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const nutritionixAppKey = this.configService.get('NUTRITIONIX_APP_KEY');
            const nutritionixAppId = this.configService.get('NUTRITIONIX_APP_ID');
            const response = yield axios_1.default.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}&branded=false`, {
                headers: {
                    'x-app-key': nutritionixAppKey,
                    'x-app-id': nutritionixAppId,
                },
            });
            return response.data;
        });
    }
};
SearchService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], SearchService);
exports.SearchService = SearchService;


/***/ }),

/***/ "./apps/nutrimeal-api/src/main.ts":
/*!****************************************!*\
  !*** ./apps/nutrimeal-api/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/nutrimeal-api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./apps/nutrimeal-api/src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidlasry/dev/nutrimeal-nx/apps/nutrimeal-api/src/main.ts */"./apps/nutrimeal-api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map