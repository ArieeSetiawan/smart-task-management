const user = require('../models/user')
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const fs = require ('fs')

class userController {
    static async register (req,res){
    try{
      const cekAvailability = await user.findOne({
        $or:[
            {name:req.body.name},{email:req.body.email}
        ]
      })
      if (cekAvailability != null){
        return res.status(400).json({
          msg: 'Username or Email has been Taken'
        })
      }

     const hashedpassword = await bcrypt.hash(req.body.password, 12)
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword,
            photo: req.file.path,
            description: req.body.description,
            roleType: "pengguna",
            createdAt: new Date()
        }
    await user.create(newUser);
    fs.unlinkSync(req.file.path)

    return res.status(201).json({
        message: 'Successfully add user',
        user_email: newUser.email
      })
      
    }
    catch(err){
        return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
}
    }
    static async login(req,res){
        try{
            const userLogin = {
                email: req.body.email,
                password: req.body.password,
            }
            let u = await user.findOne({email:userLogin.email});
            if (u){
                const match = await bcrypt.compareSync(userLogin.password, u.password);
                if(match){
                  const token = jwt.sign({
                    id: u.id,
                    name: u.name,
                    email: u.email,
                    roleType:u.roleType,
                  }, process.env.SECRET_KEY,{expiresIn: '6h'});
                  
                    res.status(200).json({msg:'Successfully Login',token});
                }else{
                    res.status(401).json('Wrong Password');
                }
            }else{
                res.status(401).json('User Not Found');
            }
        }
    
          catch (err) {
            return res
              .status(err.status || 500)
              .json({
                message: err.message || 'Internal server error.',
              })
          }
        }
    
    static async getAllUser(req, res) {
            const rows = await user.find({

            }).select('-password');
        
            return res.status(200).json({
              message: 'Successfully get all User',
              data: rows
            })
        }
    
    static async getUserbyID(req, res) {
            try {
            const userID = req.body.id
            const rows = await user.find({
                _id:userID
              }).select('-password');  
            if (rows == 0){
                return res.status(404).json({
                  message: "User not Found"
                })
              }
              else{
                return res.status(200).json({
                  message: 'Succesfully get User Information',
                  data: rows
                })}
    
            } catch (err) {
              return res
                .status(err.status ||  500)
                .json({ message: err.message || 'Internal server error' })
        }}
    
    static async editUserbyID(req, res) {
       try{
            const filter = {
            _id:req.body.id
            }
            const update ={
            name:req.body.name
        }
        await user.findOneAndUpdate(filter,update);
              return res.status(200).json({
                  message: "Successfully change name.",
                  new_name:req.body.name
              })
          } catch (err) {
              return res
                .status(err.status || 500)
                .json({
                  message: err.message || 'Internal server error.',
                })
            }   
        }
    
    static async deleteUser(req, res) {
            try {
              if (!req.body.id) return { status: 400, message: 'ID cannot be empty' }
        
              await user.deleteOne({
                _id:req.body.id
              });
        
              return res.status(200).json({
                message: 'Successfully delete User'
              })
            } catch (err) {
              return res
                .status(err.status ||  500)
                .json({ message: err.message || 'Internal server error' })
        }}
}



module.exports = userController;