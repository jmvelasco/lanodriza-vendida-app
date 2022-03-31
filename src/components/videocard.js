import React, {useRef} from 'react';

export const VideoCard = (props) => {
  const { 
    resourcePath, 
    name, 
    description, 
    display,
  } = props.picture

  const inputRef = useRef(null);
  props.picture.inputRef = inputRef;
  
  return (
    <div className="card-wrapper" style={{ display }}>
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">
          {description}
        </div>
      </div>
      <video ref={inputRef} width="320px" controls>
        <source src={resourcePath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}