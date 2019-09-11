/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-08-19 00:24:11
 * @LastEditTime: 2019-08-19 00:24:11
 * @LastEditors: icony/精武陈真
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
