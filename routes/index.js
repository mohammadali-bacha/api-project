import UsersControllers from '../controllers/UsersControllers';
import HomeControllers from '../controllers/HomeControllers';
import express from "express";


const router = express.Router();

const app = express();


router.post('/signup', UsersControllers.signup); //requête post pointant vers /signup

router.get('/users', UsersControllers.getUsersList); //requête get poitant vers /users

router.post('/signupAsync', UsersControllers.signupAsync); //requête post pointant vers /signupAsync

router.get('/', HomeControllers.index); //requête get pointant vers la racine du serveur

// router.put('/put', UsersControllers.deleteUsersInList); //requête put

router.delete('/delete', UsersControllers.deleteUsersInList); //requête delete effaçant la donnée concernée dans la db

module.exports = router;
