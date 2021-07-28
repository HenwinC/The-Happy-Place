import { Topic } from "../models/topic.js"

export {
 index
}

function index(req, res) {
  Topic.find({})
  .sort({_id: -1})
  .populate('author')
  .then( posts => {
    res.render('index', {
      posts: posts,
      title: 'Hello'
    })
  })
  
}