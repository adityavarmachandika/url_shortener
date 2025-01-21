const {dbclinet}=require('mongodb')

const connectdb= async ()=>{
    try{
        const client= new Mongoclient("mongodb://localhost:27017/url_shortener")
        await client.connect();
        console.log('MongoDB Connected');
        return client; 
    }
    catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
      }
}
module.exports=connectdb;