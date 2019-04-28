const Http = new XMLHttpRequest();
const url='http://www.amiiboapi.com/api/amiibo/?name=mario';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    };