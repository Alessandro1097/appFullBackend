var configValues = require('./config');

module.exports = {

    /**
     * @function (String) - function that create the url to be able to connect to the database. Get the username and the password from the config.json
     * and put them inside the url that connect our application to the mongoDb.
     * @param {String} - configValues.unname -> username
     * @param {String} - configValues.pwd -> password
     */
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.unname + ':' + configValues.pwd + '@ds143593.mlab.com:43593/node_test';
    }
}