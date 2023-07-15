import React from 'react'
import api from '../utils/Api'

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
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
          onClick={onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name textcut">{userName}</h1>
            <button className="profile__edit-button link-effect"
              onClick={onEditProfile} type="button"></button>
          </div>
          <p className="profile__status textcut">{userDescription}</p>
        </div>
        <button className="profile__add-button"
          onClick={onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <div className="card" id="card-template">
            <div className="elements__element">
              <div style={{ backgroundImage: `url(${card.link})` }} className="elements__photo" />
              <h2 className="elements__tag  textcut">{card.name}</h2>
              <div className="elements__likegroup">
                <button className="elements__like" type="button"></button>
                <p className="elements__likecount">{card.likes.length}</p>
              </div>
              <button className="elements__delete-button  link-effect" type="button"></button>
            </div>
          </div>
        ))
        }
      </section>

    </main>
  )
}

export default Main