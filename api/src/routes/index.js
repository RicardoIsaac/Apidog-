const { Router } = require('express');
const Dogmiddlewares = require("./Dogroutes/Dogmiddlewares")
const Dogtempmiddlewares=require("./Dogroutes/Dogtempmiddlewares")
const Catmiddlewares=require("./Catroutes/Catmiddlewares")
const Cattempmiddlewares=require("./Catroutes/Cattempmiddlewares")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const server = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
server.use("/dogs",Dogmiddlewares)
server.use("/temperamento",Dogtempmiddlewares)
server.use("/cats",Catmiddlewares)
server.use("/temperamentoCat",Cattempmiddlewares)

module.exports = server;
