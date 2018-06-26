const express = require('express');
const router = express.Router();
const { UserModel } = require('../db/schema')

router.get('/', function (req, res) {
  UserModel.find().then((users) => {
    res.send({
      users
    })
  })
})

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})

router.patch('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)

  user.name = req.body.name
  user.email = req.body.email
  user.password = req.body.password
  user.image = req.body.image

  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})

router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})

module.exports = router;
