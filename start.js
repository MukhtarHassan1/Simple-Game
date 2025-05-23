let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");

const getcompchoice=()=>{
  const options=["rock","paper","scissor"];
  const rndval=Math.floor(Math.random()*3);
  return options[rndval];
};

const drawgame=()=>{
  console.log("Game is Draw");
  msg.innerText="Game is Draw, Play Again!";
  msg.style.backgroundColor="#081b31";

};

const showwinner=(userwin,choiceid,compchoice)=>{
  if(userwin)
  {
    userscore++;
    uscore.innerText=userscore;
    msg.innerText=`You Win!, Your ${choiceid} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    compscore++;
    cscore.innerText=compscore;
    msg.innerText=`You Loose!, ${compchoice} beats your ${choiceid}`;
    msg.style.backgroundColor="red";
  }
};



const playgame=(choiceid)=>{
  console.log("User choice =",choiceid);
  //Generate computer choice
  const compchoice=getcompchoice();
  console.log("Computer choice =",compchoice);

  if(choiceid==compchoice)
  {
    drawgame();
  }
  else{
    let userwin=true;
    if(choiceid=="rock")
    {
      //scissor,paper
      userwin=compchoice=="paper"?false:true;
    }
    else if(choiceid=="paper")
    {
      //scissor,rock
      userwin=compchoice=="scissor"?false:true;
    }
    else{
      //paper,rock
      userwin=compchoice=="rock"?false:true;
    }
    showwinner(userwin,choiceid,compchoice);

  }

};

choices.forEach((choicee)=>{
  console.log(choicee);
  choicee.addEventListener("click",()=>{
    const choiceid=choicee.getAttribute("id");
    console.log("Choice is selected",choiceid);
    playgame(choiceid);
  });
});

