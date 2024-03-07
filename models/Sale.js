let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
    cdate:{type:String, required:true},
    cname:{type:String, required:true},
    cmobileno:{type:String, required:true},
    // subtotal:{type:Number, required:true},
    // gsttotal:{type:Number, required:true},
     grandTotal:{type:Number, required:true},


    products:[
        {  
            productid:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true },
            name:{type:String, required:true},
            price:{type:Number, required:true},
            quantity:{type:Number, required:true},
            subtotal:{type:Number, required:true},
            gstpercent:{type:Number, required:true},
            gsttotal:{type:Number, required:true}, 
            // grandtotal:{type:Number, required:true},
        }
    ]
});

let Sale = mongoose.model("sales", schema);

module.exports = Sale;