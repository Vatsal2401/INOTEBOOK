const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const { restart } = require('nodemon');
router.post("/createuser", [
  body('name', 'Enter a valid Name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    
//  is user is present with same email id below function return true
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(400).json({ error: "sorry user with this email already exists" })
  }
  // create a new user
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  })
  // .then(user => res.json(user))
  //   .catch(err => {
  //     console.log(err)
  //     res.json({ error: "Enter a unique value for email.", message: err.message })
  //   });
  res.json(user);
 } 
//  catch error while creating user
 catch (error) {
    console.log(error.message)
    res.status(500).send("some error are occurred")
  }
})
module.exports = router;