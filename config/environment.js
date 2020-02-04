const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/top-trumps-api'
const secret = process.env.SECRET || 'shhh its a secret'

module.exports = { port, dbURI, secret }