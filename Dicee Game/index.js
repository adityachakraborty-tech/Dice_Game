let randomNumber1=Math.floor(Math.random()*6)+1; ///1-6

let randomDiceImage="dice"+randomNumber1+".png";  //dice1.png to dice6.png

let randomImageSource="images/"+randomDiceImage;  //images/dice1.png--dice6.png

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//Player 2
let randomNumber2=Math.floor(Math.random()*6)+1;

let randomDiceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//document.querySelectorAll("h1")

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
