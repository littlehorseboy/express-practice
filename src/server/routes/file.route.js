import express from 'express';
import fileCtrl from '../controllers/file.controller';

const router = express.Router();

router.route('/')
  .get(fileCtrl.getFile);

export default router;
