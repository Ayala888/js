const data = [
    {
        title: '"Абай жолы" - Мұхтар Әуезов',
        description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'
    },
    {
        title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов',
        description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.'
    },
    {
        title: '"Көшпенділер" - Ілияс Есенберлин',
        description: 'Қазақ хандығының қалыптасу тарихы.'
    },
    {
        title: '"За нами Москва" - Александр Бек',
        description: 'Панфиловшылардың ерліктері туралы тарихи деректі роман.'
    }
];

let container = document.querySelector(".cards");

function createCard(cardData) {

    let card = document.createElement('div');
    card.classList.add("card");


    card.innerHTML = `
        <h2>${cardData.title}</h2>
        <p>${cardData.description}</p>
        <button>Жою</button>
    `;

    card.querySelector('button').onclick = () => container.removeChild(card);

    return card; 
}


for (let i = 0; i < data.length; i++) {
    container.appendChild(createCard(data[i]));
}