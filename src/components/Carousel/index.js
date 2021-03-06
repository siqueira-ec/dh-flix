import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupWrapper, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

const Carousel = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupWrapper>
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

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupWrapper>
  );
};

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
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

export default Carousel;
