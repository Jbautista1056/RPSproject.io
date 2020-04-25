//Picture Hashes



const bgURLs = {
    "Air": "https://media1.tenor.com/images/7288e74af891120889f7f27ce24faac1/tenor.gif?itemid=3850240",
    "Fire": "https://media0.giphy.com/media/Q9QPan1dfM7hS/source.gif",
    "Water": "https://media.giphy.com/media/gwzCxndPFeo4E/giphy.gif",
    "Earth": "https://media0.giphy.com/media/OoaTf8fEuesP6/source.gif",
  }

 const bgURLs2 = {
  "earth2": "https://66.media.tumblr.com/4c1dc2d55d09c8058cf037d35f7fad9b/5ef3b03b4691502e-01/s640x960/564620e50ba7ab7426cd2ac236930ebecb96fab6.gif",
  "air2": "https://i.lensdump.com/i/j6uJj9.gif",
  "water2": "https://i1.lensdump.com/i/j6uEtm.gif",
  "fire2": "https://data.whicdn.com/images/59975840/original.gif"
 }

 

//DOM accessed variables

let options = document.getElementById("Options")
let button = document.getElementById("button")

let leftCurtain = document.getElementById("left-curtain")
let rightCurtain = document.getElementById("right-curtain")
let playerBar = document.getElementById("PlayerBar")    // this is for the opacity
let computerBar = document.getElementById("ComputerBar")  //this is for the opacity
let h3 = document.getElementsByTagName("h3")[1]

let player = document.getElementById("Player");
let computer = document.getElementById("Computer");
let playerProg = document.getElementById("player-health");
let computerProg = document.getElementById("computer-health");

let resultText = document.getElementById("ResultText")

//Variables to be updated

// These need to be declared so they can be accessed throughout
// the game, but their values won't be known until an event happens

let playerChoice = null;
let computerChoice = null;
let playerHealth = 300;
let computerHealth = 300;

// event listener actions

window.addEventListener("load", function() {
  let toph= document.getElementById("toph")
  let aang = document.getElementById("aang")
  let katara = document.getElementById("katara")
  let zuko = document.getElementById("zuko")
  let button = document.getElementById("button")
  let bolin= document.getElementById("bolin")
  let mako = document.getElementById("mako")
  let tenzin = document.getElementById("tenzin")
  let korra = document.getElementById("korra")

})

//Aesthetic functions

function changeButton() {
  button.style.background = '#faff3ebd'
  button.innerText= 'RESET GAME';
  playerBar.style.visibility = 'visible';
  computerBar.style.visibility = 'visible';
  history.style.visibility = 'visible';
}

function curtainSlide() {
  rightCurtain.style.animationPlayState =  "running";
  leftCurtain.style.animationPlayState = "running";
}


function activateAnimations() {
  toph.style.animationPlayState = "running";
  toph.style.visibility = "visible";
  zuko.style.animationPlayState = "running";
  zuko.style.visibility = "visible";
  katara.style.animationPlayState = "running";
  katara.style.visibility = "visible";
  aang.style.animationPlayState = "running";
  aang.style.visibility = "visible";
  bolin.style.animationPlayState = "running";
  bolin.style.visibility = "visible";
  mako.style.animationPlayState = "running";
  mako.style.visibility = "visible";
  korra.style.animationPlayState = "running";
  korra.style.visibility = "visible";
  tenzin.style.animationPlayState = "running";
  tenzin.style.visibility = "visible";
  options.style.visibility = "visible";
  options.style.animationPlayState = "running";
  playerBar.style.visibility = "visible";
  playerBar.style.animationPlayState = "running";
  computerBar.style.visibility = "visible";
  computerBar.style.animationPlayState = "running";
}




// Game functions

function getComputerChoice() {
  let random = Math.floor(Math.random() * Object.keys(bgURLs).length);
  computerChoice = Object.keys(bgURLs2)[random];
  return Object.keys(bgURLs2)[random];
}

let updatePlayerChoice = Options.addEventListener("click", function(e) {
  playerChoice = e.target.id;    //rmbr target always returns the child, so when u click the Div Air, Fire, Water, you're getting the child element in this case the <p></p>
  return playerChoice
})

function resetGame() {
   playerProg.value = 300
   computerProg.value = 300
   computerHealth = 300
   playerHealth = 300
   resultText.innerHTML = "..."
 }

