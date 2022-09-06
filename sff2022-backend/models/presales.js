const {Schema, model} = require('mongoose');
const presaleSchema = Schema({
    title:{
        type:String,
        required:[true, 'El titulo es obligatorio']
    },
    cost:{
        type:Number,
        required:[true, 'El costo es requerido']
    },
    description:{
        type:String
    },
    items:{
        type: Array
    },
    sellerId:{
        type:Schema.Types.ObjectId
    }
});
module.exports = model('Presale',presaleSchema);