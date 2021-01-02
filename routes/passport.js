const passport = reqire('passport')
    , LocalStrategy = require('passport-local').Strategy;
const app = require('../app');
const Users = require('./user');

app.use(passport.initialize());
app.use(passport.session());

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
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
    }
));
module.exports = passport;