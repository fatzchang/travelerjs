var traveler=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={trim:function(t){return t.toString().replace(/\/+$/,"").replace(/^\/+/,"")}};var o=class{constructor(t,e){const r=n.trim(t);this.parts=r.split("/"),"function"==typeof e&&(this.act=e)}decide(t){const e=t.split("/"),r=[];if(e.length!==this.parts.length)return!1;for(let t=0;t<e.length;t+=1){const n=/^@/.test(this.parts[t]);if(!n&&e[t]!==this.parts[t])return!1;n&&r.push(e[t])}return"function"==typeof this.act&&this.act(...r),!0}};r.d(e,"Traveler",function(){return i}),r.d(e,"Route",function(){return o});class i{constructor(){this.routes=[],this.root="/",this.mode=window.history.pushState?"history":"hash",window.addEventListener("popstate",this.listen.bind(this))}listen(){let t=this.current();"hash"===this.mode&&(t=t.replace("#","")),this.notify(t)}current(){let t="";return t=(t=n.trim(decodeURI(window.location.pathname+window.location.hash))).replace(/\?(.*)$/,""),t="/"!==this.root?t.replace(n.trim(this.root),""):t,n.trim(t)}notify(t){for(let e=0;e<this.routes.length;e+=1)if(this.routes[e].decide(t))return!0;return!1}register(t){return t instanceof o&&(this.routes.push(t),!0)}go(t,e){const r=n.trim(t);let o=this.root+r;"hash"===this.mode&&(o=`${n.trim(this.root)}#${r}`),e?window.history.replaceState(null,null,o):window.history.pushState(null,null,o),this.listen()}setRoot(t){this.root="/","string"==typeof t&&""!==t&&(this.root=`/${n.trim(t)}/`)}}}]);