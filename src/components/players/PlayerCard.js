import React from 'react'
import { Link } from 'react-router-dom'

function getAge(DOB) {
  const today = new Date()
  const birthDate = new Date(DOB)
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1
  }
  return age
}

const teamObject = {
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

const PlayerCard = ({ name, image, team, dob, height, attack, defence, power, skill, _id }) => {
  return (
    <div className="player-card-outer" id={teamObject[team].color1}>  
      <Link to={`/players/${_id}`} >
        <div className="player-card">  
          <div className="card-header">
            <h3>{name}</h3>
          </div>
          <div className="card-image">
            <img src={image} alt={team} />
          </div>
          <div className="player-stats">
            <div className="stats-row">
              <div className="stats-row-inner">
                <h5 className="attribute-key-left">Age</h5>
                <h5 className="attribute-value">{getAge(dob)}</h5>
              </div>
              <div className="stats-row-inner">
                <h5 className="attribute-value">{height}</h5>
                <h5 className="attribute-key-right">Height</h5>
              </div>
            </div>
            <div className="stats-row">
              <div className="stats-row-inner">
                <h5 className="attribute-key-left">Attack</h5>
                <h5 className="attribute-value">{attack}</h5>
              </div>
              <div className="stats-row-inner">
                <h5 className="attribute-value">{defence}</h5>
                <h5 className="attribute-key-right">Defence</h5>
              </div>
            </div>
            <div className="stats-row">
              <div className="stats-row-inner">
                <h5 className="attribute-key-left">Power</h5>
                <h5 className="attribute-value">{power}</h5>
              </div>
              <div className="stats-row-inner">
                <h5 className="attribute-value">{skill}</h5>
                <h5 className="attribute-key-right">Skill</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="button-field">
        <button onClick={handleClick}>Like</button>
      </div> */}
    </div>
  )
}

export default PlayerCard