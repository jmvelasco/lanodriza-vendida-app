export const Header = (props) => {
  return (
    <div className="header">
      <img
        className="header-picture"
        height="120px"
        src="/img/lanodriza.jpg"
        alt="logo"
      />
      {props.title}
      <br />
      {props.subtitle.toUpperCase()}
    </div>
  )
}





