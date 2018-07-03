require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
// mongoose.connect('mongodb://heroku_4v51st27:lmdaagd0m33pbdlqu1teggpah@ds117681.mlab.com:17681/heroku_4v51st27')

const Schema = require('./schema')

const UserModel = Schema.UserModel
const ResourceModel = Schema.ResourceModel
const LikesModel = Schema.LikesModel 

const db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
});
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

const resource1Likes = new LikesModel({
    likedByUser: "George",
    starCount: 25
})

const resource2Likes = new LikesModel({
    likedByUser: "George",
    starCount: 30
})

const resource1 = new ResourceModel({
    category: 'JavaScript',
    title: 'Learn javaScript',
    description: "resource to learn JavaScript (absolute beginners) - PS.: You get a nice certificate of completion for any courses taken at MVA",
    url: "https://mva.microsoft.com/en-US/training-courses/javascript-fundamentals-for-absolute-beginners-14194?l=L4YIbtUxE_900115881",
    image: "https://i0.wp.com/www.bobreyes.com/myblog/wp-content/uploads/2011/03/microsoft-mva.png?zoom=2&resize=331%2C145",
    public: true,
    likes: [resource1Likes]  
})
const resource2 = new ResourceModel({
    category: 'React',
    title: 'React Dev tools!',
    description: "Building a RESTful API with Node.js",
    url: "https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q",
    image: "https://i.ytimg.com/vi/0oXYLzuucwE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBFKDHDx7zVRwIxJ04rlz_YD4Z8xg",
    public: true,
    likes: [resource2Likes]      
})
const jj = new UserModel({
    name: 'JJ',
    email: '12@12.ga',
    password: 'wdi16',
    resources: [resource1, resource2]
})

UserModel.remove({})
    .then(() => jj.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
