// CONFIGURAÇÃO INICIAL DE UM SERVIDOR

const express = require('express') //carregando pacote 
const router = express.Router() //configurando rota
const { v4: uuidv4 } = require('uuid') //chamar

const conectaBancoDeDados = require('./dataBase') //arquivo exportado do banco de dados
conectaBancoDeDados() //chamando a função que conecta o bd

const app = express() // função chamada 'express' dentro do pacote instalado
app.use(express.json())
const porta = 3333


//criar lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Camila' ,
        imagem: 'link',
        minibio: 'Programadora'
    }, 

    {
        id:'2',
        nome: 'Ada' ,
        imagem: 'link',
        minibio: 'Primeira programadora'
    }, 

    {
        id: '3',
        nome: 'Iana Chan' ,
        imagem: 'link',
        minibio: 'Fundadora'
    }
]

//console.table(mulheres)

// Verbos do protocolo HTTP recebem request e response
//GET
function mostraMulheres(request, response){
    response.json(mulheres) // usar a const criada
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){ 
        if(mulher.id === request.params.id){ 
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher) //vai na lista e procura mulher, ao encontrar chama a função e faz a condição

    if(request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }
    
    
    if(request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }
    
    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher){
        if (mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}


//função porta
function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/mulheres', mostraMulheres)) //executar função qnd o endereço for chamado

app.use(router.post('/mulheres', criaMulher))// configurar rota 

app.use(router.patch('/mulheres/:id', corrigeMulher))

app.use(router.delete('/mulheres/:id', deletaMulher))

app.listen(porta, mostraPorta) //Após ouvir a porta -  mostra a porta
