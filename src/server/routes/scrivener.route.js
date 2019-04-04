import express from 'express';
import scrivenerCtrl from '../controllers/scrivener.controller';

const router = express.Router();

router.route('/')
  .get(scrivenerCtrl.getFolders);

export default router;
