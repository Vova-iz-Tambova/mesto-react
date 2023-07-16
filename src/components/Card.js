function Card(props) {

  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <div className="element">
      <div style={{ backgroundImage: `url(${props.card.link})` }} className="element__link" onClick={handleClick} />
      <h2 className="element__name">{props.card.name}</h2>
      <div className="element__likes">
        <button className="element__like" type="button"></button>
        {props.card.likes.length}
      </div>
      <button className="element__delete-button  link-effect" type="button"></button>
    </div>
  )
}

export default Card