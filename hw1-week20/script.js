
let silteme = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions'
let currentIndex = 0

let kelesiBtn = document.getElementsByClassName('.next-btn')

async function fetchData(){
    try{
        let response = await fetch(silteme)

        if(!response.ok){
            throw new Error('Деректерді алу мүмкін болмады')
        }

        const data = await response.json()

        return data
    } catch(err){
        console.error(err.message);
        
    }
}



function jauapTekseru(jauapIndex){
    kelesiBtn.classList.remove('hidden')

    console.log("Сіз таңдаған индекс ", jauapIndex);
    
}





async function showQuestions(){
    let aqparattar = await fetchData()

    let suraq = document.querySelector('.question')
    let btns = document.querySelectorAll('.buttons')
    console.log(aqparattar);

    console.log(btns);
    
    
    btns.forEach((button,index) => {
        button.textContent = aqparattar[currentIndex].options[index]
    })
    

    suraq.textContent = aqparattar[currentIndex].question

    kelesiBtn.classList.add('hidden')
}


showQuestions()





//Timer
let sanaqSany = document.getElementById('timer');
let sanaq = 15

let timerInterval = setInterval(() => {
    sanaq--;
    if (sanaq > 0) {
        sanaqSany.textContent = `Time left: ${sanaq}s`
    } else {
        sanaqSany.textContent = "",
        clearInterval(timerInterval);
    }
}, 1000); 