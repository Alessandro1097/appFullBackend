var PersonalInformation = require('../models/personInformationModel');

module.exports = function(app){
    app.get('/api/setupPersonalInformation', function(req, res) {
        var starterPersonalInformation = [
            {
                username: 'Alessandro',
                personalInformation: 'è un bravo programmatore', 
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Andrea',
                personalInformation: 'è un bravo programmatore', 
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                personalInformation: 'è un bravo programmatore', 
                isDone: false,
                hasAttachment: false
            }
        ];
        PersonalInformation.create(starterPersonalInformation, function(err, result) {
            res.send(result);
        });
    });
}