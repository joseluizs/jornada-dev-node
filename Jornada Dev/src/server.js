import app from "./app.js"

const PORT = 3000


//escutar a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando localmente http://localhost:${PORT}`)
})

