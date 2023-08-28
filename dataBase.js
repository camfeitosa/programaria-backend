const mongoose = require('mongoose')

async function conectaBancoDeDados(){ //js assíncrono // ex: aula assíncrona
    try{ //tente realizar os comandos abaixo
        console.log('Conexão com o banco de dados iniciou')

    // continue funcionando
    //string de conexão
    await mongoose.connect('mongodb+srv://camilafeitosa:w9Pi4kBwksMmraYk@clustermulheres.l3hqekx.mongodb.net/?retryWrites=true&w=majority') // await - libera o node para responder outros clientes enquanto o mongoDB não responde

    console.log('Conexão com o banco de dados feita com sucesso!')
    
    } catch(erro){ // pegue algum erro
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados //utilizar em outro arquivo (exportar)

