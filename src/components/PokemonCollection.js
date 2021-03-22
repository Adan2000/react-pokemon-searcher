import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    return this.props.pokemon.map(poke => <PokemonCard poke={poke} key={poke.id}/>)
  }
  //we map over the pokemon array state 
  //that was passed by 
  //we then pass that down to our PokemonCard


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection










//This Component has another component, which is is Card


