const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Player = require('../models/player')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'george',
          email: 'george@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'shaw',
          email: 'shaw@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${'🤓 '.repeat(createdUsers.length)} users created`)
      return Player.create([
        {
          name: 'Pierre-Emerick Aubameyang',
          position: 'Forward',
          squadNumber: '14',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p54694.png',
          team: 'Arsenal',
          dob: new Date('June 18, 1989'),
          nationality: 'Gabon',
          height: 187,
          attack: 9,
          defence: 1,
          power: 6,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Jack Grealish',
          position: 'Midfielder',
          squadNumber: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png',
          team: 'Aston Villa',
          dob: new Date('September 10, 1995'),
          nationality: 'England',
          height: 175,
          attack: 8,
          defence: 3,
          power: 5,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Nathan Ake',
          position: 'Defender',
          squadNumber: '5',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p126184.png',
          team: 'Bournemouth',
          dob: new Date('February 18, 1995'),
          nationality: 'Netherlands',
          height: 180,
          attack: 3,
          defence: 7,
          power: 8,
          skill: 4,
          user: createdUsers[0]
        }, {
          name: 'Aaron Mooy',
          position: 'Midfielder',
          squadNumber: '18',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p74471.png',
          team: 'Brighton',
          dob: new Date('September 15, 1990'),
          nationality: 'Australia',
          height: 174,
          attack: 6,
          defence: 6,
          power: 7,
          skill: 7,
          user: createdUsers[0]
        }, {
          name: 'Ashley Barnes',
          position: 'Forward',
          squadNumber: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p44699.png',
          team: 'Burnley',
          dob: new Date('October 30, 1989'),
          nationality: 'Austria',
          height: 186,
          attack: 6,
          defence: 2,
          power: 7,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Mason Mount',
          position: 'Midfielder',
          squadNumber: '19',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png',
          team: 'Chelsea',
          dob: new Date('January 10, 1999'),
          nationality: 'England',
          height: 178,
          attack: 8,
          defence: 2,
          power: 5,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Wilfried Zaha',
          position: 'Forward',
          squadNumber: '11',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p82403.png',
          team: 'Crystal Palace',
          dob: new Date('November 10, 1992'),
          nationality: 'Ivory Coast',
          height: 180,
          attack: 8,
          defence: 2,
          power: 8,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Séamus Coleman',
          position: 'Defender',
          squadNumber: '23',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p59949.png',
          team: 'Everton',
          dob: new Date('October 11, 1988'),
          nationality: 'Republic Of Ireland',
          height: 177,
          attack: 6,
          defence: 7,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Virgil Van Dijk',
          position: 'Defender',
          squadNumber: '4',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png',
          team: 'Liverpool',
          dob: new Date('July 8, 1991'),
          nationality: 'Netherlands',
          height: 193,
          attack: 4,
          defence: 10,
          power: 10,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Jamie Vardy',
          position: 'Forward',
          squadNumber: '9',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p101668.png',
          team: 'Leicester City',
          dob: new Date('January 11, 1987'),
          nationality: 'England',
          height: 179,
          attack: 8,
          defence: 1,
          power: 7,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Kevin De Bruyne',
          position: 'Midfielder',
          squadNumber: '17',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png',
          team: 'Manchester City',
          dob: new Date('June 28, 1991'),
          nationality: 'Belgium',
          height: 181,
          attack: 10,
          defence: 3,
          power: 7,
          skill: 10,
          user: createdUsers[0]
        }, {
          name: 'Marcus Rashford',
          position: 'Forward',
          squadNumber: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png',
          team: 'Manchester United',
          dob: new Date('October 31, 1997'),
          nationality: 'England',
          height: 180,
          attack: 8,
          defence: 2,
          power: 7,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Jamaal Lascelles',
          position: 'Defender',
          squadNumber: '6',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p101148.png',
          team: 'Newcastle United',
          dob: new Date('November 11, 1993'),
          nationality: 'England',
          height: 188,
          attack: 3,
          defence: 7,
          power: 8,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Teemu Pukki',
          position: 'Forward',
          squadNumber: '22',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p57127.png',
          team: 'Norwich City',
          dob: new Date('March 29, 1990'),
          nationality: 'Finlad',
          height: 180,
          attack: 7,
          defence: 2,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Phil Jagielka',
          position: 'Defender',
          squadNumber: '15',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p7645.png',
          team: 'Sheffield United',
          dob: new Date('August 17, 1982'),
          nationality: 'England',
          height: 180,
          attack: 1,
          defence: 7,
          power: 7,
          skill: 2,
          user: createdUsers[0]
        }, {
          name: 'Danny Ings',
          position: 'Forward',
          squadNumber: '9',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p84939.png',
          team: 'Southampton',
          dob: new Date('July 23, 1992'),
          nationality: 'England',
          height: 178,
          attack: 6,
          defence: 2,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Son Heung-Min',
          position: 'Forward',
          squadNumber: '7',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png',
          team: 'Tottenham Hotspur',
          dob: new Date('July 8, 1992'),
          nationality: 'South Korea',
          height: 183,
          attack: 8,
          defence: 3,
          power: 6,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Abdoulaye Doucouré',
          position: 'Midfielder',
          squadNumber: '16',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p121599.png',
          team: 'Watford',
          dob: new Date('1 January, 1993'),
          nationality: 'France',
          height: 184,
          attack: 4,
          defence: 7,
          power: 9,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Robert Snodgrass',
          position: 'Midfielder',
          squadNumber: '11',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p18987.png',
          team: 'West Ham United',
          dob: new Date('July 9, 1987'),
          nationality: 'Scotland',
          height: 182,
          attack: 7,
          defence: 4,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Adama Traoré',
          position: 'Forward',
          squadNumber: '37',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p159533.png',
          team: 'Wolves',
          dob: new Date('January 25, 1996'),
          nationality: 'Spain',
          height: 178,
          attack: 8,
          defence: 3,
          power: 10,
          skill: 7,
          user: createdUsers[0]
        }
      ])
    })
    .then(createdPlayers => console.log(`${'⚽️ '.repeat(createdPlayers.length)} football players created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})