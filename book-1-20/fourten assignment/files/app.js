//First Question
document.write("first Question <br>")
for(var i=1;i<=10;i++){
    document.write(`${i} <br>`)

}

// Seconde Question
document.write("Seconde Question <br>")
inp=prompt("enter your number wtich table you see")
lent=prompt("enter your number wtich lenth of tha table")
//2 x 1 = 2
for(var t=1; t<=lent ; t++){
  document.write(`${inp} x ${t} = ${inp*t} <br>`)
}

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

//Four Question
 document.write("Fourth Question <br>")
let a=[1,23,435,67,345,45];
let larger= a[0];
for(var l=0; l<a.length; l++ ){
    if(a [l] >larger){
        larger= a[l];
    }
}
document.write("The largest number in the array is: " + larger +"<br>");

//Fiffth Question
 document.write("fifth Question <br>")
let s=[1,23,435,67,345,45];
let large= s[0];
for(var l=0; l<s.length; l++ ){
    if(s [l] <large){
        large= s[l];
    }
}
document.write("The smaller number in the array is: " + large);


