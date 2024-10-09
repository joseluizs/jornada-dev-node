import app from "./src/app.js"
import conexao from "./infra/conexao.js"

const PORT = 3000

conexao.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conectado')

        //escutar a porta
        app.listen(PORT, () => {
            console.log(`Servidor rodando localmente http://localhost:${PORT}`)
        })
    }
})


