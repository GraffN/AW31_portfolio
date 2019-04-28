/*const helloWorld = new Vue ({
    el: '#helloVue',
    data:{
        title: "Hello, World!"
    }
});*/
const media = [
    {
        title: 'Projects',
        description: "Take a look at my latest projects",
        showDetail: false
    },
    {
        title: 'About and contact',
        description: "Get to know me",
        showDetail: false
    }
];
const app = new Vue({
    el: '.media-list',
    data: {
        title: 'portfolio',
        mediaList: media
    }
});

