const express = require('express')
const app = express()

//propio del ejercicio 5
const router = express.Router();

//app.get('/')

/*
//Ejercicio 1
app.get('/handler1',function(req,res){
    res.send('handler 1')
});

app.get('/handler2',function(req,res){
    res.send('handler 2')
});
*/

/*
//Ejercicio 2
app.get('/handler1',function(req,res){
    res.send('handler 1')
    console.dir(req.baseUrl)
    console.dir(req.body)
    console.dir(req.hostname)
    console.dir(req.method)
    console.dir(req.originalUrl)
    console.dir(req.path)
    console.dir(req.protocol)
    console.dir(req.query)
}

    )
*/
/*
//Ejercicio 3 
app.get('/handler1',function(req,res){
    res.status(200)
    res.set('Content-Type','text/plain')
    res.send('<h1> handler 1 </h1>')
}
    )
    */

// Ejercicio 4 
/*
    app.use (function(req,res,next)
    {
        console.log('Soy  un Middleware')
        res.send('soy un middleware');
        next();
    })
*/
   router.get('/',(req,res)=>{
       res.sendFile(__dirname+'/public/file.txt')
   })

   app.use('/asset',router);

    app.listen(9000,()=>{
        console.log("El servidor está escuchando en el puerto 9000...")
    })
    