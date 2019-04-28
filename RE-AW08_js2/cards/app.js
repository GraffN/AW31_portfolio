const cardInfo = [
    {
        name: 'Martins',
        number: 1,
        oddOrEven: "odd"
    },
    {
        name: 'Lasse',
        number: 2,
        oddOrEven: "even"
    },
    {
        name: 'Erik',
        number: 3,
        oddOrEven: "odd"
    },
    {
        name: 'Phillip',
        number: 4,
        oddOrEven: "even"
    },
    {
        name: 'Cameron',
        number: 5,
        oddOrEven: "odd"
    },
    {
        name: 'Rene',
        number: 6,
        oddOrEven: "even"
    },
    {
        name: 'Delia',
        number: 7,
        oddOrEven: "odd"
    },
    {
        name: 'Lindsay',
        number: 8,
        oddOrEven: "even"
    },
    {
        name: 'Marius',
        number: 9,
        oddOrEven: "odd"
    },


]

const app = new Vue ({
    el: '#card-list',
    data:{
        cardList: cardInfo
}
})