let starBtn = document.getElementById('starBtn');
let message = document.getElementById('message');



starBtn.addEventListener('click', () => {
    clearInterval(interval); 
    let sanaqTime = 5; 
    message.textContent = `Хабарлама аяқталуына ${sanaqTime} `; 
    message.style.color = "blue"; 

    var interval = setInterval(() => {
        sanaqTime--;
        if (sanaqTime > 0) {
            message.textContent = `Хабарлама аяқталуына ${sanaqTime} `; 
        } else {
            clearInterval(interval); 
            message.textContent = "Уақытыңыз аяқталды! 😊"; 
            message.style.color = "blue"; 

            setTimeout(() => {
                message.textContent = "";
            }, 5000);
        }
    }, 1000); 
});