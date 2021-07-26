import { Topic, Topis } from '../models/topic.js'
import { Commet } from '../models/commet.js'

export {
  create
}

function create(req, res) {
  req.body.author = req.user.profile._id
  req.body.topic = req.params.id
  Commet.create(req.body)
  .then(Commet => {
    Topic.findById(req.params.id)
    .then(topic => {
      topic.commet.push(commet._id)
      topic.save()
      .then(() => {
        res.redirect(`/topics/`)
      })
    })
  })
}