export const ImageCard = (props) => {
  const { resourcePath, name, description, display, inputRef } = props
  return (
    <div className="card-wrapper" style={{ display }}>
      <img ref={inputRef} src={resourcePath} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{description}</div>
      </div>
    </div>
  )
}
