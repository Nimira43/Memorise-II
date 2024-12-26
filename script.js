let cards = []

loadCards()

async function loadCards() {
  try {
    let response = await fetch('./data/card-info.json')
    let cardsArray = await response.json()
    console.log(cardsArray)
  } catch (error) {
    console.log(error)
  }
}
