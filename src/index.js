// import pokemonTpl from './card.handlebars';

// const cardContainer = document.querySelector(".js-card-container")
// const form = document.querySelector(".js-search-form")



// form.addEventListener("submit", onFormClick)

// function onFormClick(event) {
//     event.preventDefault()
//     const id = event.currentTarget.query.value

//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
//     .then((pokemon) => {
//    let cardMarkup = pokemonTpl(pokemon)
//    cardContainer.innerHTML = cardMarkup
// })
// }

// const url = "https://newsapi.org/v2/everything?q=bitcoin"
// const optionss = {
//     headers:{
//         "X-Api-Key": "6badf61c853b48b49ab0b0fe13b0c3b9"
//     }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(console.log)

const form = document.querySelector(".js-search-form")


function getArticles(query){

let url = `https://newsapi.org/v2/everything?q=${query}`
const options = {
    headers:{
        'X-Api-Key': '39206959-7c7ea883eefaa4f867414a07f'
    }
}

    return fetch(url, options)
    .then(then => then.json())
}

form.addEventListener("submit", onSearchQuery)
function onSearchQuery(event) {
    event.preventDefault()
    const query = event.currentTarget.elements.query.value
    getArticles(query).then(articles => {
        return articles.articles
        })
        .then(articles => {
            console.log(articles[0].source)
        })
    }