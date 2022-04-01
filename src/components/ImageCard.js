export const ImageCard = (props) => {
  const { 
    resourcePath, 
    name, 
    description, 
    display
  } = props;
  
  return (
    <div className="card-wrapper" style={{ display }}>
      <div className="info">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
      <img src={resourcePath} alt={name} />
    </div>
  )
}





