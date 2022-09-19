const { Schema, model } = require('mongoose');
const saleSchema = Schema({
    clienData:{
        type:Object
    },
    cost:{
        type: Number,
        required: [true, 'El costo no se registró']
    },
    clientId:{
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador del cliente no se registró']
    },
    presaleId:{
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador de la preventa no se registró']
    },
    sellerMemberId:{
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador del vendedor no se registró']
    },
    SellerTeamId:{
        type:Schema.Types.ObjectId,
        required: [true, 'El identificador del equipo no se registró']
    },
    amount:{
        type:Number,
        required: [true, 'La cantidad de preventas no se registró']
    },
    saleDate:{
        type: Date,
        default: Date.now
    }
});
module.exports = model('Sale', saleSchema);