var container = document.getElementsByClassName("container")[0];//retrieves the div with the container class name from the html this script is attached to.
var i;
var cardNumb = 9;
var names = ["Martins", "Lasse", "Erik", "Phillip", "Cameron", "René", "Delia", "Lindsay", "Marius"]
var date = new Date(); //variable that get the curent date. this variable is mentioned in the card to show when the card was last updated.

//creating a loop that creates a div system with classes that are easy to know where what belongs and what it is. creating it in the loop will create as many cards as i want and gives it all the nesesary data outputs to give it different colour later. 
for (i = 0; i < cardNumb; i++) {
container.innerHTML += "<div class='card' data-attribute="+(i+1)+">" +
    "<div class='card--header'><h1 class='card--header__text'>This is a test Card for Noroff, it is number "+(i+1)+"" +
    "</h1></div><div class='card--name'><p>By "+names[i]+"</div><div class='card--timer'>"+date+"" +
    "</div><button class='card--button'>View on site</button></div></div>";
}
var allOdd = document.querySelectorAll('.odd');
for(var k = 0; k < allOdd.length; k++){
    allOdd[k].style.backgroundColor = 'blue';
}}






