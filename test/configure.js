var assert = require('assert')
const configure = require('../src/configure')
const path = require('path')

describe('Configure', () => {

  it('load default configuration file', () => {
    config = configure()
    assert.equal(config.users.db_dir, path.join(__dirname, '..', './db' ))
  })

  it('load custom configuration', () => {
    config = configure({"users": {"db_dir": "./db_test"}})
    assert.equal(config.users.db_dir, path.join(__dirname, '..', './db_test' ))
  })
})
