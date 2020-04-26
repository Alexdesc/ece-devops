const users = require('../src/routes/users')
const app = require('../src/index')

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp);


describe('Users routes', () => {

  after(()=> {
    app.close(() => {
      console.log('Http server closed.');
    })
  })

  describe('POST /user', () => {

    it('create a user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
          .send(user)
          .then((res) => {
            chai.expect(res).to.have.status(201)
            chai.expect(res.body).to.be.equal("sergkudinov")
            chai.expect(res).to.be.json
            done()
          })
          .catch((err) => {
            throw err
          })
    })
  })

  describe('GET /user', () => {

    it('get user by username', (done) => {
      // TODO create test
      done()
    })

  })
})
