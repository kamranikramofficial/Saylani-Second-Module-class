// first patran
for(var f=1; f<=5;f++){
    for(var fs=1;fs<=f;fs++){
        document.write(fs)
    }
        document.write("<br>")

}

//Second pattern (rotated)
for(var f=5; f>=1; f--){
    for (var s=5; s>f; s--){
        document.write("&nbsp;")
    }
    for(var fs=1; fs<=(2*f-1); fs++){
        document.write("*")
    }
    document.write("<br>")
}


//Therd  pattern
for(var f=1; f<=5; f++){
    for(var fs=1; fs<=f; fs++){
        document.write(f)
    }
    document.write("<br>")
}


//Four  pattern
for(var f=1; f<=5; f++){
    for (var s=5;s>f;s--){
        document.write("&nbsp;")
    }
    for(var fs=1; fs<=((2*f)-1); fs++){
        document.write("*")
    }
    document.write("<br>")

}

//fourth pattern (rotated)
for(var f=5; f>=1; f--){
    for (var s=5; s>f; s--){
        document.write("&nbsp;")
    }
    for(var fs=1; fs<=(2*f-1); fs++){
        document.write("*")
    }
    document.write("<br>")
}

//fifth pattern
for (var i=5; i>=1;i--){
    for(var f=1 ; f<=i ;f++){
        document.write("x")
    }
    document.write('<br>')
}



//six  pattern
for(var f=1; f<=5; f++){
    for (var s=5;s>f;s--){
        document.write("&nbsp;")
    }
    for(var fs=1; fs<=((2*f)-1); fs++){
        document.write("*")
    }
    document.write("<br>")

}


//seven patern
for (var r =1 ; r<5 ; r++){
    for(var c=1 ; c<5 ; c++){
        if(r==5 || c==5 || r==1 || c==1){
           document.write("x")
        }else{
      document.write(" ")
        }
    }
     document.write("<br>")

}