const AW08 = [
    {
        title: "Cards",
        description: "Cards created and looped trought in javascript",
        showDetail: false,
        link: "../RE-AW08_js2/cards/cards.html",
        task:"This project was done together with the 'Clock' and 'typescript' Projects." +
            "For the Cards section of the assignment we created a card in html and looped trought data in javascript " +
            "to create 9 identical cards with different text" +
            ". in the last submission of this i made every odd/even card change color by the means of css" +
            ". in this new submission i've converted the whole creation of the cards to a Vue.js" +
            "script file for easier management and more options on creating the cards" +
            ". by doing so i've been able to make every odd/even card different colors with script" +
            " insted of with css"
    },
    {
        title:"Clock",
        description:"Clock created with javascript and with canvas animation",
        showDetail:false,
        link:"../RE-AW08_js2/clock/clock.html",
        task:"This project was done together with the 'cards' and 'Typescript' assignment." +
            " for this section of that assignment we were to create a animated canvas with" +
            " a clock going from the left to the right" +
            " this was done just like asked the first time i submitted so for this ive made" +
            " it more apealing to look at but still showing the same clock as displayed in the given assignment"
    },
    {
        title:"typescript",
        description:"First words fetched and written in typescript",
        showDetail: false,
        link: "../RE-AW08_js2/Ajax_&_Typescript/typescript.html",
        task:"This project was done together with the 'Cards' and 'Clock' assignment." +
            " For this section we were to fetch an api by the means of typescript and vanilla javascript." +
            " This is also a part of the assignment i didnt get much feeback on so i made the text that i fetch" +
            " vissible without having to look in the console."
    },
    {
        title: "Frameworks",
        description: "tasked to create a small sample website using a css framework",
        showDetail:false,
        link:"../RE-AW04_CSS_MA_Frameworks",
        task:"In this assignment we were tasked " +
            "to create a small sample website using a css framework. " +
            "I chose to use sass because sass is the framework i felt more " +
            "comfortable with. " +
            "The feedback i got for this assignment was " +
            "'there are to many classes on your cards section " +
            "you could have trimmed that down alott more " +
            "also you have forgotten to use [] to logically seperate your classes.'" +
            "in this submission i have cleaned up the classes by adding the [] brackets for readability" +
            " and i also made some small adjustments to make the site more interactable"
    }


];
const reCreation = new Vue({
    el:'.re-list',
    data: {
        reList: AW08
    }
});