function compareChoices() {
   if (playerChoice === "Air" && computerChoice === "fire2") {
     playerHealth -= 50 
     computerHealth 
     resultText.innerHTML = "You chose Air which is significantly weak to Fire." 
  } else if (playerChoice === "Air" && computerChoice === "water2") {
     playerHealth 
     computerHealth -= 25  
     resultText.innerHTML = "You chose Air which is slightly effective against Water."  
  } else if (playerChoice === "Air" && computerChoice === "air2") {
     playerHealth -= 25
     computerHealth -= 25   
     resultText.innerHTML = "You chose Air which is slightly effective to Air."
  } else if (playerChoice === "Air" && computerChoice === "earth2") {
     playerHealth 
     computerHealth -= 50
     resultText.innerHTML = "You chose Air which is significantly effective to Earth." 
  } else if (playerChoice === "Water" && computerChoice === "air2") {
     playerHealth -= 25;
     computerHealth   
     resultText.innerHTML = "You chose Water which is slightly weak to Air." 
  } else if (playerChoice === "Water" && computerChoice === "fire2") {
     playerHealth 
     computerHealth -= 50; 
     resultText.innerHTML = "You chose Water which is significantly effective to Fire." 
  } else if (playerChoice === "Water" && computerChoice === "water2") {
     playerHealth 
     computerHealth;
     resultText.innerHTML = "You chose Water which diminishes any effect against Water." 
  } else if (playerChoice === "Water" && computerChoice === "earth2") {
     playerHealth -= 50
     computerHealth;
     resultText.innerHTML = "You chose Water which is slightly weak to Earth." 
  } else if (playerChoice === "Fire" && computerChoice === "fire2") {
     playerHealth -= 25;
     computerHealth -= 25;
     resultText.innerHTML = "You chose Fire which is slightly effective to Fire." 
  } else if (playerChoice === "Fire" && computerChoice === "air2") {
     playerHealth 
     computerHealth -= 50;  
     resultText.innerHTML = "You chose Fire which is significantly effective to Air." 
  } else if (playerChoice === "Fire" && computerChoice === "water2") {
     playerHealth -= 50;
     computerHealth
     resultText.innerHTML = "You chose Fire which is significantly weak to Water." 
  } else if (playerChoice === "Fire" && computerChoice === "earth2") {
     playerHealth 
     computerHealth -= 25;
     resultText.innerHTML = "You chose Fire which is slightly effective to Earth." 
  } else if (playerChoice === "Earth" && computerChoice === "fire2") {
     playerHealth -= 25;
     computerHealth 
     resultText.innerHTML = "You chose Earth which is slightly weak to Fire." 
 } else if (playerChoice === "Earth" && computerChoice === "air2") {
     playerHealth -= 50;
     computerHealth 
     resultText.innerHTML = "You chose Earth which is significantly weak to Air." 
 } else if (playerChoice === "Earth" && computerChoice === "water2") {
     playerHealth 
     computerHealth -= 50;
     resultText.innerHTML = "You chose Earth which is significantly effective to Water." 
 } else if (playerChoice === "Earth" && computerChoice === "earth2") {
     playerHealth 
     computerHealth;
     resultText.innerHTML = "You chose Earth which diminishes any effect against Earth." 
 } 
    // You must update the progress bars from within the function
   // that changes their values.
   playerProg.value = playerHealth;  //the playerhealth variable is used to be made equal to the progress's value
   computerProg.value = computerHealth;
 }
 
function winnerLoser() {
   if (playerProg.value === 0) {
      resultText.innerHTML = "Team Korra wins!"
   } else if (computerProg.value === 0) {
      resultText.innerHTML = "Team Aang wins!"
   }
}



  
 //Function Activation

button.addEventListener("click", curtainSlide)
button.addEventListener("click", changeButton)
button.addEventListener("click", activateAnimations)
button.addEventListener("click", resetGame)


//Game flow


options.addEventListener("click", function(e) { 
  if (e.target.classList.contains("element")) { 
    // Set the player choices
    playerChoice = e.target.id;
    player.style.backgroundImage = 'url(' + bgURLs[playerChoice] + ')';   //we use the word fire, air, etc inside to reference it inside of the hash.
    computer.style.backgroundImage = 'url(' + bgURLs2[getComputerChoice()] + ')';
    // Now update the progress bars
    compareChoices();
    winnerLoser();
  }
})


