var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const app = require('../app');
const Users = require('../db');
const authMiddleware = require('../middlewares/auth');
var router = express.Router();

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
          if(!user.validPassword(password)){
              return done(null, false, {message: 'Incorrect password.'});
          }
          return done(null, user);
      });
  }
));

/* GET home page. */
router.use('/', authMiddleware);

//post방식써야댐
router.post('/signup', )

router.post('/login', (req,res)=>{
  res.send("You Logged In!");
});


app.post('/auth', passport.authenticate('local', {
  successRedirect: '/user',
  failureMessage: "Invalid username or password",
  failureRedirect: '/auth',
  failureFlash: true
}))

router.get('/logout', );


module.exports = router;
