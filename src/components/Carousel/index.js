import React from 'react';
import PropTypes from 'prop-types';

import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from './styles';

import VideoCard from './components/VideoCard';

const VideoCardGroup = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title categoryColor={categoryColor}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}

      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
};

VideoCardGroup.defaultProps = {
  ignoreFirstVideo: false,
};

VideoCardGroup.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape({
    titulo: PropTypes.string,
    cor: PropTypes.string,
    link_extra: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.shape({
      titulo: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,

};

export default VideoCardGroup;
