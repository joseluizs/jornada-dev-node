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

//criando uma função de buscar por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posição do elemento no array
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}
//criar rota raiz
app.get('/', (req, res) => {
    res.send('Curso de NODE JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Cadastrado com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Deletado o ${req.params.id} com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})


export default app