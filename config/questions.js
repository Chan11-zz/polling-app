var db=require('./db.js');
var easyMongo = db.easyMongo;
var questions=Object.create(null);
var loaded = false;

if(!loaded){
  (function(){
    easyMongo(db.findDocToArray,"questions",{})
         .then(function(result){
           questions.prototype.result=result;
           loaded=true;
         });
    })();
}


module.exports=questions;






//module.exports=questions;
