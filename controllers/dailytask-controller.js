const dailytask = require('../models/dailytask')

class dtaskController {
    static async createDTask (req,res){
        try{
            const newDaily = {
                name:req.body.name,
                is_finished: req.body.is_finished,
                creator: req.user.id
            }
            await dailytask.create(newDaily);

            return res.status(201).json({
                message: 'Successfully create Daily Task',
              })

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async getDTask (req,res){
        try{
            const rows = await dailytask.find({
                creator:req.user.id
              });  
            

            return res.status(201).json({
                message: 'Successfully get your Daily Task',
                data: rows
              })

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async updateDTask (req,res){
        try{
            const rows = await dailytask.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                const filter = {
                    _id:req.body.id
                }
                const update ={
                    is_finished:req.body.is_finished
                }
                await dailytask.findOneAndUpdate(filter,update);
                return res.status(201).json({
                    message: 'Successfully update Daily Task',
                  })
            }else{
                return res.status(401).json({
                    message: 'You cant edit this item because its not yours'
                  })
            }

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async deleteDTask (req,res){
        try{
            const rows = await dailytask.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                await dailytask.deleteOne({
                    _id:req.body.id
                })
                return res.status(201).json({
                    message: 'Successfully delete Daily Task',
                  })
            }else{
                return res.status(401).json({
                    message: 'You cant edit this item because its not yours'
                  })
            }

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }
}

module.exports=dtaskController;