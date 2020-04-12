const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 500 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  squadNumber: { type: Number, required: true },
  image: { type: String, required: true },
  team: { type: String, required: true },
  dob: { type: Date, required: true },
  nationality: { type: String, required: true },
  height: { type: Number, required: true, min: 0 },
  attack: { type: Number, required: true, min: 0, max: 100 },
  defence: { type: Number, required: true, min: 0, max: 100 },
  power: { type: Number, required: true, min: 0, max: 100 },
  skill: { type: Number, required: true, min: 0, max: 100 },
  comments: [commentSchema],
  ratings: [ratingSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

playerSchema
  .virtual('ratingAverage')
  .get(function () {
    return this.ratings.reduce((sum, object) => sum + object.rating, 0) / (this.ratings.length)
  })
  
playerSchema.set('toJSON', { virtuals: true })

// playerSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Player', playerSchema)