function PollResult(a){this.myChart=null,this.data=null,this.votes=[],this.chart=a}var questionUrl=document.getElementById("questionUrl"),url=questionUrl.dataset.url,formGroup=document.getElementById("formGroup"),questionDiv=document.getElementById("question"),resetButton=document.getElementById("resetButton"),ctx=document.getElementById("myChart");PollResult.prototype.getRequest=function(){var b=this;axios.get("https://polling-app-kjtvxbawxuljqtke.c9users.io/allquestions").then(function(a){b.deployResult(a.data)})},PollResult.prototype.deployResult=function(b){var c=this,d=b.filter(function(a){return url===a.url});c.data=d[0].data;var e=d[0].votes;questionDiv.innerHTML=`<h1 id="dbQues">${c.data.shift()}</h1>`,c.data.map(function(a,b){formGroup.insertAdjacentHTML("afterbegin",`<div class="col-xs-6">
        <input type="radio" id="item" name="name" value="${a},${d[0].url}" >${a}</input></div>`)});for(var f in e)c.votes.push(e[f]);console.log("votes",e),c.deployChart(c.data,c.votes.splice(1,c.votes.length))},PollResult.prototype.deployChart=function(b,c){this.myChart=new Chart(ctx,{type:"polarArea",data:{labels:b,datasets:[{label:"Number of Votes",data:c,backgroundColor:["rgb(44,62,80)","rgb(192,57,43)","rgb(22,160,133)","rgb(39,174,96)","rgb(41,128,185)","rgb(142,68,173)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},window.onload=function(){var a=new PollResult;a.getRequest(),resetButton.addEventListener("click",function(){a.myChart.destroy(),resetButton.disabled=!0,resetButton.form.submit()})};