const { Schema, model } = require('mongoose');
const productSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es requerida']
    },
    category: {
        type: String,
        required: [true, 'La categoria es requerida']
    },
    amount: {
        type: Number,
        required: [true, 'La cantidad es requerida']
    },
    img: {
        type: String,
        required: [true, 'La imagen es requerida']
    },

});

const presaleSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    cost: {
        type: Number,
        required: [true, 'El costo es requerido']
    },
    description: {
        type: String
    },
    sellerId: {
        type: Schema.Types.ObjectId
    },
    coverImg: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    products: [productSchema]

});
module.exports = model('Presale', presaleSchema);