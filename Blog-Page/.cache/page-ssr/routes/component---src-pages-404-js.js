"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/sarahmendez/Local/clone/Gatsby-Blog/Blog-Page/node_modules/react/index.js"
var index_js_ = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(533);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=({siteTitle})=>/*#__PURE__*/index_js_.createElement("header",{style:{background:`#b990db`,marginBottom:`1.45rem`}},/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:960,padding:`1.45rem .2rem`}},/*#__PURE__*/index_js_.createElement("h1",{style:{margin:0,fontFamily:`font-family: Arial, Helvetica, sans-serif`,fontSize:`3rem`}},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{className:"header-title",to:"/",style:{color:`white`,textDecoration:`none`}},siteTitle))));Header.propTypes={siteTitle:(prop_types_default()).string};Header.defaultProps={siteTitle:``};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/index_js_.createElement("div",{className:"main-blog-posts"},/*#__PURE__*/index_js_.createElement("main",null,children)),/*#__PURE__*/index_js_.createElement("footer",null,"\xA9 ",new Date().getFullYear(),", Built with",` `,/*#__PURE__*/index_js_.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(651);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"404: Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You just hit a route that doesn't exist... the sadness."));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map