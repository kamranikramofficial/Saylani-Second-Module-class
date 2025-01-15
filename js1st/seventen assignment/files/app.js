let inpu =prompt("enter your any word")
let reve="";
for (let i=inpu.length -1; i>=0 ; i--){
    reve += inpu[i]
}
if(reve.toLowerCase == inpu.toLowerCase){
    alert("palindrome")
}
else{
    alert("not palindrome")
}


// small and large num valu code

let arranum =[44,55,35,246,78,369,95,456,446];
let largnum =0;
let smallnum=1;
for(let i=0; i<arranum.length; i++){
    if(arranum[i] > largnum){
        largnum = arranum[i];
    }
    if(arranum[i] < smallnum){
        smallnum = arranum[i];
    }
}
alert(`This is large number ${largnum}`)
alert(`This is large small number ${smallnum}`)


//chack your name Word lenth

let nam = prompt("Enter your name");
let leng = nam.length;
alert(`Your name length is ${leng}`)

