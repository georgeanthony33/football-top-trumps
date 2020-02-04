import React from 'react'
import axios from 'axios'
// import MapGL, { Marker } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'

class PlayerShow extends React.Component {
  state = {
    player: null,
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
      this.setState({ player })
    } catch (err) {
      console.log(err)
    }
  }

  getLiveStats = async () => {
    try {
      const dataReceived = await axios.get('https://www.scorebat.com/api/competition/3/england-premier-league/?_=1580764529164&sf=1')
      const results = dataReceived.data.response.results.filter(element => element.s1 === this.state.player.data.team || element.s2 === this.state.player.data.team)
      this.setState({ results })
      console.log(results)
    } catch (err) {
      console.log(err)
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

  getTeamCode = {
    'Arsenal': 'ARS',
    'Aston Villa': 'AST',
    'Bournemouth': 'BOU',
    'Brighton': 'BRI',
    'Burnley': 'BUR',
    'Chelsea': 'CHE',
    'Crystal Palace': 'CRY',
    'Everton': 'EVE',
    'Liverpool': 'LIV',
    'Leicester City': 'LEI',
    'Manchester City': 'MNC',
    'Manchester United': 'MNU',
    'Newcastle United': 'NEW',
    'Norwich City': 'NOR',
    'Sheffield United': 'SHE',
    'Southampton': 'SOU',
    'Tottenham Hotspur': 'TOT',
    'Watford': 'WAT',
    'West Ham United': 'WHU',
    'Wolves': 'WOL'
  }
  
  render() {
    if (!this.state.player) return null
    if (!this.state.results) return null
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Player info</h2>
        </div>

        <div className="show-page-container">

          <div className="show-page-top" id={this.state.player.data.color1}>
            <div className="show-page-image">
              <img src={this.state.player.data.image} alt={this.state.player.data.team} />
            </div>
            <div className="show-page-name">
              <h2>{this.state.player.data.name}</h2>
              <h3>{this.state.player.data.position}</h3>
            </div>
            <div className="show-page-number">
              <h2>{this.state.player.data.number}</h2>
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
                <h5>Place of birth</h5><h5>Place</h5>
              </div>
              <div className="map">
                {/* <MapGL
                  mapboxApiAccessToken={mapboxToken}
                  height={'300px'}
                  width={'300px'}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  zoom={10}
                  latitude={0}
                  longitude={0}
                >
                  <Marker
                    latitude={0}
                    longitude={0}
                  >
                    <div className="marker"></div>
                  </Marker>
                </MapGL> */}
              </div>
            </div>

            <div className="show-page-middle">
              <div className="show-page-header">
                <h4>Attributes</h4>
              </div>
              <div className="show-page-stats">
                <h5>Age</h5><h5>{this.props.match.params.age}</h5>
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
                <div className="show-page-results" key={result}>
                  <div className="result-date">
                    <h5 id="not-bold">{this.getDate(result.dt)}</h5>
                  </div>
                  <div className="result">
                    <h5 className="result-team1">{this.getTeamCode[result.s1]}</h5><h5 className="result-score">{result.sc1}</h5><h5 className="result-score">{result.sc2}</h5><h5 className="result-team2">{this.getTeamCode[result.s2]}</h5>
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