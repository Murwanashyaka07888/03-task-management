
const express = require('express');
const app = express();
const task = require('./route/task');
const connectDB = require('./db/connect');



app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', task);

//app.use(notFound);
//app.use(errorHandlerMiddleware);
const port = 5000;

//app.get('/api/v1/tasks')  get all  the tasks
//app.post('/api/v1/tasks')  create one task
//app.get('/api/v1/tasks:id')  get single tasks
//app.patch('/api/v1/tasks:id')  update tasks
//app'delete('api/v1/tasks:id')   delete tasks
 
const start = async () => {
    try {
      await connectDB()
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();









