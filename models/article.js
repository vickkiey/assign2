var mongoose = require('mongoose');

// DEFINE THE OBJECT SCHEMA
var articleSchema = new mongoose.Schema( {
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: ''
       
    },
    email: {
        type: String,
        default: ''
       
    },
    phone:{
        type:Number,
        default:''
    }
});

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
module.exports = mongoose.model('Article', articleSchema);
