import { Router } from 'express'
import * as topicsCtrl from "../controllers/topics.js"

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, topicsCtrl.index)
router.post('/', isLoggedIn, topicsCtrl.create)
router.get('/:id', isLoggedIn, topicsCtrl.show)
router.post('/:id', isLoggedIn, topicsCtrl.commet)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}