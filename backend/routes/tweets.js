var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweets');
const {checkBody} = require('../modules/checkBody');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  /*if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }*/

  // Check if the user has not already been registered
  Tweet.findOne({ username: req.body.username }).then(data => {
    if (data === null) {
      //const hash = bcrypt.hashSync(req.body.password, 10);

      const newTweet = new Tweet({
        message: req.body.message,
        //user : variable.
        //date : req.body.date,
      });

      newTweet.save().then(newDoc => {
        res.json({result: true, messages : newDoc});
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

module.exports = router;