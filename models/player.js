const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 500 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const playerScheme = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  number: { type: String, required: true },
  image: { type: String, required: true },
  team: { type: String },
  teamCode: { type: String },
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  dob: { type: Date, required: true },
  height: { type: Number, required: true, min: 0 },
  attack: { type: Number, required: true, min: 0, max: 100 },
  defence: { type: Number, required: true, min: 0, max: 100 },
  power: { type: Number, required: true, min: 0, max: 100 },
  skill: { type: Number, required: true, min: 0, max: 100 },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Player', playerScheme)