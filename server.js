const express = require('express') //carregando pacote 

const app = express() // função chamada 'express' dentro do pacote instalado
const porta = 3333

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.listen(porta, mostraPorta) //Após ouvir a porta -  mostra a porta

// mostraPorta()
// localhost:3333 (Cannot Get, sem dados para o servidor servir)