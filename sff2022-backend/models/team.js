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
    logo: {
        type:String,
        require:true
    },
    status: {
        type: Boolean,
        default:false
    }
})
teamSchema.methods.toJSON = function(){
    const {__v,status,...team} = this.toObject();
    return team; //team data without status and version is returned
}

module.exports = model('Team', teamSchema);