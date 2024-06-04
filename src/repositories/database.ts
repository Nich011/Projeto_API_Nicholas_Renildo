// Dentro do arquivo database vamos importar o SQLite para efetuar a conexão com a base de dados e criação das tabelas dentro da mesma.

import  sqlite3  from "sqlite3";

const DBSOURCE = 'db.sqlite'

const SQL_CADASTRO_CREATE = `
    CREATE TABLE cadastro (
        employer_number_cnpj INTEGER PRIMARY KEY
        name TEXT,
        spv_susep TEXT,
        corporate_reason TEXT,
        email TEXT,
        number TEXT,
        consultancy TEXT
    )`

    const database = new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            console.error(err.message)
            throw err
        } else {
            console.log('Base de dados conectada com sucesso.')
            database.run(SQL_CADASTRO_CREATE, (err) => {
                if (err) {
                    // Possivelmente a tabela já foi criada
                } else {
                    console.log('Tabela cadastro criada com sucesso.')
                }
            })
        }
    })
    export default database