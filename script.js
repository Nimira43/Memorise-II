let cards = []

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {

    // const cardsWithMap = data.map(card => [card, card]).flat()
    // console.log(cardsWithMap)
    
    // const cardsWithFlatMap = data.flatMap(card => {
    //   return [card, card]
    // })
    // console.log(cardsWithFlatMap)

    cards = [...data, ...data]
    console.log(cards)

  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })