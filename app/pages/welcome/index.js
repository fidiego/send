const fileManager = require('../../templates/fileManager');
const signupPromo = require('../../templates/signupPromo');
const split = require('../split');

module.exports = function(state, emit) {
  return split(fileManager(state, emit), signupPromo(state));
};
