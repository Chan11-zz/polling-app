var pageTitle=document.getElementById("pageTitle")
var dom=document.getElementById('ol')
axios.get("https://polling-app-chan.herokuapp.com/allquestions").then(function(e){var t=e.data.map(function(e){dom.insertAdjacentHTML("afterbegin",'<li><a href="/'+e.url+'">'+e.data[0]+"</a></li>")})
pageTitle.insertAdjacentHTML("afterend","<h3>Total Number of Questions: "+t.length+"</h3>")})
