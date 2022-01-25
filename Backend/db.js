const mongoose= require('mongoose');
const mongoURI="mongodb://localhost:27017/iNOTEBOOK?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connectted to mongoos successfully");
    })
}
module.exports=connectToMongo;
