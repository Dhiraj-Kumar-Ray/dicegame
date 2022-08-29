
var randumnumber1 = Math.floor(Math.random()* 6) +1

var randomImage = "dice"+ randumnumber1 + ".png";

var randomImageSource = "img/" + randomImage

var immage1 = document.querySelectorAll("img")[0]
immage1.setAttribute("src",randomImageSource)


var randumnumber2 = Math.floor(Math.random()* 6) +1

var randomImage2 = "dice"+ randumnumber2 + ".png";

var randomImageSource2 = "img/" + randomImage2

var immage2 = document.querySelectorAll("img")[1]
immage2.setAttribute("src",randomImageSource2)


if(randumnumber1 > randumnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(randumnumber1 < randumnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "draw"
}