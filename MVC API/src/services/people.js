const RepositoryPeople = require("../repository/people");

const RepoPeople = new RepositoryPeople();

class ServicePeople{
    GetAll (){        
        return RepoPeople.GetAll();
    }
    GetOne (id){
        return RepoPeople.GetOne(id);
    }
    Add (name){        
        return RepoPeople.Add(name);
    }
    Edit (id, name){        
        return RepoPeople.Edit(id, name);
    }
    Delete (id){        
        return RepoPeople.Delete(id);
    }
}

module.exports = ServicePeople;