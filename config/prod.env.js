'use strict'
const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_OKTA_ISSUER_URL: JSON.stringify(process.env.VUE_APP_OKTA_ISSUER_URL),
  VUE_APP_OKTA_CLIENT_ID: JSON.stringify(process.env.VUE_APP_OKTA_CLIENT_ID),
  VUE_APP_OKTA_REDIRECT_URL: JSON.stringify(process.env.VUE_APP_OKTA_REDIRECT_URL)
}
