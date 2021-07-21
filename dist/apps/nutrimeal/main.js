(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!./app/App.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-4-2!./app/App.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAuY3NzIn0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/App.css":
/*!*********************!*\
  !*** ./app/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-4-2!./App.css */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!./app/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/App.tsx":
/*!*********************!*\
  !*** ./app/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./app/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FoodTablePage_FoodTablePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FoodTablePage/FoodTablePage */ "./app/components/FoodTablePage/FoodTablePage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/apps/nutrimeal/src/app/App.tsx";





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      children: "Nutrimeal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FoodTablePage_FoodTablePage__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/components/FoodTablePage/FoodTablePage.tsx":
/*!********************************************************!*\
  !*** ./app/components/FoodTablePage/FoodTablePage.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "../../../node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var _SearchFood_SearchFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchFood/SearchFood */ "./app/components/SearchFood/SearchFood.tsx");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./app/firebase.ts");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mui-datatables */ "../../../node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/nutrient-ids */ "./app/constants/nutrient-ids.ts");
/* harmony import */ var _utils_food_table_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/food-table.util */ "./app/utils/food-table.util.ts");
/* harmony import */ var _table_columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-columns */ "./app/components/FoodTablePage/table-columns.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/apps/nutrimeal/src/app/components/FoodTablePage/FoodTablePage.tsx";











