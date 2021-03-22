import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [], 
    filteredPokemon: [] 
  }
 

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeArray => this.setState({ pokemon: pokeArray, filteredPokemon: pokeArray }))
  }
  //we use a fetch in our componentDidMount function 
  //and we pass that data to our state


  search = (e) => {
    let filteredArray 
    e.target.value.length ? 
    filteredArray = this.state.filteredPokemon(poke => poke.name.includes(e.target.value)):  
    filteredArray = this.state.pokemon
    this.setState({ filteredPokemon: filteredArray })
  } 


  submitNew = (e, pokeData) => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = pokeData
    const newPoke = {
      name,
      hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    e.target.reset()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', 
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPoke)
    })
    .then(res => res.json())
    .then(newPoke => {
      this.setState({ pokemon: [newPoke, ...this.state.pokemon] })
      filteredPokemon: [newPoke, ...this.state.]
    })
  }




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitNew={this.submitNew}/>
        <br />
        <Search search={this.search}/>
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
//we pass down our state of pokemon to our Collection component.







//the container is just a built in styling, 
//so we dont have to include that component in our outline

