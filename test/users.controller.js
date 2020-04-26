const users = require('../src/controllers/users')
const assert = require('assert')
const configure = require('../src/configure')
const fs = require('fs')
const path = require('path')

describe('Users', () => {

  // Before each of the test we clear the storage
  // to avoid conflicts between the tests
  beforeEach((done) => {
    config = configure()
    // clear the storage
    fs.writeFile(path.join(config.users.db_dir, 'users'), '', (err) => {
      if(err) throw err
      done()
    })
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        assert.equal(null, 'sergkudinov')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        assert.notEqual(err, null)
        assert.equal(result, null)
        done()
      })
    })

    /* TODO uncomment this once this functionality is ready
    it('avoid creating an existing user', (done) => {
      const user1 = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user1, (err, result) => {
        const user2 = {
          username: 'sergkudinov',
          firstname: 'Sergei',
          lastname: 'Kudinov'
        }
        users.create(user2, (err, result) => {
          assert.notEqual(err, null)
          assert.equal(result, null)
          done()
        })
      })
    })
    */
  })

  // TODO write tests for the "get" method
  describe('Get', () => {
    it('get a user by username', (done) => {
      // HINT: first you need to create a user, then to get
      // users.get()
      done()
    })
  })
})