const FoodTablePage = () => {
  const foodsRef = _firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('foods');
  const [foodsData] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__["useCollectionData"])(foodsRef, {
    transform: food => {
      return Object(_utils_food_table_util__WEBPACK_IMPORTED_MODULE_6__["transformFood"])(food);
    }
  });

  const onRowSelectionChange = rowsSelected => {
    const selectedFoods = rowsSelected.map(rowIndex => foodsData === null || foodsData === void 0 ? void 0 : foodsData[rowIndex]);
    console.log('selectedFoods ---->', selectedFoods);
    const totalEnergy = calculateTotalEnergy(selectedFoods);
    console.log('totalEnergy ---->', totalEnergy);
    const nutrientsTotals = Object(_utils_food_table_util__WEBPACK_IMPORTED_MODULE_6__["calculateNutrientsTotal"])(selectedFoods);
    console.log('nutrientsTotals ---->', nutrientsTotals);
  };

  const calculateTotalEnergy = foods => {
    return foods.reduce((total, food) => {
      var _food$foodNutrients$N;

      return total + ((_food$foodNutrients$N = food.foodNutrients[_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_5__["NutrientIdMap"].Energy]) === null || _food$foodNutrients$N === void 0 ? void 0 : _food$foodNutrients$N.value);
    }, 0);
  };

  const options = {
    enableNestedDataAccess: '.',
    onPageChange: () => {
      console.log('hi');
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChangeRowsPerPage: () => {},
    onRowSelectionChange: (_currentRowsSelected, _allRowsSelected, rowsSelected) => {
      onRowSelectionChange(rowsSelected);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_SearchFood_SearchFood__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(mui_datatables__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: 'Food nutriments' // @ts-ignore
      ,
      data: foodsData,
      columns: _table_columns__WEBPACK_IMPORTED_MODULE_7__["TABLE_COLUMNS"],
      options: options
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (FoodTablePage);

/***/ }),

/***/ "./app/components/FoodTablePage/table-columns.ts":
/*!*******************************************************!*\
  !*** ./app/components/FoodTablePage/table-columns.ts ***!
  \*******************************************************/
/*! exports provided: TABLE_COLUMNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMNS", function() { return TABLE_COLUMNS; });
/* harmony import */ var _constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/nutrient-ids */ "./app/constants/nutrient-ids.ts");

const TABLE_COLUMNS = [{
  name: 'description',
  label: 'Food',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Energy}.value`,
  label: 'Kcal',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Protein}.value`,
  label: 'Prot.',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Lipid}.value`,
  label: 'Lip.',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Carb}.value`,
  label: 'Carb.',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Alcohol}.value`,
  label: 'Alcohol',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Caffeine}.value`,
  label: 'Caffeine',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Theobromine}.value`,
  label: 'Theobromine',
  options: {
    filter: true,
    sort: true
  }
}, {
  name: `foodNutrients.${_constants_nutrient_ids__WEBPACK_IMPORTED_MODULE_0__["NutrientIdMap"].Fiber}.value`,
  label: 'Fiber',
  options: {
    filter: true,
    sort: true
  }
}];

/***/ }),

/***/ "./app/components/SearchFood/SearchFood.tsx":
/*!**************************************************!*\
  !*** ./app/components/SearchFood/SearchFood.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_fdc_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fdc-api.service */ "./app/services/fdc-api.service.ts");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ "./app/firebase.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/apps/nutrimeal/src/app/components/SearchFood/SearchFood.tsx";






const SearchFood = () => {
  const [searchValue, setSearchValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [foodResults, setFoodResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const foodsRef = _firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('foods');

  const onSubmitFood = async event => {
    event.preventDefault(); // const result = await searchFood(searchValue);

    const result = await Object(_services_fdc_api_service__WEBPACK_IMPORTED_MODULE_1__["searchFoodSpoonacular"])(searchValue);
    console.log(result);
    setFoodResults(result.foods);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
      children: "Search a food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: onSubmitFood,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        value: searchValue,
        onChange: ({
          target
        }) => setSearchValue(target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
          children: "Results"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: // @ts-ignore
          foodResults === null || foodResults === void 0 ? void 0 : foodResults.map(food => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: food.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
              onClick: () => foodsRef.add(food),
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 19
            }, undefined)]
          }, food.fdcId, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchFood);

/***/ }),

/***/ "./app/constants/nutrient-ids.ts":
/*!***************************************!*\
  !*** ./app/constants/nutrient-ids.ts ***!
  \***************************************/
/*! exports provided: NutrientIdMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutrientIdMap", function() { return NutrientIdMap; });
let NutrientIdMap;

(function (NutrientIdMap) {
  NutrientIdMap[NutrientIdMap["Protein"] = 1003] = "Protein";
  NutrientIdMap[NutrientIdMap["Lipid"] = 1004] = "Lipid";
  NutrientIdMap[NutrientIdMap["Carb"] = 1005] = "Carb";
  NutrientIdMap[NutrientIdMap["Energy"] = 1008] = "Energy";
  NutrientIdMap[NutrientIdMap["Water"] = 1051] = "Water";
  NutrientIdMap[NutrientIdMap["Alcohol"] = 1018] = "Alcohol";
  NutrientIdMap[NutrientIdMap["Caffeine"] = 1057] = "Caffeine";
  NutrientIdMap[NutrientIdMap["Theobromine"] = 1058] = "Theobromine";
  NutrientIdMap[NutrientIdMap["Fiber"] = 1079] = "Fiber";
})(NutrientIdMap || (NutrientIdMap = {}));

/***/ }),

/***/ "./app/firebase.ts":
/*!*************************!*\
  !*** ./app/firebase.ts ***!
  \*************************/
/*! exports provided: firestore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "../../../node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "../../../node_modules/firebase/firestore/dist/index.esm.js");


firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp({
  apiKey: "AIzaSyBbarTFnyV5G6shH9bVnDR1IHrEBuRviGU",
  authDomain: "nutrimeal-app.firebaseapp.com",
  projectId: "nutrimeal-app",
  storageBucket: "nutrimeal-app.appspot.com",
  messagingSenderId: "161907521386",
  appId: "1:161907521386:web:533d84de088eb7cb44d713",
  measurementId: "G-5GZKXR6EED"
});
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./app/services/fdc-api.service.ts":
/*!*****************************************!*\
  !*** ./app/services/fdc-api.service.ts ***!
  \*****************************************/
/*! exports provided: searchFood, searchFoodSpoonacular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFood", function() { return searchFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFoodSpoonacular", function() { return searchFoodSpoonacular; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const FDC_API_URL = 'https://api.nal.usda.gov/fdc/v1/foods';
const FDC_API_KEY = Object({"NODE_ENV":"development","NX_CLI_SET":"true","NX_TASK_HASH":"d33f08c198dc6bbe9d9893ebfc1253ae9b34fb3b40b6458c3bae9d9f1f078e4a","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/davidlasry/dev/nutrimeal-nx/nutrimeal","NX_TERMINAL_OUTPUT_PATH":"/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/.cache/nx/terminalOutputs/d33f08c198dc6bbe9d9893ebfc1253ae9b34fb3b40b6458c3bae9d9f1f078e4a","NX_FORWARD_OUTPUT":"true"}).REACT_APP_FDC_API_KEY;
const SPOONACULAR_API_URL = 'https://api.spoonacular.com';
const SPOONACULAR_API_KEY = Object({"NODE_ENV":"development","NX_CLI_SET":"true","NX_TASK_HASH":"d33f08c198dc6bbe9d9893ebfc1253ae9b34fb3b40b6458c3bae9d9f1f078e4a","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/davidlasry/dev/nutrimeal-nx/nutrimeal","NX_TERMINAL_OUTPUT_PATH":"/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/.cache/nx/terminalOutputs/d33f08c198dc6bbe9d9893ebfc1253ae9b34fb3b40b6458c3bae9d9f1f078e4a","NX_FORWARD_OUTPUT":"true"}).REACT_APP_SPOONACULAR_API_KEY;
const searchFood = async (keyword, pageSize = 10) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${FDC_API_URL}/search?query=${keyword}&dataType=Survey (FNDDS)&pageSize=${pageSize}&api_key=${FDC_API_KEY}`);
  return response.data;
};
const searchFoodSpoonacular = async (keyword, pageSize = 10) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${SPOONACULAR_API_URL}/food/ingredients/search?apiKey=${SPOONACULAR_API_KEY}&query=banana`);
  console.log(response);
  return response.data;
};

/***/ }),

/***/ "./app/utils/food-table.util.ts":
/*!**************************************!*\
  !*** ./app/utils/food-table.util.ts ***!
  \**************************************/
/*! exports provided: convertArrayToObject, transformFood, calculateNutrientsTotal, buildTotalsRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArrayToObject", function() { return convertArrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformFood", function() { return transformFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNutrientsTotal", function() { return calculateNutrientsTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTotalsRow", function() { return buildTotalsRow; });
/* harmony import */ var _Users_davidlasry_dev_nutrimeal_nx_nutrimeal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/davidlasry/dev/nutrimeal-nx/nutrimeal/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_davidlasry_dev_nutrimeal_nx_nutrimeal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const convertArrayToObject = (array, keyProperty) => {
  return array.reduce((object, element) => {
    return _objectSpread(_objectSpread({}, object), {}, {
      [element[keyProperty]]: element
    });
  }, {});
};
const transformFood = food => {
  return _objectSpread(_objectSpread({}, food), {}, {
    foodNutrients: convertArrayToObject(food.foodNutrients, 'nutrientId')
  });
};
const calculateNutrientsTotal = foods => {
  return foods.reduce((nutrientsTotals, food) => {
    Object.entries(food.foodNutrients).forEach(([id, nutrient]) => {
      nutrientsTotals[id] = (nutrientsTotals[id] || 0) + nutrient.value;
    });
    return nutrientsTotals;
  }, {});
};
const buildTotalsRow = nutrientTotals => {
  return {
    additionalDescriptions: '',
    allHighlightFields: '',
    commonNames: '',
    dataType: '',
    description: 'Totals',
    fdcId: 0,
    foodCategory: '',
    foodNutrients: nutrientTotals,
    lowercaseDescription: '',
    mostRecentAcquisitionDate: '',
    ndbNumber: 0,
    publishedDate: '',
    scientificName: '',
    score: 0
  };
};

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/App */ "./app/App.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidlasry/dev/nutrimeal-nx/nutrimeal/apps/nutrimeal/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidlasry/dev/nutrimeal-nx/nutrimeal/apps/nutrimeal/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map