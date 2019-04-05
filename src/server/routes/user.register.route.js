import express from 'express';
import userRegisterCtrl from '../controllers/user.register.controller';

const router = express.Router();

router.route('/')
  .post(userRegisterCtrl.insertOneUser);

export default router;
