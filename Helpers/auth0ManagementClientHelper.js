require('dotenv').config();
var ManagementClient = require('auth0').ManagementClient;

/**
 * ManagementClient from the auth0 npm 
 * @type {ManagementClient}
 */
var auth0 = new ManagementClient({
  domain: `${process.env.CLIENT_DOMAIN}`,
  clientId: `${process.env.CLIENT_ID}`,
  clientSecret: `${process.env.CLIENT_SECRET}`,
  scope: "read:users create:users",
  audience: `${process.env.APP_AUDIENCE}`,
  tokenProvider: {
   enableCache: true,
   cacheTTLInSeconds: 10
 }
});

module.exports = {auth0}