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

const PlayerCard = ({ name, position, number, image, team, color1, dob, height, attack, defence, power, skill, comments, user, _id }) => {
  return (
    <div className="player-card-outer" id={color1}>  
      <Link to={`/players/${_id}/${getAge(dob)}`} >
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
    </div>
  )
}

export default PlayerCard