var express = require('express');
var router = express.Router();
var config = require('config');

// from here we can write apis
router.get('/', (req, res,) => {
    res.send('We are in login');
});

router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("User name = " + username + ", password is " + password);
    res.send(`${config.get('sample.username')} & ${password}`);
});

module.exports = router;
