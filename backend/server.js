const express= require('express')
const app = express();
const route=express.Router()
const port = 3000;
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.get('/createurl',(req,res)=>{
    console.log("hello")
})
app.post('/createurl',(req,res)=>{
    // console.log("namaste")
    const data=req.body
    console.log(data)
})
app.listen(port,(err)=>{
    if(!err)
        console.log('Server is running on port '+port);
    else{
        console.log(err);
    }
})