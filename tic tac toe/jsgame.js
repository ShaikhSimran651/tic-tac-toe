
let sign = "x";
let display = document.getElementById("player");


function printx(number){
    let game = document.getElementById("r" + number);
    console.log(game);
    if(game.innerHTML==""){
    game.innerHTML = sign;
    winner();
    checksign();
    display.innerHTML = sign +  " turn ";

   
    }

}


function checksign(){
    if(sign=="x")sign="o";
    else sign = "x";
}

function getbox(number){
    return document.getElementById("r" + number).innerHTML;
}

function checkmove(a,b,c,m){
    if(getbox(a)== m && getbox(b)== m && getbox(c)==m)
    return true;
    else return false;
}

function winner(){
    if (checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)||checkmove(1,5,9,sign)||checkmove(3,5,7,sign)){

        display.innerHTML = sign + " is a winner ";

        for(let i=0;i<=9;i++){
            document.getElementById("r" + i).innerHTML="";
        }
        throw "game end";
    }else{
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""){
        display.innerHTML =  " Its a Tie ";
        throw "Its a Tie";
        }
    }
}