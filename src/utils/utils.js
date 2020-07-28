export const getYouTubeId = (youtubeURL) => youtubeURL.replace(
  /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
  '$7',
);
