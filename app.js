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
        showDetail: false,
        link: "RE-AW08_js2/Projects.html"
    },
    {
        title: 'About and contact',
        description: "Get to know me",
        showDetail: false,
        link: "html/About.html"
    }
];
const app = new Vue({
    el: '.media-list',
    data: {
        title: 'portfolio',
        mediaList: media
    }
});

