// alert("welcome to my table ganerater")
// input =prompt("Foor loop")
// // 2 x 1 =2
// for(i=1; i<=10 ; i++){
//     document.write(`${input} x ${i} = ${input * i} </br>`);
// }

// let ar = ["Hello", "WORLD", "JaVaScript"];
// let lowerCaseStr = ar[1].toLowerCase(); // Converts "WORLD" to "world"
// document.write(lowerCaseStr); // Outputs: "world"

// let ar = ["kamran", "ikram", "ahmad", "ammar", "ahmar"];
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i] == "ahmad") {
//         document.write(ar[i]);
//         break;
//     }
// }


let ar = ["kamran", "ikram", "ahmad", "ammar", "ahmar"];
for(i=1; i<=ar.length; i++){
    if(ar[i-1] == "ahmad"){
        document.write("Ahmad is in the array </br>");
    }
    else if(ar[i-1] == "ammar"){
        document.write("ammar is in the array");
    }
  
}



// if (found) {
//     document.write("Ahmad is in the array");
// } else {
//     document.write("Ahmad is not in the array");
// }

