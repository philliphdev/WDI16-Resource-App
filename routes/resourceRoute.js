let express = require('express')
let router = express.Router({ mergeParams: true })
const Schema = require('../db/schema')

const UserModel = Schema.UserModel
const ResourceModel = Schema.ResourceModel

router.get('/:resourceId', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId)
        const resource = user.resources.id(req.params.resourceId)
        res.json(resource)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const user = await UserModel.findById(req.params.userId)
    const newResource = await new ResourceModel(req.body)
    user.resources.push(newResource)
    user.save()
    res.send ({
        user
    })

})

router.patch('/:resourceId', async (req, res) => {
    const user = await UserModel.findById(req.params.userId)
    const resourceId = req.params.resourceId
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