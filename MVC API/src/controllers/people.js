const ServicePeople = require("../services/people");

const service = new ServicePeople();

class ControllerPeople{
    GetAll(req, res){
        try{
            const names = service.GetAll();
            res.status(200).json({names})       
        } catch (error) {            
            res.status(500).json({error: error.message})            
        }
    }
    GetOne(req, res){
        try{
            const id = parseInt(req.params.id);
            const name = service.GetOne(id);
            res.status(200).json({name})       
        } catch (error) {            
            res.status(500).json({error: error.message})            
        }
    }
    Add(req, res){
        try{
            const name = req.body.name;
            service.Add(name);
            res.status(201).json({message: "Added succesfully!"})       
        } catch (error) {            
            res.status(500).json({error: error.message})            
        }
    }
    Edit(req, res){
        try{
            const id = parseInt(req.params.id);
            const name = req.body.name;
            service.Edit(id, name);
            res.status(200).json({message: "Edited succesfully!"})       
        } catch (error) {            
            res.status(500).json({error: error.message})            
        }
    }
    Delete(req, res){
        try{
            const id = parseInt(req.params.id)
            service.Delete(id);
            res.status(200).json({message: "Deleted succesfully!"})       
        } catch (error) {            
            res.status(500).json({error: error.message})            
        }
    }
}

module.exports = ControllerPeople;