const { Schema, model } = require('mongoose');
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
    products: [
        {
            type: Schema.Types.ObjectId
        }
    ]

});
module.exports = model('Presale', presaleSchema);