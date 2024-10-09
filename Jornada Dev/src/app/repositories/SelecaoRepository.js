import conexao from "../database/conexao.js"

class SelecaoRepository {

    //CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?; "
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if (erro) return reject('Não foi possível cadastrar!')
                const dados = JSON.parse(JSON.stringify(resultado))
                return resolve(dados)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar!')
                const dados = JSON.parse(JSON.stringify(resultado))
                return resolve(dados)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?; "
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar!')
                const dados = JSON.parse(JSON.stringify(resultado))
                return resolve(dados)
            })
        })
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?; "
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if (erro) return reject('Não foi possível atualizar!')
                const dados = JSON.parse(JSON.stringify(resultado))
                return resolve(dados)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?; "
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível deletar!')
                const dados = JSON.parse(JSON.stringify(resultado))
                return resolve(dados)
            })
        })
    }
}

export default new SelecaoRepository()