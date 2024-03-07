let express= require("express");
let Sale=require("../models/Sale");

let router= express.Router();

router.get("/", (req,res)=>{
    Sale.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.get("/:id", (req,res)=>{
    Sale.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.post("/", (req,res)=>{
   let body=req.body;
   let sale= new Sale(body);
 
   sale.save().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}));

   },(error)=>{
    res.end(JSON.stringify({status:"faild", data:error}));
   });
 
});

router.put("/:id", (req,res)=>{
    Sale.findByIdAndUpdate(req.params.id, req.body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.delete("/:id", (req,res)=>{
    Sale.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

module.exports= router;