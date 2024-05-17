// // Array of current users
// let current_users = ["Ali", "saba", "Huma", "Nikki", "Sahiba"]
// // Array fo new users
// let new_users = ["Noorreen khilji", "Nimmi", "Saba", "Umair", "Huma"]
// // loop through new users to check for usersnames availability
// new_users.forEach(new_one_user => {
//     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
//     if( our_condition){
//         console.log(`sorry ${new_one_user} is already taken!`)
// }else{
//     console.log(`This Username ${new_one_user} is available`)
// }
// })
//question # 33
// creating a Array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // using for-loop
// for(let oneNumber of numbers){
//     let ordinalEnding: string;
//     if(oneNumber === 1){
//         ordinalEnding = "st"
//     }
//     else if(oneNumber ===2){
//         ordinalEnding = "nd"
//     }
//     else if(oneNumber ===3){
//         ordinalEnding = "rd"
//     }
//     else {
//         ordinalEnding = "th"
//     }
//     console.log(`${oneNumber}${ordinalEnding}`);
// }
//question # 34
// creating a Array
// let pizza = ["Chicken Tikka", "Malai cheese", "Fajita"]
// // using for-loop
// for (let onePizza of pizza){
//     console.log(`I like ${onePizza} pizza`);
// }
// // print a message outside of the for-loop
// console.log("Pizza is Love")
// console.log("I eat Pizza")
//Question # 35
// creating a Array
var petAnimals = ["Cat", "Dog", "Rabbit"];
//using for-loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onePet = petAnimals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet."));
    console.log("Any of these animals would make a great pet!\n");
}
// print a message outside of for-loop
