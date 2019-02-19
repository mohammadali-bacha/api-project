import UsersControllers from '../controllers/UsersControllers'
import express from "express";

const router = express.Router();

const app = express();

// router.get("/", (req, res) => {
//     res.render("coucou");
// });
// router.get('/users', (req,res) => {
//     res.json({
//         message: "users"
//     });
// });
// router.get("/authentification", (req,res) => {
//     res.json({
//         message : "authentification"
//     });
// });

router.post('/signup', UsersControllers.signup);
// router.get('/datas', UsersControllers.datas);

router.get('/datas', UsersControllers.datas);

module.exports = router;