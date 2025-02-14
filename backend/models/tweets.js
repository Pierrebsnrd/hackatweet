const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    message : String,
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'users'},
    date : Date,
})

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;
//{type : mongoose.Schema.Types.ObjectId, ref : 'users'},