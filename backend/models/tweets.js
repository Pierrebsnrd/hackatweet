const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    username : String,
   /*  password : String,
    token: String, */
})

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;