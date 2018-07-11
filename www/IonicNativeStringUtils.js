
var exec = require('cordova/exec');

module.exports.test = function (success, error) {
    exec(success, error, 'IonicNativeStringUtils', 'test', []);
}

module.exports.isBlank = function (input, success, error) {
    exec(success, error, 'IonicNativeStringUtils', 'isBlank', [input]);
};

module.exports.isEmpty = function (input, success, error) {
    exec(success, error, 'IonicNativeStringUtils', 'isEmpty', [input]);
};
