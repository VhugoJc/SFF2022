const { Schema, model } = require('mongoose');
const saleSchema = Schema({
    clienData: {
        type: Object
    },
    cost: {
        type: Number,
        required: [true, 'El costo no se registró']
    },
    clientId: {
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador del cliente no se registró']
    },
    presaleId: {
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador de la preventa no se registró']
    },
    sellerMemberId: {
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador del vendedor no se registró']
    },
    SellerTeamId: {
        type: Schema.Types.ObjectId,
        required: [true, 'El identificador del equipo no se registró']
    },
    amount: {
        type: Number,
        required: [true, 'La cantidad de preventas no se registró']
    },
    saleDate: {
        type: Date,
        default: Date.now
    },
    tortasTotal :{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        required:true,
        default: true
    } 
});
saleSchema.methods.toJSON = function(){
    const {status,__v,...sale} =  this.toObject();;
    return sale;
}
module.exports = model('Sale', saleSchema);