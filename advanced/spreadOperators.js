let avengers = ["Iron man", "Thor", "Hulk", "El Capi"];
let guardianes = ["Peter Quill", "Gamora", "Drax el destructor", "Rocket", "Groot"]
    
avengers = [avengers[0], avengers[1], ...guardianes, avengers[2]];
console.log(avengers);

function sum(a,b){
    return a+b;
}

sum(...[2,5]);