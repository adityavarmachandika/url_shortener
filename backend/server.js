const express= require('express')
const cors=require('cors')
const shortid=require('shortid')
const connectdb = require("./mongodb/dbconnect")

const app = express();
app.use(express.json())
app.use(cors())



const route=express.Router()
const port = 3000;

app.get('/createurl',(req,res)=>{
    console.log("hello")
})
app.post('/createurl',(req,res)=>{
    // console.log("namaste")
    const data=req.body
    console.log(data)
    const shorturl=shortid.generate()
    console.log(shorturl)
})
app.listen(port,(err)=>{
    if(!err)
        console.log('Server is running on port '+port);
    else{
        console.log(err);
    }
})