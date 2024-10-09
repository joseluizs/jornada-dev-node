import express from 'express'
import routes from './routes.js'

const app = express()

//usar o router
app.use(routes)


app.use(express.json())


export default app