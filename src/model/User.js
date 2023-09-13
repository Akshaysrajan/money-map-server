const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

//schema 

const userSchema =  mongoose.Schema({   
    firstname:{
        type:String,
        required:[true, 'first name is required'],
    },
    lastname:{
        type:String,
        required:[true, 'last name is required'],
    },
    email:{
        type:String,
        required:[true, 'email is required'],
    },
    password:{
        type:String,
        required:[true, 'password is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

},{
    timestamps: true,
});


//hash password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
   next();
});

//compile schema into model

const User = mongoose.model('User', userSchema);

module.exports = User;