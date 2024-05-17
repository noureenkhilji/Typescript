//question 11
//array
//Defines an array of names
let names: string[] = ["Nazia", "hamdana", "nadia", "imran", "shaheen"];

// loop
// for each
// for loop

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}

//for each

names.forEach(name => {
    console.log(name);
    
});

//for of loop
for (const friendName of names) {
    console.log(friendName);
}

//question 12
for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! how are you today?`);
} 

//for each
names.forEach(name => {
    console.log(`Hi, ${name}! how are you today?`);
    
});

//for of loop
for (const friendName of names) {
    console.log(`Dear, ${friendName}! how are you?`);
}

//question 13
let transportationMode: string[] = ["car", "motorcycle", "bicycle", "bus"];

for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
    
}

transportationMode.forEach(mode => {
    console.log(`i would like to own ${mode}`);
    
});

//question 14
let guestlist:string[] = ["Huma", "Umair", "Nigar"];

//Invite each guest for dinner
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
    
});

//Q15 map ()
//invite guest
let invitation:string[] = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner`)
console.log(invitation);

invitation.forEach(invitation => {
    console.log(invitation);
})
//Question no 15
let guestlists:string[] = ["Huma", "Umair", "Nigar"];

//print the name who cant make dinner
let unableAttend:string = guestlists.splice(1,1)[0];
console.log(`${unableAttend} not invited to make dinner`);

//push

guestlists.push("noorreen khilji");

//print a message

guestlists.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
    
});














