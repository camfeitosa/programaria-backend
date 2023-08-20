const express = require('express') 
const router = express.Router() //funcao dentro do express

const app = express() 
const porta = 3333

function mostraOla(request, response){ //funcao da resposta 
    response.send("Olá, Mundo!")
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/ola', mostraOla)) //usar o get, Use a rota get chamando o endereço olá e aparece a funcao mostraOla

app.listen(porta, mostraPorta) 