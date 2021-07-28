// import { Comment } from "../models/comment.js"

export { 
  create,
}


function create(req, res) {
  // Add currently logged in user's profile id to req.body
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then(()=> {
    res.redirect('/topics')
  })
}