const user = require("../model/user")

class ServiceUser{
    async findAll(transaction){
        return user.findAll({transaction});
    }

    async findById(id, transaction){
        return user.findByPk(id, {transaction});
    }

    async create(email, password, transaction){
        if (!email){
            throw new Error ("Missing email information");
        } else if (!password){
            throw new Error ("Missing password information")
        }

        return user.create({
            email, password
        },{ transaction });
    }

    async update(id, email, password, transaction){
        const oldUser = await this.findById(id, transaction);

        oldUser.email = email || oldUser.email;
        oldUser.password = password || oldUser.password;

        oldUser.save({transaction});

        return oldUser;
    }

    async delete(id, transaction){
        const user = await this.findById(id, transaction);
        user.destroy({transaction});
        return true
    }
}

module.exports = new ServiceUser();