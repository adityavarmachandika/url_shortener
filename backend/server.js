const express= require('express')
const cors=require('cors')
const shortid=require('shortid')
const dbadd = require("./mongodb/Sendtodb")
const sendbacklink =require("./mongodb/Sendbacklink")
const app = express();
app.use(express.json())
app.use(cors())
const port = 3000;

app.get('/:id',(req,res)=>{
    const id=req.params.id
    const result=sendbacklink(id,res)
})


app.post('/createurl',(req,res)=>{
    
    twourl=req.body
    const extend=shortid.generate()
    twourl['shorturl']=extend
    dbadd(twourl)
})


app.listen(port,(err)=>{
    if(!err)
        console.log('Server is running on port '+port);
    else{
        console.log(err);
    }
})
