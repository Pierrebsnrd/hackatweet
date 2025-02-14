var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");
const User = require("../models/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Tweet.find().then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  if (!checkBody(req.body, ["message"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findById(req.body.user).then((user) => {
    if (!user) {
      res.json({ result: false, error: "User not found" });
      return;
    }

    const newTweet = new Tweet({
      message: req.body.message,
      user: user._id,
      // date : req.body.date
    });

    newTweet.save().then(() => {
      const tweet = {
        firstname: user.firstname,
        username: user.username,
        message: newTweet.message,
      };

      res.json({ result: true, message: tweet });
    });
  });
});
module.exports = router;
