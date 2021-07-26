import { Router } from 'express'
import * as commetsCtrl from "../controllers/commets.js"

export {
  router
}

const router = Router()

router.post('/:id', isLoggedIn, commetsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}