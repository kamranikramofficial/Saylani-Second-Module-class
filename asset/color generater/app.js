function rgb (){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
     let rg = `rgb(${r}, ${g}, ${b})`;
     console.log(rg);
     document.getElementById("rg").style.color = rg;

     document.getElementById("rg").innerHTML = rg;

}
function has (){
    let stor ="1234567890abcdef";
    let va="";
    for (let i = 0; i < 6; i++) {
     va += stor[Math.floor(Math.random() * stor.length)];
  
     }
     console.log(`#${va}`)
     document.getElementById("hs").style.color = "#"+va;

     document.getElementById("hs").innerHTML = "#"+va;
}
