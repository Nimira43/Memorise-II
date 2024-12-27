let cards = []

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {

    const cardsWithMap = data.map(card => [card, card]).flat()
    console.log(cardsWithMap)
    
  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })