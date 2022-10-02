const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyTaskSchema = new Schema({
    name: {
      type: 'string',
      required: true,
    },
    is_finished: {
        type: 'boolean',
        required: true,
    },
    creator: {
        type: 'string',
        required: true,
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
const dtasks = user.model('dailyTask',dailyTaskSchema)

module.exports=dtasks