var client = require('./client');

module.exports = {
  getExercises: function getExercises(done) {
    client.doGET('exercises', {}, done);
  },
	getVideos: function getVideos(exerciseName, done) {
    client.doGET(`exercises/${exerciseName}/videos`, {}, done);
  },
  getExercise: function getExercise(exerciseName, done) {
    client.doGET(`exercises/${exerciseName}`, {}, done);
  },
  getFollowupExercises: function getFollowupExercises(exerciseName, done) {
    client.doGET(`exercises/${exerciseName}/followup_exercises`, {}, done);
  },
	getPersusAutoComplete: function getPersusAutoComplete(done) {
    client.doGET(`exercises/persus_autocomplete`, {}, done);
  }
}
