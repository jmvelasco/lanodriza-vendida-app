export const ImageCard = (props) => {
  const { picturePath, name, description, display } = props
  return (
    <div className="card-wrapper" style={{ display }}>
      <img src={picturePath} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{description}</div>
      </div>
    </div>
  )
}
