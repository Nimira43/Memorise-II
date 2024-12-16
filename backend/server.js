import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <style>
      body {
        background-color: black;
      }
      h1 {
        font-family: 'Verdana';
        font-weight: 400; 
        background-color: black;
        text-align: center;
        text-transform: uppercase;
        padding: 20px 10px;
        border: 2px solid orangered;
        border-radius: 10px;
        color: gold;
      }
      p {
        color: orangered;
        font-family: 'Verdana';
        font-weight: 400; 
        text-align: center;
      }
    </style>

    <div>
      <h1>Apothematos Management System</h1>
      <hr />
      <p>by NimiraTech</p>
    </div> 
  `)
})

console.log('Apothematos Management System, by NimiraTech')

app.listen(5001, console.log(`Server running on Port 5001`))