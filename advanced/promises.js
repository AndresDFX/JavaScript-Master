var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise);
  // expected output: [object Promise]