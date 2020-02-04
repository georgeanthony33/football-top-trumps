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
          number: '14',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p54694.png',
          team: 'Arsenal',
          color1: 'red',
          color2: 'white2',
          dob: new Date('June 18, 1989'),
          height: 187,
          attack: 9,
          defence: 1,
          power: 6,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Jack Grealish',
          position: 'Midfielder',
          number: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png',
          team: 'Aston Villa',
          color1: 'maroon',
          color2: 'white2',
          dob: new Date('September 10, 1995'),
          height: 175,
          attack: 8,
          defence: 3,
          power: 5,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Nathan Ake',
          position: 'Defender',
          number: '5',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p126184.png',
          team: 'Bournemouth',
          color1: 'red',
          color2: 'white2',
          dob: new Date('February 18, 1995'),
          height: 180,
          attack: 3,
          defence: 7,
          power: 8,
          skill: 4,
          user: createdUsers[0]
        }, {
          name: 'Aaron Mooy',
          position: 'Midfielder',
          number: '18',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p74471.png',
          team: 'Brighton',
          color1: 'blue',
          color2: 'white2',
          dob: new Date('September 15, 1990'),
          height: 174,
          attack: 6,
          defence: 6,
          power: 7,
          skill: 7,
          user: createdUsers[0]
        }, {
          name: 'Ashley Barnes',
          position: 'Forward',
          number: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p44699.png',
          team: 'Burnley',
          color1: 'maroon',
          color2: 'white2',
          dob: new Date('October 30, 1989'),
          height: 186,
          attack: 6,
          defence: 2,
          power: 7,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Mason Mount',
          position: 'Midfielder',
          number: '19',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png',
          team: 'Chelsea',
          color1: 'blue',
          color2: 'white2',
          dob: new Date('January 10, 1999'),
          height: 178,
          attack: 8,
          defence: 2,
          power: 5,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Wilfried Zaha',
          position: 'Forward',
          number: '11',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p82403.png',
          team: 'Crystal Palace',
          color1: 'red',
          color2: 'white2',
          dob: new Date('November 10, 1992'),
          height: 180,
          attack: 8,
          defence: 2,
          power: 8,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Séamus Coleman',
          position: 'Defender',
          number: '23',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p59949.png',
          team: 'Everton',
          color1: 'blue',
          color2: 'white2',
          dob: new Date('October 11, 1988'),
          height: 177,
          attack: 6,
          defence: 7,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Virgil Van Dijk',
          position: 'Defender',
          number: '4',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png',
          team: 'Liverpool',
          color1: 'red',
          color2: 'white2',
          dob: new Date('July 8, 1991'),
          height: 193,
          attack: 4,
          defence: 10,
          power: 10,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Jamie Vardy',
          position: 'Forward',
          number: '9',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p101668.png',
          team: 'Leicester City',
          color1: 'blue',
          color2: 'white2',
          dob: new Date('January 11, 1987'),
          height: 179,
          attack: 8,
          defence: 1,
          power: 7,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Kevin De Bruyne',
          position: 'Midfielder',
          number: '17',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png',
          team: 'Manchester City',
          color1: 'skyblue',
          color2: 'black2',
          dob: new Date('June 28, 1991'),
          height: 181,
          attack: 10,
          defence: 3,
          power: 7,
          skill: 10,
          user: createdUsers[0]
        }, {
          name: 'Marcus Rashford',
          position: 'Forward',
          number: '10',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png',
          team: 'Manchester United',
          color1: 'red',
          color2: 'white2',
          dob: new Date('October 31, 1997'),
          height: 180,
          attack: 8,
          defence: 2,
          power: 7,
          skill: 8,
          user: createdUsers[0]
        }, {
          name: 'Jamaal Lascelles',
          position: 'Defender',
          number: '6',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p101148.png',
          team: 'Newcastle United',
          color1: 'black',
          color2: 'white2',
          dob: new Date('November 11, 1993'),
          height: 188,
          attack: 3,
          defence: 7,
          power: 8,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Teemu Pukki',
          position: 'Forward',
          number: '22',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p57127.png',
          team: 'Norwich City',
          color1: 'yellow',
          color2: 'black2',
          dob: new Date('March 29, 1990'),
          height: 180,
          attack: 7,
          defence: 2,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Phil Jagielka',
          position: 'Defender',
          number: '15',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p7645.png',
          team: 'Sheffield United',
          color1: 'red',
          color2: 'white2',
          dob: new Date('August 17, 1982'),
          height: 180,
          attack: 1,
          defence: 7,
          power: 7,
          skill: 2,
          user: createdUsers[0]
        }, {
          name: 'Danny Ings',
          position: 'Forward',
          number: '9',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p84939.png',
          team: 'Southampton',
          color1: 'red',
          color2: 'white2',
          dob: new Date('July 23, 1992'),
          height: 178,
          attack: 6,
          defence: 2,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Son Heung-Min',
          position: 'Forward',
          number: '7',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png',
          team: 'Tottenham Hotspur',
          color1: 'navyblue',
          color2: 'black2',
          dob: new Date('July 8, 1992'),
          height: 183,
          attack: 8,
          defence: 3,
          power: 6,
          skill: 9,
          user: createdUsers[0]
        }, {
          name: 'Abdoulaye Doucouré',
          position: 'Midfielder',
          number: '16',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p121599.png',
          team: 'Watford',
          color1: 'yellow',
          color2: 'black2',
          dob: new Date('1 January, 1993'),
          height: 184,
          attack: 4,
          defence: 7,
          power: 9,
          skill: 5,
          user: createdUsers[0]
        }, {
          name: 'Robert Snodgrass',
          position: 'Midfielder',
          number: '11',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p18987.png',
          team: 'West Ham United',
          color1: 'maroon',
          color2: 'white2',
          dob: new Date('July 9, 1987'),
          height: 182,
          attack: 7,
          defence: 4,
          power: 5,
          skill: 6,
          user: createdUsers[0]
        }, {
          name: 'Adama Traoré',
          position: 'Forward',
          number: '37',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p159533.png',
          team: 'Wolves',
          color1: 'orange',
          color2: 'black2',
          dob: new Date('January 25, 1996'),
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