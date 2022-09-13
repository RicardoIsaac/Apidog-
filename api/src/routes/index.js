const { Router } = require('express');
const Dogmiddlewares = require("./Dogroutes/Dogmiddlewares")
const Dogtempmiddlewares=require("./Dogroutes/Dogtempmiddlewares")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const server = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
server.use("/dogs",Dogmiddlewares)
server.use("/temperamento",Dogtempmiddlewares)

module.exports = server;
