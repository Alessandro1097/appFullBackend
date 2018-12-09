var PersonalInformation = require('../models/personInformationModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // api that get the assigned username (from Mongo)
    app.get('/api/personalInformation/:uname', function (req, res) {
        PersonalInformation.find({ username: req.params.uname }, function (err, personalInformation) {
            if (err) throw err;
            res.send(personalInformation);
        });
    });

    // api that get the assigned id (from Mongo)
    app.get('/api/personalInformation/:id', function (req, res) {
        PersonalInformation.findById({ _id: req.params.id }, function (err, personalInformation) {
            if (err) throw err;
            res.send(personalInformation);
        });
    });

    app.post('/api/personalInformation', function (req, res) {
        if (req.body.id) {
            PersonalInformation.findByIdAndUpdate(req.body.id, {
                personalInformation: req.body.personalInformation,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err) {
                if (err) throw err;
                res.send('Success');
            });
        } else {
            var newPersonalInformation = PersonalInformation({
                username: 'Andrea',
                personalInformation: req.body.personalInformation,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newPersonalInformation.save(function (err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('/api/personalInformation', function (req, res) {
        PersonalInformation.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
        });
    });
}