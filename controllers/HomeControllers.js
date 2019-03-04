import model from '../models';
const {
    User
} = model;

class HomeControllers { // ceci est le contrôlleur de la vue Home

    static index(req, res, next) {
        res.render('index');
    }
    // static index(req, res, next) { // cette méthode static prends en paramètres la requête et la réponse
    //     (async function (req, res) { // fonction anonyme asynchrone prenant la requête et la réponse en paramètres
    //         const users = await User.findAll(); // on stocke dans une variable users la méthode permettant de trouver les données de la base de données
    //         return res.render('home/index', { // on rend la vue home avec le fichier index.html contenu dedans
    //             users: users
    //         });

    //     })(req, res); // on récupère les paramètres de requête et réponse
    // }

}

module.exports = HomeControllers; // on exporte le contrôleur