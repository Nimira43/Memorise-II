let cards = []
let cardTable = document.querySelector('.card-table')

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {
    cards = [...data, ...data]

    let shuffledCards = shuffle() 

    dealCards(shuffledCards)
  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })

function shuffle() {
  let shuffledCardArray = [...cards]
  let totalCards = shuffledCardsArray.length
  let currentIndex = totalCards - 1
}


function dealCards(cards) { 
  let fragment = document.createDocumentFragment()
  for (const card of cards) {
    let cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.setAttribute('data-name', card.name)

    let frontCardDiv = document.createElement('div')
    frontCardDiv.classList.add('front')

    let backCardDiv = document.createElement('div')
    backCardDiv.classList.add('back')
    let img = document.createElement('img')
    img.classList.add('back-image')
    img.src = `${card.image}.png`
    backCardDiv.appendChild(img)

    cardElement.append(backCardDiv, frontCardDiv)
    fragment.appendChild(cardElement)
  }
  cardTable.appendChild(fragment)

  let dealtCards = document.querySelectorAll('.card')
  dealtCards.forEach(card => {
    card.addEventListener('click', flipCard)
  })
}

function flipCard() {
  this.classList.add('flipped')
}


  