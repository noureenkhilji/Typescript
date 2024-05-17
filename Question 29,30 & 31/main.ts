// Creating a Array
let favourite_fruits = ["Mango", "Banana", "Pomegranate"]

if (favourite_fruits.includes("Mango")){
    console.log("I Really Like Mangoes");
}
if (favourite_fruits.includes("Banana")){
    console.log("I Really Like Bananas");
}
if (favourite_fruits.includes("Pomegranate")){
    console.log("I Really Like Pomegranates");
}
if (favourite_fruits.includes("Apple")){
    console.log("I Really Like Apple");
}
if (favourite_fruits.includes("Orange")){
    console.log("I Really Like Oranges");
}

//QUESTION 30
// Creating a Array
let usernames = ["Noorreen", "Saba", "Nikki", "Admin", "Nimmi"];

//using ForEach Loop on Array
usernames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})

// Question 31

let userNames = ["Ali", "Saba", "Khan", "Admin", "Samad"]

userNames = []

if (userNames.length === 0){
console.log("Your Array in Empty We need to find some users!")
}
else{
//using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}
