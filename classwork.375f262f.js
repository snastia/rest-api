!function(){var e={headers:{"X-Api-Key":"6badf61c853b48b49ab0b0fe13b0c3b9"}};function n(n){return fetch("".concat("https://newsapi.org/v2/","everything?q=").concat(n,"&pageSize=10&page=1"),e).then((function(e){return e.json()}))}var t="",r=document.querySelector(".js-search-form"),c=document.querySelector("[data-action='load-more']");r.addEventListener("submit",(function(e){e.preventDefault(),n(t=e.currentTarget.elements.query.value).then((function(e){return console.log(e)}))})),c.addEventListener("click",(function(){n(t)}))}();
//# sourceMappingURL=classwork.375f262f.js.map
