import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import FrontAuth from '../../lib/Auth'

class PlayerShow extends React.Component {
  state = {
    player: {
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
      skill: '',
      ratings: [],
      ratingAverage: ''
    },
    rating: '',
    results: null
  }

  componentDidMount() {
    const playerId = this.props.match.params.id
    this.getPlayer(playerId)
    this.getLiveStats()
  }

  getPlayer = async (id) => {
    try {
      const player = await axios.get(`/api/players/${id}`)
      const rating = player.data.ratings.length === 0 ? '' : player.data.ratings.filter(rating => rating.user === FrontAuth.getPayload().sub)[0].rating
      this.setState({ player, rating })
    } catch (err) {
      console.log(err)
    }
  }

  getLiveStats = async () => {
    try {
      const dataReceived = await axios.get('https://www.scorebat.com/api/competition/3/england-premier-league/?_=1580764529164&sf=1')
      const results = dataReceived.data.response.results.filter(element => element.s1 === this.state.player.data.team || element.s2 === this.state.player.data.team)
      this.setState({ results })
    } catch (err) {
      console.log(err)
    } finally {
      const dataReceived = await axios.get('https://www.scorebat.com/api/competition/3/england-premier-league/?_=1580764529164&sf=1')
      const results = dataReceived.data.response.results.filter(element => element.s1 === this.state.player.data.team || element.s2 === this.state.player.data.team)
      this.setState({ results })
    }
  }

  getDate = (date) => {
    let dateObject = null
    typeof date === 'number' ? dateObject = new Date(date * 1000) : dateObject = new Date(Date.parse(date))
    const day = dateObject.getDate()
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject)
    const year = dateObject.getYear() + 1900
    return `${day} ${month} ${year}`
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

  isOwner = () => Auth.getPayload().sub === this.state.player.data.user._id

