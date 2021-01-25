const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name ;
  const username = req.body.username;
  const password = req.body.password ; 
  const email = req.body.email ; 
  const phoneNumber = req.body.phoneNumber ; 
  const picture = Object(req.body.picture) ; 

  const newUser = new User({
    name, 
    username,
    password , 
    email , 
    phoneNumber , 
    picture
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const name = req.body.name ;
  const username = req.body.username;
  const password = req.body.password ; 
  const email = req.body.email ; 
  const phoneNumber = req.body.phoneNumber ; 
  const picture = Object(req.body.picture) ; 

  user = User.findOne(username==req.params.username)

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
