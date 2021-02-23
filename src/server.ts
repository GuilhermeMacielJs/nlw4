import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.send('hello world')
})

app.post('/', (req, res) => {
    res.json({mensagem: "ola"})
})

app.listen('3000', () => {
    console.log('Server is running!')
})