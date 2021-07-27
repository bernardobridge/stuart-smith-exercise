const testuser = require('./user')
var faker = require('faker');


/**
 * a test user class with properties populated using faker
 * @deprecated (See {@link User})
 */
export class user{
    constructor(){
    this.connection = "New-connection-db",
	this.name = faker.name.findName(),
	this.given_name = faker.given_name(),
	this.family_name = faker.family_name(),
	this.nickname = faker.nickname(),
	this.email = faker.internet.email(),
	this.password = faker.password(),
	this.user_metadata = {
		"phone_number_verified": false,
		"locale": "",
		"zoneinfo": "",
		"gender": "",
		"birthdate": "",
		"phone_number": faker.internet.phone_number(),
		"middle_name": ""
	},
	this. email_verified = true,
	this.app_metadata =  {}
    }

}



