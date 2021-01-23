const Desenvolvedor = require('../models/desenvolvedor')

module.exports = app => {
    app.get('/desenvolvedor', (req, res) => {
        Desenvolvedor.lista(res, req)
    })

    app.get('/desenvolvedor/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Desenvolvedor.buscaPorId(id, res)
    })

    app.post('/desenvolvedor', (req, res) => {
        const desenvolvedor = req.body

        Desenvolvedor.adiciona(desenvolvedor, res)
    })

    app.put('/desenvolvedor/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Desenvolvedor.altera(id, valores, res)
    })

    app.delete('/desenvolvedor/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Desenvolvedor.deleta(id, res)
    })
}