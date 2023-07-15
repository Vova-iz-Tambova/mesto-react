function Card(props) {

  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
      <div className="elements__element">
        <div style={{ backgroundImage: `url(${props.card.link})` }} className="elements__photo" onClick={handleClick} />
        <h2 className="elements__tag  textcut">{props.card.name}</h2>
        <div className="elements__likegroup">
          <button className="elements__like" type="button"></button>
          <p className="elements__likecount">{props.card.likes.length}</p>
        </div>
        <button className="elements__delete-button  link-effect" type="button"></button>
      </div>
  )
}

export default Card