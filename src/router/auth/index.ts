import express from 'express';
import { getAll } from '../../controllers/auth';

const router = express.Router();

export default (router: express.Router) => {
  return router.get('/auth', getAll);
};
