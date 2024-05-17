// // Define a function with a rest parameter that accept items argument
// function makeSandwich(...items: string[]){
//     console.log("\nMaking a sandwich with the following items: \n");
//     items.forEach(singleItem => console.log(singleItem));
//     console.log("\nNow Enjoy Sandwich");
// }
// // call the function 3 times with 3 different number of arguments
// makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
// makeSandwich("Bread", "Butter");
// makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
//QUESTION 45
// Define a function to create a car object with option
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and  madel
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
