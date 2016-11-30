var i=3;
var addButton = document.getElementById('addButton');
var quesContainer=document.getElementById('lastAnswerDiv');
addButton.addEventListener("click",function (){
    var input=document.createElement("input");
    input.type="text"; input.id="ans"+i;
    input.name="ans"+i;
    quesContainer.appendChild(input);
    i++;
});
