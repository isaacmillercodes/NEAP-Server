process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

describe('POST /user/register', () => {
  it('should register a new user', (done) => {
    chai.request(server)
    .post('/user/register')
    .send({
      username: 'michael',
      password: 'herman'
    })
    .end((err, res) => {
      should.not.exist(err);
      res.redirects.length.should.eql(0);
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      res.body.should.include.keys('status', 'token');
      res.body.status.should.eql('success');
      done();
    });
  });
});

describe('POST /user/login', () => {
  it('should allow a user to login', (done) => {
    chai.request(server)
    .post('/user/register')
    .send({
      username: 'michael',
      password: 'herman'
    });
    chai.request(server)
    .post('/user/login')
    .send({
      username: 'michael',
      password: 'herman'
    })
    .end((err, res) => {
      should.not.exist(err);
      res.redirects.length.should.eql(0);
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      res.body.should.include.keys('status', 'token');
      res.body.status.should.eql('success');
      done();
    });
  });
  it('should reject a user with incorrect credentials', (done) => {
    chai.request(server)
    .post('/user/register')
    .send({
      username: 'michael',
      password: 'herman'
    });
    chai.request(server)
    .post('/user/login')
    .send({
      username: 'michael1',
      password: 'herman1'
    })
    .end((err, res) => {
      res.redirects.length.should.eql(0);
      res.status.should.eql(500);
      res.type.should.eql('application/json');
      res.body.should.include.keys('status');
      res.body.status.should.eql('error');
      done();
    });
  });
});
