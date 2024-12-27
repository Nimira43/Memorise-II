let cards = []

fetch('./data/card-info.json')
  .then(response => response.json())
  .then((data) => {

    console.log(data)
    
  })
  .catch((error) => {
    console.log('Error fetching card data: ', error)
  })