import { Topic } from '../models/topic.js'


export { 
  index,
  create,
  show,
  commet
}

function commet(req, res) {
  req.body.author = req.user.profile._id
  Topic.findById(req.params.id)
  .then(topic => {
    topic.replies.push(req.body)
    topic.save()
    .then(() => {
      res.redirect(`/topics/${req.params.id}`)
    })
  })
}

function show(req, res) {
  Topic.findById(req.params.id)
  .populate('author')
  .populate({
    path: 'replies',
    populate: {
      path: 'author'
    }
  })
  .then(topic => {
    res.render('topics/show', {
      title: 'topic Details',
      topic
    })
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Topic.create(req.body)
  .then(()=> {
    res.redirect('/topics')
  })
}

function index(req, res) {
  Topic.find({})
  .populate('author')
  .sort({ createdAt: "desc" })
  .then(topics => {
    res.render('topics/index', {
      title: "Topics To Explore",
      topics
    })
  })
}