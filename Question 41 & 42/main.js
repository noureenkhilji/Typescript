// Define the function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians names
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// call the function to print each magician name
show_magicians(magician_names);
// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Poter", "Hamza", "Usman"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
