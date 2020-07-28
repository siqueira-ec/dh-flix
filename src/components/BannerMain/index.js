import React from 'react';
import PropTypes from 'prop-types';

import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainWrapper,
  ContentAreaWrapper,
  WatchButton,
} from './styles';

import { getYouTubeId } from '../../utils/utils';

const BannerMain = ({ videoTitle, videoDescription, url }) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainWrapper backgroundImage={bgUrl}>
      <ContentAreaWrapper>
        <ContentAreaWrapper.Item>
          <ContentAreaWrapper.Title>{videoTitle}</ContentAreaWrapper.Title>

          <ContentAreaWrapper.Description>
            {videoDescription}
          </ContentAreaWrapper.Description>
        </ContentAreaWrapper.Item>

        <ContentAreaWrapper.Item>
          <VideoIframeResponsive youtubeID={youTubeID} videoTitle={videoTitle} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaWrapper.Item>
      </ContentAreaWrapper>
    </BannerMainWrapper>
  );
};

BannerMain.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default BannerMain;
