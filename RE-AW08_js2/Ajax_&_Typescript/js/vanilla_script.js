const Http = new XMLHttpRequest();
const url='http://www.amiiboapi.com/api/amiibo/?name=mario';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    };
function getDogs(URL, populateDogs) {
    var newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
        if (newRequest.readyState === 4) {
            if (newRequest.status === 200) {
                if (populateDogs) {
                    populateDogs();
                }
            }
        }
    };
    newRequest.open('GET', URL);
    newRequest.send();
}

//Call function
getDogs('https://dog.ceo/api/breeds/list/all', function(data) {
    console.log(data.message);
});