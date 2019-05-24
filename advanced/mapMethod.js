let avengers = ["Iron man", "Thor", "Hulk", "El Capi"];
//vamos a crear a los avengers recargados
let supaAvengers = avengers.map((avenger) => {
    return `${avenger} recargado`;
})

console.log(supaAvengers);
/* Output:
[ 'Iron man recargado',
  'Thor recargado',
  'Hulk recargado',
  'El Capi recargado' ]
 */

let users = [
    { id: 1234, username: "cperdio" },
    { id: 2345, username: "nontendio" },
    { id: 3456, username: "lagarro" },
    { id: 4567, username: "admin" }
];

let orderedUsers = users.map((user)=>{
    let oUser = {};
    oUser[user.id] = user.username;
    return oUser;
});