  handleDelete = async () => {
    const playerId = this.props.match.params.id
    try {
      await axios.delete(`/api/players/${playerId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/players')
    } catch (err) {
      this.props.history.push('/')
    }
  }

  handleChange = async ({ target: { value } }) => {
    const rating = value
    this.setState({ rating })
    this.submitRating(rating)
  }

  submitRating = async (rating) => {
    const playerId = this.props.match.params.id
    try {
      await axios.post(`/api/players/${playerId}/rating`, { rating }, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.getPlayer(playerId)
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }
  
  render() {
    if (!this.state.player) return null
    if (!this.state.results) return null
    console.log(this.state)
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Player info</h2>
        </div>

        <div className="show-page-container">

          <div className="show-page-top" id={this.teamObject[this.state.player.data.team].color1}>
            <div className="show-page-image">
              <img src={this.state.player.data.image} alt={this.state.player.data.team} />
            </div>
            <div className="show-page-name-rating">
              <h2>{this.state.player.data.name}</h2>
              <div className="show-page-rating">
                {/* <h3>{this.state.player.data.position}</h3> */}
                <div className="show-page-average-rating-container">
                  <h3>Star Rating:</h3>
                  <div className="show-page-star-container">
                    <h3 className="show-page-star">⭐️</h3>
                    <h3 className="show-page-average-rating">{this.state.player.data.ratingAverage}</h3>
                  </div>
                </div>
                <div className="your-rating">
                  <h3>Your Rating</h3>
                  <div className="show-page-rating-input">
                    <form className="show-page-rating-input">
                      <input
                        name="rating" 
                        value="1"
                        id="1"
                        className="radio-button-rating"
                        type="radio"
                        onChange={this.handleChange}
                        checked={this.state.rating === 1}
                      />
                      <label className="position-label-rating" htmlFor="1">  
                        {this.state.rating >= 1 && '⭐️'}
                        {(!this.state.rating || this.state.rating < 1) && '☆'}
                      </label>
                    </form>
                    <form className="show-page-rating-input">
                      <input 
                        name="rating" 
                        value="2"
                        id="2"
                        className="radio-button-rating"
                        type="radio" 
                        onChange={this.handleChange}
                        checked={this.state.rating === 2}
                      />
                      <label className="position-label-rating" htmlFor="2">  
                        {this.state.rating >= 2 && '⭐️'}
                        {(!this.state.rating || this.state.rating < 2) && '☆'}
                      </label>
                    </form>
                    <form className="show-page-rating-input">
                      <input 
                        name="rating" 
                        value="3"
                        id="3"
                        className="radio-button-rating"
                        type="radio" 
                        onChange={this.handleChange}
                        checked={this.state.rating === 3}
                      />
                      <label className="position-label-rating" htmlFor="3">  
                        {this.state.rating >= 3 && '⭐️'}
                        {(!this.state.rating || this.state.rating < 3) && '☆'}
                      </label>
                    </form>
                    <form className="show-page-rating-input">
                      <input 
                        name="rating" 
                        value="4"
                        id="4"
                        className="radio-button-rating"
                        type="radio" 
                        onChange={this.handleChange}
                        checked={this.state.rating === 4}
                      />
                      <label className="position-label-rating" htmlFor="4">  
                        {this.state.rating >= 4 && '⭐️'}
                        {(!this.state.rating || this.state.rating < 4) && '☆'}
                      </label>
                    </form>
                    <form className="show-page-rating-input">
                      <input 
                        name="rating" 
                        value="5"
                        id="5"
                        className="radio-button-rating"
                        type="radio"
                        onChange={this.handleChange}
                        checked={this.state.rating === 5}
                      />
                      <label className="position-label-rating" htmlFor="5">  
                        {this.state.rating >= 5 && '⭐️'}
                        {(!this.state.rating || this.state.rating < 5) && '☆'}
                      </label>
                    </form>
                  </div>
                  
                </div>

              </div>
            </div>
            <div className="show-page-buttons">
              {this.isOwner() && 
                <>
                  <Link to={`/players/${this.state.player.data._id}/edit`}>
                    <button className="radio-button">Edit Player</button>
                  </Link>
                  <button className="radio-button" onClick={this.handleDelete}>Delete Player</button>
                </>
              }
            </div>
            <div className="show-page-number">
              <h2>{this.state.player.data.squadNumber}</h2>
            </div>
          </div>

          <div className="show-page-bottom">
            <div className="show-page-left">
              <div className="show-page-header">
                <h4>Personal Details</h4>
              </div>
              <div className="show-page-stats">
                <h5>Club</h5><h5>{this.state.player.data.team}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Position</h5><h5>{this.state.player.data.position}</h5>
              </div>
              <div className="show-page-stats">
                <h5>DOB</h5><h5>{this.getDate(this.state.player.data.dob)}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Nationality</h5><h5>{this.state.player.data.nationality}</h5>
              </div>
            </div>

            <div className="show-page-middle">
              <div className="show-page-header">
                <h4>Attributes</h4>
              </div>
              <div className="show-page-stats">
                <h5>Age</h5><h5>{this.getAge(this.state.player.data.dob)}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Height</h5><h5 id="lowercase">{this.state.player.data.height} cm</h5>
              </div>
              <div className="show-page-stats">
                <h5>Attack</h5><h5>{this.state.player.data.attack}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Defence</h5><h5>{this.state.player.data.defence}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Power</h5><h5>{this.state.player.data.power}</h5>
              </div>
              <div className="show-page-stats">
                <h5>Skill</h5><h5>{this.state.player.data.skill}</h5>
              </div>
            </div>

            <div className="show-page-right">
              <div className="show-page-header">
                <h4>Recent Results</h4>
              </div>
              {this.state.results.map(result => (
                <div className="show-page-results" key={result.id}>
                  <div className="result-date">
                    <h5 id="not-bold">{this.getDate(result.dt)}</h5>
                  </div>
                  <div className="result">
                    <h5 className="result-team1">{this.teamObject[this.state.results[0].s1].teamCode}</h5><h5 className="result-score">{result.sc1}</h5><h5 className="result-score">{result.sc2}</h5><h5 className="result-team2">{this.teamObject[this.state.results[0].s2].teamCode}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </>
    )

  }
}

export default PlayerShow