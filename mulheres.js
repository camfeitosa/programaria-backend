// CONFIGURAÇÃO INICIAL DE UM SERVIDOR

const express = require('express') //carregando pacote 
const router = express.Router()

const app = express() // função chamada 'express' dentro do pacote instalado
const porta = 3333


//teste
const mulheres = [
    {
        nome: 'Camila' ,
        imagem: 'link',
        minibio: 'Programadora'
    }, 

    {
        nome: 'Ada' ,
        imagem: 'link',
        minibio: 'Primeira programadora'
    }, 

    {
        nome: 'Iana Chan' ,
        imagem: 'link',
        minibio: 'Fundadora'
    }
]

//console.table(mulheres)

function mostraMulheres(request, response){
    response.json(mulheres) // usar a const criada
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`)
}


app.use(router.get('/mulheres', mostraMulheres)) //executar função qnd o endereço for chamado

app.listen(porta, mostraPorta) //Após ouvir a porta -  mostra a porta
