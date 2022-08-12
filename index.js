//num1
var num1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice" +num1+ ".png";
var randomimage="images/" +randomdiceimage ;
var image1=document.querySelectorAll('img')[0];
image1.setAttribute("src",randomimage);

//num2
var num2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice" +num2+ ".png";
var randomimage2="images/" +randomdiceimage2 ;
var image2=document.querySelectorAll('img')[1];
image2.setAttribute("src",randomimage2);



//check
if(num1>num2){
  document.querySelector("h1").innerHTML="player1wins🚩";
}
else if (num2>num1) {
  document.querySelector("h1").innerHTML="player2wins🚩";
}
else{
  document.querySelector("h1").innerHTML="draw!";
}
