const { Router } = require('express');
const passport = require('passport');
const { GoogleStrategy } = require('../oauth/passport');

const authRouter = Router();

authRouter.get('/google', passport.authenticate('google', {scope: ['profile']}), (res, req) => {
  console.log('/google successful');
});

authRouter.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/',
  failureRedirect: '/logout'
}), (req, res) => {
  console.log('/google/callback called')
});

authRouter.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = { authRouter };