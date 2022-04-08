import React, { useEffect, useState } from 'react'

export const VideoCard = (props) => {
  const [videoCardProps, receiveNewProps] = useState(props);

  useEffect(() => {
    receiveNewProps(props);
  }, [receiveNewProps, props]);

  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">{videoCardProps.name}</div>
        <div className="description">{videoCardProps.description}</div>
      </div>
      <video width="320px" controls>
        <source src={videoCardProps.resourcePath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
