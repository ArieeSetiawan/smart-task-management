const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    photo: {
      type: 'string'
    },
    description: {
      type: 'string'
      },
    roleType:{
      type:'string'
    },
    createdAt:{
      type: 'date'
    },
    updatedAt:{
        type: 'date'
    },
    deleteAt:{
        type: 'date'
    },
  },
    {
      versionKey: false,
      //timestamps: true,
    }
  )

const user = mongoose.connection.useDb('userDB')
const users = user.model('users',userSchema)

module.exports=users