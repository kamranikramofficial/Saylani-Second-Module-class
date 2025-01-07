//fast question 
document.write("first Question <br>");

let nma = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: "+nma + "<br>");

let mne = nma.slice(1,2);
document.write("using splice array: " +mne);


// Second question
document.write(" <br> <br>second Question <br>");
let origi = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + origi + "<br>");

let remove = origi.splice(1, 3);
document.write("Array after splice: " + origi + "<br>");
document.write("Removed elements: " + remove + "<br>");

// Third question
document.write("<br><br>Third Question <br>");
let my = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + my + "<br>");

let removed = my.shift();
document.write("Array after shift: " + my + "<br>");
document.write("Removed element: " + removed + "<br>");

// Fourth question
document.write("<br><br>Fourth Question <br>");
let rray = ["arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + rray + "<br>");

rray.unshift("kamran");
document.write("Array after unshift: " + rray + "<br>");

// Fifth question
document.write("<br><br>Fifth Question <br>");
let myfi = ["kamran", "arsalan", "hadeed", "javad", "danis"];
document.write("Original array: " + myfi + "<br>");

myfi.push("raza");
document.write("Array after push: " + myfi + "<br>");

// Sixth question
document.write("<br><br>Sixth Question <br>");
let mySixth = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + mySixth + "<br>");

let poppedElement = mySixth.pop();
document.write("Array after pop: " + mySixth + "<br>");
document.write("Removed element: " + poppedElement + "<br>");



// Seventh question
document.write("<br><br>Seventh Question <br>");
let origise = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + origise + "<br>");

let newse = origise.slice(2, 5);
document.write("New array after slice: " + newse + "<br>");
document.write("Original array after slice: " + origise + "<br>");

// Eighth question
document.write("<br><br>Eighth Question <br>");
let origieig = ["kamran", "arsalan", "hadeed", "javad", "danis", "raza"];
document.write("Original array: " + origieig + "<br>");

let eights = origieig.splice(2, 3);
document.write("Array after splice: " + origieig + "<br>");
document.write("Removed elements: " + eights + "<br>");



// Ten question
document.write("<br><br>Ten Question <br>");
let origiten = ["kamran", "arsalan", "hadeed"];
document.write("Original array: " + origiten + "<br>");

origiten.push( "javad", "danis", "raza");
document.write("Add element usenig push: " + origiten + "<br>");


