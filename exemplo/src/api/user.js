const ServiceUser = require("../services/user");

class ApiUser{

    async findAll (_, res) {
        try{    
            const result = await ServiceUser.findAll()
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async findById(req, res) {
        try{
            const {id} = req.params;
            const result = await ServiceUser.findById(id);
            res.send({result})
        }  catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async create(req, res) {
        try{    
            const {email, password } = req.body
            await ServiceUser.create(email, password)
            res.status(201).send({ msg: "User sucessfully created." });
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }
    async update(req, res) {
        try{   
            const {id} = req.params; 
            const {email, password} = req.body
            const result = await ServiceUser.update(id, email, password)            
            res.status(200).send({result})
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }

    async delete(req, res) {
        try{    
            const {id} = req.params;
            await ServiceUser.delete(id);
            res.status(204).send()
        } catch (e){
            res.status(500).send({msg: e.message})
        }
    }

    async login (req, res) {
        try{
            const {email, password} = req.body
            const token = await ServiceUser.login(email, password);
            res.status(200).send({token});
        } catch(e){
        res.status(500).send({msg: e.message})

        }
    }
}


module.exports = new ApiUser();