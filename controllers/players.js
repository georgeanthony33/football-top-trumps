const Player = require('../models/player')

function index(req, res) {
  Player
    .find()
    .then(foundPlayers => res.status(200).json(foundPlayers))
    .catch(err => res.json(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Player
    .create(req.body)
    .then(createdPlayer => res.status(201).json(createdPlayer)) 
    .catch(err => res.json(err))
}

function show(req, res) {
  Player
    .findById(req.params.id)
    .populate('user')
    .then(player => {
      if (!player) return res.status(404).json({ message: 'No Player Found' })
      res.status(200).json(player)
    })
    .catch(err => res.json(err))
}

function update(req, res) {
  Player
    .findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: 'Not Found' })
      if (!player.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorised' })
      Object.assign(player, req.body)
      return player.save()
    })
    .then(updatedPlayer => res.status(202).json(updatedPlayer))
    .catch(err => res.status(400).json(err))
}

function remove(req, res) {
  Player
    .findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: 'Not Found' })
      if (!player.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorised' })
      return player.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

function commentCreate(req, res) {
  req.body.user = req.currentUser
  Player
    .findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: 'No Player Found' })
      player.comments.push(req.body)
      return player.save()
    })
    .then(updatedPlayer => res.status(200).json(updatedPlayer))
    .catch(err => res.json(err))
}

function commentDelete (req, res) {
  Player
    .findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: 'No Player Found' })
      const comment = player.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'No Comment Found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorised' })
      comment.remove()
      return player.save()
    })
    .then(updatedPlayer => res.status(202).json(updatedPlayer))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, remove, commentCreate, commentDelete }
