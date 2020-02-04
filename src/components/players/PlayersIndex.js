import React from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'

class PlayersIndex extends React.Component {
  state = {
    players: null
  }

  componentDidMount() {
    this.getPlayers()
  }

  getPlayers = async() => {
    try {
      const players = await axios.get('/api/players')
      this.setState({ players })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Players</h2>
        </div>
        <section className="players">
          {this.state.players
            ?
            this.state.players.data.map(player => (
              <PlayerCard key={player._id} {...player}/>
            ))
            :
            <div></div>
          }
        </section>
      </>
    )
  }
}

export default PlayersIndex