import model from '../models';
const {   User } = model; // destructuring js 

class UsersControllers {
    static signup(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        return User.create({
            email: email,
            password: password,
            name: name,
        }).then(userData => res.status(201).send({
            succes: true,
            message: 'user succesfull',
            user: userData
        }))
    }

    static datas(req, res) {
        return User.findAll().then(users => res.json(users));        
    }
}

module.exports = UsersControllers;