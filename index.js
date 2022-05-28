
// RANDOM NUMBER GENERATION

var randomnumber1=Math.floor(Math.random()*6)+1;

//SELECTING THE IMAGE BASED ON THE RANDOM NUMBER GENERATION , dice1.png - dice6.png

var imag="dice"+randomnumber1+".png";



var imgsrc1="images/"+imag;

// FOR THE FIRST PLAYER

var image1 = document.querySelectorAll("img")[0];

// SETTING THE ATTRIBUTE SO THAT IT CAN CHANGE THE VALUE AT RUN TIME

image1.setAttribute("src",imgsrc1);



// FOR THE SECOND PLAYER

var random2=Math.floor(Math.random()*6)+1;

// GETING THE IMAGE BASED ON THE RANDOM VALUE GENERATED FOR THE PLAYER 2

var imageSrc2="images/"+"dice"+random2+".png";

// GETING THE SECOND IMAGES

var image2=document.querySelectorAll("img")[1];

//SETTING THE ATTRIBUTE SO THAR IT CAN CHANGE ITS VALUE AT RUN TIME

image2.setAttribute("src",imageSrc2);


// GETTING THE WINNER , AND DECLARNG THE WINNER

if(randomnumber1>random2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 Wins1";
}
else
{
  if(randomnumber1<random2)
  {
    document.querySelector("h1").innerHTML="PLAYER 2 Wins";
  }
  else
  {
    document.querySelector("h1").innerHTML="TIE ";
  }
}
