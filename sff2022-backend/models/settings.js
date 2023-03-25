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
    name:{
        type:String,
        required:true
    },
    webSite:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:false
    },
    homeData:{
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
    },
    sponsors:{
        type: [sponsorSchema]
    },
    events:{
        type: [eventsSchema]
    },
})

settingsScrema.methods.toJSON = function(){
    const {__v,...settings} = this.toObject();
    return settings; //settings data without version is returned
}
module.exports = model('Settings', settingsScrema);