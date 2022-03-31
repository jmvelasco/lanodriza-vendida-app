import React from 'react';
import { ImageCard } from './ImageCard';
import { VideoCard } from './VideoCard';

export const CardList = (props) => {
  if (
    props.displayIndex >= 0 &&
    props.displayIndex <= props.pictures.length - 1
  ) {
    props.pictures.map((p) => (p.display = 'none'))
    props.pictures[props.displayIndex].display = 'flex'
  }

  return (
    <div>
      {props.pictures.map((picture, index) => (
        <div key={index}>
          {picture.resourceType === "video" 
            ? <VideoCard picture={picture} index={index} setVideoRef={props.setVideoRef} /> 
            : <ImageCard {...picture} index={index} />}
        </div>
      ))}
    </div>
  )
}
