const user = require("../model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const secretKey = "MyS3cr3tP455w0rD"
const salt = 10
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

        const hashPass = await bcrypt.hash(password, salt);

        return user.create({
            email, password: hashPass
        },{ transaction });
    }

    async update(id, email, password, transaction){
        const oldUser = await this.findById(id, transaction);

        oldUser.email = email || oldUser.email;
        oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password

        oldUser.save({transaction});

        return oldUser;
    }

    async delete(id, transaction){
        const user = await this.findById(id, transaction);
        user.destroy({transaction});
        return true
    }

    async login(email, password){
        if (!email){
            throw new Error ("Missing email information");
        } else if (!password){
            throw new Error ("Missing password information")
        }

        const currentUser = await user.findOne({where: {email}});

        if (!currentUser){
            throw new Error("Invalid email or password.")
        }

        const verify = await bcrypt.compare(password, currentUser.password)
        console.log(verify)

        if (verify){
            return jwt.sign({id: currentUser.id}, secretKey, {expiresIn: 60*60});
        }

        throw new Error("Invalid email or password.")
    }
}

module.exports = new ServiceUser();