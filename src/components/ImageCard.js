import { useEffect, useState } from "react"

export const ImageCard = (props) => {
  const [imageCardProps, receiveNewProps] = useState(props);

  useEffect(() => {
    receiveNewProps(props);
  }, [receiveNewProps, props]);

  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">{imageCardProps.name}</div>
        <div className="description">{imageCardProps.description}</div>
      </div>
      <img src={imageCardProps.resourcePath} alt={imageCardProps.name} />
    </div>
  )
}
