const express=require('express');

const app=express();


app.get('/info', (req, res)=>{
    
     res.json({message : 'OK'})
})

app.listen(3100, ()=>{

    console.log("started the server at port 3100");
    
})

