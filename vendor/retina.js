/*!
 * Retina.js v2.1.1
 *
 * Copyright 2016 Axial, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(t,e){if("function"==typeof define&&define.amd)define(["exports"],e);else if("undefined"!=typeof exports)e(exports);else{var n={exports:{}};e(n.exports),t.retina=n.exports}}(this,function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){var e=parseInt(t,10);return c<e?c:e}function r(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}function i(t,e){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",function(){"img"===n?r(t).setAttribute("src",e):t.style.backgroundImage="url("+e+")"}),i.setAttribute("src",e),t.setAttribute(g,!0)}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=n(r);if(e&&o>1){var u=e.replace(l,"@"+o+"x$1");i(t,u)}}function u(t,e,n){c>1&&i(t,n)}function a(t){return t?"function"==typeof t.forEach?t:e(t):"undefined"!=typeof document?e(document.querySelectorAll(h)):[]}function f(t){return t.style.backgroundImage.replace(p,"$2")}function s(t){a(t).forEach(function(t){if(!t.getAttribute(g)){var e="img"===t.nodeName.toLowerCase(),n=e?t.getAttribute("src"):f(t),r=t.getAttribute("data-rjs"),i=!isNaN(parseInt(r,10));if(null===r)return;i?o(t,n,r):u(t,n,r)}})}Object.defineProperty(t,"__esModule",{value:!0});var d="undefined"!=typeof window,c=Math.round(d?window.devicePixelRatio||1:1),l=/(\.[A-z]{3,4}\/?(\?.*)?)$/,p=/url\(('|")?([^\)'"]+)('|")?\)/i,h="[data-rjs]",g="data-rjs-processed";d&&(window.addEventListener("load",function(){s()}),window.retinajs=s),t["default"]=s});
