const goal = require('../models/goal')
const jwt = require ('jsonwebtoken');

class taskController {
    static async createTask (req,res){
        try{
            const rows = await goal.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                const filter = {
                    _id:req.body.id
                }
                const newTask = {
                    title:req.body.title,
                    description: req.body.description,
                    is_finished:req.body.is_finished,
                    createdAt:new Date()
                }
                const update ={
                    $push:{
                        task:newTask
                    }
                }
                await goal.findOneAndUpdate(filter,update);
                
                return res.status(201).json({
                    message: 'Successfully add Task',
                  })
            }else{
                return res.status(401).json({
                    message: 'Only creator of Goal can create Task'
                  })
            }
            

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }
    static async updateTask(req,res){
        try{
            const filter = {
                'task._id':req.body.id
            }
            const newTask = {
                is_finished:req.body.is_finished,
            }
            const update ={
                '$set':{
                    'task.$.is_finished':newTask.is_finished,
                }
            }
           await goal.findOneAndUpdate(filter,update);

            return res.status(201).json({
                message: 'Successfully update Item',
              })
        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }
    static async deleteTask(req,res){
        try{
            const rows = await goal.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                const filter = {
                    _id:req.body.id
                }
    
                const update={
                    $pull:{
                    task:{_id:req.body.task_id}
                    }
                }
                
                await goal.findOneAndUpdate(filter,update)
                
    
                return res.status(201).json({
                    message: 'Successfully delete Task',
                  })
            }
            
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

}

module.exports=taskController;
