var Myfruit = /** @class */ (function () {
    function Myfruit(message) {
        this.fruit = message;
    }
    Myfruit.prototype.name = function () {
        return "my favorite fruit is " + this.fruit;
    };
    return Myfruit;
}());
var nameOfMyfruit = new Myfruit("Strawberry");
console.log(nameOfMyfruit.name());
var truth = true;
var Name = "my name is jonathan";
var Age = 32;
var Sentance = Name + "and im " + Age + " years old, and thats " + truth;
console.log(Sentance);
const getFruitElement = document.getElementById("typescript_fruit");
const getSentenceElement = document.getElementById("typescript_sentence");
getFruitElement.innerHTML = nameOfMyfruit.name();
getSentenceElement.innerHTML = Sentance;