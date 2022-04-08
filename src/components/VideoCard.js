export const VideoCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
      </div>
      <video width="320px" controls>
        <source src={props.resourcePath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}