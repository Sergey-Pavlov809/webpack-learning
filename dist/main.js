!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";t.__esModule=!0,t.Router=void 0;var r=n(9),i=n(12),o=function(){function e(){this.opth=window.location.search.substr(1)}return e.prototype.build=function(e){"/view"==window.location.pathname?this.main=new i.View:this.main=new r.Gallery,this.main.build(e),this.main.setViewParams(this.opth)},e.prototype.setViewParams=function(){},e.prototype.destroy=function(){this.main.destroy()},e}();t.Router=o},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/21c178a9ad6253cb6eb963d696c85710.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/6cd4be592115793efba6234f4d4b7018.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/7c673561741b90c893aa31ecfc174e4d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/041c036d3c2330c23067e6f60512534d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/052f7064ff6d30654e1a855ee2d0a883.jpg"},function(e,t,n){var r=n(10),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=new r.Router;i.build(i),window.addEventListener("popstate",(function(){i.destroy(),(i=new r.Router).build(i)}))},function(e,t,n){"use strict";t.__esModule=!0,t.Gallery=void 0;var r=n(0),i=n(1),o=n(2),a=n(3),c=n(4),u=n(5),s=(n(6),[]);s.push(i.default),s.push(o.default),s.push(a.default),s.push(c.default),s.push(u.default);var d=document.getElementById("gallery"),l=[],f=function(){function e(){this.mainImg=document.createElement("img"),this.divMainImg=document.createElement("div")}return e.prototype.build=function(e){this.divMainImg.setAttribute("align","center"),d.appendChild(this.divMainImg),this.divMainImg.appendChild(this.mainImg),this.mainImg.classList.add("main-img");var t=document.createElement("div");d.appendChild(t),t.setAttribute("id","preview"),t.setAttribute("class","preview");for(var n=function(n){i.createImg(n),t.appendChild(l[n]),l[n].onclick=function(){history.pushState({},"hello","/gallery?"+n),e.destroy(),(e=new r.Router).build(e)}},i=this,o=0;o<s.length;o++)n(o)},e.prototype.setViewParams=function(e){e>l.length||""==e?(window.location.href="gallery?0",this.mainImg.setAttribute("src",s[0])):this.mainImg.setAttribute("src",s[e]),this.mainImg.onclick=function(){window.location.href="view?"+e},this.checkBorder(),this.funcBorder(e)},e.prototype.destroy=function(){this.mainImg.parentNode.removeChild(this.mainImg)},e.prototype.createImg=function(e){var t=document.createElement("img");t.setAttribute("src",s[e]),t.classList.add("preview-img"),l.push(t)},e.prototype.funcBorder=function(e){l[e].style.border="3px solid #BDB76B"},e.prototype.checkBorder=function(){for(var e=0;e<l.length;e++)(l[e].style.border="3px solid #BDB76B")&&(l[e].style.border="none")},e}();t.Gallery=f},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],s=n[u]||0,d="".concat(u," ").concat(s);n[u]=s+1;var l=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=s(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=u(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){"use strict";n.r(t);var r=n(7),i=n.n(r)()(!1);i.push([e.i,"body{\r\n\toverflow: hidden;\r\n\tmargin: 0;\r\n}\r\n\r\n#gallery{\r\n\twidth:100%;\r\n\theight:100vh;\r\n}\r\n\r\n\r\n.preview-img{\r\n\tbox-sizing: border-box;\r\n\twidth:150px;\r\n\theight:150px;\r\n\tbottom: 0;\r\n}\r\n\r\n.full-img{\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n\r\n.preview{\r\n\tdisplay: flex;\r\n  \talign-items: center;\r\n  \tjustify-content: center\r\n}",""]),t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.View=void 0;var r=n(1),i=n(2),o=n(3),a=n(4),c=n(5),u=(n(6),[]);u.push(r.default),u.push(i.default),u.push(o.default),u.push(a.default),u.push(c.default);var s=document.getElementById("gallery"),d=function(){function e(){this.divMainImg=document.createElement("div")}return e.prototype.build=function(){this.divMainImg.setAttribute("align","center"),s.appendChild(this.divMainImg)},e.prototype.setViewParams=function(e,t){var n=document.createElement("img");this.divMainImg.appendChild(n),n.classList.add("full-img"),e>u.length-1||""==e?(window.location.href="view?0",n.setAttribute("src",u[0])):n.setAttribute("src",u[e]),n.onclick=function(){window.location.href="gallery?"+e}},e.prototype.destroy=function(){},e}();t.View=d}]);