var express = require('express');

var pkgcloud = require('pkgcloud');
var fs = require('fs');

var router = express.Router();

var creds = {
      provider: 'rackspace',
      username: process.env.OS_USERNAME,
      apiKey: process.env.OS_PASSWORD,
      region: process.env.OS_REGION_NAME
};


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: creds.username });
});

module.exports = router;
