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
  console.log('line 18 ', req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})

router.patch('/:userId', (req, res, next) => {
  console.log('l26', req.body)
  UserModel.findByIdAndUpdate(req.params.userId, req.body, {new: true})
  .then((userModel) => {
    console.log('UR l 28 ', req.params.userId, userModel) 
      res.json(userModel)
  }).catch((error) => {
      console.log(error)
  })
})

// router.patch('/:userId', async (req, res) => {
//   console.log('Patch', req.params.userId)
//   try {
//     const updatedUser = req.body.user
//     const user = await UserModel.findById(req.params.userId)
//     console.log('line 20 ', user.name)
//     // user.name = updatedUser.name
//     user.email = req.body.email
//     user.password = req.body.password
//     user.image = req.body.image
//     console.log('line 33 ', user.name)
//     const savedUser = await user.save()
//     res.send({
//       user: savedUser
//     })
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(500)
//   }
// })



router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})

router.delete('/:id', async (req, res) => {
  console.log('Delete ', req.params.id)
  const user = await UserModel.findById(req.params.id)
  user.remove()
  const saved = await user.save()
  res.json(saved)
}
)

module.exports = router;
