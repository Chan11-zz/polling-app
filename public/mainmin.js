"use strict"
var dom=document.getElementById("ol"),pageTitle=document.getElementById("pageTitle")
axios.get("https://polling-app-chan.herokuapp.com/allquestions").then(function(e){var a=e.data.map(function(e){console.log(e.data[0]),dom.insertAdjacentHTML("afterbegin",'<li><a href="/'+e.url+'">'+e.data[0]+"</a></li>")})
pageTitle.insertAdjacentHTML("afterend","<h3>Total Number of Questions: "+a.length+"</h3>")})
