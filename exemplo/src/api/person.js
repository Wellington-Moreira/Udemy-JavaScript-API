const ServicePerson = require("../services/person");

class ApiPerson{

    async findAll (_, res) {
        try{    
            const result = await ServicePerson.findAll()
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async findById(req, res) {
        try{
            console.log('findById: ', req.session)
            const {id} = req.params;
            const result = await ServicePerson.findById(id);
            res.send({result})
        }  catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async create(req, res) {
        try{    
            const {name, address, userId} = req.body
            await ServicePerson.create(name, address, userId)
            res.status(201).send({ msg: "Person sucessfully created." });
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async update(req, res) {
        try{   
            const {id} = req.params; 
            const {name, address} = req.body
            const result = await ServicePerson.update(id, name, address)            
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }

    async delete(req, res) {
        try{    
            const {id} = req.params;
            await ServicePerson.delete(id);
            res.status(204).send()
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
}


module.exports = new ApiPerson();