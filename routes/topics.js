import { Router } from 'express'
import * as topicsCtrl from "../controllers/topics.js"

export {
  router
}

const router = Router()

router.get('/:id', isLoggedIn, topicsCtrl.show)
router.post('/', isLoggedIn, topicsCtrl.create)
router.get('/', isLoggedIn, topicsCtrl.index)
router.delete('/:id', isLoggedIn, topicsCtrl.delete)
router.put('/:id', isLoggedIn, topicsCtrl.update)
router.get('/:id/edit', isLoggedIn, topicsCtrl.edit)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}