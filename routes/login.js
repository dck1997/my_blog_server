var express = require('express');

const { getFileData } = require('../common');

var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
    global.isLogin = true
    // 获取所有用户信息
    const allUserInfo = await getFileData('userData')
    const { UserName, PassWord } = req.body
    const info = allUserInfo.find(item => item.userName == UserName)
    if(!info){
        res.send({
            code:500,
            data:null,
            msg:'用户不存在！'
        });
    }else{
        if(info.password !== PassWord){
            res.send({
                code:500,
                data:null,
                msg:'密码错误！'
            });
        }else{
            res.send({
                code:200,
                data:info,
                msg:'登录成功!'
            });
        }
    }
});

module.exports = router;
