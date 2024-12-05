//tap1
 
let oqushylar = [
    {
        name: "Asan",
        age: 15,
        grades: {
            math: 85,
            english: 90,
            sciense: 80,
        },
        address: {
            city: "Almaty",
            street: "Abaya,"
        }
    },
    {
        name: "Aigerim",
        age: 16,
        grades: {
            math: 90,
            english: 85,
            sciense: 90,
        },
        address: {
            city: "Astana",
            street: "Mangilik El,"
        }
    }
]

let [birinshiOqyshy] = oqushylar

let{name, grades: {math}, address: {city}, country = "Қазақстан"} = birinshiOqyshy

console.log("Нәтиже");
console.log("Esimi: " + name);
console.log("Matematika bagasy: " + math);
console.log("Qalasy: " + city);
console.log("Memleketi: " + country);




//tap2

let classA = ["Амина", "Әділ", "Әлина"];
let classB = ["Берік", "Бақыт", "Баян"];

let classAB = [...classA, ...classB]

classAB.push("Мұғалім")
classAB.unshift("Директор")

console.log(classAB);