document.querySelector(".js-search-form").addEventListener("submit",(function(e){e.preventDefault();(function(e){return fetch(`https://newsapi.org/v2/everything?q=${e}`,{headers:{"X-Api-Key":"39206959-7c7ea883eefaa4f867414a07f"}}).then((e=>e.json()))})(e.currentTarget.elements.query.value).then((e=>e.articles)).then((e=>{console.log(e[0].source)}))}));
//# sourceMappingURL=index.df26b480.js.map
