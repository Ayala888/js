
let textarea = document.getElementById('textarea')
let saqtau = document.getElementById('saqtau')
let clear = document.getElementById('clear')


saqtau.addEventListener('click', (event)=>{
    event.preventDefault()
    localStorage.setItem('textarea', textarea.value)
})

clear.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.clear()
})