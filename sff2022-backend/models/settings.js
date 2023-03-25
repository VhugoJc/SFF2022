const { Schema, model } = require('mongoose');
const eventsSchema = Schema({
    title:{
        required:true,
        type: String
    },
    img:{
        required:true,
        type: String
    },
    date:{
        required:true,
        type: String
    }
});

const settingsScrema = Schema({
    name:String,
    events:{
        type: [eventsSchema]
    }
})

settingsScrema.methods.toJSON = function(){
    const {__v,...settings} = this.toObject();
    return settings; //settings data without version is returned
}
module.exports = model('Settings', settingsScrema);