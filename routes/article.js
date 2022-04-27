var express = require('express');

const { getFileData } = require('../common');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    global.isLogin = true
    const articleList = await getFileData('articleList')
    const { SkipCounts, MaxCounts } = req.query
    const a = SkipCounts
    const b = a+MaxCounts
    let article = []
    if(articleList.length >= b){
        article = articleList.splice(a,b)
    }
    if(SkipCounts !== null && SkipCounts !== undefined && MaxCounts !== null && MaxCounts !== undefined) {
        res.send({
            code:200,
            data:article,
            msg:'success！'
        });
    }else{
            res.send({
                code:500,
                data:null,
                msg:'fail'
            });
        }
});

module.exports = router;
