import { Profile } from "../models/profile.js"


export {
  index,
  edit,
  update,
  getName
}
function getName(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    res.json(profile.name)
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      title: `Editing ${profile.name}'s profile`,
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: "Happy Places",
      profiles,
    })
  })
}