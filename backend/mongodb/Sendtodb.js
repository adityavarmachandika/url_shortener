const connectDB = require('./dbconnect')



const dbadd = async(twourl) =>{
    const client= await connectDB()
    const database=client.db("url_shortener")
    const collection= database.collection("urls")
    const result=await collection.insertOne(twourl)
}

module.exports=dbadd
