var logger = require('../../util/logger');
var util = require('util');
var fs = require('fs');
const uuidv4 = require('uuid/v4');

function writeData(data, filename) {
    var log = logger().getLogger('dataWriter');
    log.info(util.format('Data!:', data));
    var dictstring = JSON.stringify(data);

    fs.writeFile(`../output/${uuidv4()}.json`, data, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })
    return true
}

module.exports = writeData