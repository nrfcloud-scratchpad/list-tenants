'use strict'

exports.schemas = [
  require('./api/schema/Tenant'),
  require('./api/schema/TenantsList')
]

exports.api = require('./api/iris-api')
