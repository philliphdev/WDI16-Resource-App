let express = require('express')
let router = express.Router({ mergeParams: true })
const Schema = require('../db/schema')

const UserModel = Schema.UserModel
const ResourceModel = Schema.ResourceModel
const LikesModel = Schema.LikesModel



// router.get('/', async (req, res) => {
//     try {
//         const user = await resourceModel.findById(req.params.id)
//         const resource = user.resource
//         res.json(resource)
//     } catch (err) {
//         res.send(err)
//     }
// })


router.get('/:resourceId', async (req, res) => {
    console.log('line 26 ')
    try {
        console.log('line 27 ')
        const user = await UserModel.findById(req.params.userId)
        console.log('line 28 ', user)
        const resource = user.resources.id(req.params.resourceId)
        console.log('line 29 ', resource)
        res.json(resource)
    } catch (err) {
        res.send(err)
    }
})


router.post('/', function (req, res) {

    UserModel.findById(req.params.userId).then((user) => {
        const newResource = new ResourceModel(req.body)
        user.resource.push(newResource)
        return user.save()
    }).then(savedUser => {
        res.send({
            user: savedUser
        })
    })
})

router.patch('/:resourceId', async (req, res) => {
    const user = await UserModel.findById(req.params.userId)
    const resourceId = req.params.id
    const editResource = user.resources.id(resourceId)

    editResource.category = req.body.category
    editResource.title = req.body.title
    editResource.description = req.body.description
    editResource.url = req.body.url
    editResource.image = req.body.image
    editResource.public = req.body.public

    const savedUser = await user.save()
    res.send({
        user: savedUser
    })
})

router.delete('/:id', async (req, res) => {
    const user = await UserModel.findById(req.params.userId)
    user.resources.id(req.params.id).remove()
    const savedUser = await user.save()
    res.send({
        user: savedUser
    })
})

module.exports = router