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