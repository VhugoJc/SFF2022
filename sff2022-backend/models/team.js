const { Schema, model } = require('mongoose');

const teamSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    imgs: {
        type: Array,
    },
    socialMedia: {
        twitter:{
            type: Object,
            default: ''
        },
        facebook:{
            type: Object,
            default: ''
        },
        instagram:{
            type: Object,
            default: ''
        },
        tiktok:{
            type: Object,
            default: ''
        },
        whatsapp:{
            type: Object,
            default: ''
        },
    },
    description: {
        type: String
    },
    logo: String,
    status: {
        type: Boolean,
        default:false
    }
})
module.exports = model('Team', teamSchema);