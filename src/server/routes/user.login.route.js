import express from 'express';
import userLoginCtrl from '../controllers/user.login.controller';

const router = express.Router();

router.route('/')
  .post(userLoginCtrl.findOneUser);

export default router;
