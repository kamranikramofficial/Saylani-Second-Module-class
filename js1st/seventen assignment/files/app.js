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