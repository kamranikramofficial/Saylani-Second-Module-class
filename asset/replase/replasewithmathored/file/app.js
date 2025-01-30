function repla (){
    let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi quae tenetur et excepturi porro culpa deserunt totam cum quam. Aliquam iste, laboriosam necessitatibus quaerat quisquam explicabo temporibus neque facere.";
    let chang = prompt("enter your word which you want to change")
    let repla = prompt("enter your replasing word")
    para=para.toLowerCase()
    let newpa = para.replace(chang, repla)
    document.write(newpa)
}