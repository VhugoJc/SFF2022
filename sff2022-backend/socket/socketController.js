const QRSales = require('../models/QRSales');

const qrSales = new QRSales();

const socketController = (socket) => {
    socket.on('store-qr-client', (payload, callback) => {
        let client = new Object();
        client.id = payload.id;
        client.idSocket = socket.id;
        client.jwt = payload.jwt;
        qrSales.connectUser(client);
    });

    socket.on('disconnect', () => {
        qrSales.disconnectUser(socket.id);
    })

    socket.on('disconnectUser', () => {
        qrSales.disconnectUser(socket.id);
    })


    socket.on('successful-sale', (payload, callback) => {
        const myClients = qrSales.arrUsers;
        const { clientId } = payload;

        const socketid = myClients.find(client => client.id === clientId);
        console.log(`td:${socketid}`);
        if (socketid) { // if the user is active, send notification
            socket.to(socketid.idSocket).emit('successful-sale');
        }
    });
}
module.exports = { socketController };