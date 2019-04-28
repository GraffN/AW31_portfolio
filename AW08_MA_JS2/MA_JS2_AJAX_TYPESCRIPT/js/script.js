$.ajax({
    url:"http://www.amiiboapi.com/api/amiibo/?name=mario",
    dataType: 'json',
    success: function(result){
        console.log(result);
    }
});
