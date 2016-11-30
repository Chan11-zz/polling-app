var bcrypt=require('bcrypt-nodejs');

var user = {
    local:{
        id:"",
        email:"",
        password:""
    },
    facebook:{
        id:"",
        token:"",
        email:"",
        name:""
    },
        generateHash: function(password){
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword : function(password) {
            return bcrypt.compareSync(password, this.local.password);
},
otherDetails:{
     questions:"",
     urls:""
}
   
    

};

module.exports=user;