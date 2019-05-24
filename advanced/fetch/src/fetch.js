fetch('http://localhost:8887/datasets/westeros.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
});