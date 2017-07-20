var client = require('./client');

module.exports = {
  getBadgeCategories: function getBadgeCategories(done) {
    client.doGET('badges/categories', {}, done);
  },
  getBadgeCategory: function getBadgeCategory(categoryId, done) {
    client.doGET(`badges/categories/${categoryId}`, {}, done);
  }
}
