const express = require("express");
const {User} = require("../models/index");
const {Favorites} = require("../models/index")
const router = express.Router();
const passport = require('passport');

////////////////////////////////////////////  REGISTER  /////////////////////////////////////////////
router.post("/register", (req, res) => {
    User.create(req.body).then(user =>
        res.status(201).json(user))
        .catch(err => console.log(err))
})

////////////////////////////////////////////  LOGIN  /////////////////////////////////////////////
// { successRedirect: '/', failureRedirect: '/login' } esto se hace en el front 
router.post('/login', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send(req.user);
  });

/* router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user);
    //res.send(req.user);
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}) */


////////////////////////////////////////////  LOGOUT  /////////////////////////////////////////////
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
/* router.get('/logout', (req, res) => {
    req.logout();
    req.session.save((err) => {
        if (err) res.send(err)
        res.redirect('/');
    });
});
 */

router.get('/me', function(req, res){
    req.user? res.send(req.user) : res.sendStatus(401)
});


router.post("/favorites",(req,res)=>{
    Favorites.create({title:req.body.title, poster:req.body.poster})
    .then(favorites => {
        const user = req.body.user 
        favorites.setUser(user)
    }).then(()=> res.sendStatus(200))
 }) 

router.get("/favorites/:id",(req,res)=>{
    Favorites.findAll({where:{UserId: req.params.id}}).then(favorites => res.status(200).send(favorites))
 })

router.delete("/favorites/:id",(req,res)=>{
    Favorites.destroy({where:{id : req.params.id}}).then(()=> res.sendStatus(204))
 })

module.exports = router;