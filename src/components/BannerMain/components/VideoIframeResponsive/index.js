import React from 'react';
import PropTypes from 'prop-types';

import { VideoWrapper, ResponsiveIframe } from './styles';

const YouTubeIframeResponsive = ({ youtubeID, videoTitle }) => (
  <VideoWrapper>
    <ResponsiveIframe
      title={videoTitle}
      src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoWrapper>
);

YouTubeIframeResponsive.defaultProps = {
  videoTitle: 'Vídeo',
};

YouTubeIframeResponsive.propTypes = {
  youtubeID: PropTypes.string.isRequired,
  videoTitle: PropTypes.string,
};

export default YouTubeIframeResponsive;
