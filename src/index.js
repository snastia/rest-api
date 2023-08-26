import pokemonTpl from './card.handlebars';

const cardContainer = document.querySelector(".js-card-container")
const form = document.querySelector(".js-search-form")



form.addEventListener("submit", onFormClick)

function onFormClick(event) {
    event.preventDefault()
    const id = event.currentTarget.query.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
    .then((pokemon) => {
   let cardMarkup = pokemonTpl(pokemon)
   cardContainer.innerHTML = cardMarkup
})
}