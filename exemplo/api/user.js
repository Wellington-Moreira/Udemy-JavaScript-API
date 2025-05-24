const ServiceUser = require("../services/user");

class ApiUser{

    findAll (_, res) {
        try{    
            const result = ServiceUser.findAll()
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    findByIndex(req, res) {
        try{
            const {index} = req.params;;
            const result = ServiceUser.findByIndex(index);
            res.send({result})
        }  catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    create(req, res) {
        try{    
            const {name} = req.body
            ServiceUser.create(name)
            res.status(201).send;
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    update(req, res) {
        try{   
            const {index} = req.params; 
            const {name} = req.body
            ServiceUser.update(index, name)
            const result = ServiceUser.findByIndex(index);
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }

    delete(req, res) {
        try{    
            const {index} = req.params;
            ServiceUser.delete(index);
            res.status(204).send()
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
}


module.exports = new ApiUser();