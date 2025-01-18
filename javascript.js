
var comp=0;
var hum=0;

function getComputerChoice()
{
    let ran = Math.random()

    if(ran>0 && ran < 0.33)
        return "rock";

    else if(ran>0.33 && ran < 0.66)
        return "paper";

    else 
        return "scissors";
}


// function getHumanChoice()
// {
//     let choice = prompt("Enter your choice in rock , paper, scissors");
//     return choice;

// }



 function playround(compchoice,humchoice)
 {
    humchoice = humchoice.toLowerCase();
    if(compchoice.toLowerCase() === humchoice.toLowerCase())
    {
        comp=comp;
        hum=hum;
       
    }
    if (
        (humchoice === "rock" && compchoice === "scissors") ||
        (humchoice === "paper" && compchoice === "rock") ||
        (humchoice === "scissors" && compchoice === "paper")
    ) {
        hum++; 
    }
    else{
        comp++;
    }

 }


 function game()
{

 const rock = document.getElementById('rock');
 const paper = document.getElementById('paper');
 const scissors = document.getElementById('scissors');
 const resDiv = document.createElement("div");
 const scoreDiv = document.createElement("div");
 const buttons = document.getElementById("buttons");

 const clear = document.getElementById("clear");

 buttons.appendChild(scoreDiv);
 buttons.appendChild(resDiv);

 function handClick(choice)
 {
    const compchoice = getComputerChoice();
    const result = playround(compchoice,choice);
    scoreDiv.textContent = `Scores: you ${hum} - Computer ${comp}`;

    if(hum==5 || comp==5)
    {
        if(hum==5)
        {
            resDiv.textContent="You win !!! Game over, get some sleep.";
        }
        else{
            resDiv.textContent="Computer win!! try again next time. ";
        }
    }

 }

 rock.addEventListener('click',() => handClick("rock"));
 paper.addEventListener('click',() => handClick("paper"));
 scissors.addEventListener('click',() => handClick("scissors"));

 clear.addEventListener('click', ()=>{
    resDiv.textContent="";
    scoreDiv.textContent="";
    comp=0;
    hum=0;
 });


}

game();