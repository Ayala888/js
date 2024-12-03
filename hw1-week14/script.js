let footballer = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 39,
    golSany: 913,
    comanda: ["Sporting", "Man United", "Real Madrid", "Juventus", "Al-Nassr"], 
    list_info: function(){
        return `First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Gol Sany: ${this.golSany}
        Jasy: ${this.age}
        Comanda Aty: ${this.comanda}`
    },
    fullName: function(){
        return ` ${this.firstName}  ${this.lastName} `; 
    },
    currentClub: function(){
        return this.comanda.pop()
    }

};

alert(footballer.list_info());

footballer.golSany += 2;
alert("Gol salgannan kein sany: " + footballer.golSany)

console.log(footballer.fullName());
console.log("Current Club: " + footballer.currentClub());