const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const LikesSchema = new Schema({
    like: {
        type: Boolean
    },
    count: {
        type: Number,
        default: 0
    }
})

const ResourceSchema = new Schema({
    category: {
        type: String,
        required: true,
        default: "General"
    },
    title: {
        type: String,
        required: true,
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
        required: true,
        default: false,
    },
    likes: [LikesSchema]
})

const UserSchema = new Schema({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
image: {
    type: String,
    default: "https://robohash.org/WDI16.png?size200x200&set=set4"
},
resources: [ResourceSchema]
})

const UserModel = mongoose.model('User', UserSchema)
const ResourceModel = mongoose.model('Resource', ResourceSchema)
const LikesModel = mongoose.model('Likes', LikesSchema)

module.exports = {
  UserModel,
  ResourceModel,
  LikesModel
}