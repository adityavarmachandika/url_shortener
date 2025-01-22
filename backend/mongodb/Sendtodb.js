const connectDB = require('./dbconnect')



const dbadd = async(twourl) =>{
    const client= await connectDB()
    console.log(twourl)
    const database=client.db("url_shortener")
    const collection= database.collection("urls")
    const result=await collection.insertOne(twourl)
    console.log(result)
}

module.exports=dbadd
