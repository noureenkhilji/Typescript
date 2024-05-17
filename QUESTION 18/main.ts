//question =18 

let placeTovisit: string[] = ["Paris", "New york", "Rome", "Egypt", "Saudia arab"];
console.log("original order:", placeTovisit);

//print array in alpahabetical order without modifying the actual list

console.log(" Alphabetical order:", placeTovisit.slice().sort());

//array is still in its original order by printing it.
console.log("original order:", placeTovisit);

//Print  array in reverse alphabetical order without changing the order of the original list.

console.log("reverse order:", placeTovisit.slice().sort().reverse());

//Show is still in its original order by printing it again.

console.log("original order:", placeTovisit);

//Reverse the order of your list. Print the array to show that its order has changed

console.log("reverse order changed");
placeTovisit.reverse();
console.log(placeTovisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed

console.log("original order:", placeTovisit.sort());
console.log(placeTovisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("reverse alphabetical order changed:", placeTovisit.sort().reverse());
console.log(placeTovisit);






