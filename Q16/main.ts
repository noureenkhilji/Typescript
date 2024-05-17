//Question 16

let guestlist:string[] = ["Huma", "Nigar", "Noorreen khilji"];
console.log("Great News! we found a bigger table");

//unshift
guestlist.unshift("saba");

//splice
guestlist.splice(Math.floor(guestlist.length/2),0, "sahiba");

//push();
guestlist.push("cheetah")

console.log(guestlist);

//foreach

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});
    

