const password = 'ilovesparcs';

function authMiddleware (req, res, next){
    //req.body 써야댐, db 조회
    let search = db.User.find({
        where: {
            userid : req.body.id
        }
    })
    var userpw = search.userpw
    if(req.body.password === userpw){
        next()
    }
    else res.send("fail to login");
    res.redirect('/user')
}
module.exports = authMiddleware;