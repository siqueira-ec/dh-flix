import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardContainer } from './styles';

import { getYouTubeId } from '../../../../utils/utils';

const VideoCard = ({ videoTitle, videoURL, categoryColor }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
  )}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      categoryColor={categoryColor}
      title={videoTitle}
    />
  );
};

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
