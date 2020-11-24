const password = 'ilovesparcs';

function authMiddleware (req, res, next){
    //req.body 써야댐, db 조회
    if(req.query.password === password){
        next()
    }
    else res.send("fail to login")
}
module.exports = authMiddleware;