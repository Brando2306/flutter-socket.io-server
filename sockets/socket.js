//Importamos el io
const {io} = require('../index');

//Mensajes de Sockets
io.on('connection', client => {

    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });//Esto se dispara cuando el cliente se desconecte

    //Despues del on se indica que accion se hace al recibir evento
    //Si estoy enviando un dato se manda como payload
    client.on('mensaje',(payload)=>{
        console.log('Mensaje recibido de',payload);
        
        // Para notificar a los clientes conectados que recibi un evento
        io.emit('mensaje',{admin: 'Nuevo mensaje recibido'})
    })

});
