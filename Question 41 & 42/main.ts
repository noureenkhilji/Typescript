// Define the function to print each magician name from an array
function show_magicians(magicians: string[]){
    
    magicians.forEach(name => console.log(name));
}


// Define an array containing magicians names
let magician_names = ["Harry Poter", "Hamza", "Usman"]

// call the function to print each magician name

show_magicians(magician_names);


//Question 42


// Define the function to show magicians names
function show_magicians(magicians: string[]){
    
    magicians.forEach(name => console.log(name));
}



function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`);

}

// Define an array of magicians names
let magician_names = ["Harry Poter", "Hamza", "Usman"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians);


