// usando o Express, vamos definir rotas para cada uma das requisições a serem utilizadas no projeto.
import express from 'express'
import cadastro from '../modelos/cadastro'

// se define uma constante que utiliza a função router do express, que por sua vez tratará cada uma das requisições individualmente.
const cadastroRouter = express.Router()

cadastroRouter.post('/cadastro', (req, res) => {
    res.send('Cria um novo cadastro.')
}) // http:localhost:4000/api/cadastro

cadastroRouter.get('/cadastro', (req, res) => {
    const cadastro: cadastro[] = [
        {
            employer_number_cnpj: 1,
            name: 'teste',
            spv_susep: '01',
            corporate_reason: 'teste razao social',
            email: 'teste@email.com',
            number: '01 00110 1110',
            consultancy: 'assessoriateste'
        },
        {
            employer_number_cnpj: 2,
            name: 'teste2',
            spv_susep: '02',
            corporate_reason: 'segunda razao social',
            email: 'segundo@email.com',
            number: '02 00110 1110',
            consultancy: 'assessoriadois'
        }
    ]
    res.json(cadastro)
}) // http:localhost:4000/api/cadastro

cadastroRouter.get('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    const cadastro : cadastro = {
            employer_number_cnpj: employer_number_cnpj,
            name: 'nome do cadastro de cnpj ${employer_number_cnpj}',
            spv_susep: '01',
            corporate_reason: 'teste razao social',
            email: 'teste@email.com',
            number: '01 00110 1110',
            consultancy: 'assessoriateste'
    }
    res.json(cadastro)
}) // http:localhost:4000/api/cadastro/:employer_number_cnpj

cadastroRouter.put('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.send('Atualiza um cadastro específico através do item ${employer_number_cnpj}')
}) // http:localhost:4000/api/cadastro/:employer_number_cnpj

cadastroRouter.delete('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.send('Atualiza um cadastro específico através do item ${employer_number_cnpj}')
}) // http:localhost:4000/api/cadastro/:employer_number_cnpj

// Após definir cada uma destas rotas, deve-se exporta-las
export default cadastroRouter