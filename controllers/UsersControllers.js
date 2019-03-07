import model from '../models';
const {
    User
} = model; // destructuring js 

/* undestructuring js :

import User from '../models/user';

*/

class UsersControllers { //ceci est le contrôleur de la vue Users

    //------------
    // html :
    //------------

    static index(req, res, next) { // cette méthode static prends en paramètres la requête et la réponse
        (async function (req, res) { // fonction anonyme asynchrone prenant la requête et la réponse en paramètres
            const users = await User.findAll(); // on stocke dans une variable users la méthode permettant de trouver les données de la base de données
            return res.render('users', { // on rend la vue home avec le fichier index.html contenu dedans
                users: users
            });

        })(req, res); // on récupère les paramètres de requête et réponse
    }

    static signin(req, res, next) {
        return res.render('signin');
        // return res.render('views/sessions/signin.ejs');
    }

    static home(req, res, next) {
        return res.render('home');
    }

    static getSignup(req, res, next) {
        return res.render('signup');
    }

    static helloWorld(req, res, next){
        return res.render('helloWorld');
    }

    //------------
    // api json :
    //------------

    static signupAsync(req, res) { // cette méthode static prends en paramètres la requête et la réponse
        (async function (req, res) { // fonction anonyme asynchrone prenant la requête et la réponse en paramètres
            const {
                email,
                password,
                firstName,
                lastName
            } = req.body;
            const userData = await User.create({ // on crée les valeurs d'email, password et name et firstname
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            return res.status(201).send({ // on rend la vue home avec le fichier index.html contenu dedans
                succes: true,
                message: 'user succesfull',
                user: userData
            })

        })(req, res)
        // on récupère les paramètres de requête et réponse
    }


    static signup(req, res) { // methode statique signup 
        /*
        destructuring des const email,password et name en leur affectant req.body
        */
        console.log(req.body);
        const {
            email,
            password,
            firstName,
            lastName
        } = req.body;
        return User.create({ // on crée les valeurs d'email, password et name et firstname
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }).then(()=> res.render('helloWorld'));
        
    }

    static getUsersList(req, res) {
        return User.findAll().then(users => res.json(users));
    }

    static putUsersInList(req, res) {
        return User.findAll().then(users => res.json(users));
    }

    static deleteUsersInList(req, res) {
        return User.destroy().then(users => res.json(users));
    }
}


module.exports = UsersControllers; // on exporte le contrôleur