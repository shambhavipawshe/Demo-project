let express= require("express");
let Product=require("../models/Product");
let multer = require("multer");
let path = require('path');

let router= express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '././public/userpics/');
    },
    filename: (req, file, cb)=> {
        const timestamp = Date.now();
        const uniqueFilename = timestamp + "." + path.extname(file.originalname).slice(1);
        cb(null, uniqueFilename);
        req.imagepath = "userpics/" + uniqueFilename;
    },
});
const upload = multer({ storage:storage});


router.get("/", (req,res)=>{
    Product.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.get("/:id", (req,res)=>{
    Product.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.post("/", upload.single("image"), (req,res)=>{
   let body=req.body;
   let product= new Product(body);
   product.imagepath=req.imagepath;
 
   product.save().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}));

   },(error)=>{
    res.end(JSON.stringify({status:"faild", data:error}));
   });
 
});

router.put("/:id", (req,res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

router.delete("/:id", (req,res)=>{
    Product.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    
       },(error)=>{
        res.end(JSON.stringify({status:"faild", data:error}));
       });
});

module.exports= router;