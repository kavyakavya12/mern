const express=require("express"); 
const mongoose=require("mongoose"); 
const customer = require("./models/Customer"); 
const CustomerModel=require("./models/Customer"); 
const app=express(); 
app.use(express.json()); 
mongoose.connect("mongodb+srv://project:project@cluster0.bxouok0.mongodb.net/?retryWrites=true&w=majority", 
{useNewUrlParser: true, },()=>console.log("Connected to DB")); 
 
app.post("/newstud",async(req,res)=>{ 
    const studName=req.body.studName; 
    const studNumber=req.body.studNumber; 
    const studDate=req.body.studDate; 
    const studVenue=req.body.studVenue; 
    const studArtist=req.body.studArtist; 
    const customer =new CustomerModel({name:studName,htno:studNumber, booking_date:studDate,venue:studVenue,artist:studArtist}); 
    try{ 
    await customer.save(); 
    res.send("Inserted Values");} 
 
catch(err){ 
    console.log(err); 
}}); 
app.get("/display",async(req,res)=>{ 
    CustomerModel.find({},(err,result)=>{ 
        if(err){ 
            res.send(err); 
        } 
        res.json(result); 
    }); 
}); 
app.put("/upstud",async(req,res)=>{ 
    const upname=req.body.upName; 
    const id=req.body.id; 
    const date=req.body.date; 
    const ven=req.body.ven; 
    const art=req.body.art; 
    try{ 
    await CustomerModel.findById(id,(err,upCustomer)=>{ 
        upCustomer.name=upname; 
        upCustomer.save(); 
        res.json(CustomerModel); 
    }); 
    } 
 
catch(err){ 
    console.log(err); 
}}); 
app.delete("/delstud/:id",async(req,res)=>{ 
    const id=req.params.id; 
    await CustomerModel.findByIdAndRemove(id); 
}); 
    app.listen(3001,()=>console.log("Server Ready."))