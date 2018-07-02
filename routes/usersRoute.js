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

router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})

router.patch('/:userId', (req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.userId, req.body, {new: true})
  .then((userModel) => {
      res.json(userModel)
  }).catch((error) => {
      console.log(error)
  })
})

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})

router.delete('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  user.remove()
  const saved = await user.save()
  res.json(saved)
}
)

module.exports = router;
