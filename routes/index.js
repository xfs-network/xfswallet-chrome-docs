var express = require('express');
var router = express.Router();
var {
  calcBlockReward,
  coinFormat,
  baseIntFormat,
  calcDifficulty,
} = require('../util/util.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const { service } = req;
  res.render('index', { title: '入门 - XFSWallet 文档',req: req});
});

module.exports = router;
