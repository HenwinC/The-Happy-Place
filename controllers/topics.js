import { Topic } from '../models/topic.js'


export { 
  index,
  create,
  show,
  update,
  edit,
  deleteTopic as delete
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Topic.findByIdAndUpdate(req.params.id, req.body, function(err, topic){
    res.redirect('/topics')
  })
}

function edit(req, res) {
  Topic.findById(req.params.id, function(err, topic) {
    res.render('topics/edit', {
     topic,
      err,
      title: "Edit Topic"
    })
  })
}

function deleteTopic(req, res){
  Topic.findByIdAndDelete(req.params.id, function(err, topic){
    res.redirect('/topics')
  })
}

function show(req, res) {
  Topic.findById(req.params.id)
  .populate('author')
  .populate({
    path: 'show',
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
// ghckhddkhchgkddkhgvhkgdtdkhghgfvgchgc