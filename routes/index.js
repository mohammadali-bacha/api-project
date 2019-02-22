import UsersControllers from '../controllers/UsersControllers';
import HomeControllers from '../controllers/HomeControllers';
import express from "express";

const router = express.Router();

const app = express();


router.post('/signup', UsersControllers.signup); //requete post pointant vers /signup

router.get('/users', UsersControllers.getUsersList); //requete get poitant vers /users

router.post('/signupAsync', UsersControllers.signupAsync); //requete post pointant vers /signupAsync

router.get('/', HomeControllers.index); //requete get pointant vers la racine du serveur

module.exports = router;