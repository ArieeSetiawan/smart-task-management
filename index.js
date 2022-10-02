require('dotenv').config()
const express = require ('express');
const app = express();
var cron = require('node-cron');
const swaggerUI = require('swagger-ui-express');
const dailytask = require('./models/dailytask')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes= require ('./routes/user-routes');
const goalRoutes= require ('./routes/goal-routes');
const taskRoutes= require ('./routes/task-routes');
const dailytaskRoutes = require ('./routes/dailytask-routes')

app.use('/users',userRoutes)
app.use('/goals',goalRoutes)
app.use('/tasks',taskRoutes)
app.use('/daily',dailytaskRoutes)

cron.schedule('0 0 * * *', async () => {
    const filter = {
        is_finished:true,
    }
    const update ={
        '$set':{
            is_finished:false,
        }
    }
    const update2 = await dailytask.updateMany(filter,update);
});

const swaggerDoc = require ('./api-docs');
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, {
    swaggerOptions: {
      docExpansion: "none"
    }
  }));

require('./database/mongo');

app.listen(3000, ()=>{
    console.log("Server is running on port", 3000);
})