// CHAPTER-21: CHANGING CASE
// method:1
var city = "PESHAWAR";
console.log(city.toLowerCase());

// method:2
city = city.toLowerCase();
console.log(city);

// using second variable
var city = "PESHAWAR";
var smallCity = city.toLowerCase();
console.table([city, smallCity])


// zaroori nhi ha k all uppercase ho, mix b hosakte hn
var city = "KaRachi";
console.log(city.toLowerCase());

toUpperCase()
var city = "karachi";

// without using second variable
console.log(city.toUpperCase());
city = city.toUpperCase();
console.log(city);

// using second variable
var capitalizedCity = city.toUpperCase();
console.log(city);
console.log(capitalizedCity);


// zaroori nhi ha k all lowercase ho, mix b hosakte hn
var city = "peShaWar";
console.log(city.toUpperCase());

// REAL WORLD EXAMPLE
// latptop scheme
var eligibleUniversities = [
    "sarhad",
    "iqra",
    "islamia",
    "city",
    "ims",
    "cecos",
    "nust",
    "agriculture",
];
var studentUniversity = prompt("Please enter your university name");
var isEligible = 0;

for (var i = 0; i < eligibleUniversities.length; i++) {
    if (studentUniversity.toLocaleLowerCase() === eligibleUniversities[i]) {
        isEligible = 1;
        break;
    }
}

if (isEligible) {
    alert("Eligible!");
} else {
    alert("Not Eligible!")
}