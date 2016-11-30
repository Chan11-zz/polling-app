"use strict"
function Profile(){this.id=[],this.number=null}var dom=document.getElementById("ol"),total=document.getElementById("numberOfQuestions")
Profile.prototype.getRequest=function(){var e=this
axios.get("https://polling-app-chan.herokuapp.com/myquestions").then(function(t){var o=t.data
o.map(function(t,o){var a={}
a["Q"+o]=t.url,e.id.push(a),dom.insertAdjacentHTML("afterbegin",'<li><a href="/'+t.url+'">'+t.data[0]+'</a>\n             <a href="/profile"><i id="Q'+o+'" class="fa fa-trash-o fa-fw fa-3x"></i></a></li>')}),total.insertAdjacentHTML("afterbegin",'<h3 id="numberOfQuestions">Total Number of Questions: '+o.length+"</h3>"),0===o.length&&dom.insertAdjacentHTML("afterbegin",'<h1 id="noQuestions">No Questions Added</h1>'),total.insertAdjacentHTML("afterend",'<div align="center" ><a href="https://polling-app-chan.herokuapp.com/dashboard">\n            <button id="addQButton">Add questions</button></a></div>'),e.addEvents()})},Profile.prototype.addEvents=function(){var e=this
this.id.map(function(t,o){var a=document.getElementById("Q"+o)
document.getElementById(t["Q"+o]),document.getElementById("ol")
a.addEventListener("click",function(){e.deleteRequest(t["Q"+o])})})},Profile.prototype.deleteRequest=function(e){axios["delete"]("https://polling-app-chan.herokuapp.com/deletemyquestions/"+e).then(function(e){})}
var myprofile=new Profile
window.onload=function(){myprofile.getRequest()}
