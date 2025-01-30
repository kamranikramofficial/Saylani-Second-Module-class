function repla (){

    let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi quae tenetur et excepturi porro culpa deserunt totam cum quam. Aliquam iste, laboriosam necessitatibus quaerat quisquam explicabo temporibus neque facere.";
    let chang = prompt("enter your word which you want to change")
    let repla = prompt("enter your replasing word")
    let text ="";
    for (let i=0 ; i<para.length ; i++){
        para=para.toLowerCase()
        if (para.slice (i,i+chang.length) == chang) {
         text = para.slice(0,i) + repla + para.slice(i+chang.length)
        }
    }
    document.write("Replaced para" )
    document.write(text)
}

