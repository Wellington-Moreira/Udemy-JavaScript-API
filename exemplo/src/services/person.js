const person = require("../model/person");
const user = require("../model/user");

class ServicePerson{
    async findAll(transaction){
        return person.findAll(transaction);
    }

    async findById(id, transaction){
        return person.findByPk(id, {
            include: { model: user },
            transaction: transaction
          });
    }

    async create(name, address, userId, transaction){
        if (!name){
            throw new Error ("Missing name information");
        } else if (!address){
            throw new Error ("Missing address information");
        } else if (!userId){
            throw new Error ("Missing user ID information");
        }

        return person.create({
            name, address, userId
        }, { transaction});
    }

    async update(id, name,address, transaction){
        const oldPerson = await this.findById(id, transaction);

        oldPerson.name = name || oldPerson.name;
        oldPerson.address = address || oldPerson.address;
        
        oldPerson.save({transaction});

        return oldPerson;
    }

    async delete(id, transaction){
        const person = await this.findById(id, transaction);
        person.destroy( {transaction});

        return true
    }
}

module.exports = new ServicePerson();