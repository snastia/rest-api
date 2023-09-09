const BASE_URL = "https://newsapi.org/v2/"

const options = {
    headers:{
        "X-Api-Key": "6badf61c853b48b49ab0b0fe13b0c3b9"
    }
}

function fetchArticles(searchQuery) {
    return fetch(`${BASE_URL}everything?q=${searchQuery}&pageSize=10&page=1`, options)
    .then(response => response.json())
}

let key = ""

// fetchArticles("cat").then(data => console.log(data))

const formEl = document.querySelector(".js-search-form")
const buttonEl = document.querySelector("[data-action='load-more']")

formEl.addEventListener("submit", onFormButtonClick)

function onFormButtonClick(event) {
    event.preventDefault()

    key = event.currentTarget.elements.query.value

    fetchArticles(key)
    .then((articles) => console.log(articles))
}

buttonEl.addEventListener("click", onLoadMoreButtonClick)

function onLoadMoreButtonClick(){
  fetchArticles(key)
}

function createMarkup(articles) {  
    const markup = articlesTpl(articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
}