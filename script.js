let cards = []
let cardTable = document.querySelector('.card-table')
let firstCard = null
let secondCard = null
let noFlipping = false
let livesRemaining = 5
let winCounter = null
let counter = document.querySelector('.lives-remaining')
counter.textContent = livesRemaining

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {
    winCounter = data.length
    cards = [...data, ...data]
    let shuffledCards = shuffle() 
    dealCards(shuffledCards)
  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })

function shuffle() {
  let shuffledCardsArray = [...cards]
  let totalCards = shuffledCardsArray.length
  let currentIndex = totalCards - 1

  for (currentIndex; currentIndex > 0; currentIndex--) {
    let randomCardIndex = Math.floor(Math.random() * (currentIndex + 1))
    let randomCard = shuffledCardsArray[randomCardIndex]
    shuffledCardsArray[randomCardIndex] = shuffledCardsArray[currentIndex]
    shuffledCardsArray[currentIndex] = randomCard
  }
  return shuffledCardsArray
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
  if (noFlipping) return 
  this.classList.add('flipped')
  if (this === firstCard) {
    alert('You cannot click on the same card you just flipped over!!!')
    return
  }

  if (!firstCard) {
    firstCard = this
    return
  }

  secondCard = this
  noFlipping = true
  checkForMatch()
}

function checkForMatch() {
  let isMatch = (firstCard.dataset.name === secondCard.dataset.name)
  console.log(isMatch)
  isMatch ? matchCards() : unflipCards()
}

function unflipCards() {
  setTimeout(() => {
    --livesRemaining
    counter.textContent = livesRemaining

    if (livesRemaining === 0) {
      alert('You are Dead.')
      showImageOverlay()
      return
    }

    firstCard.classList.remove('flipped')
    secondCard.classList.remove('flipped')
    resetFlags()
  }, 1000) 
}

function matchCards() {
  --winCounter

  if (winCounter === 0) {
    setTimeout(() => {
      alert('You are Victorious. Please restart the browser.')
      let starWrapper = document.createElement('div')
      starWrapper.classList.add('star-wrapper')
      document.body.appendChild(starWrapper)
      let starInterval = setInterval(createStar, 300)
      setTimeout(() => {
        clearInterval(starInterval)
      }, 5000)
    }, 1000)
  }

  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  setCardBackground(firstCard, '#ff4500')
  setCardBackground(secondCard, '#ff4500')
  resetFlags()
}

function setCardBackground(card, colour) {
  card.children[0].style.background = colour
}

function resetFlags() {
  firstCard = null
  secondCard = null
  noFlipping = false
}

function showImageOverlay() {
  let wrapper = document.createElement('div')
  wrapper.classList.add('image-overlay')

  let image = document.createElement('img')
  image.src = './images/game-over.jpg'
  wrapper.appendChild(image)
  document.body.appendChild(wrapper)
  requestAnimationFrame(() => {
    wrapper.style.opacity = 1
  })
}

function createStar() {
  let star = document.createElement('div')
  star.classList.add('star')
  let randomX = Math.random() * window.innerWidth
  star.style.left = `${randomX}px`
  let duration = Math.random() * 2 + 3
  star.style.animationDuration = `${duration}s`

  document.getElementsByClassName('star-wrapper')[0].appendChild(star)

  star.addEventListener('animationend', () => {
    star.remove()
  })
}





  