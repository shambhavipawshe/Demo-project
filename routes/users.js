let express= require("express");
let User=require("../models/User");

let router= express.Router();

router.get("/", (req,res)=>{
    User.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.get("/:id", (req,res)=>{
    User.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.post("/", (req,res)=>{
   let body=req.body;
   let user= new User(body);
 
   user.save().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}));

   },(error)=>{
    res.end(JSON.stringify({status:"faild", data:error}));
   });
 
});

router.put("/:id", (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.delete("/:id", (req,res)=>{
    User.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

module.exports= router;