var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweets');
const {checkBody} = require('../modules/checkBody');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  if (!checkBody(req.body, ['message'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
      const newTweet = new Tweet({
        message: req.body.message,
        //user : req.body.user,
        //date : req.body.date,
      });

      newTweet.save().then(newDoc => {
        res.json({result: true, messages : newDoc});
      });
    Tweet.findOne({message:req.body.message})
    .populate('users')
    .then(data => {
      console.log(data)
    })
});

router.delete('/', (req, res) => {
  if (!checkBody(req.body, ['message'])){
    res.json({ result: false, error: 'Missing or empty fields'});
    return;
  }
  Tweet.deleteOne({_id:req.body.user}).then(()=> {
     Tweet.find().then(data => {
        console.log(data)
      });
    });

  
})

module.exports = router;


