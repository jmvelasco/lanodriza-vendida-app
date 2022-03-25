export const VideoCard = () => {
  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">Video</div>
        <div className="company">
          Sound System e Instalación de tabla suplemento
        </div>
      </div>
      <video width="320px" controls>
        <source src="/img/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}