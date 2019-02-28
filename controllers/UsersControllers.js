import model from '../models';
const {
    User
} = model; // destructuring js 

/* undestructuring js :

import User from '../models/user';

*/

class UsersControllers { //ceci est le controleur de la vue Users
    static signup(req, res) { // methode statique signup 
        /*
        destructuring des const email,password et name en leur affectant req.body
        */
        const {
            email,
            password,
            name
        } = req.body;
        return User.create({ // on crée les valeurs d'email, password et name
            email: email,
            password: password,
            name: name,
        }).then(userData => res.status(201).send({ //ensuite on affiche le message "user successfull signed up" et le statut 201 de la requete
            succes: true,
            message: 'user succesfull signed up',
            user: userData
        }))
    }

    static signupAsync(req, res) { // cette méthode static prends en paramètres la requete et la reponse
        (async function (req, res) { // fonction anonyme asynchrone prenant la requete et la reponse en params
            const {
                email,
                password,
                name
            } = req.body;
            const userData = await User.create({ // on crée les valeurs d'email, password et name
                email: email,
                password: password,
                name: name,
            })
            return res.status(201).send({ // on rend la vue home avec le fichier index.html contenu dedans
                succes: true,
                message: 'user succesfull',
                user: userData
            })
        })(req, res) // on récupère les parametres de requete et reponse
    }

    static getUsersList(req, res) {
        return User.findAll().then(users => res.json(users));
    }

    static putUsersInList(req, res) {
        return User.findAll().then(users => res.json(users));
    }

    static deleteUsersInList(req, res) {
        //     return User.destroy({  
        //         where: { name: 'Max' }
        //       }).then(users => res.json(users));
        // }
        return User.destroy().then(users => res.json(users));
    }
}


module.exports = UsersControllers; // on exporte le controleur