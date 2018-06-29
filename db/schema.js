const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
const LikesSchema = new mongoose.Schema({
    likedByUser: {
        type: String
    },
    starCount: {
        type: Number,
        default: 0
    }
})

const ResourceSchema = new mongoose.Schema({
    category: {
        type: String,
        required: false,
        default: "General"
    },
    title: {
        type: String,
        required: false,
        default: "New Resource"
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    image: {
        type: String,
        default: "http://andyshora.com/img/full-stack.jpg"
    },
    public: {
        type: Boolean,
        required: false,
        default: false,
    },
    likes: [LikesSchema]
})

const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: false
},
email: {
    type: String,
    required: false
},
password: {
    type: String,
    required: false
},
image: {
    type: String,
    default: "https://robohash.org/WDI16.png?size200x200&set=set4"
},
resources: [ResourceSchema]
})

const LikesModel = mongoose.model('Likes', LikesSchema)
const ResourceModel = mongoose.model('Resource', ResourceSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    LikesModel,
    ResourceModel,
    UserModel
}