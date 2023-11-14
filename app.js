 require('dotenv').config()
const express =require('express');
const app = express();
const notFoundMiddleware = require('./starter/middlerware/not-found')
const errorMiddleware = require('./starter/middlerware/error-handler')

//middleware
app.use(express.json())
 //routes
 app.get('/',(req,res)=> {
    res.send('<h1>store API</h1><a href="/api/v1/products">products route</a>')
 })
  //products route

  app.use(notFoundMiddleware)
  app.use(errorMiddleware)



  const port = process.env.PORT || 5001
  const start = async ()=>{
  try {
   //connectDB
   app.listen(port,console.log(`server is listening port ${port}...`))
  }catch (error){
   console.log(error)

  }
  }
  start()