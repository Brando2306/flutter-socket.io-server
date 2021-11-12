const express = require('express');
const path = require('path')
require('dotenv').config();

//App de Express
const app = express();

//Node server
const server = require('http').createServer(app);

// const io = require('socket.io')(server);
//Exportamos el io
module.exports.io = require('socket.io')(server);

//LLamar el socket.js que hace la config en el io
require('./sockets/socket');








//Path public - Esto apunte a donde esta el servidor local o  https://ramsesconsulting.com//
const publicPath = path.resolve(__dirname,'public'); 

//Aqui llamamos al html como vista
app.use(express.static(publicPath));




server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto',process.env.PORT);
    
});