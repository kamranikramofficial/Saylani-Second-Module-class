//First Question
document.write("first Question <br>")
for(var i=1;i<=10;i++){
    document.write(`${i} <br>`)

}

//Seconde Question
// document.write("Seconde Question <br>")
// inp=prompt("enter your number wtich table you see")
// lent=prompt("enter your number wtich lenth of tha table")
// //2 x 1 = 2
// for(var t=1; t<=lent ; t++){
//   document.write(`${inp} x ${t} = ${inp*t} <br>`)
// }

//Theerd Question
document.write("Therd Question <br>")
let fureit =["apple","mango","banana","oringe","paineapple"]
for(var f=0; f< fureit.length; f++){
   document.write(`${"The index Value is "+ f } ${fureit[f]} <br>`)
}

let small=[99,22,35,55,56];
for (var smal=0; smal>small;smal++){
    document.write(smal)
}





let A = [24, 539, 78, 91, 192];

// Initialize a variable to store the largest number
let largestNumber = A[0];

// Loop through the array to find the largest number
for (let i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}
document.write("The largest number in the array is: " + largestNumber);
