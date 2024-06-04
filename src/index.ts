import express from 'express' // O Express é um módulo Node.js que fornece uma estrutura mínima para implementar um servidor web.
import cors from 'cors' // O CORS (Corss-rigin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens.

// Neste arquivo vamos rodar o servidor, estabelecendo a porta onde ele ficará aberto, e o uso do Express.

// Primeiro é estabelecida uma porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// Em seguida é definido o uso do Express como o módulo para implementação do projeto
const app = express()

// Para termos um primeiro teste, estabelecemos uma Endpoint Raiz que retorna uma mensagem de bem-vindo. Isso é feito utilizando o aplicativo express que foi definido anteriormente.
app.get('/', (req, res) => { //aqui já utilizamos a primeira "requisição" do projeto, em que solicitamos o retorno de uma mensagem ao acessar a Endpoint Raiz.
    res.send('Bem-vindo! Primeiro teste do projeto API.')
})

// Para possibilitar que o aplicativo se comunique entre diferentes origens, como no caso de realizar comunicação entre o backend e o frontend, usamos o CORS.
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404) // O Status retornado segue o padrão de status HTTP. Neste caso, o status 404 equivale ao erro recebido quando a URL não é encontrada
})

// Após tudo isso, se inicia o servidor, utilizando da função listen, que abre o servidor no PORT estabelecido previamente.
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

// Para inicializar o servidor, deve-se executar o script correspondente no terminal, que pode ser encontrado dentro do arquivo "package.json" ("dev") ("npm run dev")