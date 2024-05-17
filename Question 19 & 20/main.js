//question 19
var guestlist = ["Huma", "Nigar", "Noorreen khilji"];
//print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guestlist.unshift("alice", "bob");
//print message updated list
console.log("updated list of guest:", guestlist);
//remove guest from the list
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("sorry, ".concat(removedGuest, ", we cant invite you"));
    }
}
//print a message to each of the two people still on your list, letting them know they are still invited
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you both are invited for the dinner"));
});
guestlist.splice(0, guestlist.length);
//print updatedempty list
console.log("updated list of guest:", guestlist);
//Question 20
var countries = ["usa", "canada", "france", "japan"];
//print list of countries
console.log("list of countries:", countries.forEach(function (country) {
    console.log(country);
}));
