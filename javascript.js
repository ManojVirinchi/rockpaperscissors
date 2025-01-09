
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


function getHumanChoice()
{
    let choice = prompt("Enter your choice in rock , paper, scissors");
    return choice;

}



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

    for(let i=0;i<5;i++)
    {

    
        var compchoice = getComputerChoice();
        var humchoice  = getHumanChoice();

        if(humchoice.toLowerCase() != "rock" && humchoice.toLowerCase()!="paper" && humchoice.toLowerCase()!="scissors")
        {
            console.log("wrong entry");
            i--;
            continue;
        }

        playround(compchoice,humchoice);
        console.log(`Score: Human - ${hum}, Computer - ${comp}`);

    }

    if(hum==comp)
    {
        console.log(`its a tie as both got ${hum}`);

    }

    else if(hum>comp)
    {
        console.log(`you win !! your score is ${hum} and computer score is ${comp}`);
    }

    else{
        console.log(`Computer wins!! your score is ${hum} and computer score is ${comp}`);
    }

}

game();