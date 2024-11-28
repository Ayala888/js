 //1
 let number = [1,2,3,4,5]
 alert("Bastapqy massiv sandary: " + number);
 
 
 let kubtau = number.map(san => san*san*san)
 alert("Sandardy kubtagannan kein: " + kubtau);
 
 for(let san of kubtau){
     if(san % 2 !== 0){
         console.log("Kubtalgan sandar iwindegi taq san: " + san);
     }
 }
 
 
 
 
 
 
 //2
 
 let num = +prompt("Qansha student bar?")
 
 let baga = []
 
 for(let i=1; i<=num; i++){
     let sany = +prompt(i + "-student bagasyn engiz")
     baga.push(sany)
 }
 console.log("Engizgen bagalar: " + baga); 
 
 
 let sum = baga.reduce((total,san) => total + san, 0);
 let ortaqBaga = sum / num
 console.log("Ortaq baga: " + ortaqBaga); 
 
 let zhogaryBall = baga.filter(san => san > 85);
 console.log("85-ten jogary bagalar: " + zhogaryBall);