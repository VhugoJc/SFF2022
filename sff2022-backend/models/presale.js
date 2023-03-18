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
    sellerId: { //team
        type: Schema.Types.ObjectId,
        required:[true, 'ID del vendedor inválido'],
    },
    coverImg: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    products: [
        {
            name: {
                type: String,
                required: [true, 'El nombre es obligatorio']
            },
            description: {
                type: String,
            },
            img: {
                type: String,
            },
        }
    ], 
    tortas:{
        type:Number,
        required: [true, 'La cantidad de tortas es necesaria']
    },
    status:{
        type:Boolean,
        default: true
    },

});
presaleSchema.methods.toJSON = function(){
    const {__v,status,...products} = this.toObject();
    return products; //user data without status and version is returned
}

module.exports = model('Presale', presaleSchema);