// usando o Express, vamos definir rotas para cada uma das requisições a serem utilizadas no projeto.
import express from 'express'
import cadastro from '../modelos/cadastro'
import cadastroRepository from '../repositories/cadastro-repository'

// se define uma constante que utiliza a função router do express, que por sua vez tratará cada uma das requisições individualmente.
const cadastroRouter = express.Router()

cadastroRouter.post('/cadastro', (req, res) => {
    const cadastro: cadastro = req.body
    cadastroRepository.criar(cadastro, (employer_number_cnpj) => {
        if (employer_number_cnpj) {
            res.status(201).location(`/itens/${employer_number_cnpj}`).send()
        } else {
            res.status(400).send()
        }
    })
}) // http:localhost:4000/api/cadastro

cadastroRouter.get('/cadastro', (req, res) => {
    cadastroRepository.lerTodos((cadastros) => res.json(cadastros))
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
    res.status(204).send()
}) // http:localhost:4000/api/cadastro/:employer_number_cnpj

cadastroRouter.delete('/cadastro/:employer_number_cnpj', (req, res) => {
    const employer_number_cnpj: number = +req.params.employer_number_cnpj
    res.status(204).send()
}) // http:localhost:4000/api/cadastro/:employer_number_cnpj

// Após definir cada uma destas rotas, deve-se exporta-las
export default cadastroRouter