const mixme = require('mixme')
const config_default = require('../conf/default.json')
const path = require('path')
const fs = require('fs')

const configure = (config_custom = {}) => {
  config = mixme.merge(config_default, config_custom)
  if(config.users.db_dir)
    config.users.db_dir = path.join(__dirname, '..', config.users.db_dir)

  // Create directory if not exists
  if (!fs.existsSync(config.users.db_dir))
    fs.mkdirSync(config.users.db_dir)

  return config
}

module.exports = configure
