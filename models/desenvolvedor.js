const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Desenvolvedor {
    adiciona(desenvolvedor, res) {
        const dt_nascimento = moment(desenvolvedor.dt_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const devData = {...desenvolvedor, dt_nascimento }

        const sql = 'INSERT INTO desenvolvedores SET ?'

        conexao.query(sql, devData, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(desenvolvedor)
            }
        })
    }

    lista(res, req) {
        let sql = 'SELECT * FROM desenvolvedores'
        if (req.query.nome) {
            sql += ` where nome like '%${req.query.nome}%'`
        }

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM desenvolvedores where id_dev=${id}`

        conexao.query(sql, (erro, resultado) => {
            const desenvolvedor = resultado[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(desenvolvedor)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.dt_nascimento) {
            valores.dt_nascimento = moment(valores.dt_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }

        const sql = 'UPDATE desenvolvedores SET ? WHERE id_dev=?'

        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM desenvolvedores WHERE id_dev=?'

        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(204).json({ id })
            }
        })
    }
}

module.exports = new Desenvolvedor