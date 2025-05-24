const User = require("../model/user")

class ServiceUser{
    findAll(){
        return User.findAll();
    }

    findByIndex(index){
        return User.findByIndex(index);
    }

    create(name){
        User.create(name);
    }

    update(index, name){
        User.update(index, name);
    }

    delete(index){
        User.delete(index);
    }
}

module.exports = new ServiceUser();