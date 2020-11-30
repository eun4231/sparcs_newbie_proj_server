const passport = reqire('passport')
    , LocalStrategy = require('passport-local').Strategy;
const Users = require('./user');

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw'
    },
    function(username, password, done) {
        Users.findOne({username: username}, function(err, user) {
            if(err) {return done(err);}
            if(!user){
                return done(null, false, {message: 'Incorrect username.'});
            }
            return done(null, user);
        });
    }
));