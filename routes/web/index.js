const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../sql');
var code = 200;
var message = 'success';

/**
 * @author 李贺辰
 * @description 获取首页右下方工具组显示权限
 * @return {code,message,show}
 */
router.get('/index/right/tools/group/show', function(req, res) {
    db.query('select value from web_show_set where name = "rightToolsGroup"', (err, result) => {
        if (err) {
            console.log(err);
            res.send({ "code": err.errno, "message": "数据请求失败！" })
        }
        res.send({ code, message, show: result[0].value })
    })
});

/**
 * @author 李贺辰
 * @description 获取返回顶部按钮显示权限
 * @return {code,message,show}
 */
router.get('/index/tools/top/btn/show', function(req, res) {
    db.query('select value from web_show_set where name = "returnTopBtn"', (err, result) => {
        if (err) {
            console.log(err);
            res.send({ "code": err.errno, "message": "数据请求失败" })
        }
        res.send({ code, message, show: result[0].value })
    })
})

module.exports = router;