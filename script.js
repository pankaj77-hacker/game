let userscore=0;
let compsscore=0;


const resultdiv = document.getElementById("result");
const scorediv = document.getElementById("score");

const stonebtn = document.getElementById("stonebtn");
const paperbtn = document.getElementById("paperbtn");
const scissorbtn = document.getElementById("scissorbtn");

function stone(){
    return play ("stonebtn")
}
function paper(){
    return play ("paperbtn")
}
function scissor(){
    return play ("scissorbtn")
}



stonebtn.addEventListener("click", stone);
paperbtn.addEventListener("click", paper);
scissorbtn.addEventListener("click", scissor);

function play(userchoice){
    let compchoice;
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum ===0){
        compChoice = "stone";
    }
    else if(randomNum === 1){
        compChoice="paper";
    }
    else{
        compchoice="scissor";
    }
    if(userChoice===compChoice){
        else if(
         (userchoice==="stone" && compChoice==="stone")
          (userchoice==="paper" && compChoice==="paper")
           (userchoice==="scissor" && compChoice==="scissor") 
        ){
       else {
        resultdiv.textContent="you lose! tumne" + userChoice +"chuna, computer ne" + compchoice;
     compscore = compscore + 1;
    }
    scoreddiv.textContent="you" + userscore + " |computer"


    }
}