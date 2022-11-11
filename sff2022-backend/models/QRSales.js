class user {
    constructor(id, idSocket, jwt) {
        this.id = id;
        this.idSocket = idSocket;
        this.jwt = jwt;
    }
}

class QRSales {
    constructor() {
        this.users = {};
    }
    get arrUsers() {
        return Object.values(this.users); // [ {}, {}, {}]
    }
    connectUser(user) {
        this.users[user.id] = user
    }
    disconnectUser( id ) {
        delete this.users[id];
    }

}

module.exports = QRSales;