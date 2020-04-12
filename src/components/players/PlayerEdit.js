import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class PlayerEdit extends React.Component {
  state = {
    playersData: null,
    playerData: {
      name: '',
      position: '',
      squadNumber: '',
      image: '',
      team: '',
      dob: '',
      height: '',
      attack: '',
      defence: '',
      power: '',
      skill: ''
    },
    errors: {}
  }

  componentDidMount() {
    const playerId = this.props.match.params.id
    this.getPlayer(playerId)
    this.getPlayers()
  }

  getPlayer = async (id) => {
    try {
      const res = await axios.get(`/api/players/${id}`)
      const playerData = res.data
      this.setState({ playerData })
    } catch (err) {
      console.log(err)
    } finally {
      const res = await axios.get(`/api/players/${id}`)
      const playerData = res.data
      this.setState({ playerData })
    }
  }

  getPlayers = async() => {
    try {
      const players = await axios.get('/api/players')
      const playersData = players.data.sort(this.compare)
      this.setState({ playersData })
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

  handleChange = ({ target: { name, value } }) => {
    const playerData = { ...this.state.playerData, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ playerData, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const playerId = this.props.match.params.id
    try {
      const res = await axios.put(`/api/players/${playerId}`, this.state.playerData, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/players/${res.data._id}`)
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  getAge = (DOB) => {
    if (!DOB) {
      return null
    } else {
      const today = new Date()
      const birthDate = new Date(DOB)
      let age = today.getFullYear() - birthDate.getFullYear()
      const month = today.getMonth() - birthDate.getMonth()
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1
      }
      return age
    }
  }

  teamObject = {
    'Arsenal': {
      teamCode: 'ARS',
      color1: 'red',
      color2: 'white2'
    },
    'Aston Villa': {
      teamCode: 'AST',
      color1: 'maroon',
      color2: 'white2'
    },
    'Bournemouth': {
      teamCode: 'BOU',
      color1: 'red',
      color2: 'white2'
    },
    'Brighton': {
      teamCode: 'BRI',
      color1: 'blue',
      color2: 'white2'
    },
    'Burnley': {
      teamCode: 'BUR',
      color1: 'maroon',
      color2: 'white2'
    },
    'Chelsea': {
      teamCode: 'CHE',
      color1: 'blue',
      color2: 'white2'
    },
    'Crystal Palace': {
      teamCode: 'CRY',
      color1: 'red',
      color2: 'white2'
    },
    'Everton': {
      teamCode: 'EVE',
      color1: 'blue',
      color2: 'white2'
    },
    'Liverpool': {
      teamCode: 'LIV',
      color1: 'red',
      color2: 'white2'
    },
    'Leicester City': {
      teamCode: 'LEI',
      color1: 'blue',
      color2: 'white2'
    },
    'Manchester City': {
      teamCode: 'MNC',
      color1: 'skyblue',
      color2: 'black2'
    },
    'Manchester United': {
      teamCode: 'MNU',
      color1: 'red',
      color2: 'white2'
    },
    'Newcastle United': {
      teamCode: 'ARS',
      color1: 'black',
      color2: 'white2'
    },
    'Norwich City': {
      teamCode: 'NOW',
      color1: 'yellow',
      color2: 'black2'
    },
    'Sheffield United': {
      teamCode: 'SHE',
      color1: 'red',
      color2: 'white2'
    },
    'Southampton': {
      teamCode: 'SOU',
      color1: 'red',
      color2: 'white2'
    },
    'Tottenham Hotspur': {
      teamCode: 'TOT',
      color1: 'navyblue',
      color2: 'black2'
    },
    'Watford': {
      teamCode: 'WAT',
      color1: 'yellow',
      color2: 'black2'
    },
    'West Ham United': {
      teamCode: 'WHU',
      color1: 'maroon',
      color2: 'white2'
    },
    'Wolves': {
      teamCode: 'WOL',
      color1: 'orange',
      color2: 'black2'
    }
  }

  render() {
    if (!this.state.playerData) return null
    if (!this.state.playersData) return null
    return (
      <>

        <div className="page-title">
          <h2 id="white-text">Edit player</h2>
        </div>

        <form className="create-page-body" onSubmit={this.handleSubmit}>

          <section className="create-player-card">
            <div className="player-card-outer" id={this.teamObject[this.state.playerData.team].color1}>
              <div className="player-card">  
                <div className="card-header">
                  <h3><input name="name" className="card-header" placeholder="Player Name" id="create-header" onChange={this.handleChange} value={this.state.playerData.name}/></h3>
                </div>
                <div className="card-image">
                  <img src={this.state.playerData.image}/>
                </div>
                <div className="player-stats">
                  <div className="stats-row">
                    <div className="stats-row-inner">
                      <h5 className="attribute-key-left">Age</h5>
                      <h5 className="attribute-value">{this.getAge(this.state.playerData.dob)}</h5>
                    </div>
                    <div className="stats-row-inner">
                      <input className="attribute-value-create" name="height" onChange={this.handleChange}  value={this.state.playerData.height}/>
                      <h5 className="attribute-key-right">Height</h5>
                    </div>
                  </div>
                  <div className="stats-row">
                    <div className="stats-row-inner">
                      <h5 className="attribute-key-left">Attack</h5>
                      <input className="attribute-value-create" name="attack" onChange={this.handleChange}  value={this.state.playerData.attack}/>
                    </div>
                    <div className="stats-row-inner">
                      <input className="attribute-value-create" name="defence" onChange={this.handleChange}  value={this.state.playerData.defence}/>
                      <h5 className="attribute-key-right">Defence</h5>
                    </div>
                  </div>
                  <div className="stats-row">
                    <div className="stats-row-inner">
                      <h5 className="attribute-key-left">Power</h5>
                      <input className="attribute-value-create" name="power" onChange={this.handleChange} value={this.state.playerData.power}/>
                    </div>
                    <div className="stats-row-inner">
                      <input className="attribute-value-create" name="skill" onChange={this.handleChange} value={this.state.playerData.skill}/>
                      <h5 className="attribute-key-right">Skill</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="create-extra-fields">
            <div className="create-form">
              <div className="create-field">
                <label className="label">Current Club</label>
                {this.state.playersData
                  ?
                  <select name="team" className="create-dropdown" onChange={this.handleChange} value={this.state.playerData.team}> 
                    <option disabled value="">Choose Club</option>
                    {this.state.playersData.map(player => (
                      <option key={player._id} value={player.team}>{player.team}</option>
                    ))}
                  </select>
                  :
                  <div></div>
                }
              </div>
        
              <div className="create-field">
                <label className="label">Position</label>
                <div className="position-options">
                  <input
                    name="position" 
                    value="Defender"
                    id="defender"
                    className="radio-button"
                    type="radio" 
                    onChange={this.handleChange}
                    checked={this.state.playerData.position === 'Defender'}
                  />
                  <label className="position-label" htmlFor="defender">  
                      Defender
                  </label>
                  <input 
                    name="position" 
                    value="Midfielder"
                    id="midfielder"
                    className="radio-button"
                    type="radio" 
                    onChange={this.handleChange}
                    checked={this.state.playerData.position === 'Midfielder'}
                  />
                  <label className="position-label" htmlFor="midfielder">  
                      Midfielder
                  </label>
                  <input 
                    name="position" 
                    value="Forward"
                    id="forward"
                    className="radio-button"
                    type="radio" 
                    onChange={this.handleChange}
                    checked={this.state.playerData.position === 'Forward'}
                  />
                  <label className="position-label" htmlFor="forward">  
                      Forward
                  </label>
                </div>

              </div>

              <div className="create-field">
                <label className="label">Squad Number</label>
                <input
                  className="create-input"
                  name="squadNumber"
                  type="number"
                  placeholder="Squad Number"
                  onChange={this.handleChange}
                  value={this.state.playerData.squadNumber}
                />
                {this.state.errors.squadNumber && <small>{this.state.errors.squadNumber}</small>}
              </div>

              <div className="create-field">
                <label className="label">Date Of Birth</label>
                <input
                  className="create-input"
                  type="date"
                  name="dob"
                  value={this.state.playerData.dob}
                  onChange={this.handleChange}
                />
                {this.state.errors.dob && <small>{this.state.errors.dob}</small>}
              </div>

              <div className="create-field">
                <label className="label">Image URL</label>
                <input
                  className="create-input"
                  name="image"
                  placeholder="Image URL"
                  // value={this.state.playerData.image}
                  onChange={this.handleChange}
                />
                {this.state.errors.image && <small>{this.state.errors.image}</small>}
              </div>

              <div className="button-field">
                <button type="submit">submit</button>
              </div>

            </div>
          </section>

        </form>

      </>
    )
  }
}

export default PlayerEdit