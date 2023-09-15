const formEl = document.querySelector(".js-search-form")
const listEl = document.querySelector(".js-img-container")
const btnEl = document.querySelector('[data-action="load-more"]')

function searchImg(query, page=1){
    return fetch(`https://pixabay.com/api/?key=39206959-7c7ea883eefaa4f867414a07f&q=${query}&page=${page}&per_page=20`)
    .then((response) => {response.json()})
    .then((res) => res.hits)
}

formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    const query = event.currentTarget.elements.query.value
    searchImg(query)
    .then((hits) => {console.log(hits)})
}

function createMarkup(articles) {  
    const markup = articlesTpl(articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
}