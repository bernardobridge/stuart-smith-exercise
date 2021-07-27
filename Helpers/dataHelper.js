fs = require('fs');


function loadSetupData(filename, _callback){
    var data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if (data ) {
        _callback(data)    
    }
    else{
        _callback()
    }
   
}

function storeSetupData(obj, fileName) {
    
    fs.writeFile(fileName, JSON.stringify(obj), function (err) {
        if (err) {
          throw err
        }
    })
}

module.exports = {loadSetupData, storeSetupData}