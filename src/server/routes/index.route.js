import express from 'express';
import config from '../../config/config';
import userLoginRoute from './user.login.route';
import userRegisterRoute from './user.register.route';
import scrivenerRoute from './scrivener.route';

const router = express.Router();

router.get('/', (req, res) => res.send(`Hello World! localhost:${config.port}/api`));

router.post('/', (req, res) => res.send('Got a POST request'));

router.put('/', (req, res) => res.send('Got a PUT request at /user'));

router.delete('/', (req, res) => res.send('Got a DELETE request at /user'));

router.use('/userlogin', userLoginRoute);

router.use('/userregiter', userRegisterRoute);

router.use('/scrivener', scrivenerRoute);

export default router;
