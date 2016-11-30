var i=3;
var addButton = document.getElementById('addButton');
var quesContainer=document.getElementById('lastAnswerDiv');
console.log(addButton,quesContainer);
addButton.addEventListener("click",function (){
    console.log("clicked");
    var input=document.createElement("input");
    input.type="text"; input.id="ans"+i;
    input.name="ans"+i;
    quesContainer.appendChild(input);
    i++;
});
/*
var addElements=function (){
    console.log("clicked");
    var input=document.createElement("input");
    input.type="text"; input.id="ans"+i;
    input.name="ans"+i;
    quesContainer.appendChild(input);
    i++;
};*/

/*
axios.post('https://polling-app-kjtvxbawxuljqtke.c9users.io/questions')
.then(function(response){
    
});*/