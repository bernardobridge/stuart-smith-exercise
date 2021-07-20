const testuser = require('./user')

class user{
    constructor(connection, name){
        this.connection = connection
        this.name = name
    }
}

const myUser = new user("Username-Password-Authentication", "boffin")
console.log(myUser.name)
console.log(testuser.name)
