module.exports = {
  getVideo: function getVideo(videoReadableId, done) {
    client.doGET(`videos/${videoReadableId}`, {}, done);
  },
  getExercises: function getExercises(videoReadableId, done) {
    client.doGET(`videos/${videoReadableId}/exercises`, {}, done);
  }
}
