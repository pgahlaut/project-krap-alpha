import express from 'express';

const app = express();
const PORT = 80;
const HOST = '0.0.0.0';


app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
    res.send("{'api endpoints':}");
});

app.listen(PORT,HOST,()=>console.log())