import { Router } from 'express'
import * as commentsCtrl from "../controllers/commets.js"

export {
  router
}

const router = Router()

router.post('/', isLoggedIn, commentsCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
