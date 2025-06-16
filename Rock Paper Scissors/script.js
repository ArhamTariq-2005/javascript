let userscore = 0;
let oppscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let yourscore = document.querySelector("#yourscore")
let opposcore = document.querySelector("#oppscore");

const oppchoice = () =>{
    let options = ["rock" , "papper" , "scissors"];
    let randidx =Math.floor( Math.random() * 3);
    return options[randidx];
}
const drawgame = () =>{
    console.log("game was draw")
    msg.innerText = "Game Was Draw!"
    msg.style.backgroundColor = "black";
}
const showwinner = (userwin) =>{
if(userwin){
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    userscore++;
   yourscore.innerText = userscore;
}else{
msg.innerText = "You Lose";
msg.style.backgroundColor = "Red"
oppscore++;
opposcore.innerText = oppscore;
}
}
let playgame = (userchoice) =>{
console.log("user chose ",userchoice);
const oppochoice = oppchoice();
console.log("opp chose",oppochoice);
if(userchoice === oppochoice){
    drawgame();
}else {
    let userwin = true;
    if(userchoice === "rock"){
userwin = oppochoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userwin = oppochoice === "scissors" ? false : true;
    }else{
       userwin = oppochoice === "rock" ? false : true;
    }
    showwinner(userwin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
playgame(userchoice);
    })
})