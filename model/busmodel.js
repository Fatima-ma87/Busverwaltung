const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let busseSchema = new Schema({
    Busnumer :{
        type: String
    },
    Startpunkt :{
        type: String
    },
    Endpunkt :{
        type: String
    },
    Fahrzeit :{
        type: String
    }
},
    {
        collection: 'busverwaltung'
    }
    
);

module.exports = mongoose.model(' mongoose.Schema',  mongoose.Schema)