class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarDesenvolvedor()
    }

    criarDesenvolvedor() {
        const sql = "CREATE TABLE IF NOT EXISTS desenvolvedores (id_dev int NOT NULL AUTO_INCREMENT, nome varchar(255) NOT NULL, sexo varchar(1) NOT NULL, idade int NOT NULL, hobby varchar(100) NOT NULL, dt_nascimento date NOT NULL, PRIMARY KEY (id_dev));"

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas