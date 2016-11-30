"use strict"
function PollResult(e){this.myChart=null,this.data=null,this.votes=[],this.chart=e}var questionUrl=document.getElementById("questionUrl"),url=questionUrl.dataset.url,formGroup=document.getElementById("formGroup"),questionDiv=document.getElementById("question"),resetButton=document.getElementById("resetButton"),ctx=document.getElementById("myChart")
PollResult.prototype.getRequest=function(){var e=this
axios.get("https://polling-app-chan.herokuapp.com/allquestions").then(function(o){e.deployResult(o.data)})},PollResult.prototype.deployResult=function(e){var o=this,a=e.filter(function(e){return url===e.url})
o.data=a[0].data
var l=a[0].votes
questionDiv.innerHTML='<h1 id="dbQues">'+o.data.shift()+"</h1>",o.data.map(function(e,o){formGroup.insertAdjacentHTML("afterbegin",'<div class="col-xs-6">\n        <input type="radio" id="item" name="name" value="'+e+","+a[0].url+'" >'+e+"</input></div>")})
for(var s in l)o.votes.push(l[s])
o.deployChart(o.data,o.votes.splice(1,o.votes.length))},PollResult.prototype.deployChart=function(e,o){this.myChart=new Chart(ctx,{type:"polarArea",data:{labels:e,datasets:[{label:"Number of Votes",data:o,backgroundColor:["rgb(44,62,80)","rgb(192,57,43)","rgb(22,160,133)","rgb(39,174,96)","rgb(41,128,185)","rgb(142,68,173)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},window.onload=function(){var e=new PollResult
e.getRequest(),resetButton.addEventListener("click",function(){e.myChart.destroy(),resetButton.disabled=!0,resetButton.form.submit()})}
