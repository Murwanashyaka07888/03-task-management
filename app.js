
const express = require('express');
const app = express()
const tasks = require('./route/task');
const connectDB = require('./db/connect');
require('dotenv').config()
// const notFound = require('./middleware/notFound')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.static('./public'));
app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware)
// routes

app.use('/api/v1/tasks', tasks);

//app.use(notFound);
//app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

//app.get('/api/v1/tasks')  get all  the tasks
//app.post('/api/v1/tasks')  create one task
//app.get('/api/v1/tasks:id')  get single tasks
//app.patch('/api/v1/tasks:id')  update tasks
//app'delete('api/v1/tasks:id')   delete tasks
 
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();









