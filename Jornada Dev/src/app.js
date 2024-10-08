import express from 'express'

const app = express()
app.use(express.json())

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Portugal', grupo: 'A' },
    { id: 3, selecao: 'Israel', grupo: 'B' },
    { id: 4, selecao: 'Argentina', grupo: 'G' },
]

//criar rota raiz
app.get('/', (req, res) => {
    res.send('Curso de NODE JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Cadastrado com sucesso!')
})

export default app