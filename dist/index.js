parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(n){t(e,n,r[n])})}return e}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function t(r){n(this,t),this.hasMark=!1,this.option=e({},r,{id:"waterMark",fontSize:14,fontFamily:"Arial",color:"#959494",rotate:30,userName:this.getUserName()}),this.handleCreateListener(),this.hackPrint()}return a(t,[{key:"getUserName",value:function(){var e=document.cookie.split(";"),t=void 0;return e.forEach(function(e){-1!==e.replace(" ","").indexOf("user_name")&&(t=e.replace(" ","").replace("user_name=",""))}),t||"noCookie"}},{key:"handleCheckDom",value:function(){var e=this.option.id;return document.querySelector(e)}},{key:"handleCreateCanvas",value:function(){var e=this.option,t=e.color,n=e.fontSize,r=e.fontFamily,a=e.rotate,o=e.userName,i=document.createElement("canvas"),l=i.getContext("2d");return i.width=100,i.height=100,l.font="".concat(n,"px ").concat(r),l.fillStyle=t,l.globalAlpha=.65,l.translate(-Math.floor(50),Math.floor(50)),l.rotate(-a/180*Math.PI),l.fillText(o,Math.floor(50),Math.floor(50)),i}},{key:"handleCreateBgUrl",value:function(){return this.handleCreateCanvas().toDataURL()}},{key:"handleCreateDom",value:function(){if(!this.handleCheckDom()){var e=this.handleCreateBgUrl(),t=document.createElement("div"),n="\n        position: fixed;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 999;\n        pointerEvents: none;\n        background-repeat: repeat;\n        background-image: url('".concat(e,"');\n      ");this.waterMarkStyle=n,t.style=n,t.id=this.option.id,document.body.appendChild(t)}}},{key:"handleObserverDom",value:function(){var e=this;if(window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver){var t=new MutationObserver(function(){var n=document.querySelector(e.option.id);(!n||n&&n.style!==e.waterMarkStyle)&&(t.disconnect(),t=null,e.handleCreateDom())});t.observe(document.body,{attributes:!0,childList:!0,subtree:!0})}}},{key:"handleCreateListener",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(){e.handleCreateDom()}),window.addEventListener("hashChange",function(){e.handleCreateDom()})}},{key:"hackPrint",value:function(){var e=document.createElement("style");e.type="text/css",e.innerHTML="@media print{ #waterMark : { display: none }}",document.head.appendChild(e)}}]),t}(),i=o;exports.default=i;
},{}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map