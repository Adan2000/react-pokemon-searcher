import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  



  render() {

    const { name, hp, sprites} = this.props.poke
    //we deconstructed the poke props that we recieved.

    //we set a onClick to change our state from true or false.
    
    return (
      <Card>
        <div onClick={()=> this.setState({ front: !this.state.front })}>
          <div className="image">
            {this.state.front ? 
            <img src={sprites.front} alt="oh no!"/> :
            <img src={sprites.back} alt="oh no!"/>
            }
          </div>
          <div className="content">
            <div className="header"> {this.props.poke.name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
