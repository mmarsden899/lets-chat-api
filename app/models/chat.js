const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  messages: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Message'
  }],
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Chat', chatSchema)
