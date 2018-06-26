const express = require('express')
const router = express.Router({ mergeParams: true })
const Schema = require('../db/schema')
const UserModel = Schema.UserModel

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
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
