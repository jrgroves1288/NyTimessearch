$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=AQ4AUtVBd75I7pJxAg7kmaRH3Z3ounBR",
    method: "GET"
}).then(function(response){
    console.log(response)
})