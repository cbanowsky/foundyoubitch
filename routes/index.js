var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'I Got Your Email Bitch'});
});

router.get('/fetch/:url*', function (req, res, next) {
    var url = req.originalUrl;
    url = url.replace('/fetch/', '');
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json({data: JSON.parse(body)})
        } else {
            res.status(400).json({"message": error});
        }
    });
});

module.exports = router;
