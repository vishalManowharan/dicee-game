let randomNumber1 = Math.floor((Math.random()*6)+1);
let source1 = "images/dice"+ randomNumber1 +".png";

document.querySelector(".img1").setAttribute("src", source1);

 let randomNumber2 = Math.floor((Math.random()*6)+1);
let source2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",source2)

 if (randomNumber1>randomNumber2) {
     document.querySelector("h1").innerHTML= "Player 1 Wins!🚩";
     document.querySelector("h1").classList.add("change");
 }
 else if (randomNumber1<randomNumber2) {
     document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
     document.querySelector("h1").classList.add("change");
 }
 else {
     document.querySelector("h1").innerHTML="Oh it's a draw!";
 }