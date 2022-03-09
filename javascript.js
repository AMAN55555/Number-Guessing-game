function rand(){
    return Math.floor((Math.random()*100)+1);
}
var x=rand();
var c=0;
function again(){
    x=rand();
    c=0;
    document.getElementById('message').innerHTML='';
}
function check(){
    var n=document.getElementById('input').value;
    if(n>x)document.getElementById('message').innerHTML='Guess a lower number',c++;
    else if(n<x)document.getElementById('message').innerHTML='Guess a higher number',c++;
    else {
        c++;
        document.getElementById('message').innerHTML='Correct'+'<div> You took '+c+' chances</div>'+'<div class="again">'
            +'<input type="button" value="Play again" id="btn" onclick="again()">'
        +'</div>';
        document.getElementById('input').value='';
    }
}