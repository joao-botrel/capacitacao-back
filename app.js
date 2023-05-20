import express from 'express'
import helloRouter from './routers/hello.routes.js'
import categoriaRouter from './routers/categorias.routes.js'
import usuarioRouter from './routers/usuario.routes.js'
import showRouter from './routers/shows.routes.js'
import cron from 'node-cron'
import fs from 'fs'

const cron = cron()
const app = express()
const port = 3000
app.use(express.json())
app.use('/public', express.static('public'))


app.use('/', helloRouter)
app.use('/', categoriaRouter)
app.use('/', usuarioRouter)
app.use('/', showRouter)


//Toda segunda-feira às 8 horas, é verificado se o servidor está funcionando e é enviado num
//arquivo txt o resultado

cron.schedule("0 8 * * 1", function() {
  
    
    let data = `${new Date().toUTCString()} 
                : Servidor funcionando!\n`;
      
    
    fs.appendFile("historico.txt", data, function(err) {
          
        if (err) throw err;
          
        console.log("Erro!");
    });
});



app.listen(port, () => {
    console.log(`A nossa API está rodando na porta ${port}`)
})