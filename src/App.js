import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

const App = () => (
  <div className="App">
    <PokemonPage />
  </div>
)

export default App











//COMPONENT TREE\\

//where we wanna keep state is depending on the hiercht of the outline 

//APP -> PokemonPage -> (Form, Search, Collection)
//Collection -> Card

//OUR STATE, will be on our PokemonPage, we will keep our data of pokemons there. 
//that way we can pass down pokemon info down to Form, Searcg, Collection.

//Form will add our Pokemon.
//Form will wire up the form to add missing pokemon

//Collection will have a lot of cards.
//Collection will create a index displaying pokemon cards

//Card will render each pokemon name, picture, hp. 
//Card will need to flip and display info on front and back of card 

//Search will need to search for pokemon by its name

//Page will also need to search for pokemon by its name
//Page will wire up the form 