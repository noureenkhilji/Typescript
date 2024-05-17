//question 11
//array
//Defines an array of names
var names = ["Nazia", "hamdana", "nadia", "imran", "shaheen"];
// loop
// for each
// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (name) {
    console.log(name);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//question 12
for (var i = 0; i < names.length; i++) {
    console.log("hello, ".concat(names[i], "! how are you today?"));
}
//for each
names.forEach(function (name) {
    console.log("Hi, ".concat(name, "! how are you today?"));
});
//for of loop
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("Dear, ".concat(friendName, "! how are you?"));
}
//question 13
var transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("i would like to own ".concat(mode));
});
//question 14
var guestlist = ["Huma", "Umair", "Nigar"];
//Invite each guest for dinner
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
//Q15 map ()
//invite guest
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
console.log(invitation);
invitation.forEach(function (invitation) {
    console.log(invitation);
});
//Question no 15
var guestlists = ["Huma", "Umair", "Nigar"];
//print the name who cant make dinner
var unableAttend = guestlists.splice(1, 1)[0];
console.log("".concat(unableAttend, " not invited to make dinner"));
//push
guestlists.push("noorreen khilji");
//print a message
guestlists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
