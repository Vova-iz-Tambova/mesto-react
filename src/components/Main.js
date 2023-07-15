import React from 'react'
import api from '../utils/Api'
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [cards, setCards] = React.useState([])

  api.getUserInfo()
    .then((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
    .catch(console.error)

  api.getInitialCards()
    .then((res) => {
      setCards(res)
    })
    .catch(console.error)

  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name textcut">{userName}</h1>
            <button className="profile__edit-button link-effect"
              onClick={props.onEditProfile} type="button"></button>
          </div>
          <p className="profile__status textcut">{userDescription}</p>
        </div>
        <button className="profile__add-button"
          onClick={props.onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>

    </main>
  )
}

export default Main