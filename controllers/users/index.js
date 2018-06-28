const usersServices = require('../../services/users');

module.exports = {
    getUsers: (req, res, next)=>{
        let listUsers = usersServices.getUsers();
        res.json(listUsers);
    },
    getUser: (req, res, next) => {
        let id = req.params.id;
        let user = usersServices.getUser(id);
        res.json(user);
    }
};
