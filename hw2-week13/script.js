let massiv = []

while(true) {
    let san = +prompt("Сан еңгіз")

    if(san == 0){
        console.log(massiv);
        console.log("Ұзындығы: " + massiv.length); 
        break; 
    } else if(san % 2 == 0){
        massiv.unshift(san)
    } else if(san % 2 !== 0){
        massiv.push(san)
    }
}