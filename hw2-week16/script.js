let addBtn = document.getElementById('addButton')
let listBox = document.getElementById('listBox')
let searchBtn = document.getElementById('searchBtn')

addBtn.addEventListener('click', function(event){
    event.preventDefault()
    let addText = document.getElementById('addText')

/*     console.log(addText.value); */

    if(addText.value && addText.value != null && addText.value != undefined){
        let createElement = creteToDoItem(addText.value)
        // <div id = "listBox">
            // <div class = "NewDiv">
               // <p> Ui jymysyn jasau</p>
               // <button> Өшір </button>
            // </div>
        // </div>

        listBox.appendChild(createElement)

    } else{
        alert("Siz toDo inputyn toltyrmadynyz!")
    }   
    addText.value = ''
})

searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    let searchItem = document.getElementById('searchText').value

    let items = listBox.querySelectorAll('div')

    items.forEach(item => {
        let pItem = item.querySelector('p').textContent.toLowerCase()

        if(!searchItem || searchItem == null){
            item.style.display = 'flex'
        }else if(pItem.includes(searchItem.toLowerCase())){
            item.style.display = 'flex'
        } else{
            item.style.display = 'none'
        }  
        searchItem = ''
    })
})

function creteToDoItem(addTextMany){
    let newDiv = document.createElement('div')
    let item = document.createElement('p')
    let btn = document.createElement('button')

    newDiv.className = "newDiv"
    btn.textContent = 'Өшір'
    item.textContent = addTextMany

    btn.addEventListener('click', function(){
        listBox.removeChild(newDiv)
    })

    //Осы жері қосылды, Үй тапсырмасы мынау                

    item.addEventListener('dblclick',function(){
        addText.value = item.textContent;
        listBox.removeChild(newDiv)
    })

    newDiv.appendChild(item)
    newDiv.appendChild(btn)

    return newDiv;
}