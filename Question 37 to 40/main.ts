// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

//calling a function with by default values
make_shirt();

//calling a function now with mediem size and default message
make_shirt("Mediem")

// calling a function now with Small size and also different print message
make_shirt("Small", "I Love JavaScript")

//Questin 38

function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
// calling the function
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");

//Question 39
// creating a function with parameters which return a values in string
function city_country(city: string, country: string) {
    return "".concat(city, " , ").concat(country);
}
//calling a function and print the returned value
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));

// Questiom 40

//Define the make_album function

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

//calling three function with different values

let album1 = make_album("noorreenkhilji", "Album title 1");

let album2 = make_album("noor", "Album title 2");

let album3 = make_album("nikki", "Album title 3", 10);

// print values of our object created my function

console.log(album1); 
console.log(album2);
console.log(album3);












