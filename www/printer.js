var BrotherPrinter = function () {}
BrotherPrinter.prototype = {
    findNetworkPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findNetworkPrinters', [])
    },

    findBluetoothPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findBluetoothPrinters', []);
    },

    findPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findPrinters', []);
    },

    setPrinter: function (printer, onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'setPrinter', [printer]);
    },

    printViaSDK: function (data, onSuccess, onError) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects a bitmap.')
            return
        }
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'printViaSDK', [data])
    },

    sendUSBConfig: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects print payload string.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'sendUSBConfig', [data])
    }
}
var plugin = new BrotherPrinter()
module.exports = plugin
