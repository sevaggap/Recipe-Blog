const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
  try{
      res.render('homepage', {loggedIn: req.session.logged_in});
  } catch (err) {
      res.status(500).json(err)
  }
});

router.get('/login', async (req,res) => {
  try{
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});


// logout route
router.post('/logout', (req,res) => {
  if(req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;
