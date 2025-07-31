function handGenerator(){
    let ranNum = Math.random();
    if(ranNum >= 0 && ranNum < 1/3) return "rock";
    else if(ranNum >= 1/3 && ranNum < 2/3) return "paper";
    else return "scissors";
}
function numGetter(){
    let numRounds = prompt("How many rounds of Rock-Paper-Scissors do you want to play?");
    return numRounds;
}

function handGetter(){
   let answer = prompt("Rock, Paper, or Scissors?");
   return answer;
}

function compare(){
    let cscore = 0;
    let hscore = 0;
    let rounds = numGetter();
    while(rounds >= 1){
        let computer = handGenerator();
        let human = handGetter();
        if(human == "rock"){
            if(computer == "rock"){
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
            else if(computer == "scissors"){
                hscore++;
                alert(`Computer: ${cscore} You: ${hscore} `);
            }
            else {
                cscore++;
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
        }
        else if(human == "paper"){
            if(computer == "rock"){
                hscore++;
                alert(`Computer: ${cscore} You: ${hscore} `);
            }
            else if(computer == "scissors"){
                cscore++;
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
            else {
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
        }
        else{
            if(computer == "rock"){
                cscore++;
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
            else if(computer == "scissors"){
                alert(`Computer: ${cscore} You: ${hscore}`);
            }
            else {
                hscore++;
                alert(`Computer: ${cscore} You: ${hscore} `);
            }
        }
        rounds--;
    }
    if(hscore > cscore) alert("You won!");
    else if(cscore > hscore) alert("You lost!");
    else alert("It's a tie!");
    if(confirm("Do you want to keep playing?")) compare();
    else return;
}
compare();





