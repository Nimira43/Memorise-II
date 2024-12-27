let cards = []

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {
    cards = [...data, ...data]
    dealCards(cards)
  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })

  function dealCards(cards) {
    for (const card of cards) {
      let cardElement = document.createElement('div')
      cardElement.classList.add('card')
      cardElement.setAttribute('data-name', card.name)
      cardElement.innerHTML = `
        <div class='back'>
          <img class='back-image' src='${card.image}.png'>
        </div>
        <div class='front'>
        
        </div>
      `
    }
  }