var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

// router.get('/', function(req, res, next) {
//   res.render('HomePage/index', { title: 'Library-Store' });
// });

module.exports = router;
