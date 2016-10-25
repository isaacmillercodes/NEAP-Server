const jwt = require('jwt-simple');
const moment = require('moment');
const knex = require('../db/connection');

const secret = process.env.SECRET_KEY;

function encodeToken(user) {
  const payload = {
    exp: moment().add(14, 'd'),
    iat: moment(),
    sub: user.id
  };
  return jwt.encode(payload, secret);
}

function decodeToken(token) {
  const payload = jwt.decode(token, secret);
  const now = moment();
  if (now > payload.exp) {
    return false;
  } else {
    return knex('users').where('id', parseInt(payload.sub))
    .then(user => {
      if (user.lenth) {
        return true;
      } else {
        return false;
      }
    });
  }
}

module.exports = {
  encodeToken,
  decodeToken
};
