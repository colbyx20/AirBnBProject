const {MongoClient} = require('mongodb');

const connectDB = async () => {
    const conn = new MongoClient(process.env.MONGO_URI);

    try{
        await conn.connect();
        console.log(`MongoDB connected: ${conn}`.cyan.underline);
    }catch(error){
        console.log(error);
        process.exit(1); //exit with failure
    } finally{  // close connection to cluster
        await conn.close()
    }
}

module.exports = connectDB;