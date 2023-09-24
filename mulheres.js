// CONFIGURAÇÃO INICIAL DE UM SERVIDOR

const express = require('express') //carregando pacote 
const router = express.Router() //configurando rota

const conectaBancoDeDados = require('./dataBase') //arquivo exportado do banco de dados
conectaBancoDeDados() //chamando a função que conecta o bd

const Mulher = require('./mulherModel')
const mulherModel = require('./mulherModel')
const app = express() // função chamada 'express' dentro do pacote instalado
app.use(express.json())
const porta = 3333

//console.table(mulheres) Objeto excluido

// Verbos do protocolo HTTP recebem request e response
//GET
async function mostraMulheres(request, response){
    try {
        const mulheresDoBanco = await Mulher.find()

        response.json(mulheresDoBanco)
    } catch (error) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
     })

     try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada) 
     } catch (error) {
        console.log(erro)
     }
}

//PATCH
async function corrigeMulher(request, response){
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        
    if(request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }
    
    if(request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }
    
    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }
    
    if(request.body.citacao){
        mulherEncontrada.citacao = request.body.citacao
    }

    const mulherAtualizada = await mulherEncontrada.save()

    response.json(mulherAtualizada)

    } catch (error) {
        console.log(erro)
    }

}

//DELETE
async function deletaMulher(request, response){
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
