var express = require('express');
var app = express();
var cors = require('cors');
const db = require('./config/db')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')


// init passport, sessions, strategy local,
// Parse our POST and PUT bodies.
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('./models/User')

app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // popula req.cookie
app.use(session({ secret: "bootcamp" })) // popula req.session
app.use(cors())
app.use(morgan())

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({ where: {email} })
          .then((user) => {
            if (!user) {
              return done(null, false); // user not found
            }
            user.hash(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false); // invalid password
              }
              done(null, user); // success :D
            });
          })
          .catch(done);
      }
    )
  );


  // How we save the user
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  // How we look for the user
  passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then(user => done(null, user))
});


db.sync({force: false}).then(() => {app.listen(3000, () => console.log('escuchando en puerto 3000'))})


app.use('/api', require('./routes'));

// esto conecta el front con el back
app.get('/*', function (req, res) {
    res.sendFile(__dirname+"/public/index.html");
});




