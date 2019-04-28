fetch('http://www.amiiboapi.com/api/amiibo/?name=mario') //getting the information from the link
.then((response) => { // a promise that ask for response and if the response is accepted the rest of the code executes
    return response.json()
    console.log(response);

    })
.then(jsonResult => { //console log the result what we have got from the response earlier
    console.log(jsonResult)
    });