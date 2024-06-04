// Dentro deste arquivo fica a operação para criar um novo cadastro no sistema.

import cadastro from "../modelos/cadastro";
import database from "./database";

const cadastroRepository = {
    criar: (cadastro: cadastro, callback: (employer_number_cnpj?: number) => void) => {
        const sql = 'INSERT INTO cadastro (employer_number_cnpj, name, spv_susep, corporate_reason, email, number, consultancy) VALUES (?, ?, ?, ?, ?, ?, ?)'
        const params = [cadastro.employer_number_cnpj, cadastro.name, cadastro.spv_susep, cadastro.corporate_reason, cadastro.email, cadastro.number, cadastro.consultancy]
        database.run(sql, params, function(_err) {
            callback(this?.lastID) 
        })
    },
    lerTodos: (callback: (cadastros: cadastro[]) => void) => {
        const sql = 'SELECT * FROM cadastro'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback)
    },
}

export default cadastroRepository