import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

function dbConnect(app) {
  mongoose.connect(process.env.DBURL) 
    .then(() => { 
      console.log('Banco conectado')
      app.listen(3000)
    })
    .catch((err) => {console.log(err)})
}

export default dbConnect
