const search = require('./search');

module.exports = function(app) {
  search.search(app);
};
