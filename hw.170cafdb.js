function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=l||a||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=r.test(t);return e||u.test(t)?f(t.slice(2),e?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var i,o,r,u,f,l,a=0,c=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=i,r=o;return i=o=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,f=setTimeout(T,n),c?g(t):u}function j(t){var e=t-l;return void 0===l||e>=n||e<0||s&&t-a>=r}function T(){var t=v();if(j(t))return $(t);f=setTimeout(T,function(t){var e=n-(t-l);return s?d(e,r-(t-a)):e}(t))}function $(t){return f=void 0,b&&i?g(t):(i=o=void 0,u)}function w(){var t=v(),e=j(t);if(i=arguments,o=this,l=t,e){if(void 0===f)return h(l);if(s)return f=setTimeout(T,n),g(l)}return void 0===f&&(f=setTimeout(T,n)),u}return n=y(n)||0,m(e)&&(c=!!e.leading,r=(s="maxWait"in e)?p(y(e.maxWait)||0,n):r,b="trailing"in e?!!e.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:$(v())},w};document.querySelector(".js-box");const b=document.querySelector(".list");document.querySelector(".input").addEventListener("input",t(n)((function(t){(n=t.target.value,fetch(`https://restcountries.com/v3.1/name/${n}`).then((t=>t.json()))).then((t=>{if(1===t.length){const n=`\n           <h1></h1>\n           <p>Capital: ${t.capital}</p>\n           <p>Population: ${t.population}</p>\n           <p>Languages: ${t.languages}</p>\n           <ul>\n               <li></li>\n               <li></li>\n               <li></li>\n           </ul>\n           <img src="" alt="" >\n           `;div.innerHTML=n}else if(t.length>=2&&t.length<=10){const n=t.map((t=>`<li>${t.name.common}</li>`)).join(" ");b.innerHTML=n}else alert("занадто багато результату")}));var n}),2e3));
//# sourceMappingURL=hw.170cafdb.js.map
