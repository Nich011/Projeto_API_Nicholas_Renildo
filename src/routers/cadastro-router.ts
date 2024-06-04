// usando o Express, vamos definir rotas para cada uma das requisições a serem utilizadas no projeto.
import express from 'express'

// se define uma constante que utiliza a função router do express, que por sua vez tratará cada uma das requisições individualmente.
const cadastroRouter = express.Router()

cadastroRouter.post('/cadastro', (req, res) => {
    res.send('Cria um novo cadastro.')
})

cadastroRouter.get('/cadastro', (req, res) => {
    res.send('Retorna todos os cadastros atuais.')
})

cadastroRouter.get('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.send('Retorna um cadastro específico através do item ${employer_number_cnpj}')
})

cadastroRouter.put('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.send('Atualiza um cadastro específico através do item ${employer_number_cnpj}')
})

cadastroRouter.delete('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.send('Atualiza um cadastro específico através do item ${employer_number_cnpj}')
})

// Após definir cada uma destas rotas, deve-se exporta-las
export default cadastroRouter