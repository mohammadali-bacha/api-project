import model from '../models';
const {
    User
} = model;

class HomeControllers { // ceci est le controlleur de la vue Home

    static index(req, res) { // cette méthode static prends en paramètres la requete et la reponse
        (async function (req, res) { // fonction anonyme asynchrone prenant la requete et la reponse en params
            const users = await User.findAll(); // on stocke dans une variable users la methode permettant de trouver les donnees de la base de donnees
            return res.render('home/index', { // on rend la vue home avec le fichier index.html contenu dedans
                users: users
            });

        })(req, res); // on récupère les parametres de requete et reponse
    }

}

module.exports = HomeControllers; // on exporte le controleur