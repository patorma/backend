require('dotenv').config()

const app = require('./app')

const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')

//se controla los erroresde la bd
async function initApp(appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
        console.log('Conectado a MongoDb')

    } catch (e) {
        console.log(e)
        console.log('No se ha conectado a MongoDb')
    }
}

//ejecutamos initApp
initApp(appConfig, dbConfig)