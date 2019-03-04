import UsersControllers from '../controllers/UsersControllers';
import HomeControllers from '../controllers/HomeControllers';
import { square, authenticate } from '../helpers/SessionsHelpers';
import express from "express";


const router = express.Router();

const app = express();

// router.use(function(req,res,next){
//     // authenticate(req,res,next);
//     res.redirect('/');
// });

router.post('/signup', UsersControllers.signup); //requête post pointant vers /signup

router.get('/signin', UsersControllers.signin); // requête get pointant vers signin pour se login

router.get('/signup1', UsersControllers.signup1);

router.get('/users', UsersControllers.index); //requête get pointant vers /users

router.post('/signupAsync', UsersControllers.signupAsync); //requête post pointant vers /signupAsync

router.get('/', HomeControllers.index); //requête get pointant vers la racine du serveur

router.delete('/delete', UsersControllers.deleteUsersInList); //requête delete effaçant la donnée concernée dans la db

module.exports = router;
