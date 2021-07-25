const {auth0} = require('../helpers/auth0ManagementClientHelper')
const {addTestUsers} = require('./userHelper.js')
var faker = require('faker');


/**
 * Class to hold the test users. Properties Populated using faker
 */
class User{
    constructor(){
        this.connection = "New-connection-db",
        this.name = faker.name.findName(),
        this.given_name = faker.name.firstName(),
        this.family_name = faker.name.lastName(),
        this.nickname = faker.name.firstName(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password(25),
        this.user_metadata = {
            "phone_number_verified": false,
            "locale": "",
            "zoneinfo": "",
            "gender": "",
            "birthdate": "",
            "phone_number": "",
            "middle_name": ""
        },
        this.email_verified = true,
        this.app_metadata =  {}
    }

}

/**
 * Create and add the required number of test users
 * @param {number} numberOfUsers 
 * @param {function} _callback 
 */
function auth0CreateUsers(numberOfUsers, _callback){
    let usrs = []  
    
        let myUser = new User()

         auth0.createUser(myUser, (err, testUser)=>{
            if (err) {
                throw err
            }
            else{
                usrs.push(testUser)
                _callback(usrs)
            }
         })    
}

/**
 * Create and add the required number of test users
 * @param {number} numberOfUsers - The number of test users to be added 
 * @param {function} _callback   - Function to be called with the added users
 * @deprecated this will be deleted in a future release
 */
function setupUsers (numberOfUsers, _callback){
    let usrs = []  
    for (let index = 0; index < numberOfUsers; index++) {
        let myUser = new User()
        addTestUsers(myUser, (err, testUser)=>{
            if (err) {
                throw err
            }
            else{
                _callback(testUser)
                
            }
        })    
        
    }
   
}

module.exports = {setupUsers, auth0CreateUsers }