const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
    username : String,
   /*  password : String,
    token: String, */
})

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;