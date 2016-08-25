var client = require('./client');

module.exports = {
  getExercises: function getExercises(topicSlug, done) {
    client.doGET(`playlists/${topicSlug}/exercises`, {}, done);
  },
  getVideos: function getVideos(topicSlug, done) {
    client.doGET(`playlists/${topicSlug}/exercises`, {}, done);
  }
}
