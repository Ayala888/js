async function fetchData(){
    try {
        const aqparat = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users');
        if(!aqparat.ok){
            throw new Error('Ақпарат алу мүмкін болмады')
        }

        const natizhe = await aqparat.json();
        let btn = document.getElementById('search') 
        let result = ''  
        let contains = false
        let natizhe2 = document.querySelector('.result')
    
        btn.addEventListener('click',function(e){
            e.preventDefault()
            natizhe2.textContent =''
    
            let inputText = document.getElementById('input')
            let text = inputText.value.toLowerCase()
    
            natizhe.forEach(element => {
                let tovarAty = element.name.toLowerCase()
    
                if(tovarAty.includes(text)){
                    contains=true
                    result = element.name    
                    resultImg = element.image
                    resultPost = element.post   
                    
                    let div = document.createElement('div')
    
                    div.innerHTML = `<img src="${element.image}" alt="">  <h3>Name: ${element.name}</h3>  <p>Post: ${element.post}</p>`
                    natizhe2.appendChild(div)
                }
            })
    
            if(!contains){
                let div = document.createElement('div')
    
                div.innerHTML = `<h3>Ақпарат өкінішке орай табылмады!</h3>`
                natizhe2.appendChild(div)
            }
        })
    } catch(qate) {
        console.error(qate)
    }
}


fetchData()