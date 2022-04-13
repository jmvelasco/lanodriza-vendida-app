export const ImageCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
      </div>
      <img src={props.resourcePath} alt={props.name} />
    </div>
  )
}
