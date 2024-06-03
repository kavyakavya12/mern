const mongoose=require("mongoose");
const CustomerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},

        htno:{
            type:Number,
            required:true
        },
        booking_date:{
            type:String,
            required:true
        },
        venue:{
            type:String,
            required:true
        },
        artist:{
            type:String,
        required:true
        }

});
const Customer=mongoose.model("StudData",CustomerSchema);
module.exports=Customer;