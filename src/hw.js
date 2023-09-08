import debounce from "lodash.debounce"
import {fetchCountries} from "./fetchCountries"

const box = document.querySelector(".js-box")
const list = document.querySelector(".list")
const input = document.querySelector(".input")

input.addEventListener("input", debounce(onSearchQuery, 2000))

function onSearchQuery(event){
    fetchCountries(event.target.value)
    .then((countries) => {
        if (countries.length === 1) {
           const markup = `
           <h1></h1>
           <p>Capital: ${countries.capital}</p>
           <p>Population: ${countries.population}</p>
           <p>Languages: ${countries.languages}</p>
           <ul>
               <li></li>
               <li></li>
               <li></li>
           </ul>
           <img src="" alt="" >
           `
           div.innerHTML = markup

        } else if(countries.length >= 2 && countries.length <= 10){
           const listCountries = countries.map((country) => {
              return `<li>${country.name.common}</li>`
           }).join(" ")
           list.innerHTML = listCountries
        } else {
            alert("занадто багато результату")
        }
    })
}