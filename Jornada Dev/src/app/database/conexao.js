import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '85689398',
    database: 'dbcopa'
})

conexao.connect()

/**
 * executa um código sql com ou sem valores
 * @param {string} sql instruçao sql a ser executada 
 * @param {string || [selecao, id]} valores string ou um array p/ passar sql
 * @param {string} msgReject msg a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = '', msgReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(msgReject)
            const dados = JSON.parse(JSON.stringify(resultado))
            return resolve(dados)
        })
    })
}
export default conexao