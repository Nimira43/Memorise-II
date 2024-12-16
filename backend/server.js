import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json('Apothematos Management System, by NimiraTech')
})

console.log('Apothematos Management System, by NimiraTech')

app.listen(5001, console.log(`Server running on Port 5001`))