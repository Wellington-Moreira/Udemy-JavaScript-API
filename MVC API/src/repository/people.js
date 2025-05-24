const base = [
    "Wellington", "Bruna", "Carlos Eduardo", "Juliana", "Marcos Vinícius",
    "Ana Paula", "Lucas", "Fernanda", "João Pedro", "Camila",
    "Mateus", "Larissa", "Rafael", "Isabela", "Pedro Henrique",
    "Beatriz", "Gustavo", "Aline", "André Luiz", "Natália",
    "Vinícius", "Tatiane", "Leonardo", "Patrícia", "Ricardo",
    "Vanessa", "Thiago", "Daniela", "Felipe", "Renata",
    "Caio", "Gabriela", "Andressa", "Diego", "Letícia",
    "Eduardo", "Simone", "Bruno", "Luana", "Fábio"
  ]
  

class RepositoryPeople{
    GetAll(){
        return base;
    }

    GetOne(index) {
        return base[index];
    }

    Add(name) {
        base.push(name);
    }

    Edit(index, name){
        base[index] = name;
    }

    Delete(index) {
        base.splice(index,1);
    }
}

module.exports = RepositoryPeople;