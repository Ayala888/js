
let topTandau = document.getElementById("topTandau");
let pikir = document.getElementById("pikir");
let bagalau = document.getElementById("bagalau");
let bagaMeni = document.getElementById("bagaMeni");
let qatePikir = document.getElementById("qatePikir");
let formaHabarlama = document.getElementById("formaHabarlama");
let forma = document.getElementById("pikirFormasy");


topTandau.addEventListener("change", function () {
    console.log("Таңдалған топ:", topTandau.value);
});


bagalau.addEventListener("input", function () {
    bagaMeni.textContent = bagalau.value;
});

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    qatePikir.textContent = "";
    formaHabarlama.textContent = "";


    let akparat = {
        top: topTandau.value,
        pikir: pikir.value,
        baga: bagalau.value,
    };
    console.log("Оқушы пікірі бойынша жазылған ақпараттар:", akparat);

    if (pikir.value.length > 15) {
        qatePikir.textContent = "Пікіріңіз максималды 15 сөзден құралуы керек";
        return;
    }
    formaHabarlama.textContent = "Сіздің пікіріңіз қабылданды!";
});