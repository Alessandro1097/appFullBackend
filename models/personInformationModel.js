var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the schema for our db 
var personalInformationSchema = new Schema({
    username: String,
    personalInformation: String,
    isDone: Boolean,
    hasAttachment: Boolean
}); 

var PersonalInformation = mongoose.model('PersonalInformation', personalInformationSchema);

module.exports = PersonalInformation;