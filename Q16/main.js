//Question 16
var guestlist = ["Huma", "Nigar", "Noorreen khilji"];
console.log("Great News! we found a bigger table");
//unshift
guestlist.unshift("saba");
//splice
guestlist.splice(Math.floor(guestlist.length / 2), 0, "sahiba");
//push();
guestlist.push("cheetah");
console.log(guestlist);
//foreach
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cordially invited to dinner"));
});
