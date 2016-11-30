"use strict"
var db=require("./config/dbmin.js"),easyMongo=db.easyMongo,userDetails=require("./config/userDetails.js"),name=userDetails.local.email.slice(0,userDetails.local.email.indexOf("@")),id=userDetails.local.id
module.exports=function(e,s){function i(e,s,i){e.isAuthenticated()?i():s.redirect("/")}function n(e){var s=[],i={}
for(var n in e)s.push(e[n]),i[e[n]]=0
var a=userDetails.generateHash(s[0]),o=userDetails.local.email.slice(0,userDetails.local.email.indexOf("@")),t=userDetails.local.id
easyMongo(db.insertDoc,"questions",{id:t,name:o,data:s,url:a.slice(-18).replace(/([^\w])/g,""),votes:i})}function a(e,s){e=e.substring(1),easyMongo(db.findDoc,"questions",{url:e}).then(function(i){null==i?s.redirect(301,"/"):s.render("pollresult",{url:e})})}e["delete"]("/deletemyquestions/:url",function(e,s){var i=e.params.url
s.status(200),s.send("ok"),easyMongo(db.deleteDoc,"questions",{url:i})}),e.use(function(e,s,i){switch(e.path){case"/postpollquestions":case"/":case"/signup":case"/dashboard":case"/main":case"/login":case"/poll":case"/index":case"/logout":case"/allquestions":case"/profile":case"/myquestions":i()
break
default:a(e.path,s,i)}}),e.get("/",function(e,s){s.render("index.ejs")}),e.get("/login",function(e,s){s.render("login.ejs",{message:e.flash("message")})}),e.post("/login",s.authenticate("local-login",{successRedirect:"/main",failureRedirect:"/login",failureFlash:!0})),e.get("/signup",function(e,s){s.render("signup.ejs",{message:e.flash("message")})}),e.post("/signup",s.authenticate("local-signup",{failureRedirect:"/signup",failureFlash:!0}),function(e,s){s.redirect("/main")}),e.get("/profile",i,function(e,s){e.flash("message","Welcome")
var i=userDetails.local.email.slice(0,userDetails.local.email.indexOf("@"))
s.render("profile.ejs",{message:e.flash("message"),name:i})}),e.get("/myquestions",function(e,s){var i=userDetails.local.id
easyMongo(db.findDocToArray,"questions",{id:i}).then(function(e){s.json(e)})}),e.get("/logout",function(e,s){e.logout(),s.redirect("/")}),e.get("/dashboard",i,function(e,s){s.render("dashboard")}),e.post("/dashboard",function(e,s){n(e.body),s.redirect(303,"/main")}),e.post("/postpollquestions",function(e,s){var i=e.body.name.split(","),n=i[1],a="votes."+i[0],o={}
o[a]=1,s.redirect(301,"/"+n),db.updateDoc({url:n},{$inc:o},"questions").then(function(){})}),e.get("/main",i,function(e,s){s.render("main")}),e.get("/allquestions",function(e,s){easyMongo(db.findDocToArray,"questions",{}).then(function(e){s.json(e)})})}
