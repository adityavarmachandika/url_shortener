const connectDB=require("./dbconnect")


const sendtodb=async(shorturl,res) =>{
    const client=await connectDB()
    const database= client.db('url_shortener')
    const collection=database.collection('urls')

    const result=await collection.findOne({shorturl:shorturl})
    if(result){
        return res.redirect(result.longurl)
    }
    else{
        return res.status(404).send("shorturlnotfind")
    }
}
module.exports=sendtodb