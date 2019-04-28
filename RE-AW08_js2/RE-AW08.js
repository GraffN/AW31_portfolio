const AW08 = [
    {
        title: "Cards",
        description: "Cards created and looped trought in javascript",

        showDetail: false,
        link: "cards/cards.html"
    },
    {
        title:"Clock",
        description:"Clock created with javascript and with canvas animation",
        showDetail:false,
        link:"clock/clock.html"
    },
    {
        title:"typescript",
        description:"First words fetched and written in typescript",
        showDetail: false,
        link: "Ajax_&_Typescript/typescript.html"
    }

];
const reCreation = new Vue({
    el:'.re-list',
    data: {
        reList: AW08
    }
});
