const users = new Array("Jão", "Ana", "Joe")

class User{
    findAll(){
        return users;
    }

    findByIndex(index){
        return users[index];
    }

    create(name) {
        users.push(name);
    }

    update(index, name) {
        users[index] = name;
    }

    delete(index) {
        users.splice(index, 1);
    }
}

module.exports = new User();