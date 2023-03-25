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
const sponsorSchema = Schema({
    img:{
        required:true,
        type: String
    },
    name:{
        required:true,
        type: String
    }
});

const settingsScrema = Schema({
    name:String,
    webSite:String,
    logo:String,
    date: Date,
    sponsors:{
        type: [sponsorSchema]
    },
    events:{
        type: [eventsSchema]
    }
})

settingsScrema.methods.toJSON = function(){
    const {__v,...settings} = this.toObject();
    return settings; //settings data without version is returned
}
module.exports = model('Settings', settingsScrema);