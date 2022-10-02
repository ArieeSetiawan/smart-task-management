const userPaths = require("./paths/userPaths");
const goalPaths = require("./paths/goalPaths");
const taskPaths = require('./paths/taskPaths');
const dtaskPaths = require('./paths/dailyTaskPaths')
require('dotenv').config();

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Smart Task Managsment',
    description: 'Smart Task Managsment API',
    contact:{
        name: "Smart Task",
        url:'https://www.google.com/',
      },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Dev server'
    },
  ],
  components: {
    securitySchemes: {
      token: {
        type: 'apiKey',
        description: 'Login as User/Seller to get token.',
        in: 'header',
        name: 'authorization'
      }
    }
  },
  paths: {
    ...userPaths,
    ...goalPaths,
    ...taskPaths,
    ...dtaskPaths,
  }
}