const goal = require('../models/goal')
const fs = require ('fs')

class goalController {
    static async createGoal (req,res){
        try{
            const newGoal = {
                creator:req.user.id,
                title: req.body.title,
                description: req.body.description,
                progress: req.body.progress,
                deadline: req.body.deadline,
                member: req.user.id
            }
            await goal.create(newGoal);

            return res.status(201).json({
                message: 'Successfully create Goal',
              })

        }catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }
    
    static async addMembertoGoal(req,res){
        try{
            const filter = {
                _id:req.body.id
            }
            const update ={
                $push:{
                    member:req.user.id
                }
            }
            await goal.findOneAndUpdate(filter,update);
            return res.status(201).json({
                message: 'Successfully join Goal',
              })
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async removeMemberfromGoal(req,res){
        try{
            const filter = {
                _id:req.body.id
            }

            const update={
                $pull:{
                member:req.user.id
                }
            }

            await goal.findOneAndUpdate(filter,update)

            return res.status(201).json({
                message: 'Successfully delete Member',
              })
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async attachfiletoGoal(req,res){
        try{
            const rows = await goal.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                const filter = {
                    _id:req.body.id
                }
                const update ={
                    $push:{
                        attachment:req.file.path
                    }
                }
                fs.unlinkSync(req.file.path)
                await goal.findOneAndUpdate(filter,update);
                return res.status(201).json({
                    message: 'Successfully Attach File',
                  })
            }else{
                return res.status(401).json({
                    message: 'Only creator of goal can attach file'
                  })
            }
            
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async removefilefromGoal(req,res){
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
                    attachment:req.body.attachment_name
                    }
                }
    
                await goal.findOneAndUpdate(filter,update)
    
                return res.status(201).json({
                    message: 'Successfully Remove File',
                  })
            }else{
                return res.status(401).json({
                    message: 'You cant edit this item because its not yours'
                  })
            }          
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async deleteGoal(req,res){
        try{
            const rows = await goal.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
                await goal.deleteOne({
                    _id:req.body.id
                })
            return res.status(201).json({
                    message: 'Successfully delete Item',
                  })
            }
            else{
                return res.status(401).json({
                    message: 'Only creator can delete the goal'
                  })
            }
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async getAllGoals(req, res) {
        const rows = await goal.find({

        });
    
        return res.status(200).json({
          message: 'Successfully get all Goals',
          data: rows
        })
    }

    static async getGoalsbyID(req, res) {
        try {
        const goalID = req.body.id
        const rows = await goal.find({
            _id:goalID
          });  
        if (rows == 0){
            return res.status(404).json({
              message: "Goal not Found"
            })
          }
          else{
            return res.status(200).json({
              message: 'Succesfully get Goal Information',
              data: rows
            })}

        } catch (err) {
          return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
    }
    }

    static async editGoalsbyID(req, res) {
        try{
            const rows = await goal.findOne({
                _id:req.body.id
            })
            if(req.user.id==rows.creator){
             const filter = {
             _id:req.body.id
             }
             const update ={
             title:req.body.title,
             description:req.body.description,
             progress:req.body.progress
         }
         await goal.findOneAndUpdate(filter,update);
               return res.status(200).json({
                   message: "Successfully change Goals",
               })
            }else{
                return res.status(401).json({
                    message: 'You cant edit this item because its not yours'
                  })
            }
           } catch (err) {
               return res
                 .status(err.status || 500)
                 .json({
                   message: err.message || 'Internal server error.',
                 })
             }   
         }

    static async findBetween(req,res){
        try{
            var firstday = req.body.firstday
            var lastday = req.body.lastday
            let rows = await goal.find({
                deadline:{
                    "$gte": new Date(firstday),
                    "$lte": new Date(lastday),
                }
            })
            if(rows==0){
                return res.status(404).json({
                    message:"Data not Found"
                })
            }else{
            return res.status(201).json({
                message: 'Successfully find Goals',
                data: rows
              })
            }
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async search(req,res){
        try{
            let rows = await goal.find({ title :{$regex:req.body.search,$options: 'i'}
            })
            if (rows==0){
                return res.status(404).json({
                    message: "Goals Not Found"
                })
            }else{
            return res.status(201).json({
                message: 'Successfully find regex',
                data: rows
              })
            }
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
    }

    static async getGoalsbyProgress(req, res) {
        try {
        const rows = await goal.find({
            progress:req.body.progress
          });  
        if (rows == 0){
            return res.status(404).json({
              message: "Goal not Found"
            })
          }
          else{
            return res.status(200).json({
              message: 'Succesfully get Goal Information',
              data: rows
            })}

        } catch (err) {
          return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
    }
    }

}

module.exports=goalController;
