import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === currentUser._id
  const isLiked = props.card.likes.some(i => i._id === currentUser._id)
  const cardLikeButtonClassName = (
    `element__like ${isLiked && 'element__like_active'}`
  )

  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <div className="element">
      <div style={{ backgroundImage: `url(${props.card.link})` }} className="element__link" onClick={handleClick} />
      <h2 className="element__name">{props.card.name}</h2>
      <div className="element__likes">
        <button className={cardLikeButtonClassName} type="button"></button>
        {props.card.likes.length}
      </div>
      {isOwn && <button className="element__delete-button  link-effect" type="button" />}
    </div>
  )
}

export default Card