var client = require('./client');

module.exports = {
	getBadges: function getBadges(done) {
		client.doGET('badges', {}, done);
	},
	getBadgeCategories: function getBadgeCategories(done) {
		client.doGET('badges/categories', {}, done);
	},
	getBadgeCategory: function getBadgeCategory(categoryId, done) {
		client.doGET(`badges/categories/${categoryId}`, {}, done);
	}
}
