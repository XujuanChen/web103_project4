import express from 'express'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import carsRouter from './routes/cars.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'lightning.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use
app.use('/cars', carsRouter)
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">🚘 - Custom Cars API - 🚘 </h1>')
})

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})