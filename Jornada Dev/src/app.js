import express from 'express'

const app = express()

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Portugal', grupo: 'A' },
    { id: 3, selecao: 'Israel', grupo: 'B' },
    { id: 4, selecao: 'Argentina', grupo: 'G' },
]

//criar rota raiz
app.get('/', (req, res) => {
    res.send('Ola Pessoal')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app