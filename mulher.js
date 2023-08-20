// CONFIGURAÇÃO INICIAL DE UM SERVIDOR

const express = require('express') //carregando pacote 
const router = express.Router() 


const app = express() // função chamada 'express' dentro do pacote instalado
const porta = 3333

function mostraMulher(request, response){ //associar ao get
    response.json({
        nome: 'Ada Lovelace',
        imagem: 'https://www.imagem.com',
        minibio: 'Pessoa que escreveu o primeiro algoritmo de uma máquina'
    })
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta) //Após ouvir a porta 

