import express from 'express';
import controllers from './controllers/userControler.js';
import controllerLogin from './controllers/loginControler.js';
import middlewares from './middlewares/loginMiddle.js';
import middlewareAdmin from './middlewares/isAdmin.js';

const router = express.Router();

//gets
router.get('/users', controllers.allusers);
router.get('/private', middlewares.loginMiddle, (_req, res) => {
  res.status(200).json({msg: 'Rota privada'});
})

//post
router.post('/users', controllers.addUser);
router.post('/login', controllerLogin.login);
router.post('/admin', middlewareAdmin.adminMiddle);

export default router

