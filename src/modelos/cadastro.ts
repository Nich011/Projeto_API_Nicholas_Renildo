// Dentro deste arquivo é definida a entidade de dados, ou seja, o recurso/objeto que irá compor o modelo de dados do projeto.
// Neste caso, estaremos definindo os atributos do cadastro de corretores.
// o item aqui definido é entendido como "A tabela de dados" dos corretores no banco de dados.

type cadastro = {
    employer_number_cnpj: number
    name: string
    spv_susep: number
    corporate_reason: string
    email: string
    number: string
    consultancy: string
}

// o "item" criado aqui é então exportado para ser chamado em outros arquivos, que irão verdadeiramente cuidar das requisições HTTP.

export default cadastro