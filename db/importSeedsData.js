require('dotenv').config()
const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb://heroku_4v51st27:lmdaagd0m33pbdlqu1teggpah@ds117681.mlab.com:17681/heroku_4v51st27')

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

const resource3 = new ResourceModel({
    category: 'JavaScript',
    title: 'simple explanation of "this" in JavaScript',
    description: "Microsoft Virtual Academy JavaScript Fundamentals for Absolute Beginners Learn the basics of the JavaScript language from Bob Tabor, who explores how to get the tools, set up the development environment, write code, and more.",
    url: "https://mva.microsoft.com/en-US/training-courses/javascript-fundamentals-for-absolute-beginners-14194?l=4ysZsIVxE_6500115881",
    image: "https://pctechmag.com/wp-content/uploads/2011/10/Microsoft-Virtual-Academy-300x224.jpg",
    likes: []
})

const resource4 = new ResourceModel({
    category: 'Heroku',
    title: 'Getting Started on Heroku',
    description: "Step-by-step guides for deploying your first app and mastering the basics of Heroku",
    url: "https://devcenter.heroku.com/start",
    image: "https://i.ytimg.com/vi/AU6rNN_X6Mw/hqdefault.jpg",
    public: true,
    likes: [resource2Likes]
})

const resource5 = new ResourceModel({
    category: 'CSS',
    title: 'A Complete Guide to Grid',
    description: "CSS-Tricks A Complete Guide to Grid | CSS-Tricks CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to",
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    image: "https://cdn.dribbble.com/users/279/screenshots/166284/css-tricks.png",
    public: true,
    likes: [resource2Likes]
})

const resource6 = new ResourceModel({
    category: 'CSS',
    title: 'HandleBars',
    description: "resource to learn Handlebars",
    url: "http://tryhandlebarsjs.com/",
    image: "http://blog.comperiosearch.com/wp-content/uploads/2012/09/handlebars_logo.png",
    public: true,
    likes: [resource2Likes]
})

const resource7 = new ResourceModel({
    category: 'React',
    title: 'Your Timeline for Learning React',
    description: "Dave Ceddia Your Timeline for Learning React This is your timeline for learning React.",
    url: "https://daveceddia.com/timeline-for-learning-react/",
    image: "https://daveceddia.com/images/complete-package-items-novideo.png",
    public: true,
    likes: [resource2Likes]
})

const resource8 = new ResourceModel({
    category: 'HTML',
    title: 'Compose HTML',
    description: "How To Compose HTML ID and Class Names like a Rockstar — SitePoint How much thought are you putting into the ID and Class names you assign to the HTML markup you write? Is there a rhyme and reason? If not, you may be missing out on the significant benefits of better organized and more readable code, so perhaps now's a good time to take a closer look at this often under-appreciated subtlety of front-end coding.",
    url: "https://www.sitepoint.com/how-to-compose-html-id-and-class-names-like-a-rockstar/",
    image: "https://uxmastery.com/wp-content/uploads/2015/06/sitepoint-logo.jpg",
    public: true,
    likes: [resource2Likes]
})

const resource9 = new ResourceModel({
    category: 'Tools',
    title: 'Chrome Dev Tools',
    description: "Get started with Google Chrome's built-in web developer tools",
    url: "https://developers.google.com/web/tools/chrome-devtools/",
    image: "https://i.pinimg.com/originals/1c/a8/65/1ca865bfdc099a55145b727c2f137d8c.png",
    public: true,
    likes: [resource2Likes]
})

const resource10 = new ResourceModel({
    category: 'JavaScript',
    title: 'Reduce basics',
    description: "YouTubeFun Fun Function Reduce basics - Part 3 of Functional Programming in JavaScript",
    url: "https://youtu.be/Wl98eZpkp-c",
    image: "https://i.ytimg.com/vi/zGBeJNQeJX0/maxresdefault.jpg",
    public: true,
    likes: [resource2Likes]
})

const resource11 = new ResourceModel({
    category: 'General',
    title: 'What Kind of Learner You Are!',
    description: "Find Out What Kind of Learner You Are! learning-styles-online.com Learning Styles Online.com - including a free inventory Home page for learning-styles-online.com - a website that provides free information on learning styles, as well as a test to help you discover yours.",
    url: "https://www.learning-styles-online.com/",
    image: "https://www.learning-styles-online.com/images/memstyles.jpg",
    public: true,
    likes: [resource2Likes]
})

const resource12 = new ResourceModel({
    category: 'Git',
    title: 'Git Cheat Sheet!',
    description: "Quick Git command reference sheet",
    url: "https://www.git-tower.com/blog/git-cheat-sheet/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBxyPqC00oaXLuLToJdAu6HpXpGLI17NGdYS0fzPCP6aXsZso",
    public: true,
    likes: [resource2Likes]
})

const resource13 = new ResourceModel({
    category: 'React',
    title: 'Thinking In React',
    description: "Thinking in React - React A JavaScript library for building user interfaces",
    url: "https://reactjs.org/docs/thinking-in-react.html",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRyKXp7FdfPqUy5lrbgkRt03WdiszoMnpPIXx8nRJJg530qJl",
    public: true,
    likes: [resource2Likes]
})

const resource14 = new ResourceModel({
    category: 'Node',
    title: 'RESTful API with Node.js',
    description: "Building a RESTful API with Node.js",
    url: "https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q",
    image: "https://codeandunicorns.com/wp-content/uploads/2017/11/node-express.png",
    public: true,
    likes: [resource2Likes]
})

const resource15 = new ResourceModel({
    category: 'Express',
    title: 'Node & Express from Scratch',
    description: "I haven’t watched all of this, but I’ve clicked into a few videos.  It’s REALLY in depth and goes into some stuff that we didn’t get to cover in class. (Like user auth, JWTs, and uploading images)",
    url: "https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp",
    image: "https://codeandunicorns.com/wp-content/uploads/2017/11/node-express.png",
    public: true,
    likes: [resource2Likes]
})

const george = new UserModel({
    name: 'George',
    email: 'george@jungle.com',
    password: 'wdi16',
    image: "https://robohash.org/WDI16.png?size200x200&set=set2",
    resources: [resource1, resource2, resource3, resource4, resource5, resource6, resource7]
})

const jane = new UserModel({
    name: 'Jane',
    email: 'jane@jungle.com',
    password: 'wdi16',
    image: "https://robohash.org/WDI16.png?size200x200&set=set4",
    resources: [resource8, resource9, resource10, resource11]
})

const moby = new UserModel({
    name: 'Moby',
    email: 'moby@jungle.com',
    password: 'wdi16',
    image: "https://robohash.org/WDI16.png?size200x200&set=set1",
    resources: [resource12, resource13, resource14, resource15]
})

UserModel.remove({})
    .then(() => george.save())
    .then(() => console.log('Successful Save'))
    .then(() => jane.save())
    .then(() => console.log('Successful Save'))
    .then(() => moby.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
