const mongoose = require('mongoose')

const connectDB = (url) => {

  return mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected with Database'))
  // .catch((err)=>console.log('Failed to connect to the Database'))
}

module.exports = connectDB