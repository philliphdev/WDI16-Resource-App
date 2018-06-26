let express = require('express')
let router = express.Router({ mergeParams: true })

router.get('/', function (req, res) {
    UserModel.find().then((users) => {
      res.send({
        users
      })
    })
  })

module.exports = router;