const mongoose =require("mongoose")
const { Schema } = mongoose;

const NotesSchema = new Schema({
   Title:
    {
        type: String,
        required: true
    },
    Description:
    {
        type: String,
        required: true
    },
    Tag:
    {
        type: String,
        default:"General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports=mongoose.model('user',NotesSchema)