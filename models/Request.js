const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
  category: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  description : {
    type: String ,
    required: false 
  },
  request_accept: {
    type: Boolean,
    required: true,
  },
  
});

module.exports = mongoose.model('request', RequestSchema);