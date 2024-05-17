// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//calling a function with by default values
make_shirt();
//calling a function now with mediem size and default message
make_shirt("Mediem");
// calling a function now with Small size and also different print message
make_shirt("Small", "I Love JavaScript");
//Questin 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling the function
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
//Question 39
// creating a function with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//calling a function and print the returned value
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
// Questiom 40
//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three function with different values
var album1 = make_album("noorreenkhilji", "Album title 1");
var album2 = make_album("noor", "Album title 2");
var album3 = make_album("nikki", "Album title 3", 10);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
