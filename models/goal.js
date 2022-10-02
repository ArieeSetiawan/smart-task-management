const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const task = {
  title:'string',
  description:'string',
  is_finished:'boolean',
  createdAt:'date',
}

const goalSchema = new Schema({
    creator: {
    type: 'string',
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string'
      },
    task: {
        type: [task]
      },
    member: {
        type: [Schema.Types.ObjectId]
      },
    attachment: {
        type: ['string']
      },
    progress: {
        type: 'string'
    },
    deadline: {
      type: 'date'
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
const goals = user.model('goals',goalSchema)

module.exports=goals