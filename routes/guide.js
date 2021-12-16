var express = require('express');
var router = express.Router();
var {
  calcBlockReward,
  coinFormat,
  baseIntFormat,
  calcDifficulty,
} = require('../util/util.js');

router.get('/connect-account', async function(req, res, next) {
  const { service } = req;
  res.render('guide/connect-account', { title: '连接账户 - XFSWallet 文档', req: req});
});

router.get('/send-transfer', async function(req, res, next) {
  const { service } = req;
  res.render('guide/send-transfer', { title: '发送转账交易 - XFSWallet 文档', req: req});
});
router.get('/create-token', async function(req, res, next) {
  const { service } = req;
  res.render('guide/create-token', { title: '创建通证代币 - XFSWallet 文档', req: req});
});
router.get('/create-nft', async function(req, res, next) {
  const { service } = req;
  res.render('guide/create-nft', { title: '创建 NFT 资产 - XFSWallet 文档', req: req});
});
router.get('/send-transaction', async function(req, res, next) {
  const { service } = req;
  res.render('guide/send-transaction', { title: '发送交易 - XFSWallet 文档', req: req});
});
module.exports = router;
