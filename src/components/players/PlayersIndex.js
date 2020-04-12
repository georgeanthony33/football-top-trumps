import React from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'

class PlayersIndex extends React.Component {
  state = {
    players: null
  }

  componentDidMount() {
    this.getPlayers()
    // this.getFantasyLeague()
  }

  getPlayers = async() => {
    try {
      const players = await axios.get('/api/players')
      const playerData = players.data
    
      playerData.sort(this.compare)
    
      this.setState({ players: playerData })
    } catch (err) {
      console.log(err)
    }
  }

  compare = (a, b) => {
    const teamA = a.team.toUpperCase()
    const teamB = b.team.toUpperCase()
  
    let comparison = 0
    if (teamA > teamB) {
      comparison = 1
    } else if (teamA < teamB) {
      comparison = -1
    }
    return comparison
  }

  // getFantasyLeague = async() => {
  //   try {
  //     const ff = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
  //     console.log(ff)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    console.log(this.state.players ? this.state.players : '')
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Players</h2>
        </div>
        <section className="players">
          {this.state.players
            ?
            this.state.players.map(player => (
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