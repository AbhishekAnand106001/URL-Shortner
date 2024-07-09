const mongoose = require('mongoose');

const urlSchema =  new mongoose.Schema({
    shortId:{
        type:String,
        unique:true
    },
    redirectUrl:{
        type:String,
        require:true
    },
    visitHistory:[{timeStamp:{type:Number}}],   
},
{timestamps: true}
);

const URL = mongoose.modal('url', urlSchema);

module.exports = URL;