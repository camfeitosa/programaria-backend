const mongoose = require('mongoose')
require('dotenv').config()


async function conectaBancoDeDados(){ //js assíncrono // ex: aula assíncrona
    try{ //tente realizar os comandos abaixo
        console.log('Conexão com o banco de dados iniciou')

    // continue funcionando
    //stri ng de conexão
    await mongoose.connect(process.env.MONGO_URL) // await - libera o node para responder outros clientes enquanto o mongoDB não responde

    console.log('Conexão com o banco de dados feita com sucesso!')
    
    } catch(erro){ // pegue algum erro
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados //utilizar em outro arquivo (exportar)

