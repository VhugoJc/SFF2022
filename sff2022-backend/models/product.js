const {Schema, model} = require('mongoose');
const productSchema = Schema({
    title:{
        type:String,
        required:[true, 'El titulo es obligatorio']
    },
    description:{
        type:String,
        required:[true, 'La descripcion es requerida']
    },
    category:{
        type:String,
        required:[true, 'La categoria es requerida']
    },
    amount:{
        type:Number,
        required:[true, 'La cantidad es requerida']
    },
    img:{
        type: String,
        required:[true, 'La imagen es requerida']
    },
    
});
module.exports = model('Product',productSchema);
