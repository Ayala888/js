function fetchData(silteme) {
    return new Promise((resolve, reject) =>{
        fetch(silteme).then(response =>{
            if(response.ok){
                resolve(response.json())
            } else{
                reject(new Error("Қате орын алды!"))
            }
        })
    })
    
}

fetchData('https://jsonplaceholder.typicode.com/users').then(derecter=> {
    derecter.forEach(element => {
        let users = document.createElement('div')
        let resultName = element.name
        let resultEmail = element.email
        users.innerHTML = `<h2>Қолданушы аты: ${resultName}</h2>
        <p>Email: ${resultEmail}</p>`
        let natizhe = document.getElementById('natizhe')
        natizhe.appendChild(users)   
    })  
}).catch(err => {
    console.log(err);
})