/**
 * @deprecated Superagent should no longer be used
 */
const superagent = require('superagent');
require('dotenv').config();
fs = require('fs');

/**
 * HTTP request body contains the credentials from the .env
 * @type {{client_id : string , client_secret : string , audience: string, grant_type: string}}
 */
const body = {client_id : `${process.env.CLIENT_ID}` ,client_secret :`${process.env.CLIENT_SECRET}`,audience:"https://dev-5zxjin17.eu.auth0.com/api/v2/",grant_type:"client_credentials"}


function refreshToken(_callback) {
    
    checkLocalToken((token)=>{
            if (token!==undefined) {
                _callback(token)                
            }
            else{
                superagent.post(`${process.env.ISSUER_BASE_URL}/oauth/token`)
                .set('content-type', 'application/json')
                .send(body)
                .end((err, res) => {
                        if (err) {
                        console.log(err)
                        }
                        else{
                            let output = JSON.parse(res.text)
                            storeLocalToken(output)
                           _callback(output.access_token)
                        }
                })
            }
    })
}
/**
 * load cookie containing current access_token from root folder
 * @param {function} _callback 
 * @deprecated this is only called by superagent. You should use auth0 management client. (See: {@link auth0})
 */
function checkLocalToken(_callback){
    var token = JSON.parse(fs.readFileSync('storedtoken', 'utf8'));
    var expireDate = new Date(parseInt(token.expires_in)+parseInt(token.dateStored))
    if (expireDate > new Date() ) {
        _callback(token.access_token)    
    }
   _callback()
}

/**
 * save cookie containing current access_token locally 
 * @param {json} output 
 * @deprecated this is only called by superagent
 */
function storeLocalToken(output){
    var tokenDetails = `{"access_token" : "${output.access_token}", "dateStored" : "${Date.now()}", "expires_in" : "${output.expires_in}"}`
    fs.writeFile('storedtoken', tokenDetails, function (err) {
        if (err) {
             console.log(err);
        }

     });
}

module.exports = refreshToken