function generatePassword() {
    let length = +prompt("Enter your value which you want to generate password");    
    let pas = [];
    
    for (let i = 0; i < length; i++) {
        let ghar = Math.random() * 10; 
        ghar = Math.floor(ghar);
        pas.push(ghar);
    }
    
    pas = pas.join(''); 
    console.log(pas); 
    document.getElementById('chek').innerHTML = pas; 
}

function genera() {
    let length = +prompt("Enter the length of the password you want to generate");    
    let pas = [];
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        pas.push(chars[randomIndex]);
    }
    
    pas = pas.join('');
        console.log(pas);
    document.getElementById('che').innerHTML = pas;
}


function gene() {
    let length = +prompt("Enter the length of the password you want to generate");    
    let pas = [];
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789&*$@#";
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        pas.push(chars[randomIndex]);
    }
    
    pas = pas.join('');
        console.log(pas);
    document.getElementById('ch').innerHTML = pas;
}

